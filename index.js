const readline = require('readline-sync');

const username = readline.question("What is your name ? \n");

console.log(`\nHey ${username}! Let's play 'Do you know me?'\n`);

const solutions = {
  birthPlace: 'roorkee',
  school: 'ryan',
  favSeason: 'rainy',
  firstWorkCompany: 'startup talky',
  favAnime: 'Naruto'
}

let score = 0;

function printResult(correct){
if(correct){
  score++;
  console.log("Correct!!!");
  console.log(`Your score - ${score}/5`);
  console.log("\n")
}else {
  console.log("That's wrong :(");
  console.log(`Your score - ${score}/5`);
  console.log("\n")
}
}

const birthPlace = readline.question('What is my birthPlace ? \n');

if(birthPlace.toLowerCase() === solutions['birthPlace']){
printResult(true);
}else {
  printResult(false);
}

const school = readline.question('What was the name of the school i went to? \n');

if(school.toLowerCase() === solutions['school']){
printResult(true);
}else {
  printResult(false);
}

const favSeason = readline.question('What is my favourite season? \n');

if(favSeason.toLowerCase() === solutions['favSeason']){
printResult(true);
}else {
  printResult(false);
}

const firstWorkCompany = readline.question('Name the first company i worked at: \n');

if(firstWorkCompany.toLowerCase() === solutions['firstWorkCompany']){
printResult(true);
}else {
  printResult(false);
}

const favAnime = readline.question('What is my favourite anime? \n');

if(favAnime.toLowerCase() === solutions['favAnime']){
printResult(true);
}else {
  printResult(false);
}

console.log(`Your final score is : ${score} / 5`);
