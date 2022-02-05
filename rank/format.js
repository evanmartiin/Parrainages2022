const firstEmoji = String.fromCodePoint(parseInt("1F947", 16));
const secondEmoji = String.fromCodePoint(parseInt("1F948", 16));
const thirdEmoji = String.fromCodePoint(parseInt("1F949", 16));
const podiumEmojis = [firstEmoji, secondEmoji, thirdEmoji];
const checkEmoji = String.fromCodePoint(parseInt("2705", 16));
const timerEmoji = String.fromCodePoint(parseInt("23F3", 16));

export default function format(ranklist) {
  let tweetBody = "";

  ranklist.forEach((candidate) => {
    if (candidate.rank < 4) {
      tweetBody += `${podiumEmojis[candidate.rank - 1]} `;
    }
    tweetBody += `${candidate.name}: ${candidate.votes}`;
    tweetBody += candidate.confirmed ? ` ${checkEmoji}\n` : ` ${timerEmoji}\n`
  });

  return tweetBody;
}
