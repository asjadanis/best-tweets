import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { MdOutlineLocationOn } from "react-icons/md";

import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";
import { UserData } from "../../pages/api/user";

interface CardProps {
  tweet: UserData;
}

function Card(props: CardProps) {
  const { tweet } = props;
  return (
    <Flex justifyContent="center" alignItems="center" margin="5">
      <Stack align="center" spacing={4}>
        <Box
          p="4"
          bgColor="transparent"
          border="1px"
          borderColor="gray.200"
          borderRadius="5px">
          <Flex width="md">
            <Image
              boxSize="40px"
              objectFit="cover"
              src={tweet.avatar}
              alt="Segun Adebayo"
              marginRight="2"
              borderRadius="50px"
            />
            <Flex direction="column">
              <Text>{tweet.name}</Text>
              <Link
                color="gray"
                href={`https://twitter.com/${tweet.handle}`}
                target="_blank"
                marginBottom="2">
                {`@${tweet.handle}`}
              </Link>
              <Text>{tweet.tweet}</Text>
              <StackDivider
                marginTop="3"
                marginBottom="3"
                borderWidth={"thin"}
                borderColor="gray.20"
              />
              {/* <Flex> */}
              <Stack direction="row" justifyContent="space-between">
                {tweet.location && (
                  <Stack direction="row" alignItems="center">
                    <Icon height="1.2em" as={MdOutlineLocationOn} />
                    <Text>{tweet.location}</Text>
                  </Stack>
                )}
                {tweet.link && (
                  <Link
                    color="twitter.300"
                    href={`https://twitter.com/${tweet.handle}`}
                    target="_blank"
                    marginBottom="2">
                    {tweet.link}
                  </Link>
                )}
              </Stack>
              {/* </Flex> */}
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Card;
