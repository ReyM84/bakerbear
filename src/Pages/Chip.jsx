import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

let cookies = [
  { id: "stchocochip",
    title: "Chocolate Chips Butterscotch Cookies",
    description:
      "The cookie that started it all! Combining German recipe semi-sweet chocolate chips with butterscotch chips make our signature cookie a sweet, unique delight. Crispy on the edges and soft in the middle. You’ll always have a winner with this cookie.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/ChocoButterScotchChip+-+Update.jpeg",
  }, 
  {
    title: "Chocolate Mint Chip Cookies",
    description:
      "Not just for the holidays, this combination of semi-sweet chocolate and crème de menthe pieces gives these cookies a sweet peppermint flavor that will remind you of that perfect after dinner mint.",
    img:
      "https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/MintChocoChip.jpg",
  },
  {
    title: "Chocolate Peanut Butter Chip Cookies",
    description:
      "Not your everyday Peanut Butter cookie, Baker Bear uses Reese’s peanut butter chips to blend into our semi-sweet chocolate chip cookie dough to give you the best of both worlds!",
    img:
      "https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/ChocoPBChip.jpg",
  },
  {
    title: "Sea Salted Double Chocolate Chip Cookies",
    description:
      "Adding fresh ground sea salt to a double helping of our semi-sweet chocolate chip cookie base has produced a modern take on a classic. A perfect blending of salty and sweet.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Sea+Salt+Dbl+Choc+Chip+-+Update.jpeg",
  },
  {
    title: "White Chocolate Macadamia Cookies",
    description:
      "White baker’s chocolate and large chunks of salted, roasted macadamia nuts come together for a delectable sweet and nutty treat for non-chocolate lovers and lovers alike. ",
    img:
      "https://bakerbear.s3-us-west-1.amazonaws.com/Website+Pics/WhiteChocoMacadamia.jpg",
  },
  {
    title: "Chocolate Peanut Butter Caramel Candy Cookies",
    description:
      "Affectionately called “The Monster” around Baker Bear Cookies, this one takes inspiration from our semi-sweet chocolate chip and peanut butter chip cookies and adds candy coated caramel chocolates on top.  It is sweet. It is salty. It is caramel crunchy goodness. It is a good kind of monster.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/MonsterScreenshot.png",
  },
  {
    title: "Chocolate Peanut Butter Caramel Candy Cookies",
    description:
      "Affectionately called “The Monster” around Baker Bear Cookies, this one takes inspiration from our semi-sweet chocolate chip and peanut butter chip cookies and adds candy coated caramel chocolates on top.  It is sweet. It is salty. It is caramel crunchy goodness. It is a good kind of monster.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/MonsterScreenshot.png",
  }
];

const Chip = () => {
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
        Chocolate Chip Varieties
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
            class={cookie.id}
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

export default Chip;
