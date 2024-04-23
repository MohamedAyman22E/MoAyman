import React from "react";
import styled from "styled-components";
import { DarkThem } from "../global/Thems";
const Logo = styled.h1`
  display: inline-block;
  color: ${props => (props.color === "dark" ? DarkThem.body : DarkThem.text)};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 100000;
  @media (max-width: 500px) {
    left: 0.5rem;
  }
`;
const LogoComponents = props => {
  return <Logo color={props.theme}>M.A</Logo>;
};

export default LogoComponents;
