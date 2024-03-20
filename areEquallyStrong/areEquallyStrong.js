// if the arms individually are equally strongest

function areEquallyStrong(myLeft, myRight, hisLeft, hisRight) {
    return myLeft+ myRight-hisLeft-hisRight === 0? true: false;
}
console.log(areEquallyStrong(10,15, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,9)) // false
console.log(areEquallyStrong(15,10, 15,12)) // false
console.log(areEquallyStrong(15,40, 50,5)) // false

// if the sum matters (i.e. if you are equally strong with your friend)
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest
}

console.log(areEquallyStrong(4,5,4,5))
