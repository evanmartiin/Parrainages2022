import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import ranking, { ranklist } from "./rank/ranking.js";
import fetchData, { data } from "./fetchData.js";
import format from "./tweet/format.js";
import majorByDep from "./maps/majorByDep.js";
import majorByCandidate from "./maps/majorByCandidate.js";
import majorByRegion from "./maps/majorByRegion.js";
import percentByGender from "./maps/percentByGender.js";
import fs from 'fs';
import path from 'path';
import byCandidates from "./data/byCandidates.js";
import byDepartments from "./data/byDepartments.js";
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const tweet = async () => {
  await fetchData();
  fs.writeFileSync(path.resolve('data/json/raw.json'), JSON.stringify(data));
  byCandidates(data);
  byDepartments(data);
  // ranking(data);
  // const tweets = format(ranklist);

  // let tweetId;

  // await twitterClient.v2.tweet(tweets[0]).then(res => tweetId = res.data.id)
  // tweets.splice(0, 1);
  
  // while (tweets[0]) {
  //     await twitterClient.v2.reply(tweets[0], tweetId).then(res => tweetId = res.data.id)
  //     tweets.splice(0, 1);
  // }

  const depRanking = majorByDep(data);
  const candRanking = majorByCandidate(data);
  const regionRanking = majorByRegion(data);
  const genderRanking = percentByGender(data);
  // fs.writeFileSync(path.resolve('gender.json'), JSON.stringify(genderRanking));
};

tweet();
