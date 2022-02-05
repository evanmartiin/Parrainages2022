export default function votes(data, ranklist) {
  let list = [];

  data.forEach((vote) => {
    let candidate = list.find((el) => el.name === vote[6]);

    if (!candidate) {
        list.push({ name: vote[6], votes: [] });
        candidate = list.find((el) => el.name === vote[6]);
    }

    let department = candidate.votes.find((el) => el.name === vote[5]);

    if (!department) {
        candidate.votes.push({ name: vote[5], votes: 0 });
        department = candidate.votes.find((el) => el.name === vote[5]);
    }
    
    if (department.votes < 50) {
        department.votes++;
    }
  });

  list.forEach(candidate => {
      let total = 0;

      candidate.votes.forEach(department => {
          total += department.votes
      });

      ranklist.push({ name: candidate.name, votes: total });
  })
}
