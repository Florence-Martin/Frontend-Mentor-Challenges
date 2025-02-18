"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="card sedan">
        <div className="card-content">
          <Image
            src="images/icon-sedans.svg"
            alt="Sedan Icon"
            width={50}
            height={50}
          />
          <h2>SEDANS</h2>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <Link href="#" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      <section className="card suv">
        <div className="card-content">
          <Image
            src="images/icon-suvs.svg"
            alt="SUV Icon"
            width={50}
            height={50}
          />
          <h2>SUVS</h2>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <Link href="#" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      <section className="card luxury">
        <div className="card-content">
          <Image
            src="images/icon-luxury.svg"
            alt="Luxury Icon"
            width={50}
            height={50}
          />
          <h2>LUXURY</h2>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <Link href="#" className="btn">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
