import twitter from "twitter-text";

export default function size(lines) {
    let tweets = [[]], totalLength = 0;
    console.log(lines);

    lines.forEach(line => {
        const length = twitter.parseTweet(line).weightedLength;

        if (totalLength + length <= 260) {
            tweets[tweets.length - 1].push(line);
            totalLength += length;
        } else {
            tweets.push([line])
            totalLength = 0;
        }
        console.log(totalLength);
    });

    return tweets;
}