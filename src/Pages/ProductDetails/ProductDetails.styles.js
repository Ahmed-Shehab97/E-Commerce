import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  padding: 40px 20px;
  background: linear-gradient(180deg, #111, #1c1c1c);
  color: white;
`;

export const ProductWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ImageContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px;
  text-align: center;

  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Category = styled.span`
  color: #ffae00;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #ccc;
  line-height: 1.6;
  font-size: 1rem;
`;

export const Price = styled.h2`
  font-size: 2.5rem;
  color: #ffae00;
  margin: 0;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: #ffae00;
  color: rgba(20, 20, 20, 0.7);
  padding: 14px 30px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(255, 174, 0, 0.4);

  &:hover {
    background-color: #ffd166;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 174, 0, 0.6);
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1.2rem;
  padding: 40px;
`;
