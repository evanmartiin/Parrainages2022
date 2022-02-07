import fs from 'fs';
import path from 'path';
import ranking from './rank/ranking.js';
import stats from './stats.js';

export default function byCandidates(data) {
    const voteStats = ranking(data)

    const candidates = [];

    data.forEach(vote => {
        let candidate = candidates.find(el => el.nom === vote[6]);
        let infos = voteStats.find(el => el.nom === vote[6])
        const { votes_confirmes, votes_totaux, rang, valide } = infos;
        
        if (!candidate) {
            candidates.push({ nom: vote[6], votes_confirmes, votes_totaux, rang, valide, parrainages: [], stats: {
                genre: [],
                fonction: [],
                circonscription: [],
                departement: [],
                date: []
            }})
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

        candidate.stats.genre.push(vote[0]);
        candidate.stats.fonction.push(vote[3]);
        if (vote[4]) candidate.stats.circonscription.push(vote[4]);
        candidate.stats.departement.push(vote[5]);
        candidate.stats.date.push(vote[7].substring(0, 10));
    });

    candidates.sort((a, b) => a.rang - b.rang);

    candidates.forEach(candidate => {
        candidate.stats.genre = stats(candidate.stats.genre);
        candidate.stats.fonction = stats(candidate.stats.fonction);
        candidate.stats.circonscription = stats(candidate.stats.circonscription);
        candidate.stats.departement = stats(candidate.stats.departement);
        candidate.stats.date = stats(candidate.stats.date);
        fs.writeFileSync(path.resolve('data/by-candidates/', candidate.nom.replace(/\s+/g, '_') + '.json'), JSON.stringify(candidate, null, 2));
    });
    fs.writeFileSync(path.resolve('data/by-candidates/', 'all_candidates.json'), JSON.stringify(candidates, null, 2));
}