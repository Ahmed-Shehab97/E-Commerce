import React from "react";
import styled from "styled-components";

// 🎨 Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #111, #1a1a1a, #111);
  color: #ccc;
  text-align: center;
  padding: 40px 0 25px;
  font-size: 0.95rem;
  position: relative; //
  overflow: hidden; //
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    //
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 174, 0, 0.07),
      transparent 60%
    );
    transform: rotate(25deg);
  }
`;

const FooterText = styled.p`
  margin: 0;
  position: relative;
  z-index: 2;
  letter-spacing: 0.5px;
`;

const Highlight = styled.span`
  color: #ffae00;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 174, 0, 0.6);
  transition: 0.3s ease;
  &:hover {
    color: #ffd166;
    text-shadow: 0 0 15px rgba(255, 209, 102, 0.8);
  }
`;

const FooterLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;

  a {
    color: #999;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: 0.3s;

    &:hover {
      color: #ffae00;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} <Highlight>MyStore</Highlight> — All rights
        reserved.
      </FooterText>
      <FooterLinks>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </FooterLinks>
    </FooterContainer>
  );
};
export default Footer;
