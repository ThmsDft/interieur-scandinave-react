import React from "react";
import { Link, useLocation } from "react-router-dom";

function Catalogue({ products, categories }) {

  const location = useLocation().search

  console.log(location)

  const categorieId = location.split('=')[1]


  return (
    <section className="catalogue">
      <div className="filter">
        <div>
        <p>Filter par</p>
        <h3>Categories</h3>
        </div>
        <Link to="/catalogue"><p style={{backgroundColor: location === '' ? 'var(--secondary-color)' : 'var(--main-color)'}}>Toutes</p></Link>
        {categories.map(categorie => (
          <Link to={`/catalogue?cat=${categorie.catId}`} key={categorie.catId}><p style={{backgroundColor: categorie.catId == categorieId ? 'var(--secondary-color)' : 'var(--main-color)'}}>{categorie.catName}</p></Link>
        ))}
      </div>
      {products.length === 0 ? <p className="noProduct">Aucun article dans cette catégorie</p> :
      <div className="articles">
        {products.map((product) => (
          <Link to={`/produit/${product.id}`} key={product.id}>
            <div className="card">
              <div className="info">
                <p>{product.name}</p>
              </div>
              <div className="img">
                <img src={product.primImg ? product.primImg : '../upload/canape.jpg'} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>}
    </section>
  );
}

export default Catalogue;
