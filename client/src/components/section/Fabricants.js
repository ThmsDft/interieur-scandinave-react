import React from 'react'

function Fabricants() {

    const fabricants = [
        { id: 1, name: "snedkergaarden" },
        { id: 2, name: "hudevadFurniture" },
        { id: 3, name: "fritzHansen" },
        { id: 4, name: "brdrPetersens" },
        { id: 5, name: "carlHansenSon" },
        { id: 6, name: "nielaus" },
        { id: 7, name: "normann" },
        { id: 8, name: "louisPoulsen" },
        { id: 9, name: "dybergLarsen" },
        { id: 10, name: "ppMobler" },
        { id: 11, name: "dyrlund" },
        { id: 12, name: "dk3" },
        { id: 13, name: "cube" },
        { id: 14, name: "warmNordic" },
      ];

  return (
    <section className="fabricants">
    <h2>Nos fabricants partenaires</h2>
    <div>
      {fabricants.map((fabricant) => (
        <a href="#" key={fabricant.id}>
          <img
            src={`./img/logosFabricants/${fabricant.name}.svg`}
            alt={fabricant.name}
          />
        </a>
      ))}
    </div>
  </section>
  )
}

export default Fabricants