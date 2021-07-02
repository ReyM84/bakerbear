import React from "react";
import styled from "styled-components";

const Line = styled.p`
  color: white;
  font-size: 2.75em;
  width: 100vw;
  position: absolute;
  font-family: Taviraj;
  top: 40px;
  font-weight: 900;
`;

const Lineb = styled.p`
  color: white;
  font-size: 2.75em;
  width: 100vw;
  position: absolute;
  font-family: Taviraj;
  top: 145px;
  font-weight: 900;
`;

const Lines = () => {
  return (
    <div>
      <Line>___________________________________________________________</Line>
      <Lineb>___________________________________________________________</Lineb>
    </div>
  );
};

export default Lines;
