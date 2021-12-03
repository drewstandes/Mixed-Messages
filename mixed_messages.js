// Mixed messages portfolio project - Inspirational messages 

let segOne = ["You should", "You will", "You might"];
let segTwo = [" only want", " find your", " fall into"];
let segThree = [" your", " a toads", " Harry Potters"];
let segFour = [" one true", " deepest darkest", " most inspiring"];
let segFive = [" story yet.", " large belly.", " Olivers left shoe."]; 

let randomOne = Math.ceil(Math.random()*2);
let randomTwo = Math.ceil(Math.random()*2);
let randomThree = Math.ceil(Math.random()*2);
let randomFour = Math.ceil(Math.random()*2);
let randomFive = Math.ceil(Math.random()*2);

console.log(segOne[randomOne] + segTwo[randomTwo] + segThree[randomThree] + segFour[randomFour] + segFive[randomFive]);