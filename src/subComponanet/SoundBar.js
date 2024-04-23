import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import music from "../assets/audio/003.mp3";
const Box = styled.div`
  position: fixed;
  top: 3rem;
  left: 9rem;
  z-index: 1111100000000000;
  @media (max-width: 500px) {
    left: 5.5rem;
  }
`;
const AllLine = styled.div`
  cursor: pointer;
  display: flex;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.8s;
  }
  & > *:nth-child(5) {
    animation-delay: 1s;
  }
  & > *:nth-child(6) {
    animation-delay: 1.2s;
  }
`;
const play = keyframes`
0%,100%{
    transform: scaleY(1);
}
50%{
    transform: scaleY(2);
}
`;
const Line = styled.span`
  background-color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.body};
  animation: ${play} 2s ease infinite;
  animation-play-state: ${props => (props.click ? "running" : "paused")};
  height: 10px;
  width: 2px;
  margin: 0 0.1rem;
`;
const SoundBar = props => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box onClick={() => handelClick()}>
      <AllLine>
        <Line click={click} color={props.theme} />
        <Line click={click} color={props.theme} />
        <Line click={click} color={props.theme} />
        <Line click={click} color={props.theme} />
        <Line click={click} color={props.theme} />
      </AllLine>
      <audio src={music} ref={ref}></audio>
    </Box>
  );
};
export default SoundBar;
