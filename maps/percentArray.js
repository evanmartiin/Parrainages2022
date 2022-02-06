export default function percentArray(arr) {
    const counts = [];
    let totalVotes = 0;

    arr.forEach(el => {
        let value = counts.find(e => e.name === el);
        
        if (!value) {
            counts.push({ name: el, votes: 0 })
            value = counts.find(e => e.name === el);
        }

        value.votes++;
        totalVotes++;
    });
    
    counts.sort((a, b) => b.votes - a.votes)

    const percents = [];
    if (counts[1]) {
        let percent = Math.round((counts[0].votes/(counts[0].votes + counts[1].votes)) * 100);
        percents.push({ name: counts[0].name, percent }, { name: counts[1].name, percent: 100 - percent });
    } else {
        percents.push({ name: counts[0].name, percent: 100 });
    }

    return percents;
}