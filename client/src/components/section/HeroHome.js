import React from 'react'
import { Link } from "react-router-dom";

function HeroHome() {
  return (
    <section className="hero">
    <div className="img">
      <img src="./img/hero/salon2.jpeg" alt="Salon" />
      <div className="degrade1"></div>
      <div className="degrade2"></div>
    </div>

    <div className="title">
      <h1>Design Scandinave</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
        aspernatur accusantium, quia ex soluta ipsum a ad officia illum
        consequatur deleniti sapiente facilis exercitationem odit
        consequuntur, provident commodi dolor vitae quas magnam?
      </p>
      <Link to="/catalogue">
        <button>Notre catalogue</button>
      </Link>
    </div>
  </section>
  )
}

export default HeroHome