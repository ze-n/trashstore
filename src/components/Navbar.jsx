import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { CgMenu, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav className="nav">
        <ul className={open ? "nav__list show__menu" : "nav__list"}>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/" className="nav__links">
              Home
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/about" className="nav__links">
              About
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/products" className="nav__links">
              Products
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/contact" className="nav__links">
              Contact
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/login" className="nav__links nav__cart-link">
              Log in
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="nav__items">
            <NavLink to="/cart" className="nav__links nav__cart-link">
              <FiShoppingCart className="nav__cart-icon" />
              <span className="nav__cart-total-items">2</span>
            </NavLink>
          </motion.li>
        </ul>

        <CgMenu
          className={
            open
              ? "nav__menu-icons  nav__menu-open-icon nav__menu-icon--hide"
              : "nav__menu-icons  nav__menu-open-icon "
          }
          onClick={() => setOpen(!open)}
        />
        <CgClose
          className={
            open
              ? "nav__menu-icons  nav__menu-close-icon"
              : "nav__menu-icons  nav__menu-close-icon nav__menu-icon--hide"
          }
          onClick={() => setOpen(!open)}
        />
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  min-width: 5rem;
  .nav__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .nav__links {
    color: ${({ theme }) => theme.colors.black};
  }
  .nav__links:where(:active, :focus, :hover) {
    color: ${({ theme }) => theme.colors.helper};
  }
  .nav__cart-link {
    position: relative;
  }
  .nav__cart-icon {
    font-size: 2rem;
  }
  .nav__cart-total-items {
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.helper};
    color: ${({ theme }) => theme.colors.white};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -1.5rem;
    right: -1rem;
  }

  .nav__menu-icons {
    display: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .nav__list {
      clip-path: circle(0% at 100% 0);
    }

    .nav__menu-icons {
      display: block;
      font-size: 4rem;
      position: absolute;
      right: 0;
      clip-path: circle(70.7% at 50% 50%);
      transition: clip-path 0.5s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 1;
      cursor: pointer;
      z-index: 99;
    }
    .nav__menu-icon--hide {
      clip-path: circle(0.4% at 50% 50%);
      opacity: 0;
    }
    .nav__list {
      position: fixed;
      left: 0rem;
      top: 0rem;
      background-color: ${({ theme }) => theme.colors.white};
      width: 100vw;
      width: 100dvw;
      height: 100vh;
      height: 100dvh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
      clip-path: circle(0.4% at 100% 0);
      transition: clip-path 0.5s ease-in-out;
      z-index: 9;
    }
    .show__menu {
      clip-path: circle(141.4% at 100% 0);
    }
  }
`;

export default Navbar;
