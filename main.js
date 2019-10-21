'use strict';

function jediName(firstName,lastName){
  let first = firstName.split('').slice(0,2).join('');
  let last = lastName.split('').slice(0,3).join('');

  return `${last}${first}`;
}
// return KnoBe
//console.log(jediName('Beyonce','Knowles'));

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  if (num > 0 && num !== Infinity) {
    console.log('To infinity');
  }
  if (num < 0 && num !== -Infinity) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}


function decode(message){

  let words = message.split(' ');
  let finalWord = [];

  
  words.forEach(word => {
    if(word[0] === 'a'){
      finalWord.push(word[2 - 1]);
    }
    else if(word[0] === 'b'){
      finalWord.push(word[3 - 1]);
    }
    else if(word[0] === 'c'){
      finalWord.push(word[4 - 1]);
    }
    else if(word[0] === 'd'){
      finalWord.push(word[5 - 1]);
    } else {
      finalWord.push(' ');
    }
  });

  return finalWord.join('');

}
decode('craft block argon meter bells brown croon droop');

function daysInMonth(month, leapYear=false) {
  let result;
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days!`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = `${month} has 30 days!`;
    break;
  case 'February': if(leapYear){
    result = `${month} has 29 days`; 
  }
  else {
    result = `${month} has 28 days`;
  }
    break;
  default: result = 'Must provide a valid month.';
  }
  return result;
}

//console.log(daysInMonth('Giraffe'));


function letsRock(playerPick){
  //Player
  try{
    if(playerPick === 1){
      playerPick = 'rock';
    } else if (playerPick === 2){
      playerPick = 'paper';
    } else if(playerPick === 3){
      playerPick = 'scissors';
    } else {
      throw new TypeError('not a valid choice'); //console.log('not a valid choice');
    }
  
  }catch(e){
    console.error(e);
  }
  //Computer
  const randomNum = Math.floor(Math.random() * 3) + 1;
  let computerPick = randomNum;
  if(computerPick === 1){
    computerPick = 'rock';
  } else if(computerPick === 2){
    computerPick = 'paper';
  } else if( computerPick === 3){
    computerPick = 'scissors';
  }
  
  ////////CONDITONALS//////////////
  if(playerPick === computerPick){
    return 'its a tie';
  }
  
  if(playerPick === 'rock'){
    if(computerPick === 'scissors'){
      return 'Rock beats scissors';
    } else {
      return 'you lose try again';
    }
  }
  
  if(playerPick === 'paper'){
    if(computerPick === 'rock'){
      return 'Paper beats rock';
    } else {
      return 'you lose try again';
    }
  }
  
  if(playerPick === 'scissors'){
    if(computerPick === 'paper'){
      return 'Scissors beats paper';
    } else {
      return 'you lose try again';
    }
  }
  
   
}
  
console.log(letsRock(1));