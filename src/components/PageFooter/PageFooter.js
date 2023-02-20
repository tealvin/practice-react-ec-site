import { Flex, HStack, Text, Link } from "@chakra-ui/react";

import commonStyle from "../../commonStyle";
import HomePageLogo from "../../pages/HomePage/components/HomePageLogo";

const footerTextColor = "#FFF";

const FooterLogoBox = () => (
  <HStack spacing={5}>
    <HomePageLogo size={1.2} link={false} />
    <Text as="b" color={footerTextColor}>
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
          <Text color={footerTextColor}> • </Text>
        ) : (
          ""
        );

      return (
        <HStack key={content}>
          <Link isExternal href={href}>
            <Text color={footerTextColor}>{content}</Text>
          </Link>
          {separateSign}
        </HStack>
      );
    }
  );

  return <HStack>{linkList}</HStack>;
};

const PageFooter = () => {
  const { pagePx = "", firmMainColor = "#E74E36" } = commonStyle || {};

  return (
    <footer>
      <Flex
        bg={firmMainColor}
        px={pagePx}
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

export default PageFooter;
