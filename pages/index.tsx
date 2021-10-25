import type { NextPage } from "next";
import Head from "next/head";
import { StackDivider, VStack } from "@chakra-ui/layout";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import { UserData } from "./api/user";
import { useState } from "react";
import Card from "../components/Card/Card";
import { useToast } from "@chakra-ui/toast";

const Home: NextPage = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const [tweets, setTweets] = useState<Array<UserData>>([]);
  const [twitterHandle, setTwitterHandle] = useState<string>("");
  const toast = useToast();

  const onSearch = async () => {
    setSearching(true);
    const res = await fetch(`/api/user?handle=${twitterHandle}`);
    const data = await res.json();
    const { data: tweets } = data;
    setTweets(tweets);
    setSearching(false);
    if (tweets && tweets.length === 0) {
      toast({
        position: "top",
        title: "User not found",
        description: "Couldn't find a user with the given handle.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const onChange = (value: string) => {
    setTwitterHandle(value);
    if (!value) {
      setTweets([]);
    }
  };

  return (
    <div>
      <Head>
        <title>Best Tweets</title>
        <meta name="description" content="Best tweets from twitter users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <VStack
        // divider={<StackDivider borderColor="gray.200" />}
        spacing={8}
        align="stretch">
        <Search
          searching={searching}
          twitterHandle={twitterHandle}
          onSearch={onSearch}
          onChange={onChange}
        />
        {tweets.map((tweet) => {
          return <Card tweet={tweet} />;
        })}
        <StackDivider borderWidth={"thin"} borderColor="gray.20" />
        <Footer />
      </VStack>
    </div>
  );
};

export default Home;
