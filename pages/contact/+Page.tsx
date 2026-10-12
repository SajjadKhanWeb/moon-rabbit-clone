import logoUrl from "../../assets/moon-rabbit-header-logo.png";
import footerLogoUrl from "../../assets/moon-rabbit-footer-logo.webp";
import footerMapUrl from "../../assets/moon-rabbit-footer-map.jpg";
import footerMushroomUrl from "../../assets/moon-rabbit-footer-mushroom.png";
import footerTaglineUrl from "../../assets/moon-rabbit-footer-tagline.png";
import { ContactFormSection } from "../../components/ContactFormSection";
import "../accommodation/accommodation.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour/" },
  { label: "Vehicles", href: "/vehicles/" },
  { label: "Accommodations", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mining", href: "/mining/", featured: true },
];

export default function Page() {
  return (
    <main className="accommodation-page-content">
      <header className="accommodation-header">
        <div className="accommodation-header-content">
          <a
            className="accommodation-brand"
            href="/"
            aria-label="Moon Rabbit Tours home"
          >
            <img src={logoUrl} alt="Moon Rabbit Tours" />
          </a>
          <nav className="accommodation-nav" aria-label="Main navigation">
            {navigation.map(({ label, href, featured }) => (
              <a
                className={featured ? "accommodation-nav-featured" : undefined}
                href={href}
                key={label}
                aria-current={label === "Contact" ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <ContactFormSection />

      <footer
        className="accommodation-footer"
        style={{ backgroundImage: `url("${footerMapUrl}")` }}
      >
        <div className="accommodation-footer-brand">
          <img
            className="accommodation-footer-logo"
            src={footerLogoUrl}
            alt="Moon Rabbit Tours"
          />
          <img
            className="accommodation-footer-tagline"
            src={footerTaglineUrl}
            alt="A spiritual journey through the material world"
          />
        </div>
        <div className="accommodation-footer-link">
          <a href="https://moonrabbit.pk/rabbit-screen/" aria-label="Rabbit screen">
            <img src={footerMushroomUrl} alt="" />
          </a>
        </div>
      </footer>
    </main>
  );
}
