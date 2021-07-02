import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

let cookies = [
  {
    title: "Macadamia Shortbread Cookies",
    description:
      "Inspired by Baker Bear adventures in Maui, our shortbread cookies are not only traditionally buttery, but are filled with chopped macadamia nuts and mini chocolate chips throughout to make them far more than the shortbread cookie you know.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/MacadamiaShortbread.jpg",
  },
  {
    title: "Red Velvet Cookies",
    description:
      "Baker Bear’s take on the traditional Red Velvet cake recipe, in cookie form! Rich cocoa infused dough with generous amounts of white chocolate chips makes this decadent treat as tasty as it pretty. ",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Red+Velvet+Cooling+Rack.jpg",
  },
  {
    title: "Triple Chocolate Tucker",
    description:
      "A decadent, rich chocolate cookie filled with our German recipe inspired semi-sweet chocolate and white chocolate chips. (Also, can have added Peanut Butter chips or candy pieces on request)",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Triple+Chocolate+Tucker.jpg",
  },
  {
    title: "Organic Ginger Snaps",
    description:
      "Organically grown and freshly ground ginger combines with dark molasses, nutmeg, and more to produce Baker Bear’s take on a crunchy and chewy classic ginger snap.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/GingerSnap.jpg",
  },
  {
    title: "Lemon Powdered Crisps",
    description:
      "More than a lemon sugar cookie, our Lemon Powered Crisps use fresh lemon juice and lemon zest to give a tart pucker to these, but perfectly balanced with the sweet, powdered sugar coating. ",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/LemonCookie.jpg",
  },
  {
    title: "Seasonal Cookies",
  },
  {
    title: "Seasonal Cookies",
  },
  {
    title: "Pumpkin Spice Chocolate Chip Cookies",
    description:
      "Take your Pumpkin Spice consumption to the next level when combining pumpkin puree, nutmeg, clove, and cinnamon spices with Baker Bear’s favorite semi-sweet chocolate chips mixed right in. (Available seasonally)",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/PumpkinSpiceCookie.jpg",
  },
  {
    title: "Apple Cinnamon Drop Cookies",
    description:
      "Diced pieces of fresh apples along with organic cinnamon and spice make this moist chewy cookie a fall favorite. (Available seasonally)      ",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/AppleCinnamonDrop.jpg",
  }
];

const Specialty = () => {
  return (
    <div class="Choco">
      <Navbar />
      <Text
        fontSize="36px"
        color="#FEFFCA"
        textAlign="center"
        margin="auto"
        fontWeight="800"
        padding="30px"
        ml="180px"
        letterSpacing="3px"
      >
        Specialty Cookies
      </Text>
      {cookies.map((cookie) => {
        return (
          <Box
            isIn
            w="80vw"
            mx="auto"
            mb="1%"
            p="20px"
            color="white"
            fontWeight="600"
            textAlign="center"
          >
            <Text marginLeft="17%" fontSize="24px">
              {cookie.title}
            </Text>
            <Stack isInline>
              <Image rounded="xl" w="30%" p="5px" src={cookie.img}></Image>
              <Text
                textAlign="center"
                fontSize="20px"
                p="15px"
                w="60%"
                paddingTop="5%"
              >
                {cookie.description}
              </Text>
            </Stack>
            <Divider h="30px" />
          </Box>
        );
      })}
    </div>
  );
};

export default Specialty;