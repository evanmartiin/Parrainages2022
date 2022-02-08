import fs from 'fs';
import path from 'path';
import byRegions from './byRegions.js';
import stats from './stats.js';

export default function byDepartments(data) {
    const departments = [];

    data.forEach(vote => {
        let department = departments.find(el => el.nom === vote[5]);
        
        if (!department) {
            departments.push({ nom: vote[5], total: 0, votes: [] })
            department = departments.find(el => el.nom === vote[5]);
        }

        department.votes.push(vote[6])
        department.total++;
    });

    departments.sort(alphabet);

    departments.forEach(dep => {
        dep.votes = stats(dep.votes, false)
        fs.writeFileSync(path.resolve('data/json/by-departments/', dep.nom.replace(/\s+/g, '_').replace(/'/g, '-') + '.json'), JSON.stringify(dep, null, 2));
    })

    fs.writeFileSync(path.resolve('data/json/by-departments/', 'all_departments.json'), JSON.stringify(departments, null, 2));

    byRegions(departments);
}

const alphabet = (a, b) => {
  if (a.nom < b.nom) return -1;
  else if (a.nom == b.nom) return 0;
  else return 1;
};
