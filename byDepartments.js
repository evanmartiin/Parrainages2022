import fs from 'fs';
import path from 'path';
import ranking from './rank/ranking.js';
import stats from './stats.js';

export default function byDepartments(data) {
    // const voteStats = ranking(data)
    // console.log(voteStats);

    // const departments = [];

    // data.forEach(vote => {
    //     let department = departments.find(el => el.nom === vote[5]);
    //     let infos = voteStats.find(el => el.nom === vote[5])
    //     const { votes_confirmes, votes_totaux, rang, valide } = infos;
        
    //     if (!department) {
    //         departments.push({ nom: vote[5], votes_confirmes, votes_totaux, rang, valide, parrainages: [], stats: {
    //             genre: [],
    //             fonction: [],
    //             circonscription: [],
    //             departement: [],
    //             date: []
    //         }})
    //         department = departments.find(el => el.nom === vote[5]);
    //     }
    //     department.parrainages.push({
    //         genre: vote[0],
    //         nom: vote[1] + ' ' + vote[2],
    //         fonction: vote[3],
    //         circonscription: vote[4],
    //         departement: vote[5],
    //         date: vote[7].substring(0, 10)
    //     })

    //     department.stats.genre.push(vote[0]);
    //     department.stats.fonction.push(vote[3]);
    //     if (vote[4]) department.stats.circonscription.push(vote[4]);
    //     department.stats.departement.push(vote[5]);
    //     department.stats.date.push(vote[7].substring(0, 10));
    // });

    // departments.sort((a, b) => a.rang - b.rang);

    // departments.forEach(department => {
    //     department.stats.genre = stats(department.stats.genre);
    //     department.stats.fonction = stats(department.stats.fonction);
    //     department.stats.circonscription = stats(department.stats.circonscription);
    //     department.stats.departement = stats(department.stats.departement);
    //     department.stats.date = stats(department.stats.date);
    //     fs.writeFileSync(path.resolve('data/by-departments/', department.nom.replace(/\s+/g, '_') + '.json'), JSON.stringify(department));
    // });
    // fs.writeFileSync(path.resolve('data/by-departments/', 'all_departments.json'), JSON.stringify(departments));
}