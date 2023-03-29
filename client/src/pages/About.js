import React from "react";
import '../css/About.css'

function About() {
  return (
    <main>
      <section className="histoire">
        <div className="title">
          <h1>Mon histoire</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Amet veritatis odio expedita inventore alias, eligendi quis
            dignissimos mollitia, sequi quos magni sed? Eligendi consectetur
            numquam repellendus ex nihil, quos aspernatur.
            <br />
            <br />
            Blanditiis voluptate labore voluptatum illo unde autem magni.
            Reiciendis impedit enim laudantium, totam in velit itaque laboriosam
            repellat natus ratione distinctio voluptates nam eius aliquam
            possimus provident ex nobis. Architecto!
            <br />
            <br />
            Repudiandae unde qui distinctio laudantium libero optio blanditiis.
            Neque quibusdam, aliquid repellat accusantium pariatur nesciunt
            atque! Similique quia eos, aliquid a ut facilis quos fugiat? Facilis
            vero ipsum atque odio.
            <br />
            <br />
            Dignissimos beatae saepe quo earum sed voluptatibus quas minima
            cumque est, repellendus itaque autem quod error quaerat, repellat
            excepturi deleniti consectetur odit at. Hic quibusdam totam quod
            dolor molestias impedit. <br />
            <br />
            Quis, veniam reiciendis culpa reprehenderit beatae qui officia
            facilis impedit ea tenetur fugit voluptatum? Praesentium fugit atque
            aliquam deserunt asperiores vident commodi beatae mollitia
            laboriosam!
          </p>
        </div>

        <div className="image">
          <img src="./img/about/photoprofil.webp" alt="Chaises" />
          <img className="logo" src="./img/about/logo.webp" alt="Chaises" />
        </div>
      </section>
      <section className="image">
        <img src="./img/about/Daenisches-Design.jpeg" alt="" />
      </section>
    </main>
  );
}

export default About;
