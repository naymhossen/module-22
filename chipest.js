let phones = [
    { name: 'iphone', camera: 48, storage: '556gb', price: 100000, color: 'silver'},
    { name: 'samsung', camera: 38, storage: '456gb', price: 600000, color: 'black'},
    { name: 'vivo', camera: 28, storage: '356gb', price: 50000, color: 'golden'},
    { name: 'xomi', camera: 18, storage: '256gb', price: 30000, color: 'white'},
    { name: 'realmi', camera: 18, storage: '256gb', price: 20000, color: 'white'},
    { name: 'nazro', camera: 18, storage: '256gb', price: 10000, color: 'white'},
    { name: 'oppo', camera: 18, storage: '256gb', price: 22000, color: 'white'},
];


function chipestPhone (phones){
    let chipest = phones[0];
    for(let i=0; i<phones.length; i++){
        let phone =phones[i];
        if(phone.price < chipest.price){
            chipest=phone
        }
    }
    return chipest;
}

let mySelection = chipestPhone(phones)
console.log(mySelection);