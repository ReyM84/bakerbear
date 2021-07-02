import React from "react";
import styled from "styled-components";

const More = styled.h1`
  font-style: italic;
  font-weight: 100;
  font-size: 2.5em;
  text-align: center;
  position: relative;
  top: -35px;
  color: #fff6f6;
`;

const Moremotto = () => {
  return (
    <div>
      <More>The Secret is More</More>
    </div>
  );
};

export default Moremotto;
