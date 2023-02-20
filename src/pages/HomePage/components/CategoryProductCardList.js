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
  Link,
} from "@chakra-ui/react";

import homePageCommonStyle from "../homePageCommonStyle";

const ProductCard = ({
  name = "",
  inStock = 0,
  priceRange = "",
  imgUrl = "",
  productId = "",
} = {}) => {
  if (!name || !inStock || !priceRange || !imgUrl) return;

  const { firmMainColor = "#E74E36" } = homePageCommonStyle || {};
  const titleCharLimit = 15;
  const truncatedTitle = name && name.slice(0, titleCharLimit) + "..";

  const cardContentSize = 180;

  const CardFooterHeading = (
    <Heading size="xs" w={cardContentSize}>
      {truncatedTitle}
    </Heading>
  );
  const CardFooterBlock = (
    <Flex w={cardContentSize} justifyContent="space-between">
      <Text color="#808080">{`剩下${inStock}個`}</Text>
      <Text color={firmMainColor}>{priceRange}</Text>
    </Flex>
  );

  return (
    <Link href={`/products/${productId}`}>
      <Card>
        <CardBody>
          <Image
            w={cardContentSize}
            h={cardContentSize}
            src={imgUrl}
            alt={name}
          />
        </CardBody>
        <Divider spacing="4"></Divider>
        <CardFooter>
          <VStack>
            {CardFooterHeading}
            {CardFooterBlock}
          </VStack>
        </CardFooter>
      </Card>
    </Link>
  );
};

const CategoryProductCardList = ({ dataProducts = [], limit = -1 }) => {
  const ProductCardList =
    dataProducts.length &&
    dataProducts.slice(0, limit).map((dataProduct = {}) => {
      const {
        fields: {
          price_range: priceRange = "",
          in_stock: inStock = 0,
          name = "",
          img_url: imgUrl = "",
          male_clothes_id: productId = "",
        } = {},
      } = dataProduct;

      return (
        <ProductCard
          key={productId}
          productId={productId}
          name={name}
          inStock={inStock}
          priceRange={priceRange}
          imgUrl={imgUrl}
        />
      );
    });

  return <HStack spacing={10}>{ProductCardList}</HStack>;
};

export default CategoryProductCardList;
