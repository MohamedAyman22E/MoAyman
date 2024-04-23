import React from "react";
import { DarkThem } from "../../global/Thems";
import styled, { keyframes } from "styled-components";
import PowerButton from "../../subComponanet/PowerButton";
import LogoComponents from "../../subComponanet/LogoComponents";
import SocialIcon from "../../subComponanet/SocialIcon";
import imgMan from "../../assets/Images/spaceman.png";
const SkillContainer = styled.div`
  background-color: ${props => props.theme.body};
`;
const Box = styled.div`
  padding: 0px 10%;
  height: 100vh;
  z-index: 2;
`;
const Main = styled.div`
  border: 2px solid ${props => props.theme.body};
  color: ${props => props.theme.body};
  width: 45%;
  height: 400px;
  padding: 40px;
  font-family: "Ubuntu Mono", monospace;
  position: absolute;
  top: 35%;
  left: 37%;
  transform: translate(-50%, -20%);
  z-index: 1;
  backdrop-filter: blur(20px);
  @media (max-width: 800px) {
    left: 43%;
    width: 50%;
  }
  @media (max-width: 650px) {
    left: 52%;
    width: 60%;
  }
  @media (max-width: 400px) {
    padding: 20px;
  }
  @media (max-width: 342px) {
    height: 450px;
  }
`;
const Ul1 = styled.h2`
  margin: 25px 0;
  font-size: calc(0.5em + 0.9vw);
  line-height: 30px;
  @media (max-width: 700px) {
    margin: 20px 0;
  }
  @media (max-width: 422px) {
    margin: 10px 0;
  }
  @media (max-width: 350px) {
    margin: 5px 0;
  }
`;
const Logo = styled.h3`
  font-size: calc(7em + 4vw);
  position: fixed;
  top: 2.5rem;
  left: 100px;
  color: ${props => props.theme.body};
  opacity: 0.1;
`;
const animate = keyframes`
  0%,100%{
    top: 40px;
  right: 120px;
  }
  50%{
    top: 80px;
  right: 80px;
  }
`;
const SpaceMan = styled.div`
  position: absolute;
  top: 80px;
  right: 80px;
  animation: ${animate} 5s linear infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;
const MySkills = () => {
  return (
    <SkillContainer theme={DarkThem}>
      <Box>
        <PowerButton />
        <Logo>ABOUT</Logo>
        <LogoComponents theme={"light"} />
        <SocialIcon theme={"light"} />
        <Main>
          <Ul1>
            I'm a front-end developer located in Egypt. I love to create simple
            yet beautiful websites with great user experience.
          </Ul1>
          <Ul1>
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer . I love
            to write blogs and read books.
          </Ul1>
          <Ul1>
            I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links.
          </Ul1>
        </Main>
        <SpaceMan>
          <img src={imgMan} alt="" />
        </SpaceMan>
      </Box>
    </SkillContainer>
  );
};

export default MySkills;
