import React from 'react'

function SecContact() {
  return (
    <section className="contact">
        <h2>La boutique</h2>
        <div className="infos">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9380586014017!2d2.292816115895039!3d48.84032017928582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67126aa5826ff%3A0x82b20a5df0d5039!2sInt%C3%A9rieur%20Scandinave!5e0!3m2!1sfr!2sfr!4v1678186335832!5m2!1sfr!2sfr"
              style={{border: 0}}
              referrerPolicy="no-referrer-when-downgrade"
              title="googleMap"
            ></iframe>
          </div>
          <div className="info">
            <h3>Informations</h3>
            <div className="content">
              <div>
                <h4>Adresse</h4>
                <p>208 rue Lecourbe, 75015 Paris</p>
              </div>
              <div>
                <h4>Horaires</h4>
                <p>Du Mardi au Samedi</p>
                <p>de 10h à 19h</p>
              </div>
              <div>
                <h4>Téléphone</h4>
                <p>01 45 35 99 64</p>
                <p>06 08 23 26 33</p>
              </div>
              <div>
                <h4>Mail</h4>
                <p>contact@interieurscandinave.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SecContact