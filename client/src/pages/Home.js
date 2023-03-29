import React from "react";
import Boutique from "../components/section/Boutique";
import Fabricants from "../components/section/Fabricants";
import Selection from "../components/section/Selection";
import HeroHome from "../components/section/HeroHome";
import "../css/Home.css";

function Home() {


  return (
    <main>
      <HeroHome />
      <Selection />
      <Fabricants />
      <Boutique />
    </main>
  );
}

export default Home;
