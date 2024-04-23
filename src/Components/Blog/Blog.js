import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import Card from "./Card";
import { YinYang } from "../AllSvg/AllSvg";
import { DarkThem } from "../../global/Thems";
import { motion } from "framer-motion";
import SoundBar from "../../subComponanet/SoundBar";
import allBlogData from "../../data/BlogData";
const WorkContainer = styled.div`
  background-color: ${props => props.theme.text};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;
const MainWork = styled(motion.ul)`
  position: fixed;
  top: 20%;
  left: calc(10rem + 15vw);
  display: flex;
  gap: 30px;
`;
const Rotate = styled.span`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const Logo = styled.h2`
  font-weight: 700;
  font-size: 210px;
  position: fixed;
  top: 12%;
  right: 6%;
  color: ${props => props.theme.body};
  opacity: 0.1;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const Work = () => {
  const ref = useRef(null);
  const rotateRef = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      rotateRef.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <WorkContainer>
      <PowerButton />
      <LogoComponents theme={"light"} />
      <SocialIcon theme={"light"} />
      <Logo>BLOG</Logo>
      <MainWork ref={ref} variants={container} initial="hidden" animate="show">
        {allBlogData.map(item => (
          <Card key={item} data={item} />
        ))}
      </MainWork>
      <Rotate ref={rotateRef}>
        <YinYang width={80} height={80} fill={DarkThem.text} />
      </Rotate>
    </WorkContainer>
  );
};

export default Work;
