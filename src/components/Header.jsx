import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import logo from "../images/logo-no-background.png";
const Header = () => {
  return (
    <MainHeader className="header">
      <img src={logo} alt="logo image" className="header__logo" />
      <Navbar className="nav" />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  padding-inline: 4rem;

  .header__logo {
    height: 2.5rem;
  }
`;

export default Header;
