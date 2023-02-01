import { VStack } from "@chakra-ui/react";

import apiConfig from "../../config/apiConfig";
import CategoryProductCardList from "./components/CategoryProductCardList";

const { airtable: { productCategories: { MALE_CLOTHES = "" } = {} } = {} } =
  apiConfig || {};

const HomePageMain = () => {
  return (
    <main>
      <VStack py="10" spacing="10">
        <CategoryProductCardList
          category={MALE_CLOTHES}
          limit={4}
        ></CategoryProductCardList>
        <CategoryProductCardList></CategoryProductCardList>
      </VStack>
    </main>
  );
};

export default HomePageMain;
