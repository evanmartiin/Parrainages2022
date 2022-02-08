import fs from 'fs';
import path from 'path';
import stats from './utils/stats.js';

export default function byCommunes(data) {
    const communes = [];

    data.forEach(vote => {
        if (vote[3] === "Maire") {
            communes.push({ nom: vote[4], vote: vote[6] })
        }
    });

    communes.sort(alphabet);

    fs.writeFileSync(path.resolve('data/json/by-communes/', 'all_communes.json'), JSON.stringify(communes, null, 2));
}

const alphabet = (a, b) => {
  if (a.nom < b.nom) return -1;
  else if (a.nom == b.nom) return 0;
  else return 1;
};
