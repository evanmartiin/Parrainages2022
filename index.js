import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import ranking, { ranklist, tweetBody } from "./rank/ranking.js";
import fetchData, { data } from "./fetchData.js";
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const tweet = async () => {
    await fetchData();
    ranking(data);
    console.log(ranklist, tweetBody);
  // twitterClient.v2.tweet({ "text": "Hello world" });
};

tweet();
