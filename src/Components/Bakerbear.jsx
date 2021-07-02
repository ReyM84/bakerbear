import React from "react";
import styled from "styled-components";
import Lines from "./Line";

const BakerBear = styled.h1`
  color: #feffca;
  position: relative;
  font-family: Khand;
  font-style: normal;
  font-weight: 500;
  font-size: 5em;
  line-height: 183px;
  text-align: center;
  letter-spacing: 0.05em;
`;

const BakerBears = () => {
  return (
    <div>
      <Lines>___________________________________________________________</Lines>
      <BakerBear>Baker Bear Cookies</BakerBear>
    </div>
  );
};

export default BakerBears;
