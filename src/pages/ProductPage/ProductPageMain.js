import { VStack } from "@chakra-ui/react";

import commonStyle from "../../commonStyle";

const ProductPageMain = () => {
  const { pageMainBgColor = "#F5F5F5" } = commonStyle || {};

  return (
    <main>
      <VStack py="12" spacing="10" bgColor={pageMainBgColor}>
        <div>ProductPageMain</div>
      </VStack>
    </main>
  );
};

export default ProductPageMain;
