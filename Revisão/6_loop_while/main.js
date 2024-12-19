function random(min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 30;
let rand = random(min, max)


while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)

}
console.log('#############################################');
do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 20);