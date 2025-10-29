import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  ProductWrapper,
  ImageContainer,
  InfoContainer,
  Category,
  Title,
  Description,
  Price,
  AddToCartButton,
  LoadingText,
} from "./ProductDetails.styles";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingText>Loading...</LoadingText>;

  if (!product) return <LoadingText>Product not found</LoadingText>;

  return (
    <Container>
      <ProductWrapper>
        <ImageContainer>
          <img src={product.image} alt={product.title} />
        </ImageContainer>
        <InfoContainer>
          <Category>{product.category}</Category>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price} EGP</Price>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </InfoContainer>
      </ProductWrapper>
    </Container>
  );
};

export default ProductDetails;
