import percentArray from "./percentArray.js";

export default function percentByGender(data) {
  let candidates = [];

  data.forEach((vote) => {
    let candidate = candidates.find((el) => el.name === vote[6]);

    if (!candidate) {
      candidates.push({ name: vote[6], votes: [] });
      candidate = candidates.find((el) => el.name === vote[6]);
    }

    candidate.votes.push(vote[0]);
  });

  candidates.forEach(candidate => {
    candidate.percent = percentArray(candidate.votes);
    delete candidate.votes;
  });

  return candidates;
}