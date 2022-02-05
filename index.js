import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import ranking, { ranklist } from "./rank/ranking.js";
import fetchData, { data } from "./fetchData.js";
import format from "./tweet/format.js";
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
    const tweets = format(ranklist);
    console.log(tweets);
    tweets.forEach(tw => twitterClient.v2.tweet({ "text": tw }))
};

tweet();
