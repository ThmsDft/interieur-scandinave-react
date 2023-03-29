import React from "react";

function Product({ product }) {
  return (
    <section className="product">
      <div className="photos">
        <figure className="main">
          <img src="img/canape.jpg" alt="Canapé" />
        </figure>
        <div>
          <figure>
            <img src="img/canape.jpg" alt="Canapé" />
          </figure>
          <figure>
            <img src="img/canape-2.webp" alt="Canapé" />
          </figure>
          <figure>
            <img src="img/canape-3.webp" alt="Canapé" />
          </figure>
        </div>
      </div>

      <div className="info">
        <h1>{product.name}</h1>
        <div>
          <h3>Designer</h3>
          <p>{product.designerName}</p>
        </div>
        <div>
          <h3>Fabricant</h3>
          <p>{product.fabName}</p>
        </div>
        <div>
          <h3>Année de fabrication</h3>
          <p>{product.year}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Product;
