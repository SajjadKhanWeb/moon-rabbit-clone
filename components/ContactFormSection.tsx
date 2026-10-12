import contactBackgroundUrl from "../assets/contact-background.jpg";
import contactHeadingUrl from "../assets/contact-heading.png";

export function ContactFormSection() {
  return (
    <section
      className="accommodation-contact-section"
      id="contact-section"
      aria-labelledby="contact-section-title"
      style={{ backgroundImage: `url("${contactBackgroundUrl}")` }}
    >
      <div className="accommodation-contact-panel">
        <h1 className="accommodation-contact-heading" id="contact-section-title">
          <img src={contactHeadingUrl} alt="Contact" />
        </h1>
        <form className="accommodation-contact-form">
          <div className="accommodation-contact-field">
            <label htmlFor="contact-name">Full Name *</label>
            <input
              id="contact-name"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>
          <div className="accommodation-contact-field">
            <label htmlFor="contact-email">Email Address *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="sample@yourcompanydomain.com"
              autoComplete="email"
            />
          </div>
          <div className="accommodation-contact-field">
            <label htmlFor="contact-phone">Phone Number *</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
            />
          </div>
          <div className="accommodation-contact-field accommodation-contact-message">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Message" />
          </div>
          <button className="accommodation-contact-submit" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
