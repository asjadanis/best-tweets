import React, { useState } from "react";
import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";

interface SearchProps {
  searching: boolean;
  twitterHandle: string;
  onSearch: () => void;
  onChange: (value: string) => void;
}

function Search(props: SearchProps) {
  const onSearch = async () => {
    props.onSearch();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <main>
      <Flex justifyContent="center" alignItems="center" margin="5">
        <Stack align="center" spacing={4}>
          <Heading size="lg">Best Tweets</Heading>
          <Text>Get the best tweets from a twitter user</Text>
          <HStack>
            <InputGroup>
              <InputLeftAddon children="@" />
              <Input
                onChange={onInputChange}
                value={props.twitterHandle}
                placeholder="Enter twitter handle"
              />
            </InputGroup>

            <Button
              onClick={onSearch}
              isLoading={props.searching}
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
