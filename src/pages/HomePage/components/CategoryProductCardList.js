import {
  VStack,
  HStack,
  Card,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";

import homePageCommonStyle from "../homePageCommonStyle";

const ProductCard = ({
  title = "",
  inStock = 0,
  price = 0,
  imgUrl = "",
} = {}) => {
  if (!title || !inStock || !price || !imgUrl) return;

  const { firmMainColor = "#E74E36" } = homePageCommonStyle || {};
  const truncatedTitle = title && title.slice(0, 10) + "..";

  const CardFooterHeading = (
    <Heading size="xs" w={150}>
      {truncatedTitle}
    </Heading>
  );
  const CardFooterContent = (
    <Flex w={150} justifyContent="space-between">
      <Text color="#808080">{`剩下${inStock}個`}</Text>
      <Text color={firmMainColor}>{`$ ${price}`}</Text>
    </Flex>
  );

  return (
    <Card>
      <CardBody>
        <Image w={150} h={150} src={imgUrl} alt={title} />
      </CardBody>
      <Divider spacing="4"></Divider>
      <CardFooter>
        <VStack>
          {CardFooterHeading}
          {CardFooterContent}
        </VStack>
      </CardFooter>
    </Card>
  );
};

const CategoryProductCardList = ({ dataProducts = [], limit = -1 }) => {
  const ProductCardList =
    dataProducts.length &&
    dataProducts.slice(0, limit).map((dataProduct = {}) => {
      const {
        fields: {
          price = 0,
          in_stock: inStock = 0,
          title = "",
          img_url: imgUrl = "",
        } = {},
        id: dataProductId = "",
      } = dataProduct;

      return (
        <ProductCard
          key={dataProductId}
          title={title}
          inStock={inStock}
          price={price}
          imgUrl={imgUrl}
        />
      );
    });

  return <HStack spacing={10}>{ProductCardList}</HStack>;
};

export default CategoryProductCardList;
