import type { NextPage } from "next";
import Head from "next/head";
import { StackDivider, VStack } from "@chakra-ui/layout";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Best Tweets</title>
        <meta name="description" content="Best tweets from twitter users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={8}
        align="stretch">
        <Search />
        <Footer />
      </VStack>
    </div>
  );
};

export default Home;
