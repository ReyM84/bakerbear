import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

let cookies = [
  {
    title: "Banana Vanilla Bean Bread",
    description:
      "Not your average banana bread, the Baker Bear version uses 3 full cups of ripe banana per loaf along with a combination of pure vanilla bean extract for a sweet treat fresh from the oven.  (Also available with pecans).",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Banana+Vanilla+Bean+Bread.jpg",
  },
  {
    title: "Banana Chocolate Chip Bread",
    description:
      "Taking our Banana Vanilla Bean Bread up a notch with the addition of Baker Bear’s German recipe semi-sweet chocolate chips into the bread dough and baked on top for good measure.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Banana+Choco+Chip+Bread.jpg",
  },
  {
    title: "Pumpkin Spice Bread",
    description:
      "Signature bread of the Fall season, Baker Bear combines pure pumpkin puree, nutmeg, clove, and organic cinnamon spices to give this bread all the pumpkin spice goodness you crave with semi-sweet chocolate chips mixed in to make it even better. (Available seasonally)",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/PumpinSpiceBread.jpg",
  },
  {
    title: "Stout Ale Bread",
    description:
      "A hearty, savory bread that is perfect for serving with your homemade soups and stews, or just as a snack, this Baker Bear Ale Bread uses a full bottle of Guinness Stout Ale per loaf to give it a tangy taste with a salty crunchy crust when toasted.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Stout+Ale+Bread+Cutting+Board.jpg",
  },
  {
    title: "Vanilla Cream Ale Bread",
    description:
      "Lightly sweet, yet hearty consistency makes this Baker Bear Ale Bread a great snack choice. Using a full bottle of Vanilla Cream Ale per loaf, this bread is perfect toasted or straight off the oven rack.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Vanilla+Cream+Ale+Bread.jpg",
  },
  {
    title: "Hazelnut Brown Ale Bread",
    description:
      "Rich hazelnut aroma is a signature of this Baker Bear Ale Bread using a full bottle of Hazelnut Brown Nectar Ale per loaf, the hearty bread has a nutty, malted flavor that is a perfect complement to your chili or stew or as a midnight snack.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Hazelnut%2BAle%2BBread.jpeg",
  },
  {
    title: "Hazelnut Brown Ale Bread",
    description:
      "Rich hazelnut aroma is a signature of this Baker Bear Ale Bread using a full bottle of Hazelnut Brown Nectar Ale per loaf, the hearty bread has a nutty, malted flavor that is a perfect complement to your chili or stew or as a midnight snack.",
    img:
      "https://bakerbear.s3.us-west-1.amazonaws.com/Website+Pics/Hazelnut%2BAle%2BBread.jpeg",
  }
];

const Bread = () => {
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
        Breads
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

export default Bread;