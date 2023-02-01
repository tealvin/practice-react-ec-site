import { useState, useEffect } from "react";
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

import axios from "axios";
import apiConfig from "../../../config/apiConfig";
import keys from "../../../secrets/keys";
import homePageCommonStyle from "../homePageCommonStyle";

const { AIRTABLE_API_KEY = "" } = keys || {};
const { airtable: { API_DOMAIN = "", APP_ID = "" } = {} } = apiConfig || {};

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

const CategoryProductCardList = ({
  category: CATEGORY_TABLE_ID = "",
  limit = -1,
}) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const API_URL = `${API_DOMAIN}/${APP_ID}/${CATEGORY_TABLE_ID}`;
    const API_AUTHORIZATION = `Bearer ${AIRTABLE_API_KEY}`;

    axios
      .get(API_URL, {
        headers: {
          Authorization: API_AUTHORIZATION,
        },
      })
      .then((res = {}) => {
        const { status: statusCode = 0, data: { records = [] } = {} } = res;
        if (statusCode !== 200 || !records.length) {
          return;
        }
        console.log(records);
        const dataProducts = records.map(({ fields = {}, id = "" }) => ({
          fields,
          id,
        }));
        setDataProducts(dataProducts);
      });
  }, []);

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
