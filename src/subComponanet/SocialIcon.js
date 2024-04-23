import React from "react";
import { NavLink } from "react-router-dom";
import {
  Facebook,
  Github,
  Twitter,
  LinkedIn,
} from "../Components/AllSvg/AllSvg";
import styled from "styled-components";
import { DarkThem } from "../global/Thems";
import { motion } from "framer-motion";
const Icons = styled.div`
  position: fixed;
  bottom: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    left: 0.5rem;
  }
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props =>
    props.color === "dark" ? DarkThem.body : DarkThem.text};
`;
const SocialIcon = props => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={"https://github.com/MohamedAyman22E"}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkThem.body : DarkThem.text}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={"https://twitter.com/Mohamedaym15624"}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkThem.body : DarkThem.text}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={"https://www.facebook.com/profile.php?id=100012452676002"}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkThem.body : DarkThem.text}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={"https://www.linkedin.com/in/mohamed-ayman-61626028b"}
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkThem.body : DarkThem.text}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: "0rem" }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcon;
