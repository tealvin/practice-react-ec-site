const apiConfig = {
  airtable: {
    API_DOMAIN: "https://api.airtable.com/v0",
    APP_ID: "apphTtq6eBmYWsZDj", // baseId
    productCategories: {
      // $category-category: {
      //   productCategoryTableId: $value,
      // },
      "male-clothes": {
        productCategoryTableId: "tblLNlNUv2MsI4J8E",
      },
      "female-clothes": {
        productCategoryTableId: "tblF5l4oVEnjryUOv",
      },
    },
  },
};

export default apiConfig;
