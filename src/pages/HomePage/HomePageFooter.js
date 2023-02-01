import { Flex, HStack, Text, Link } from "@chakra-ui/react";

import homePageCommonStyle from "./homePageCommonStyle";
import HomePageLogo from "./components/HomePageLogo";

const homePageFooterTextColor = "#FFF";

const FooterLogoBox = () => (
  <HStack spacing={5}>
    <HomePageLogo size={1.2} link={false} />
    <Text as="b" color={homePageFooterTextColor}>
      © 2023 皮皮購物
    </Text>
  </HStack>
);

const FooterLinkList = () => {
  const linkData = [
    {
      show: true,
      href: "https://support.carousell.com/hc/zh-tw?country=Taiwan&email=alvinyen219%40gmail.com&origin=web&platform=web&user_id=39439597&username=alvinyen2147780",
      content: "幫助中心",
      isExternal: true,
    },
    {
      show: false, // *
      href: "https://support.carousell.com/hc/zh-tw?country=Taiwan&email=alvinyen219%40gmail.com&origin=web&platform=web&user_id=39439597&username=alvinyen2147780",
      content: "媒體",
      isExternal: true,
    },
    {
      show: true,
      href: "https://support.carousell.com/hc/zh-tw?country=Taiwan&email=alvinyen219%40gmail.com&origin=web&platform=web&user_id=39439597&username=alvinyen2147780",
      content: "公司職缺",
      isExternal: true,
    },
    {
      show: true,
      href: "https://support.carousell.com/hc/zh-tw?country=Taiwan&email=alvinyen219%40gmail.com&origin=web&platform=web&user_id=39439597&username=alvinyen2147780",
      content: "使用條款",
      isExternal: true,
    },
  ];

  const linkList = linkData.map(
    ({ content = "", show = true, href = "/" }, index) => {
      if (!show) return null;

      const separateSign =
        index !== linkData.length - 1 ? (
          <Text color={homePageFooterTextColor}> • </Text>
        ) : (
          ""
        );

      return (
        <HStack key={content}>
          <Link isExternal href={href}>
            <Text color={homePageFooterTextColor}>{content}</Text>
          </Link>
          {separateSign}
        </HStack>
      );
    }
  );

  return <HStack>{linkList}</HStack>;
};

const HomePageFooter = () => {
  const { homePagePx = "" } = homePageCommonStyle || {};

  return (
    <footer>
      <Flex
        bg="#E74E36"
        px={homePagePx}
        justifyContent="space-between"
        alignItems="center"
        h="100px"
      >
        <FooterLogoBox />
        <FooterLinkList />
      </Flex>
    </footer>
  );
};

export default HomePageFooter;
