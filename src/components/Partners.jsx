import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-image-wrapper">
          <img src={`${import.meta.env.BASE_URL}partners-banner.png`} alt="Our Official Partners" className="partners-banner-img" />
        </div>
      </div>
    </section>
  );
}
