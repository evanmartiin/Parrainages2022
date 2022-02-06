import findMajor from "./findMajor.js";

export default function majorByCandidate(data) {
  let candidates = [];

  data.forEach((vote) => {
    let candidate = candidates.find((el) => el.name === vote[6]);

    if (!candidate) {
      candidates.push({ name: vote[6], votes: [] });
      candidate = candidates.find((el) => el.name === vote[6]);
    }

    candidate.votes.push(vote[5]);
  });

  candidates.forEach(candidate => candidate.major = findMajor(candidate.votes));
  return candidates;
}