import validation from "./validation.js";
import votes from "./votes.js";

export let ranklist = [];

export default function ranking(data) {
  votes(data, ranklist);
  
  ranklist.sort(alphabet);
  ranklist.sort((a, b) => b.votes_confirmes - a.votes_confirmes);

  let lastRank = 0;
  ranklist.forEach((candidate, index) => {
    if (ranklist[index - 1] && ranklist[index - 1].votes_confirmes === candidate.votes_confirmes) {
      candidate.rang = lastRank;
    } else {
      candidate.rang = index + 1;
      lastRank = index + 1;
    }
  });
  
  return validation(data, ranklist);
}

const alphabet = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name == b.name) return 0;
  else return 1;
};
