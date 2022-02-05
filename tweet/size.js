import twitter from "twitter-text";

export default function size(lines) {
    let tweets = [[]], totalLength = 0, joinedTweets = [];

    lines.forEach(line => {
        const length = twitter.parseTweet(line).weightedLength;

        if (totalLength + length <= 260) {
            tweets[tweets.length - 1].push(line);
            totalLength += length;
        } else {
            tweets.push([line])
            totalLength = 0;
        }
    });

    tweets.forEach(el => {
      let tweet = el.join("\n");
      joinedTweets.push(tweet)
    })

    return joinedTweets;
}