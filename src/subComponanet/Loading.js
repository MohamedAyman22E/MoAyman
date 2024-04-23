import React from "react";
import styled from "styled-components";
const Load = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.div`
  color: #fff;
  font-size: 50px;
`;
const Loading = () => {
  return (
    <Load>
      <H2>Loading...</H2>
    </Load>
  );
};

export default Loading;
