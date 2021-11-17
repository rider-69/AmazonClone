import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/61JaDmxkZBL._SX3000_.jpg"
        alt=""
      />
      {/* product id, title, rating, image */}

      <div className="home__row">
        <Product
          id="121212"
          title="The Concise Mastery (The Modern Machiavellian Robert Greene, 1) Paperback – 2 June 2014"
          price={200}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71EdWfUwqcL.jpg"
        />
        <Product
          id="121215"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass"
          price={20}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121214"
          title="OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={260}
          rating={5}
          image="https://m.media-amazon.com/images/I/41ixW7SKsPL._AC_SY200_.jpg"
        />
        <Product
          id="121215"
          title="(Renewed) Dell E7450 Latitude 14 Inches Laptop (5th Gen Intel Core i5 - 5300u /8 GB/512 GB SSD/Windows 10 Pro), Black
          "
          price={500}
          rating={5}
          image="https://m.media-amazon.com/images/I/31deLL-f2IL.jpg"
          
        />
        <Product
          id="121216"
          title="Logitech C505 HD Webcam - 720p HD External USB Camera for Desktop or Laptop with Long-Range Microphon"
          price={200}
          rating={5}
          image="https://m.media-amazon.com/images/I/61yo4swj-PL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121217"
          title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
          price={200}
          rating={5}
          image="https://m.media-amazon.com/images/I/81XEPquUw3L._SL1500_.jpg"
        />
      </div>  
    </div>
  );
}

export default Home;
