import { useState, useEffect } from "react";
import {
  VStack,
  Card,
  CardBody,
  CardHeader,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

import keys from "../../secrets/keys";
import apiConfig from "../../config/apiConfig";
import { productCategoryAndLangMapping } from "../../config/mappings";
import CategoryProductCardList from "./components/CategoryProductCardList";
import commonStyle from "../../commonStyle";

const { AIRTABLE_API_KEY = "" } = keys || {};
const {
  airtable: { API_DOMAIN = "", APP_ID = "", productCategories = {} } = {},
} = apiConfig || {};

const ProductCategorySection = ({ productCategory = "" } = {}) => {
  const [isMore, setIsMore] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const PRODUCT_CATEGORY_TABLE_ID =
      (productCategories[productCategory] &&
        productCategories[productCategory]["productCategoryTableId"]) ||
      "";
    const API_URL = `${API_DOMAIN}/${APP_ID}/${PRODUCT_CATEGORY_TABLE_ID}`;
    const API_AUTHORIZATION = `Bearer ${AIRTABLE_API_KEY}`;

    if (!PRODUCT_CATEGORY_TABLE_ID) return;

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

        const dataProducts = records.map(({ fields = {}, id = "" }) => ({
          fields,
          id,
        }));
        if (dataProducts.length > 4) setIsMore(true);
        setDataProducts(dataProducts);
      });
  }, []);

  const isMoreSection = isMore && (
    <Link href="/">
      <Text color="blue">查看更多</Text>
    </Link>
  );

  const productCategoryLang =
    productCategoryAndLangMapping[productCategory] || " ";
  const productCategoryLangSection = productCategoryLang && (
    <Text>{productCategoryLang}</Text>
  );

  if (!dataProducts.length) return;

  return (
    <Card>
      <CardHeader>
        <Flex justifyContent="space-between">
          {productCategoryLangSection}
          {isMoreSection}
        </Flex>
      </CardHeader>
      <CardBody>
        <CategoryProductCardList dataProducts={dataProducts} limit={4} />
      </CardBody>
    </Card>
  );
};

const HomePageMain = () => {
  const { pageMainBgColor = "#F5F5F5" } = commonStyle || {};

  return (
    <main>
      <VStack py="12" spacing="10" bgColor={pageMainBgColor}>
        <ProductCategorySection productCategory={"male-clothes"} />
        {/* <ProductCategorySection productCategory={"female-clothes"} /> */}
      </VStack>
    </main>
  );
};

export default HomePageMain;
