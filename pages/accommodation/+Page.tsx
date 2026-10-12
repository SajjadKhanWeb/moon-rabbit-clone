import { useState } from "react";
import logoUrl from "../../assets/moon-rabbit-header-logo.png";
import footerLogoUrl from "../../assets/moon-rabbit-footer-logo.webp";
import footerMapUrl from "../../assets/moon-rabbit-footer-map.jpg";
import footerMushroomUrl from "../../assets/moon-rabbit-footer-mushroom.png";
import footerTaglineUrl from "../../assets/moon-rabbit-footer-tagline.png";
import accommodationHeadingUrl from "../../assets/accommodation-heading.png";
import residenceHeadingUrl from "../../assets/residence-heading.png";
import residenceMasjidUrl from "../../assets/residence-masjid.jpg";
import residenceZahirUrl from "../../assets/residence-zahir.png";
import residenceBatinUrl from "../../assets/residence-batin.png";
import hotelsHeadingUrl from "../../assets/hotels-heading.png";
import serenaOneUrl from "../../assets/hotel-serena-1.jpg";
import serenaTwoUrl from "../../assets/hotel-serena-2.jpg";
import serenaThreeUrl from "../../assets/hotel-serena-3.jpg";
import serenaFourUrl from "../../assets/hotel-serena-4.jpg";
import roomysOneUrl from "../../assets/hotel-roomys-1.jpg";
import roomysTwoUrl from "../../assets/hotel-roomys-2.jpg";
import roomysThreeUrl from "../../assets/hotel-roomys-3.jpg";
import roomysFourUrl from "../../assets/hotel-roomys-4.jpg";
import hindukushOneUrl from "../../assets/hotel-hindukush-1.jpg";
import hindukushTwoUrl from "../../assets/hotel-hindukush-2.jpg";
import hindukushThreeUrl from "../../assets/hotel-hindukush-3.jpg";
import hindukushFourUrl from "../../assets/hotel-hindukush-4.jpg";
import khojOneUrl from "../../assets/hotel-khoj-1.avif";
import khojTwoUrl from "../../assets/hotel-khoj-2.avif";
import khojThreeUrl from "../../assets/hotel-khoj-3.avif";
import pearlOneUrl from "../../assets/hotel-pearl-continental-1.jpg";
import pearlTwoUrl from "../../assets/hotel-pearl-continental-2.jpg";
import pearlThreeUrl from "../../assets/hotel-pearl-continental-3.png";
import alpineOneUrl from "../../assets/hotel-alpine-1.png";
import alpineTwoUrl from "../../assets/hotel-alpine-2.png";
import alpineThreeUrl from "../../assets/hotel-alpine-3.png";
import magpieOneUrl from "../../assets/hotel-magpie-1.png";
import magpieTwoUrl from "../../assets/hotel-magpie-2.png";
import magpieThreeUrl from "../../assets/hotel-magpie-3.png";
import ayunOneUrl from "../../assets/hotel-ayun-fort-1.png";
import ayunTwoUrl from "../../assets/hotel-ayun-fort-2.png";
import ayunThreeUrl from "../../assets/hotel-ayun-fort-3.png";
import ayunFourUrl from "../../assets/hotel-ayun-fort-4.png";
import twoMagpiesOneUrl from "../../assets/hotel-2-magpies-1.webp";
import twoMagpiesTwoUrl from "../../assets/hotel-2-magpies-2.webp";
import twoMagpiesThreeUrl from "../../assets/hotel-2-magpies-3.webp";
import luxusOneUrl from "../../assets/hotel-luxus-1.webp";
import luxusTwoUrl from "../../assets/hotel-luxus-2.webp";
import luxusThreeUrl from "../../assets/hotel-luxus-3.webp";
import tentsHeadingUrl from "../../assets/tents-heading.png";
import tentOneUrl from "../../assets/tents-1.jpg";
import tentTwoUrl from "../../assets/tents-2.jpg";
import tentThreeUrl from "../../assets/tents-3.jpg";
import tentFourUrl from "../../assets/tents-4.jpg";
import { MobileMenu } from "../../components/MobileMenu";
import "./accommodation.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour/" },
  { label: "Vehicles", href: "/vehicles/" },
  { label: "Accommodations", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mining", href: "/mining/", featured: true },
];

const properties = [
  {
    name: "serena hotel",
    location: "Islamabad | Swat | Gilgit | Hunza | Khaplu | Shigar",
    images: [serenaOneUrl, serenaTwoUrl, serenaThreeUrl, serenaFourUrl],
  },
  {
    name: "roomys",
    location: "Islamabad | Hunza Dastaan | Minapin | Batakundi | Kalam",
    images: [roomysOneUrl, roomysTwoUrl, roomysThreeUrl, roomysFourUrl],
  },
  {
    name: "Hindukush Heights",
    location: "Chitral | Mastuj Fort",
    images: [
      hindukushOneUrl,
      hindukushTwoUrl,
      hindukushThreeUrl,
      hindukushFourUrl,
    ],
  },
  {
    name: "Khoj Resorts",
    location: "Shigar/Skardu",
    images: [khojOneUrl, khojTwoUrl, khojThreeUrl],
  },
  {
    name: "Pearl Continental",
    location: "Malam Jabba, Legacy Hunza, Bhurban Murree",
    images: [pearlOneUrl, pearlTwoUrl, pearlThreeUrl],
  },
  {
    name: "Alpine Resort",
    location: "Nathiagali",
    images: [alpineOneUrl, alpineTwoUrl, alpineThreeUrl],
  },
  {
    name: "Magpie Lodge",
    location: "Thandiani",
    images: [magpieOneUrl, magpieTwoUrl, magpieThreeUrl],
  },
  {
    name: "Ayun Fort Inn",
    location: "Chitral (near Kalash Valley)",
    images: [ayunOneUrl, ayunTwoUrl, ayunThreeUrl, ayunFourUrl],
  },
  {
    name: "2 Magpies",
    location: "Madal Gan (Near Boys Degree College), Ali Abad",
    images: [twoMagpiesOneUrl, twoMagpiesTwoUrl, twoMagpiesThreeUrl],
  },
  {
    name: "Luxus Hotels",
    location: "Lahore, Skardu & Hunza",
    images: [luxusOneUrl, luxusTwoUrl, luxusThreeUrl],
  },
];

const residenceImages = [
  { src: residenceMasjidUrl, alt: "Residence" },
  { src: residenceZahirUrl, alt: "Zahir" },
  { src: residenceBatinUrl, alt: "Batin" },
];

const tentImages = [
  { src: tentOneUrl, alt: "Camping" },
  { src: tentTwoUrl, alt: "Camping at Fairy Meadows" },
  { src: tentThreeUrl, alt: "Fairy Meadows cottages" },
  { src: tentFourUrl, alt: "Camping near Passu Cones" },
];

function PropertyCard({
  name,
  location,
  images,
}: {
  name: string;
  location: string;
  images: string[];
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function showPreviousImage() {
    setActiveImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNextImage() {
    setActiveImageIndex((index) => (index + 1) % images.length);
  }

  return (
    <article className="accommodation-card">
      <div className="accommodation-property-gallery">
        <img
          src={images[activeImageIndex]}
          alt={`${name} photo ${activeImageIndex + 1}`}
          loading="lazy"
        />
        <button
          className="accommodation-gallery-arrow accommodation-gallery-previous"
          type="button"
          aria-label={`Previous ${name} photo`}
          onClick={showPreviousImage}
        />
        <button
          className="accommodation-gallery-arrow accommodation-gallery-next"
          type="button"
          aria-label={`Next ${name} photo`}
          onClick={showNextImage}
        />
        <div className="accommodation-gallery-dots" aria-label={`${name} photos`}>
          {images.map((image, index) => (
            <button
              className={index === activeImageIndex ? "is-active" : undefined}
              key={image}
              type="button"
              aria-label={`Show ${name} photo ${index + 1}`}
              aria-current={index === activeImageIndex ? "true" : undefined}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="accommodation-card-copy">
        <h3>{name}</h3>
        <p>Location – {location}</p>
      </div>
    </article>
  );
}

function ResidenceCard() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = residenceImages[activeImageIndex];

  function showPreviousImage() {
    setActiveImageIndex((index) =>
      index === 0 ? residenceImages.length - 1 : index - 1,
    );
  }

  function showNextImage() {
    setActiveImageIndex((index) => (index + 1) % residenceImages.length);
  }

  return (
    <article className="accommodation-card accommodation-residence-card">
      <div className="accommodation-residence-gallery">
        <img src={activeImage.src} alt={activeImage.alt} />
        <button
          className="accommodation-gallery-arrow accommodation-gallery-previous"
          type="button"
          aria-label="Previous residence image"
          onClick={showPreviousImage}
        />
        <button
          className="accommodation-gallery-arrow accommodation-gallery-next"
          type="button"
          aria-label="Next residence image"
          onClick={showNextImage}
        />
        <div className="accommodation-gallery-dots" aria-label="Residence images">
          {residenceImages.map((image, index) => (
            <button
              className={index === activeImageIndex ? "is-active" : undefined}
              key={image.src}
              type="button"
              aria-label={`Show residence image ${index + 1}`}
              aria-current={index === activeImageIndex ? "true" : undefined}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="accommodation-card-copy">
        <h3>Residence</h3>
        <p>Location – Oghi</p>
      </div>
    </article>
  );
}

function TentCard() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = tentImages[activeImageIndex];

  function showPreviousImage() {
    setActiveImageIndex((index) =>
      index === 0 ? tentImages.length - 1 : index - 1,
    );
  }

  function showNextImage() {
    setActiveImageIndex((index) => (index + 1) % tentImages.length);
  }

  return (
    <article className="accommodation-card accommodation-tent-card">
      <div className="accommodation-tent-gallery">
        <div className="accommodation-tent-image">
          <img src={activeImage.src} alt={activeImage.alt} />
          <button
            className="accommodation-gallery-arrow accommodation-gallery-previous"
            type="button"
            aria-label="Previous tent image"
            onClick={showPreviousImage}
          />
          <button
            className="accommodation-gallery-arrow accommodation-gallery-next"
            type="button"
            aria-label="Next tent image"
            onClick={showNextImage}
          />
        </div>
        <div className="accommodation-gallery-dots" aria-label="Tent images">
          {tentImages.map((image, index) => (
            <button
              className={index === activeImageIndex ? "is-active" : undefined}
              key={image.src}
              type="button"
              aria-label={`Show tent image ${index + 1}`}
              aria-current={index === activeImageIndex ? "true" : undefined}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="accommodation-card-copy">
        <h3>Tents</h3>
        <p>Available at any location upon request.</p>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="accommodation-page-content">
      <header
        className="accommodation-header"
      >
        <div className="accommodation-header-content">
          <MobileMenu items={navigation} />
          <a className="accommodation-brand" href="/" aria-label="Moon Rabbit Tours home">
            <img src={logoUrl} alt="Moon Rabbit Tours" />
          </a>
          <nav className="accommodation-nav" aria-label="Main navigation">
            {navigation.map(({ label, href, featured }) => (
              <a
                className={featured ? "accommodation-nav-featured" : undefined}
                href={href}
                key={label}
                aria-current={
                  label === "Accommodations" ? "page" : undefined
                }
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="accommodation-content">
        <h1 className="accommodation-main-heading">
          <img src={accommodationHeadingUrl} alt="Accommodations" />
        </h1>

        <section className="accommodation-section accommodation-residence">
          <h2 className="accommodation-section-heading">
            <img src={residenceHeadingUrl} alt="Moonrabbit Official Residence" />
          </h2>
          <ResidenceCard />
        </section>

        <section className="accommodation-section accommodation-hotels">
          <h2 className="accommodation-section-heading accommodation-hotels-heading">
            <img src={hotelsHeadingUrl} alt="Moonrabbit Approved Hotels & Guest Houses" />
          </h2>
          <div className="accommodation-grid">
            {properties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
        </section>

        <section className="accommodation-section accommodation-tents">
          <h2 className="accommodation-section-heading accommodation-tents-heading">
            <img src={tentsHeadingUrl} alt="Tents" />
          </h2>
          <TentCard />
        </section>

      </div>

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
