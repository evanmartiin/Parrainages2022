import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const firstEmoji = String.fromCodePoint(parseInt("1F947", 16));
const secondEmoji = String.fromCodePoint(parseInt("1F948", 16));
const thirdEmoji = String.fromCodePoint(parseInt("1F949", 16));
const podiumEmojis = [firstEmoji, secondEmoji, thirdEmoji];

const tweet = () => {
  fetch(
    "https://presidentielle2022.conseil-constitutionnel.fr/telechargement/parrainagestotal.txt"
  )
    .then((response) => response.text())
    .then((res) => {
      const data = JSON.parse(res).data;

      const ranking = [];

      data.forEach((vote) => {
        const single = ranking.find((el) => el.name === vote[6]);

        if (single) {
          single.votes++;
        } else {
          ranking.push({ name: vote[6], votes: 1 });
        }
      });

      ranking.sort(tri);
      ranking.sort((a, b) => b.votes - a.votes);

      let tweetBody = "";

      ranking.forEach((candidate, index) => {
        if (
          ranking[index - 1] &&
          ranking[index - 1].votes === candidate.votes
        ) {
          candidate.rank = index;
        } else {
          candidate.rank = index + 1;
        }

        if (candidate.rank < 4) {
            tweetBody += `${podiumEmojis[candidate.rank - 1]} `
        }
        tweetBody += `${candidate.name}: ${candidate.votes} \n`
      });

      console.log(ranking, tweetBody);
    });
  // twitterClient.v2.tweet({ "text": "Hello world" });
};

const tri = (a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
}


tweet();
