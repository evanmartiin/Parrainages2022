export default function validation(data, ranklist) {
  const candidates = [];

  ranklist.forEach((candidate) => {
    candidates.push({ nom: candidate.nom, departments: [] });
  });

  data.forEach((vote) => {
      let departments = candidates.find((el) => el.nom === vote[6]).departments;

      if (!departments.includes(vote[5])) {
        departments.push(vote[5])
      }
  });

  ranklist.forEach((candidate) => {
    candidate.valide = candidate.votes_confirmes >= 500 && candidates.find((el) => el.nom === candidate.nom).departments.length >= 30;
  });

  return ranklist
}
