import format from "../tweet/format.js";
import validation from "./validation.js";
import votes from "./votes.js";

export let ranklist = [];

export default function ranking(data) {
  votes(data, ranklist);

  ranklist.sort(alphabet);
  ranklist.sort((a, b) => b.votes - a.votes);

  ranklist.forEach((candidate, index) => {
    if (ranklist[index - 1] && ranklist[index - 1].votes === candidate.votes) {
      candidate.rank = index;
    } else {
      candidate.rank = index + 1;
    }
  });

  validation(data, ranklist);
}

const alphabet = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name == b.name) return 0;
  else return 1;
};
