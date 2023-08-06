let names = ['naym', 'rakib', 'sakib', 'naym', 'bipul', 'rakib', 'sakib', 'minhaz', 'sakib', 'minhaz' , 'sunny'];

function removeName (names) {
    let unique = [];
    for (let i=0; i<names.length; i++){
        let name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

let nameCheaker = removeName(names);
console.log(nameCheaker);