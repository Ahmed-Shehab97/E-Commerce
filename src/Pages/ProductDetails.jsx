import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} width="250" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>{product.price} EGP</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
