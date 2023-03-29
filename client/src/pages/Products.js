import React, { useEffect, useState } from "react";
import Catalogue from "../components/section/Catalogue";
import HeroProducts from "../components/section/HeroProducts";
import "../css/products.css";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/produits");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <HeroProducts />
      <Catalogue products={products} />
    </main>
  );
}

export default Products;
