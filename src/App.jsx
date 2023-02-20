import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./assets/data";

export default function App() {
  
  const cards = data.map((value, index) => {
    return (
      <Card
        key={data[index].id}
        img={data[index].coverImg}
        rating={data[index].stats.rating}
        reviewCount={data[index].stats.reviewCount}
        title={data[index].title}
        price={data[index].price}
        location={data[index].location}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
