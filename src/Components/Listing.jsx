import React from "react";
import styled from "styled-components";
import Chocolist from "./Chocolist";

const Title = styled.h1`
  color: white;
`;

const Titles = (props) => <Title>{props.title}</Title>;

const Img = styled.img`
  width: 100px;
`;

const Listing = () => {
  return (
    <div>
      <Titles
        title={this.props.chocolist.map((title) => {
          return <Title title={title} />;
        })}
      />
      <Img src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/ChocoButterscotchChip.jpg" />
    </div>
  );
};

export default Listing;
