//1
var vacationSpots = ['London','Quebec', 'Dublin']

console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])



//2
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  } 
  

  
//3
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }



//4
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`)
}



//5
let bobsFollowers = ['Frungulous', 'The Incomprehensible Chulk', 'Timble', 'Schlum'];
let tinasFollowers = ['Frungulous', 'Schlum', 'him.']
let mutualFollowers =[]
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++) {
  if (bobsFollowers[i] === tinasFollowers[j]){
  mutualFollowers.push(bobsFollowers[i])
  }
}
}



//6
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



//7
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);



//8
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");