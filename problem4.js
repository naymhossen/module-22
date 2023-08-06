/* bestFriend */

function bestFriend (friends) {
    let bigname = "";
    for (let i = 0; i < friends.length; i++){
        const element = friends[i];
        if(element.length > bigname.length){
            bigname = element;
        }
    }
    return bigname;
}
const friendsName = ["sakib", "riad", "Musfikur Rahim", "miraz", "naym"];
const longNameFriend =bestFriend(friendsName);
console.log("my best friend", longNameFriend);

  