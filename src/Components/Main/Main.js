import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import { NavLink } from "react-router-dom";
import { YinYang } from "../AllSvg/AllSvg";
import Hero from "../Hero/Hero";
import { motion } from "framer-motion";
const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
  top: ${props => (props.clickBlog ? "50px" : "0px")};
`;
const Container = styled.div`
  padding: 2rem;
`;
const SayHi = styled(NavLink)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: ${props => props.theme.text};
  z-index: 100;
  @media (max-width: 630px) {
    color: ${props => props.theme.body};
  }
`;
const Work = styled(NavLink)`
  position: absolute;
  top: 45%;
  transform: translateY(-50%) rotate(90deg);
  right: 2rem;
  color: ${props => props.theme.text};
  font-weight: 600;
  @media (max-width: 500px) {
    right: -0.2rem;
  }
  @media (max-width: 630px) {
    color: ${props => props.theme.body};
  }
`;
const Skills = styled(NavLink)`
  position: absolute;
  bottom: 1rem;
  right: 30%;
  color: ${props => props.theme.text};
  @media (max-width: 500px) {
    right: 15%;
  }
`;
const About = styled(NavLink)`
  position: absolute;
  bottom: 1rem;
  z-index: 1;
  left: 30%;
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  @media (max-width: 500px) {
    left: 15%;
  }
  @media (max-width: 630px) {
    color: ${props => props.theme.text};
  }
`;
const Blog = styled(NavLink)`
  position: absolute;
  top: 45%;
  transform: translateY(-50%) rotate(-90deg);
  left: 1.4rem;
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
  @media (max-width: 500px) {
    left: -0.2rem;
  }
`;
const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;
const Center = styled.button`
  position: absolute;
  top: ${props => (props.click ? "85%" : "50%")};
  left: ${props => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  flex-direction: column;
  display: flex;
  align-items: center;
  background: transparent;
  gap: 20px;
  transition: all 1s;
  z-index: 10000;
  & > :first-child {
    animation: ${rotate} 1.5s linear infinite;
    transition: all 1s;
    cursor: pointer;
    @media (max-width: 900px) {
      width: 100px;
    }
    @media (max-width: 600px) {
      width: 80px;
    }
  }
  span {
    font-size: 20px;
    transition: all 1s ease;
    display: ${props => (props.click ? "none" : "inline-block")};
    font-family: ${props => props.theme.font_Family};
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  background: ${props => props.theme.text};
  width: ${props => (props.click ? "50%" : "0%")};
  height: ${props => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 0;
  @media (max-width: 630px) {
    width: 100%;
    height: ${props => (props.click ? "50%" : "0%")};
    top: 0;
    right: 0%;
  }
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);
  const [clickWork, setClickWork] = useState(false);
  const handelClickWork = () => setClickWork(!clickWork);
  return (
    <MainContainer click={click}>
      <Container>
        <PowerButton />
        <LogoComponents theme={click ? "light" : "dark"} />
        <SocialIcon theme={click ? "light" : "dark"} />
        <DarkDiv click={click} />
        <Center click={click}>
          <YinYang
            onClick={() => handelClick()}
            width={click ? "120" : "200"}
            height={click ? "120" : "200"}
            fill="currentColor"
          />
          <span>Click hera</span>
        </Center>
        <SayHi to="/say">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            Say hi..
          </motion.h2>
        </SayHi>
        <Work to="/work" onClick={() => handelClickWork()}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            Work
          </motion.h2>
        </Work>
        <Skills to="/skills">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            My Skill
          </motion.h2>
        </Skills>
        <About to="/about" click={click}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            About.
          </motion.h2>
        </About>
        <Blog to="/blog" click={click}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            Blog
          </motion.h2>
        </Blog>
      </Container>
      {click ? <Hero click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
