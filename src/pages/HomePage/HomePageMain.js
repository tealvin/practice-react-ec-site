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
import { categoryLangMapping } from "../../config/mappings";
import CategoryProductCardList from "./components/CategoryProductCardList";

const { AIRTABLE_API_KEY = "" } = keys || {};
const {
  airtable: { API_DOMAIN = "", APP_ID = "", productCategories = {} } = {},
} = apiConfig || {};

const CategoryProductSection = ({ category = "" } = {}) => {
  const [isMore, setIsMore] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const CATEGORY_TABLE_ID = productCategories[category] || "";
    const API_URL = `${API_DOMAIN}/${APP_ID}/${CATEGORY_TABLE_ID}`;
    const API_AUTHORIZATION = `Bearer ${AIRTABLE_API_KEY}`;

    if (!CATEGORY_TABLE_ID) return;

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

  const categoryLang = categoryLangMapping[category] || " ";
  const categoryLangSection = categoryLang && <Text>{categoryLang}</Text>;

  if (!dataProducts.length) return;

  return (
    <Card>
      <CardHeader>
        <Flex justifyContent="space-between">
          {categoryLangSection}
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
  return (
    <main>
      <VStack py="10" spacing="10">
        <CategoryProductSection category={"MALE_CLOTHES"} />
        {/* <CategoryProductSection category={"FEMALE_CLOTHES"} /> */}
      </VStack>
    </main>
  );
};

export default HomePageMain;
