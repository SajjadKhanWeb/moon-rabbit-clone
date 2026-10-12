import logoUrl from "../../assets/moon-rabbit-logo.png";
import footerLogoUrl from "../../assets/moon-rabbit-footer-logo.webp";
import footerMapUrl from "../../assets/moon-rabbit-footer-map.jpg";
import footerMushroomUrl from "../../assets/moon-rabbit-footer-mushroom.png";
import footerTaglineUrl from "../../assets/moon-rabbit-footer-tagline.png";
import headerBackgroundUrl from "../../assets/tours-header-background.jpg";
import addHeadingUrl from "../../assets/tours-add-heading.png";
import toursHeadingUrl from "../../assets/tours-heading.png";
import tourBmsUrl from "../../assets/tour-bms.jpg";
import tourDeosaiAstoreUrl from "../../assets/tour-deosai-astore.jpg";
import tourFairyMeadowsUrl from "../../assets/tour-fairy-meadows.jpg";
import tourGhkUrl from "../../assets/tour-ghk.png";
import tourGypUrl from "../../assets/tour-gyp.png";
import tourSkcUrl from "../../assets/tour-skc.png";
import tourSksUrl from "../../assets/tour-sks.png";
import tourYahUrl from "../../assets/tour-yah.jpg";
import { MobileMenu } from "../../components/MobileMenu";
import "./tours.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour/" },
  { label: "Vehicles", href: "/vehicles/" },
  { label: "Accommodations", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mining", href: "/mining/", featured: true },
];

const tours = [
  {
    name: "Gilgit-Hunza-Khunjerab",
    imageUrl: tourGhkUrl,
  },
  {
    name: "Skardu-Khaplu-Shigar",
    imageUrl: tourSksUrl,
  },
  {
    name: "Gilgit-Yasin-Phandar",
    imageUrl: tourGypUrl,
  },
  {
    name: "Swat-Kalash-Chitral",
    imageUrl: tourSkcUrl,
  },
  {
    name: "Fairy Meadows",
    imageUrl: tourFairyMeadowsUrl,
  },
  {
    name: "Yougo - Asokole - Hushe",
    imageUrl: tourYahUrl,
  },
  {
    name: "Booni - Mastuj - Shandur",
    imageUrl: tourBmsUrl,
  },
  {
    name: "Deosai & Astore",
    imageUrl: tourDeosaiAstoreUrl,
  },
];

function TourCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <figure className="tour-card">
      <div className="tour-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="tours-page">
      <header
        className="tours-header"
        style={{ backgroundImage: `url("${headerBackgroundUrl}")` }}
      >
        <div className="tours-header-shell">
          <div className="tours-header-panel">
            <MobileMenu items={navigation} />
            <a
              className="tours-brand"
              href="/"
              aria-label="Moon Rabbit Tours home"
            >
              <img src={logoUrl} alt="Moon Rabbit Tours" />
            </a>
            <nav className="tours-nav" aria-label="Main navigation">
              {navigation.map(({ label, href, featured }) => (
                <a
                  className={featured ? "tours-nav-featured" : undefined}
                  href={href}
                  key={label}
                  aria-current={label === "Tours" ? "page" : undefined}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="tours-content">
        <section className="tour-group" aria-label="Tours">
          <h1 className="tour-group-heading">
            <img src={toursHeadingUrl} alt="Tours" />
          </h1>
          <div className="tour-grid">
            {tours.slice(0, 4).map((tour) => (
              <TourCard key={tour.name} name={tour.name} imageUrl={tour.imageUrl} />
            ))}
          </div>
        </section>

        <section className="tour-group" aria-label="Additional tours">
          <h2 className="tour-group-heading">
            <img src={addHeadingUrl} alt="+ Add" />
          </h2>
          <div className="tour-grid">
            {tours.slice(4).map((tour) => (
              <TourCard key={tour.name} name={tour.name} imageUrl={tour.imageUrl} />
            ))}
          </div>
        </section>
      </div>

      <footer
        className="home-footer"
        style={{ backgroundImage: `url("${footerMapUrl}")` }}
      >
        <div className="home-footer-brand">
          <img
            className="home-footer-logo"
            src={footerLogoUrl}
            alt="Moon Rabbit Tours"
          />
          <img
            className="home-footer-tagline"
            src={footerTaglineUrl}
            alt="A spiritual journey through the material world"
          />
        </div>
        <div className="home-footer-link">
          <a href="https://moonrabbit.pk/rabbit-screen/" aria-label="Rabbit screen">
            <img src={footerMushroomUrl} alt="" />
          </a>
        </div>
      </footer>
    </main>
  );
}
