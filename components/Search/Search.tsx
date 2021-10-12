import React, { useState } from "react";
import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";

function Search() {
  const [searching, setSearching] = useState(false);
  const [twitterHandle, setTwitterHandle] = useState("");

  const onSearch = () => {
    console.log(twitterHandle);
    setSearching(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitterHandle(e.target.value);
  };

  return (
    <main>
      <Flex justifyContent="center" alignItems="center" margin="5">
        <Stack align="center" spacing={4}>
          <Heading size="lg">Best Tweets</Heading>
          <Text>Get the best tweets from a twitter user</Text>
          <HStack>
            <Input
              onChange={onInputChange}
              value={twitterHandle}
              placeholder="Enter twitter handle"></Input>
            <Button
              onClick={onSearch}
              isLoading={searching}
              aria-label="Search best tweets">
              Search
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </main>
  );
}

export default Search;
