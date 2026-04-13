const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();

// --- Mongoose Models (inline for serverless) ---
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  service: { type: String, default: '' },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  author: { type: String, default: 'NexaEdge Team' },
  category: { type: String, default: 'Digital Marketing' },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// --- MongoDB connection with caching for serverless ---
let cachedConnection = null;

async function connectDB() {
  if (cachedConnection && cachedConnection.readyState === 1) {
    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    cachedConnection = conn.connection;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return cachedConnection;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    throw error;
  }
}

// --- Middleware ---
app.use(cors({
  origin: [
    'https://nexaedgedigital.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Connect DB before handling requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ success: false, error: 'Database connection failed' });
  }
});

// --- Routes ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NexaEdge API is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required.'
      });
    }

    const contact = await Contact.create({ name, email, phone, service, message });

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you shortly.',
      data: contact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog not found' });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = app;
