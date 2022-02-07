import fs from 'fs';
import path from 'path';

export default function byCandidates(data) {
    const candidates = [];

    data.forEach(vote => {
        let candidate = candidates.find(el => el.nom === vote[6]);
        
        if (!candidate) {
            candidates.push({ nom: vote[6], parrainages: [] })
            candidate = candidates.find(el => el.nom === vote[6]);
        }
        candidate.parrainages.push({
            genre: vote[0],
            nom: vote[1] + ' ' + vote[2],
            fonction: vote[3],
            circonscription: vote[4],
            departement: vote[5],
            date: vote[7].substring(0, 10)
        })
    });

    candidates.forEach(candidate => {
        fs.writeFileSync(path.resolve('data/by-candidates/', candidate.nom.replace(/\s+/g, '_') + '.json'), JSON.stringify(candidate));
    });
    fs.writeFileSync(path.resolve('data/by-candidates/', 'all_candidates.json'), JSON.stringify(candidates));
}