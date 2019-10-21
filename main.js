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