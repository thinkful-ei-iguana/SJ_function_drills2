'use strict';

function jediName(firstName,lastName){
  let first = firstName.split('').slice(0,2).join('');
  let last = lastName.split('').slice(0,3).join('');

  return `${last}${first}`;
}
// return KnoBe
console.log(jediName('Beyonce','Knowles'));

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
    console.log('Staying home')
  }
}