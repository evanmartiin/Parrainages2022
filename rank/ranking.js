import format from "./format.js";

export let ranklist = [], tweetBody = "";

export default function ranking(data) {
  data.forEach((vote) => {
    const single = ranklist.find((el) => el.name === vote[6]);

    if (single) {
      single.votes++;
    } else {
      ranklist.push({ name: vote[6], votes: 1 });
    }
  });

  ranklist.sort(alphabet);
  ranklist.sort((a, b) => b.votes - a.votes);

  ranklist.forEach((candidate, index) => {
    if (ranklist[index - 1] && ranklist[index - 1].votes === candidate.votes) {
      candidate.rank = index;
    } else {
      candidate.rank = index + 1;
    }
  });

  tweetBody = format(ranklist);
}

const alphabet = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name == b.name) return 0;
  else return 1;
};
