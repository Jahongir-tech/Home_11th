import React from "react";
import "./Main.scss";

import { FaApple } from "react-icons/fa";

import IPhone16Pro from "../../assets/images/iPhone16Pro.jpg";
import IPhone16 from "../../assets/images/iPhone16.jpg";
import IPad from "../../assets/images/iPad.jpg";

import AirPods4 from "../../assets/images/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg";
import Watch from "../../assets/images/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg";
import MacAir from "../../assets/images/promo_macbook_air_m3__e43jegok3wuq_large.jpg";
import Businus from "../../assets/images/promo_asb__gajxkvbkiqie_large.png";
import Carrier from "../../assets/images/promo_carrier__e0izvxwqosgi_large.jpg";
import Trade from "../../assets/images/promo_iphone_tradein__bugw15ka691e_large.jpg";


import Hero from "./hero/Hero";
import { IoIosArrowForward } from "react-icons/io";

const products = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    desc: "Hello, Apple Intelligence.",
    textColor: "#fff",
    image: IPhone16Pro,
  },
  {
    id: 2,
    title: "iPhone 16",
    desc: "Hello, Apple Intelligence.",
    textColor: "#000",
    image: IPhone16,
  },
  {
    id: 3,
    title: "iPad Air",
    desc: "Hello, Apple Intelligence.",
    textColor: "#fff",
    image: IPad,
  },
];

const products_grid = [
  {
    id: 1,
    title: "AirPods 4",
    desc: "Iconic. Now supersonic. Available with Active Noise Cancellation.",
    textColor: "#fff",
    image: AirPods4,
  },
  {
    id: 2,
    title: "WATCH",
    desc: "Thinstant classic.",
    textColor: "#222",
    image: Watch,
  },
  {
    id: 3,
    title: "MacBook Air",
    desc: "Lean. Mean. M3 machine.",
    textColor: "#222",
    image: MacAir,
  },
  {
    id: 4,
    title: "Apple for Small Business",
    desc: "Hardware, software and expert help -- all in one place",
    textColor: "#222",
    image: Businus,
  },
  {
    id: 5,
    title: "Carrier deals at Apple",
    desc: "Get up to $1000 in credit on a new iPhone. Trade-in may be required.",
    textColor: "#222",
    image: Carrier,
  },
  {
    id: 6,
    title: "Trade In 4",
    desc: "Get $180–$650 in credit when you trade in iPhone&nbsp;12 or higher.",
    textColor: "#222",
    image: Trade,
  },
];

const Main = () => {
  return (
    <div>
      <p className="info">
        Starting 11/29, get an Apple Gift Card up to $200 when you buy an
        eligible product — online and in-store.1
        <a href="#">
          Learn more <IoIosArrowForward />
        </a>
      </p>
      {products.map((product) => (
        <Hero
          key={product.id}
          title={product.title}
          desc={product.desc}
          textColor={product.textColor}
          image={product.image}
        />
      ))}

      <div className="grid">
        {products_grid.map((product) => (
          <Hero
            key={product.id}
            title={product.title}
            desc={product.desc}
            textColor={product.textColor}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
