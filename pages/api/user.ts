// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface UserData {
  name: string;
  handle: string;
  location?: string;
  avatar: string;
  tweet: string;
  link?: string;
}

interface TweetResponse {
  data: Array<UserData>;
}

const userTweets: Array<UserData> = [
  {
    name: "Asjad Anis",
    handle: "asjadanis",
    location: "Islamabad",
    avatar: "/avatar.png",
    tweet: `Today I stumbled upon the term “manageritis” happens when you eventually get sucked into a management role when you never really intended to.
          This book is a great read packed with a couple of great insights`,
    link: `https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch05.html`,
  },
  {
    name: "Asjad Anis",
    handle: "asjadanis",
    avatar: "/avatar.png",
    tweet: `Today I stumbled upon the term “manageritis” happens when you eventually get sucked into a management role when you never really intended to.
          This book is a great read packed with a couple of great insights`,
    link: `https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch05.html`,
  },
  {
    name: "Asjad Anis",
    handle: "asjadanis",
    avatar: "/avatar.png",
    tweet: `Today I stumbled upon the term “manageritis” happens when you eventually get sucked into a management role when you never really intended to.
          This book is a great read packed with a couple of great insights`,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TweetResponse>
) {
  const userHandle = req.query.handle;
  const tweets = userTweets.filter((tweet) => tweet.handle === userHandle);
  res.status(200).json({ data: tweets });
}
