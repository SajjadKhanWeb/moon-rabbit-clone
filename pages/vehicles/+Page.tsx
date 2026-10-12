import logoUrl from "../../assets/moon-rabbit-header-logo.png";
import footerLogoUrl from "../../assets/moon-rabbit-footer-logo.webp";
import footerMapUrl from "../../assets/moon-rabbit-footer-map.jpg";
import footerMushroomUrl from "../../assets/moon-rabbit-footer-mushroom.png";
import footerTaglineUrl from "../../assets/moon-rabbit-footer-tagline.png";
import airfareGraphicUrl from "../../assets/airfare-graphic-20260605-163101.png";
import airfareUrl from "../../assets/airfare.jpg";
import coasterUrl from "../../assets/coaster.jpg";
import grandCabinUrl from "../../assets/grand-cabin.jpg";
import greenLineGraphicUrl from "../../assets/green-line-graphic-20260604-155724.png";
import greenLineUrl from "../../assets/green-line.jpg";
import inflatableRaftUrl from "../../assets/inflatable-raft.jpg";
import jeepsHeadingUrl from "../../assets/jeeps-heading.png";
import kayakUrl from "../../assets/kayak.jpg";
import landCruiserUrl from "../../assets/land-cruiser-v8.jpg";
import lifeJacketUrl from "../../assets/life-jacket.jpg";
import mountainBikeGraphicUrl from "../../assets/mountain-bike-graphic-20260604-160322.png";
import mountainBikeUrl from "../../assets/mountain-bike.jpg";
import pradoUrl from "../../assets/prado.jpg";
import revoUrl from "../../assets/revo.jpg";
import vehicleGraphicUrl from "../../assets/vehicle-graphic-20260604-155959.png";
import vehiclesHeadingUrl from "../../assets/vehicles-heading.png";
import waterSportsGraphicUrl from "../../assets/water-sports-graphic-20260604-163559.png";
import "./vehicles.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour/" },
  { label: "Vehicles", href: "/vehicles/" },
  { label: "Accommodations", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mining", href: "/mining/", featured: true },
];

const jeepCards = [
  {
    name: "Land Cruiser V8",
    detail: ["4-5 passenger with luggage"],
    imageUrl: landCruiserUrl,
  },
  {
    name: "Revo",
    detail: ["4 passenger with luggage"],
    imageUrl: revoUrl,
  },
  {
    name: "Prado",
    detail: ["4-5 passenger with luggage"],
    imageUrl: pradoUrl,
  },
];

const largeVehicleCards = [
  {
    name: "Coaster",
    detail: ["20 passenger with luggage"],
    imageUrl: coasterUrl,
  },
  {
    name: "Grand Cabin",
    detail: ["8-10 passenger with luggage"],
    imageUrl: grandCabinUrl,
  },
];

const activityCards = [
  {
    name: "Airfare",
    detail: [
      "Now booking domestic flights with all airlines operating in Pakistan",
      "Offering corporate discount and special rates for groups",
      "Specializing in flights to and from:",
      "Chitral, Gilgit, and Skardu",
    ],
    imageUrl: airfareUrl,
  },
  {
    name: "Luxury Green Line",
    detail: [
      "Now offering Pakistan Railway Bookings for the Luxury Green Line as an addition to your tour.",
      "You can travel to and from any city in Pakistan using this unique train service experience.",
      "AC Parlor Class & Business Class",
    ],
    imageUrl: greenLineUrl,
  },
  {
    name: "Mountain Bike",
    detail: [
      "Must request in advance",
      "Durable Mountain Bikes available",
      "Must add roof rack on vehicle to transport",
    ],
    imageUrl: mountainBikeUrl,
  },
  {
    name: "Kayak",
    detail: [
      "Must request in advance",
      "Kayak style 1 or 2 passenger boat",
      "Includes paddles and life jackets",
    ],
    imageUrl: kayakUrl,
  },
  {
    name: "Inflatable Raft",
    detail: [
      "Must request in advance",
      "Inflatable 4 passenger tube style raft",
      "Includes paddles and lifejackets",
    ],
    imageUrl: inflatableRaftUrl,
  },
  {
    name: "Life Jacket",
    detail: ["Universal 1 size fits all", "Provided with Kayak and Raft Rental"],
    imageUrl: lifeJacketUrl,
  },
];

function VehicleCard({
  name,
  detail,
  imageUrl,
}: {
  name: string;
  detail: string[];
  imageUrl: string;
}) {
  return (
    <article className="vehicles-card">
      <div className="vehicles-card-image">
        <img src={imageUrl} alt="" loading="lazy" />
      </div>
      <h2 className="vehicles-card-title">{name}</h2>
      <div className="vehicles-card-text">
        {detail.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function VehicleGroup({
  heading,
  headingAlt,
  cards,
}: {
  heading: string;
  headingAlt: string;
  cards: typeof jeepCards;
}) {
  return (
    <section className="vehicles-group">
      <h2 className="vehicles-group-heading">
        <img src={heading} alt={headingAlt} loading="lazy" />
      </h2>
      <div className="vehicles-grid">
        {cards.map((card) => (
          <VehicleCard key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="vehicles-page-content">
      <header
        className="vehicles-header"
      >
        <div className="vehicles-header-panel">
          <a className="vehicles-brand" href="/" aria-label="Moon Rabbit Tours home">
            <img src={logoUrl} alt="Moon Rabbit Tours" />
          </a>
          <nav className="vehicles-nav" aria-label="Main navigation">
            {navigation.map(({ label, href, featured }) => (
              <a
                className={featured ? "vehicles-nav-featured" : undefined}
                href={href}
                key={label}
                aria-current={label === "Vehicles" ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="vehicles-content">
        <h1 className="vehicles-title">
          <img src={vehiclesHeadingUrl} alt="Vehicles" />
        </h1>

        <VehicleGroup
          heading={jeepsHeadingUrl}
          headingAlt="Jeeps"
          cards={jeepCards}
        />
        <VehicleGroup
          heading={vehicleGraphicUrl}
          headingAlt="Airplanes"
          cards={largeVehicleCards}
        />
        <VehicleGroup
          heading={airfareGraphicUrl}
          headingAlt="Bikes"
          cards={[activityCards[0]]}
        />
        <VehicleGroup
          heading={greenLineGraphicUrl}
          headingAlt="Boats"
          cards={[activityCards[1]]}
        />
        <VehicleGroup
          heading={mountainBikeGraphicUrl}
          headingAlt="Large Capacity"
          cards={[activityCards[2]]}
        />
        <VehicleGroup
          heading={waterSportsGraphicUrl}
          headingAlt="Trains"
          cards={activityCards.slice(3)}
        />
      </div>

      <footer
        className="vehicles-footer"
        style={{ backgroundImage: `url("${footerMapUrl}")` }}
      >
        <div className="vehicles-footer-brand">
          <img
            className="vehicles-footer-logo"
            src={footerLogoUrl}
            alt="Moon Rabbit Tours"
          />
          <img
            className="vehicles-footer-tagline"
            src={footerTaglineUrl}
            alt="A spiritual journey through the material world"
          />
        </div>
        <div className="vehicles-footer-link">
          <a href="https://moonrabbit.pk/rabbit-screen/" aria-label="Rabbit screen">
            <img src={footerMushroomUrl} alt="" />
          </a>
        </div>
      </footer>
    </main>
  );
}
