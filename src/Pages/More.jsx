import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

let cookies = [
  {
    title: "Baked Apple Fritters",
    description:
      "The less guilty apple fritter! Baker Bear uses a special blend of spices with fresh diced apple chunks to make this hearty glazed baked version of the all-time favorite donut.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Baked+Apple+Fritters+on+Rack.jpeg",
  },
  {
    title: "Boysenberry Cheesecake",
    description:
      "Blending rich cream cheese with turbinado sugar into a hand pressed graham cracker crust is a great start, but Baker Bear then swirls in boysenberry preserves (straight from the Berry Market) to make this creamy cheesecake a family favorite.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Cheesecake+Boysenberry.jpg",
  },
  {
    title: "Butterscotch Bread Pudding",
    description:
      "Not for the faint of heart, Baker Bear’s Bread Pudding uses sourdough French loaves, our signature butterscotch chips, with brown sugar and butter to make this rich, hearty dessert a favorite whether served hot or cold.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Bread+Pudding+-+Update.jpeg",
  },
];

const More = () => {
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
        More Specialties
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

export default More;