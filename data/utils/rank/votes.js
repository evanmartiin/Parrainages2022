export default function votes(data, ranklist) {
  let list = [];

  data.forEach((vote) => {
    let candidate = list.find((el) => el.nom === vote[6]);

    if (!candidate) {
        list.push({ nom: vote[6], votes_confirmes: [], votes_totaux: 0 });
        candidate = list.find((el) => el.nom === vote[6]);
    }
    candidate.votes_totaux++;

    let department = candidate.votes_confirmes.find((el) => el.nom === vote[5]);

    if (!department) {
        candidate.votes_confirmes.push({ nom: vote[5], votes: 0 });
        department = candidate.votes_confirmes.find((el) => el.nom === vote[5]);
    }
    
    if (department.votes < 50) {
        department.votes++;
    }
  });

  list.forEach(candidate => {
      let total = 0;

      candidate.votes_confirmes.forEach(department => {
          total += department.votes
      });

      ranklist.push({ nom: candidate.nom, votes_confirmes: total, votes_totaux: candidate.votes_totaux });
  })
}
