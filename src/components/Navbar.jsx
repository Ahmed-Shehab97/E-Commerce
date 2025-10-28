import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User } from "lucide-react";

const NavbarContainer = styled.header`
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px); //
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 2vw;
  position: sticky;
  top: 0;
  z-index: 1000;
  left: 0;
  right: 0;
  overflow-x: hidden;
  width: 1211px;
  max-width: 100%;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffae00;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd166;
    transform: scale(1.05);
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center; //
  margin: 0 30px;
  max-width: 500px;

  input {
    width: 100%; //
    display: flex;
    flex: 1;
    padding: 10px 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right: none;
    border-radius: 25px 0 0 25px;
    background-color: rgba(255, 255, 255, 0.567);
    cursor: pointer;
    color: #fff;
    transition: 0.3s;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.5);
      border-color: #ffae00;
    }
  }

  button {
    background-color: #ffae00;
    color: rgba(20, 20, 20, 0.7);
    border: none;
    padding: 10px 18px;
    border-radius: 0 25px 25px 0;
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;

    &:hover {
      background-color: #ffd166;
      transform: scale(1.05);
    }
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #ffae00;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transition: transform 0.3s ease;
      transform: scale(1.2);
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">MyStory</Logo>
      <SearchBox>
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </SearchBox>

      <NavIcons>
        <Link to="/wishlist">
          <Heart size={20} />
          Wishlist
        </Link>
        <Link to="/cart">
          <ShoppingCart size={20} />
          Cart
        </Link>
        <Link to="/login">
          <User size={20} />
          Login
        </Link>
      </NavIcons>
    </NavbarContainer>
  );
};

export default Navbar;
