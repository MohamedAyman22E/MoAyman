import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../Components/AllSvg/AllSvg";
import { Link } from "react-router-dom";
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fcf6f4;
  border-radius: 50%;
  padding: 0.3rem;
  border: 1px solid #000;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const PowerButton = () => {
  return (
    <Power>
      <Link to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </Link>
    </Power>
  );
};

export default PowerButton;
