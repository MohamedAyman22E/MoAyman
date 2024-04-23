import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../AllSvg/AllSvg";
// import { DarkThem } from "../../global/Thems";
const Container = styled(motion.div)``;
const Box = styled(motion.div)`
  width: calc(10rem + 12vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  background: transparent;
  border: 1px solid #000;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  transition: all.3s;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    background: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;
const AllVideo = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
  border: 2px solid ${props => props.theme.text};
  background-position: center;
  ${Box}:hover & {
    border-color: ${props => props.theme.body};
  }
  video {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 1rem 0 0.5rem 0;
  font-weight: 700;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
  margin: 10px 0;
  transition: all.3s;
  ${Box}:hover & {
    background-color: ${props => props.theme.body};
  }
`;
const Skills = styled.div`
  padding: 0 0.2rem;
`;
const Tag = styled.span`
  padding-right: 0.6rem;
`;
const Date = styled.h4`
  margin: 10px 0;
`;
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const Code = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const DemoBtn = styled.button`
//   border: none;
//   outline: none;
//   padding: 10px 0px;
//   border-radius: 2px;
//   background-color: ${props => props.theme.text};
//   color: ${props => props.theme.body};
//   transition: 0.3s;
//   ${Box}:hover & {
//     & > * {
//       background-color: ${props => props.theme.body};
//       color: ${props => props.theme.text};
//     }
//   }
// `;
const Demo = styled(Link)`
  text-decoration: none;
  border-radius: 2px;
  padding: 10px 25px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-weight: 600;
  ${Box}:hover & {
    & > * {
      background-color: ${props => props.theme.body};
      color: ${props => props.theme.text};
    }
  }
`;
const Git = styled(Link)`
  transition: 0.3s;
  ${Box}:hover & {
    & > * {
      fill: ${props => props.theme.body};
      cursor: pointer;
    }
  }
`;
const WorkContent = props => {
  const { name, tags, date, link, linkGit } = props.blog;
  return (
    <Container variants={Item}>
      <Box>
        <AllVideo className="allImg"></AllVideo>
        <Title>{name}</Title>
        <Line />
        <Skills>
          {tags.map((tag, index) => {
            return <Tag key={index}>#{tag}</Tag>;
          })}
        </Skills>
        <Date>{date}</Date>
        <Code>
          {/* <DemoBtn> */}
          <Demo target="_blank" to={link}>
            Demo
          </Demo>
          {/* </DemoBtn> */}
          <Git target="_blank" to={linkGit}>
            <Github
              width={25}
              height={25}
              fill={props => props.DarkThem.text}
            />
          </Git>
        </Code>
      </Box>
    </Container>
  );
};

export default WorkContent;
