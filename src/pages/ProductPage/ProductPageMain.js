import { HStack, VStack, Card, Image } from "@chakra-ui/react";

import commonStyle from "../../commonStyle";

import ProductForm from "./components/ProductForm";

const ProductPageMain = () => {
  const { pagePx = "", pageMainBgColor = "#F5F5F5" } = commonStyle || {};

  return (
    <main>
      <VStack px={pagePx} py={12} spacing={10} bgColor={pageMainBgColor}>
        <Card h={440} w="100%">
          <HStack spacing={5} px={5} py={5}>
            <Image w={400} h={400} alt={"test"} bgColor="black" />
            <ProductForm />
          </HStack>
        </Card>
      </VStack>
    </main>
  );
};

export default ProductPageMain;
