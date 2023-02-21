import { VStack, Heading, Box, Text } from "@chakra-ui/react";

import commonStyle from "../../../commonStyle";

const ProductForm = () => {
  const { firmMainColor = "#E74E36" } = commonStyle || {};

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
    </VStack>
  );
};

export default ProductForm;
