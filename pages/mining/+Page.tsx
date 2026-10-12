import { useState } from "react";
import miningLogoUrl from "../../assets/mining-logo.png";
import teamGeologistUrl from "../../assets/mining-team-geologist.png";
import teamProspectorUrl from "../../assets/mining-team-prospector.png";
import teamTechnicianUrl from "../../assets/mining-team-technician.png";
import miningVideoUrl from "../../assets/mining-tunnel.mp4";
import miningMapBackgroundUrl from "../../assets/moon-rabbit-footer-map.jpg";
import { MobileMenu } from "../../components/MobileMenu";
import "./mining.css";

const navigation = [
  { label: "Maps", href: "#maps" },
  { label: "Equipment", href: "#equipment" },
  { label: "Team", href: "#team" },
  { label: "Methodology", href: "#methodology" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

const miningZones = [
  {
    zone: "Zone A",
    name: "All Minerals",
    description: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/Moon-Rabbit-Mining-Map-1.png",
  },
  {
    zone: "Zone B",
    name: "Gold Specific",
    description: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/ChatGPT-Image-May-21-2026-09_18_40-PM.png",
  },
  {
    zone: "Zone C",
    name: "Gem Stones",
    description: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/ChatGPT-Image-May-21-2026-09_22_15-PM.png",
  },
];

const equipmentSlides = [
  {
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/GPZ8000_web_z17_hero_dt_v01_1_-removebg-preview.png",
    caption: "GPZ 8000 Field Detection System",
    title: "GPZ 8000: Final Search",
    description:
      "The GPZ 8000 is an advanced gold detection system designed for mineral exploration in challenging and highly mineralized ground. It delivers strong depth performance across different soil conditions, helping identify subsurface targets with improved accuracy during field surveys. Built for extended use, it features a lightweight design, adjustable sensitivity, and clear audio feedback for reliable target detection. Its stable performance in difficult terrain makes it suitable for professional geological exploration and field mapping work.",
  },
  {
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/Banner_GPX6000.1-1-1024x529.webp",
    caption: "GPX 6000",
    title: "GPX 6000: Deep Field Search",
    description:
      "The GPX 6000 is an advanced gold detection system engineered for exploration in difficult and highly mineralized environments. Using GeoSense-PI™ technology, it delivers strong sensitivity to both small and deep gold targets while maintaining stable performance across changing ground conditions. Its lightweight carbon-fibre construction, automatic ground balancing, and clear audio feedback support extended field use with improved comfort and reliable target detection. Suitable for professional exploration and geological survey work in challenging terrain.",
  },
  {
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/WhatsApp_Image_2026-05-23_at_10_52_36_PM-Picsart-AiImageEnhancer-removebg-preview.png",
    caption: "GOLD PAN PREMIUM KIT",
    title: "PANNING TOOLS",
    description:
      "The XP GOLD PAN PREMIUM KIT is a gold recovery system designed for efficient prospecting and material separation in demanding environments. Featuring XP’s exclusive Snake Skin™ texture technology, it improves fine gold retention while supporting effective separation across different sediment conditions. Its stackable classifier design, lightweight construction, and optimized pan geometry enable faster processing and improved field usability. Complete with prospecting accessories for collection, inspection, and storage, the kit delivers a reliable solution for gold panning and exploration work.",
  },
  {
    image:
      "https://moonrabbit.pk/wp-content/uploads/2026/05/116-1024x538.webp",
    caption: "GOLD MONSTER 1000",
    title: "GM 1000: Shallow Search",
    description:
      "The GOLD MONSTER 1000 is a high-sensitivity gold detector designed for mineralized ground conditions. Powered by 45 kHz VLF technology and 24-bit processing, it delivers reliable detection of small and deep gold targets with strong signal clarity. Automatic ground balance, sensitivity adjustment, and noise reduction simplify operation while maintaining stable performance. Its lightweight design and target response make it suitable for geological surveys and gold prospecting.",
  },
];

const miningTeam = [
  {
    role: "Field Operations Lead",
    description:
      "Plans survey days, coordinates field crews, and keeps exploration work organized across remote sites.",
    portrait: teamProspectorUrl,
  },
  {
    role: "Geological Surveyor",
    description:
      "Studies rock formations and terrain observations to help identify promising areas for further assessment.",
    portrait: teamGeologistUrl,
  },
  {
    role: "Equipment Specialist",
    description:
      "Prepares and checks survey instruments, helping the team use field equipment safely and consistently.",
    portrait: teamTechnicianUrl,
  },
] as const;

export default function Page() {
  const [activeEquipment, setActiveEquipment] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isHumanChecked, setIsHumanChecked] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const selectedEquipment = equipmentSlides[activeEquipment];

  function moveEquipment(direction: number) {
    setActiveEquipment(
      (current) =>
        (current + direction + equipmentSlides.length) % equipmentSlides.length,
    );
  }

  return (
    <main className="mining-page">
      <section className="mining-hero" aria-label="Moon Rabbit Mining">
        <video
          className="mining-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={miningVideoUrl} type="video/mp4" />
        </video>
        <div className="mining-hero-shade" aria-hidden="true" />

        <header className="mining-header">
          <MobileMenu items={navigation} theme="mining" />
          <a className="mining-brand" href="/mining/" aria-label="Moon Rabbit Mining home">
            <img src={miningLogoUrl} alt="Moon Rabbit Mining" />
          </a>
          <nav className="mining-nav" aria-label="Mining sections">
            {navigation.map(({ label, href }) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section
        className="mining-maps"
        id="maps"
        aria-label="Maps"
      >
        <div className="mining-maps-inner">
          <div className="mining-maps-heading-wrap">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_maps-e1780921812113.png"
              alt="Maps"
              className="mining-maps-heading-img"
              loading="lazy"
            />
          </div>

          <div className="mining-zone-grid">
            {miningZones.map(({ zone, name, description, image }) => (
              <article
                className="mining-zone-card"
                key={zone}
                onClick={() => setLightboxImg(image)}
              >
                <div className="mining-zone-map-wrap">
                  <img
                    className="mining-zone-map"
                    src={image}
                    alt={`${zone} – ${name}`}
                    loading="lazy"
                  />
                </div>
                <div className="mining-zone-copy">
                  <h3>
                    {zone} – {name}
                  </h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mining-equipment"
        id="equipment"
        aria-labelledby="mining-equipment-title"
      >
        <video
          className="mining-equipment-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://www.minelab.com/media/minelab/global-website/product-descriptions/videos/g/p/gpz8000_web_product_midfeatures_z-set_concentric_toroidal_coils_dt_v01_1_.mp4"
            type="video/mp4"
          />
          <source src={miningVideoUrl} type="video/mp4" />
        </video>
        <div className="mining-equipment-shade" aria-hidden="true" />

        <div className="mining-equipment-inner">
          <div className="mining-equipment-heading-wrap">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_equipment-e1780921894713.png"
              alt="Equipment"
              className="mining-equipment-heading-img"
              loading="lazy"
            />
          </div>

          <div className="mining-equipment-slide" aria-live="polite">
            <div className="mining-equipment-visual">
              <div className="mining-equipment-img-wrap">
                <img
                  src={selectedEquipment.image}
                  alt={selectedEquipment.caption}
                  className="mining-equipment-img"
                />
              </div>
              <h3 className="mining-equipment-caption">
                {selectedEquipment.caption}
              </h3>
            </div>

            <div className="mining-equipment-copy">
              <h2>{selectedEquipment.title}</h2>
              <p className="mining-equipment-description">
                {selectedEquipment.description}
              </p>
            </div>

            <button
              className="mining-equipment-arrow mining-equipment-arrow-prev"
              type="button"
              aria-label="Previous equipment"
              onClick={() => moveEquipment(-1)}
            >
              <svg viewBox="0 0 1000 1000" aria-hidden="true" className="mining-equipment-arrow-svg">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" fill="currentColor"/>
              </svg>
            </button>
            <button
              className="mining-equipment-arrow mining-equipment-arrow-next"
              type="button"
              aria-label="Next equipment"
              onClick={() => moveEquipment(1)}
            >
              <svg viewBox="0 0 1000 1000" aria-hidden="true" className="mining-equipment-arrow-svg">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <div className="mining-equipment-dots" role="tablist" aria-label="Equipment slides">
            {equipmentSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`mining-equipment-dot ${idx === activeEquipment ? "active" : ""}`}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setActiveEquipment(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="mining-team"
        id="team"
        aria-labelledby="mining-team-title"
      >
        <div className="mining-team-inner">
          <div className="mining-team-heading-wrap">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_team-e1780921976415.png"
              alt="Team"
              className="mining-team-heading-img"
              loading="lazy"
            />
          </div>
          <div className="mining-team-grid">
            {miningTeam.map(({ role, description, portrait }) => (
              <article className="mining-team-card" key={role}>
                <img className="mining-team-portrait" src={portrait} alt="" />
                <div className="mining-team-copy">
                  <h2>{role}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mining-methodology"
        id="methodology"
        aria-label="Methodology"
      >
        <div className="mining-methodology-inner">
          <div className="mining-methodology-heading-wrap">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_methodology-e1780922043204.png"
              alt="Methodology"
              className="mining-methodology-heading-img"
              loading="lazy"
            />
          </div>

          <div className="method-grid">
            <div className="method-card">
              <div className="method-content">
                <div className="step">Step 01</div>
                <h3>Site Reconnaissance</h3>
                <p>
                  Initial terrain inspection and evaluation of access routes and
                  geological conditions.
                </p>
              </div>
            </div>

            <div className="method-card">
              <div className="method-content">
                <div className="step">Step 02</div>
                <h3>Surface Mapping</h3>
                <p>
                  Recording geological formations and structural features across
                  the exploration zone.
                </p>
              </div>
            </div>

            <div className="method-card">
              <div className="method-content">
                <div className="step">Step 03</div>
                <h3>Signal Detection</h3>
                <p>
                  Using detection equipment to identify potential subsurface
                  mineral indicators.
                </p>
              </div>
            </div>

            <div className="method-card featured">
              <span className="border-sweep"></span>
              <div className="method-content">
                <div className="step">Step 04</div>
                <h3>Astro-Geology</h3>
                <p>
                  We specialize in using ancient Astro-geological practices
                  including celestial correspondence with landscape, detecting ley
                  lines, and geomancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mining-investment"
        id="investment"
        aria-label="Investment"
      >
        <div className="mining-investment-inner">
          <div className="mining-investment-heading-wrap">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_investment-removebg-preview-e1780922169744.png"
              alt="Investment"
              className="mining-investment-heading-img"
              loading="lazy"
            />
          </div>

          <div className="invest-grid">
            <div className="invest-card">
              <div className="invest-content">
                <h3>Entry Level</h3>
                <p>
                  Early-stage participation focused on foundational funding
                  support for exploration setup, initial site assessment, and
                  preparation of designated mineral zones for structured
                  evaluation.
                </p>
              </div>
            </div>

            <div className="invest-card">
              <div className="invest-content">
                <h3>Mining Lease Investment</h3>
                <p>
                  Mid-stage investment involving secured mining lease
                  participation, regulated site access, and organized extraction
                  planning supported by professional geological and operational
                  oversight.
                </p>
              </div>
            </div>

            <div className="invest-card">
              <div className="invest-content">
                <h3>Heavy Machinery Investment</h3>
                <p>
                  Final-stage investment focused on active extraction operations,
                  deployment of heavy mining equipment, and large-scale resource
                  recovery supported by full operational infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mining-contact"
        id="contact"
        aria-label="Contact"
      >
        <div className="mining-contact-inner">
          <div className="mining-contact-content">
            <div className="mining-contact-heading-wrap">
              <img
                src="https://moonrabbit.pk/wp-content/uploads/2026/06/aged_wooden_plank_contact-e1780840422598.png"
                alt="Contact"
                className="mining-contact-heading-img"
                loading="lazy"
              />
            </div>

            <form
              className="mining-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
            >
              {formSubmitted ? (
                <div className="mining-form-success" role="alert">
                  <h3>Thank you for reaching out!</h3>
                  <p>
                    Your message has been sent successfully. Our team will contact
                    you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mining-form-row mining-form-row-dual">
                    <div className="mining-form-group">
                      <label htmlFor="mining-name">
                        Full Name <span className="mining-required">*</span>
                      </label>
                      <input
                        id="mining-name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="mining-form-group">
                      <label htmlFor="mining-email">
                        Email Address <span className="mining-required">*</span>
                      </label>
                      <input
                        id="mining-email"
                        type="email"
                        name="email"
                        placeholder="sample@yourcompanydomain.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="mining-form-row">
                    <div className="mining-form-group">
                      <label htmlFor="mining-phone">
                        Phone Number <span className="mining-required">*</span>
                      </label>
                      <input
                        id="mining-phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="mining-form-row">
                    <div className="mining-form-group">
                      <label htmlFor="mining-message">Message</label>
                      <textarea
                        id="mining-message"
                        name="message"
                        placeholder="Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* hCaptcha Box */}
                  <div className="mining-captcha-box">
                    <div className="mining-captcha-left">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={isHumanChecked}
                        className={`mining-captcha-checkbox ${
                          isHumanChecked ? "checked" : ""
                        }`}
                        onClick={() => setIsHumanChecked(!isHumanChecked)}
                      >
                        {isHumanChecked && (
                          <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            stroke="#0ea5e9"
                            strokeWidth="3.5"
                            fill="none"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                      <span className="mining-captcha-label">I am human</span>
                    </div>
                    <div className="mining-captcha-brand">
                      <svg
                        className="mining-captcha-logo"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <path
                          fill="#00a8cc"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93c-2.83.48-5.33-1.44-5.87-4.14-.54-2.7 1.25-5.28 3.95-5.82 2.7-.54 5.28 1.25 5.82 3.95.14.71.12 1.41-.05 2.08l-1.92-.51c.09-.43.1-.88.01-1.33-.36-1.78-2.07-2.96-3.85-2.6-1.78.36-2.96 2.07-2.6 3.85.36 1.78 2.07 2.96 3.85 2.6.28-.06.56-.16.82-.3l.79 1.84c-.37.21-.77.37-1.18.47z"
                        />
                      </svg>
                      <div className="mining-captcha-info">
                        <span className="mining-captcha-title">hCaptcha</span>
                        <span className="mining-captcha-links">
                          Privacy - Terms
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mining-form-submit-wrap">
                    <button type="submit" className="mining-form-submit-btn">
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Mining Footer */}
      <footer className="mining-footer" aria-label="Moon Rabbit Mining Footer">
        <div className="mining-footer-inner">
          <div className="mining-footer-left">
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/05/Untitled-design-67.png"
              alt="Moon Rabbit Mining"
              className="mining-footer-badge"
              loading="lazy"
            />
            <img
              src="https://moonrabbit.pk/wp-content/uploads/2026/06/Life-is-a-treasure-hunt-you-just-have-to-know-where-to-look.-3-e1780662551985.png"
              alt="Life is a treasure hunt, you just have to know where to look..."
              className="mining-footer-quote"
              loading="lazy"
            />
          </div>

          <div className="mining-footer-right">
            <a href="/rabbit-screen/" aria-label="Rabbit Screen">
              <img
                src="https://moonrabbit.pk/wp-content/uploads/2023/07/amanita-muscaria-pic.png"
                alt="Moon Rabbit Mushroom"
                className="mining-footer-mushroom"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </footer>

      {lightboxImg && (
        <div
          className="mining-lightbox active"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-label="Map preview"
        >
          <button
            type="button"
            className="mining-lightbox-close"
            onClick={() => setLightboxImg(null)}
            aria-label="Close preview"
          >
            &times;
          </button>
          <img
            src={lightboxImg}
            alt="Expanded map view"
            className="mining-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}