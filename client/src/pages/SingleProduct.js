import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Product from '../components/section/Product'
import '../css/singleProduct.css'

function SingleProduct() {

  const [product, setProduct] = useState({});

  const location = useLocation()

  const postId = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/produits/${postId}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <main>
      <section className="retour">
        <Link to='/catalogue'>
          <img src="../img/product/arrow-left.svg" alt="arrow-left" />
          <p>Catalogue</p>
        </Link>
      </section>

     <Product product={product}/>

      <section className="productImage">
        <img src="img/canape-cover.jpg" alt="Canapé Cover" />
      </section>
    </main>
  );
}

export default SingleProduct;
