import React from "react";
import { Link } from "react-router-dom";

function Catalogue({ products }) {
  return (
    <section className="catalogue">
      <div className="filter"></div>

      <div className="articles">
      
        {products.map((product) => (
          <Link to={`/produit/${product.id}`}>
            <div className="card">
              <div className="info">
                <p>{product.name}</p>
              </div>
              <div className="img">
                <img src="img/canape.jpg" alt="Canapé" />
              </div>
            </div>
          </Link>
        ))}

        {/* <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a>
        <a href="product.html">
          <div className="card">
            <div className="info">
              <p>Canapé Pagode</p>
            </div>
            <div className="img">
              <img src="img/canape.jpg" alt="Canapé" />
            </div>
          </div>
        </a> */}
      </div>
    </section>
  );
}

export default Catalogue;
