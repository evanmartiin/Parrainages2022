const firstEmoji = String.fromCodePoint(parseInt("1F947", 16));
const secondEmoji = String.fromCodePoint(parseInt("1F948", 16));
const thirdEmoji = String.fromCodePoint(parseInt("1F949", 16));
const podiumEmojis = [firstEmoji, secondEmoji, thirdEmoji];

export default function format(ranklist) {
  let tweetBody = "";

  ranklist.forEach((candidate) => {
    if (candidate.rank < 4) {
      tweetBody += `${podiumEmojis[candidate.rank - 1]} `;
    }
    tweetBody += `${candidate.name}: ${candidate.votes} \n`;
  });

  return tweetBody;
}
