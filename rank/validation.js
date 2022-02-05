export default function validation(data, ranklist) {
  const candidates = [];

  ranklist.forEach((candidate) => {
    candidates.push({ name: candidate.name, departments: [] });
  });

  data.forEach((vote) => {
      let departments = candidates.find((el) => el.name === vote[6]).departments;

      if (!departments.includes(vote[5])) {
        departments.push(vote[5])
      }
  });

  ranklist.forEach((candidate) => {
    candidate.confirmed = candidate.votes >= 500 && candidates.find((el) => el.name === candidate.name).departments.length >= 30;
  });
}
