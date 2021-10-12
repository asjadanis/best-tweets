import { Flex, Text, Link } from "@chakra-ui/layout";

function Footer() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text>
        Created by{" "}
        <Link
          color="twitter.500"
          target="_blank"
          href="https://twitter.com/asjadanis">
          @asjadanis
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
