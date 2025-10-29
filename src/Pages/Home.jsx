import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Styled Components
const HeroSection = styled.section`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1513709630908-54e3d1f1bcbf?auto=format&fit=crop&w=1600&q=80")
      center/cover no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  backdrop-filter: blur(4px);
`;
const HeroTitle = styled.h1`
  color: #ffae00;
  font-size: 3.5rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 35px;
  color: #e0e0e0;
  max-width: 700px;
  line-height: 1.6;
`;
const ShopButton = styled(Link)`
  background-color: #ffae00;
  color: rgba(20, 20, 20, 0.7);
  padding: 14px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(255, 174, 0, 0.4);

  &:hover {
    background-color: #ffd166;
    transform: scale(1.07);
    box-shadow: 0 6px 20px rgba(255, 174, 0, 0.6);
  }
`;

//Featured Section
const FeaturedSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(180deg, #111, #1c1c1c);
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin-bottom: 50px;
  color: #ffae00;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2.4rem;
  text-shadow: 0 0 10px rgba(255, 174, 0, 0.4);
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const ProductCard = styled(Link)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 200px;
    object-fit: contain; // بيخلي الصوره مظبوطه بتاعت المنتج
    margin-bottom: 15px;
    transition: transform 0.3s ease;
    transform: scale(1.07);
  }
  h3 {
    font-size: 1rem;
    height: 50px;
    overflow: hidden;
    color: #fff;
  }
  p {
    margin-top: 10px;
    color: #ffae00;
    font-weight: bold;
    font-size: 1.1rem;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(255, 174, 0, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <HeroSection>
        <HeroTitle>Welcome to MyStore</HeroTitle>
        <HeroSubtitle>
          Discover the best products at unbeatable prices. Shop smart, Shop now!
        </HeroSubtitle>
        <ShopButton to="/products">Shop Now</ShopButton>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Featured Products</SectionTitle>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} EGP</p>
            </ProductCard>
          ))}
        </ProductsGrid>
      </FeaturedSection>
    </>
  );
};

export default Home;
