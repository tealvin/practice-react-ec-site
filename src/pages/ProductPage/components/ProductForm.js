import { VStack, Heading, Box, Text } from "@chakra-ui/react";

import commonStyle from "../../../commonStyle";

import RadioCardSet from "./RadioCardSet";

const ProductForm = () => {
  const { firmMainColor = "#E74E36" } = commonStyle || {};
  const options = ["react", "vue", "angular"];

  return (
    <VStack
      px={2}
      py={2}
      w={720}
      h={400}
      align="left"
      spacing={10}
      bgColor="grey"
    >
      <Heading size="m">ProductHeading</Heading>
      <Box bgColor="white" px={4}>
        <Text color={firmMainColor}>ProductPrice</Text>
      </Box>
      <RadioCardSet options={options} setName="framework1" setTitle="框架1" />
      <RadioCardSet options={options} setName="framework2" setTitle="框架2" />
    </VStack>
  );
};

export default ProductForm;