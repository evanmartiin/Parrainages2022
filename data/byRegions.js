import fs from 'fs';
import path from 'path';
import { rawRegions } from './utils/regions.js';
import stats from './utils/stats.js';

export default function byRegions(data) {
    const regions = [];

    data.forEach(dep => {
        let linkedRegion = rawRegions.find(el => el.dep_name === dep.nom)
        let linkedRegionName = linkedRegion ? linkedRegion.region_name : dep.nom;
        let region = regions.find(el => el.nom === linkedRegionName);
        
        if (!region) {
            regions.push({ nom: linkedRegionName, total: 0, votes: [] })
            region = regions.find(el => el.nom === linkedRegionName);
        }

        dep.votes.forEach(vote => {
            for (let i = 0; i < vote.value; i++) {
                region.votes.push(vote.key)
            }
            region.total += vote.value;
        })
    });

    regions.sort(alphabet);

    regions.forEach(dep => {
        dep.votes = stats(dep.votes, false)
        fs.writeFileSync(path.resolve('data/json/by-regions/', dep.nom.replace(/\s+/g, '_').replace(/'/g, '-') + '.json'), JSON.stringify(dep, null, 2));
    })

    fs.writeFileSync(path.resolve('data/json/by-regions/', 'all_regions.json'), JSON.stringify(regions, null, 2));
}

const alphabet = (a, b) => {
  if (a.nom < b.nom) return -1;
  else if (a.nom == b.nom) return 0;
  else return 1;
};
