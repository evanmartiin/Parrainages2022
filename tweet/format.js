import twitter from "twitter-text";
import size from "./size.js";

const firstEmoji = String.fromCodePoint(parseInt("1F947", 16));
const secondEmoji = String.fromCodePoint(parseInt("1F948", 16));
const thirdEmoji = String.fromCodePoint(parseInt("1F949", 16));
const podiumEmojis = [firstEmoji, secondEmoji, thirdEmoji];

const checkEmoji = String.fromCodePoint(parseInt("2705", 16));
const timerEmoji = String.fromCodePoint(parseInt("23F3", 16));
const franceEmoji = String.fromCodePoint(parseInt("1F1EB", 16)) + String.fromCodePoint(parseInt("1F1F7", 16));
const voteEmoji = String.fromCodePoint(parseInt("1F5F3", 16));

export default function format(ranklist) {
  let tweets = [], tweetLine = "", tweetLines = [`${franceEmoji}${voteEmoji} #Presidentielle2022\nPublication de nouveaux #Parrainages :\n\n`];

  ranklist.forEach((candidate) => {
    tweetLine = "";
    tweetLine += candidate.rank < 4 ? `${podiumEmojis[candidate.rank - 1]} ` : `${candidate.rank} - `;
    tweetLine += `${candidate.name}: ${candidate.votes}`;
    tweetLine += candidate.confirmed ? ` ${checkEmoji}` : ` ${timerEmoji}`

    tweetLines.push(tweetLine);
  });
  
  tweets = size(tweetLines);

  return tweets;
}
