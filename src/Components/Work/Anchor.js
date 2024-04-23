import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Links, Anchor } from "../AllSvg/AllSvg";
const Container = styled.div`
  position: relative;
  @media (max-width: 350px) {
    display: none;
  }
`;
const Slider = styled.div`
  position: fixed;
  top: 0px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 111;
  transform: translateY(-90%);
  .chain {
    transform: rotate(135deg);
  }
  @media (max-width: 500px) {
    right: 1rem;
  }
`;
const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;
const AnchorContainer = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  useEffect(() => {
    const handelScroll = () => {
      let scrollHeight = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;
      let def = Math.max(bodyHeight - (scrollHeight + windowSize));
      let defP = (def * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-defP}%)`;
      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Links
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorContainer;
