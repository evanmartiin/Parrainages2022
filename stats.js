const exceptions = [
    ["Député", "Député.e"],
    ["Députée", "Député.e"],
    ["Sénateur", "Sénateur/Sénatrice"],
    ["Sénatrice", "Sénateur/Sénatrice"],
    ["Conseiller départemental", "Conseiller.e départemental.e"],
    ["Conseillère départementale", "Conseiller.e départemental.e"],
    ["Conseiller régional", "Conseiller.e régional.e"],
    ["Conseillère régionale", "Conseiller.e régional.e"],
    ["Président d'un EPCI à fiscalité propre", "Président.e d'un EPCI à fiscalité propre"],
    ["Présidente d'un EPCI à fiscalité propre", "Président.e d'un EPCI à fiscalité propre"],
    ["Conseiller métropolitain de Lyon", "Conseiller.e métropolitain.e de Lyon"],
    ["Conseillère métropolitaine de Lyon", "Conseiller.e métropolitain.e de Lyon"],
    ["Représentant français au Parlement européen", "Représentant.e français.e au Parlement européen"],
    ["Représentante française au Parlement européen", "Représentant.e français.e au Parlement européen"],
    ["Conseiller de Paris", "Conseiller.e de Paris"],
    ["Conseillère de Paris", "Conseiller.e de Paris"],
    ["Maire délégué d'une commune associée ou d'une commune déléguée", "Maire délégué.e d'une commune associée ou d'une commune déléguée"],
    ["Maire déléguée d'une commune associée ou d'une commune déléguée", "Maire délégué.e d'une commune associée ou d'une commune déléguée"],
]

export default function stats(data) {
    let arr = [], total = 0;
    
    data.forEach(el => {
        exceptions.forEach(exception => {
            if (el === exception[0]) el = exception[1]
        })

        let find = arr.find(ele => ele.key === el)
        
        if (!find) {
            arr.push({ key: el, value: 0})
            find = arr.find(ele => ele.key === el)
        }

        find.value++;
        total++;
    });

    arr.sort((a, b) => b.value - a.value);


    let lastRang = 0;
  arr.forEach((key, index) => {
    if (arr[index - 1] && arr[index - 1].value === key.value) {
      key.rang = lastRang;
    } else {
      key.rang = index + 1;
      lastRang = index + 1;
    }
  });

    return { total, valeurs: arr };
}