import React from "react";
import styled from "styled-components";
import BakerBears from "../Components/Bakerbear";
import Moremotto from "../Components/More";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";

const Heading = styled.h1`
  position: relative;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 54px;
  text-align: center;
  color: #fefafa;
`;

const Prodimg = styled.img`
  position: relative;
  width: 350px;
  border-radius: 25px;
  left: 34em;
`;

const Logo = styled.img`
  width: 450px;
  position: relative;
  top: -17rem;
  left: 31em;
`;

const Blurb = styled.p`
  position: absolute;
  width: 486px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  top: 50rem;
  color: #fffbfb;
  left: 29rem;
`;

const Home = () => {
  return (
    <div className="Homeback">
      <Navbar />
      <BakerBears />
      <Moremotto />
      <div>
        <div
          style={{
            display: "block",
            position: "relative",
            right: "27rem",
            top: "5rem",
          }}
        >
          <Heading>Chocolate Chip Cookies</Heading>
          <a href="#">
            <Prodimg src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/ChocolateChip+Homepage.jpg" />
          </a>
        </div>
        <Logo src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/BakerBear+Logo+Clipart.png" />
        <div
          style={{
            display: "block",
            position: "relative",
            left: "27rem",
            top: "-41.75rem",
          }}
        >
          <Heading
            style={{
              top: "0.2em"
            }}
          >Specialty Cookies</Heading>
          <a href="#">
            <Prodimg
              style={{ 
                height: "255.7px", 
                top: "0.6em"             
              }}
              src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/SpecialtyCookies+Homepage.jpg"
            />
          </a>
        </div>
        <div
          style={{
            display: "block",
            position: "relative",
            right: "27rem",
            top: "-40rem",
          }}
        >
          <Heading
            style={{
              top: "0.3em"
            }}
          >Breads</Heading>
          <a href="#">
            <Prodimg 
            src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/Bread+HomePage.jpg"
            style={{top: "0.38em"}}
            />
          </a>
        </div>
        <Blurb>
          Originally started as a once a year baking extravaganza to make our
          unique Chocolate Butterscotch Chip Cookies for the holiday season led
          to sharing our specialty cookies, fresh breads, and other secret
          recipe baked goods with family, friends, and you. Using a combination
          of traditional family recipes and modern creativity, Baker Bear
          Cookies continues to develop new and tasty baked creations to satisfy
          every sweet tooth. At Baker Bear Cookies, The Secret is More!
        </Blurb>
        <div
          style={{
            display: "block",
            position: "relative",
            left: "27rem",
            top: "-60rem",
          }}
        >
          {/* <Box w="200px" h="15vh" bg="gray.200" /> */}
          <Heading>More</Heading>
          <a href="#">
            <Prodimg src="https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/Cheesecake+Boysenberry.jpg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
