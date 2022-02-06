export default function findMajor(arr) {
    const counts = [];

    arr.forEach(el => {
        let candidate = counts.find(e => e.name === el);
        
        if (!candidate) {
            counts.push({ name: el, votes: 0 })
            candidate = counts.find(e => e.name === el);
        }

        candidate.votes++;
    });

    counts.sort((a, b) => b.votes - a.votes)
    
    const major = { name: [counts[0].name], votes: counts[0].votes };

    while (counts[1] && counts[0].votes === counts[1].votes) {
        major.name.push(counts[1].name);
        counts.splice(0, 1);
    }

    return major;
}