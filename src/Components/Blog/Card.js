import React from "react";
import styled from "styled-components";
import { Github } from "../AllSvg/AllSvg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 18rem;
  height: 45vh;
  padding: 40px;
  border-radius: 0px 60px;
  list-style: none;
  text-decoration: none;
  border: 2px solid ${props => props.theme.body};
  transition: all.2s;
  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 25px;
`;
const Description = styled.p`
  font-weight: 500;
  margin: 25px 0;
  font-size: 19px;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.text};
`;
const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;
const Tag = styled.span`
  font-size: 12px;
`;
const GithubIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkDemo = styled(Link)`
  text-decoration: none;
  padding: 10px 60px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 0px 0px 0px 40px;
  font-size: 25px;
  border: none;
  outline: none;
  transition: 0.3s;
  font-weight: 600;
  ${Box}:hover & {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
`;
const Git = styled.span`
  ${Box}:hover & {
    & > * {
      transition: all.3s;
      fill: ${props => props.theme.body};
    }
  }
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
const Card = props => {
  const { name, id, tags, demo, description } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Line></Line>
      <Skills>
        {tags.map((e, index) => {
          return <Tag key={index}># {e}</Tag>;
        })}
      </Skills>
      <GithubIcon>
        <LinkDemo target="_blank">Visit</LinkDemo>
        <Git>
          <Github width={35} height={35} />
        </Git>
      </GithubIcon>
    </Box>
  );
};

export default Card;
