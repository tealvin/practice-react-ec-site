import { Box } from "@chakra-ui/react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import ProductPageMain from "./ProductPageMain";

const ProductPage = () => {
  return (
    <Box>
      <PageHeader />
      <ProductPageMain />
      <PageFooter />
    </Box>
  );
};

export default ProductPage;
