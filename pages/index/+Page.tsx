import { useEffect, useRef } from "react";
import lunarVideoUrl from "../../assets/lunar-orbit.mp4";
import logoUrl from "../../assets/moon-rabbit-logo.png";
import footerLogoUrl from "../../assets/moon-rabbit-footer-logo.webp";
import footerMapUrl from "../../assets/moon-rabbit-footer-map.jpg";
import footerMushroomUrl from "../../assets/moon-rabbit-footer-mushroom.png";
import footerTaglineUrl from "../../assets/moon-rabbit-footer-tagline.png";
import themePosterUrl from "../../assets/moon-rabbit-theme-poster.png";
import themeVideoUrl from "../../assets/moon-rabbit-theme.mp4";
import whatWeDoBackgroundUrl from "../../assets/what-we-do-background.jpg";
import "./home.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour/" },
  { label: "Vehicles", href: "/vehicles/" },
  { label: "Accommodations", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mining", href: "/mining/", featured: true },
];

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountainCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  function moveMountainCarousel(direction: number) {
    const carousel = mountainCarouselRef.current;
    if (carousel) {
      carousel.scrollBy({
        left: direction * carousel.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  }

  const mountains = [
    { name: "Tirich Mir", image: "6.png" },
    { name: "K2-Chogori", image: "7.png" },
    { name: "Rakaposhi", image: "10.png" },
    { name: "Laila Peak", image: "9.png" },
    { name: "Nanga Parbat", image: "4.png" },
    { name: "Broad Peak", image: "5.png" },
    { name: "Gasherbrum", image: "8.png" },
    { name: "Himalayas", image: "1.png" },
    { name: "Karakoram", image: "2.png" },
    { name: "Hindu Kush", image: "3.png" },
  ];

  return (
    <main className="home-page">
      <section className="hero" id="home">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={lunarVideoUrl} type="video/mp4" />
        </video>

        <header className="hero-header">
          <a className="brand" href="/" aria-label="Moon Rabbit Tours home">
            <img className="brand-mark" src={logoUrl} alt="Moon Rabbit Tours" />
          </a>

          <nav className="hero-nav" aria-label="Main navigation">
            {navigation.map(({ label, href, featured }) => (
              <a
                className={featured ? "nav-featured" : undefined}
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section
        className="what-we-do"
        aria-labelledby="what-we-do-title"
        style={{ backgroundImage: `url("${whatWeDoBackgroundUrl}")` }}
      >
        <div className="what-we-do-inner">
          <h1 id="what-we-do-title">What We Do</h1>
          <div className="what-we-do-copy">
            <p>
              Discover the remarkable landscapes of Northern Pakistan on a
              guided journey with Moon Rabbit. Choose your tour, arrange your
              arrival, and leave the details to us.
            </p>
            <p>
              From arrival to departure, enjoy warm hospitality, dependable
              4×4 transport, boat and mountain-bike adventures, scenic places
              to stay, and memorable local food.
            </p>
            <p>
              Our guides bring the region to life with stories of its people,
              culture, and history. We look forward to sharing a meaningful
              journey through the mountains with you.
            </p>
          </div>
        </div>
      </section>

      <section className="mountains" aria-labelledby="mountains-title">
        <h2 id="mountains-title">The Majestic Mountains of Pakistan</h2>
        <div className="mountains-carousel">
          <div className="mountains-track" ref={mountainCarouselRef}>
            {mountains.map(({ name, image }) => (
              <div className="mountain-card" key={name}>
                <img
                  src={`https://moonrabbit.pk/wp-content/uploads/2023/08/${image}`}
                  alt={name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <button
            className="mountains-arrow mountains-arrow-previous"
            type="button"
            aria-label="Previous mountains"
            onClick={() => moveMountainCarousel(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="mountains-arrow mountains-arrow-next"
            type="button"
            aria-label="Next mountains"
            onClick={() => moveMountainCarousel(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>

      <section className="our-theme" aria-labelledby="our-theme-title">
        <h2 id="our-theme-title">Our Theme</h2>
        <video
          className="our-theme-video"
          controls
          playsInline
          preload="metadata"
          poster={themePosterUrl}
        >
          <source src={themeVideoUrl} type="video/mp4" />
        </video>
      </section>

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
