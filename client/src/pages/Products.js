import React, { useEffect, useState } from "react";
import Catalogue from "../components/section/Catalogue";
import HeroProducts from "../components/section/HeroProducts";
import "../css/products.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const catId = useLocation().search;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/produits${catId}`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    fetchCategories();
  }, [catId]);

  return (
    <main>
      <HeroProducts />
      <Catalogue products={products} categories={categories}/>
    </main>
  );
}

export default Products;
