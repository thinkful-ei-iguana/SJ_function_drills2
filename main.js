'use strict';

function jediName(firstName,lastName){
  let first = firstName.split('').slice(0,2).join('');
  let last = lastName.split('').slice(0,3).join('');

  return `${last}${first}`;
}
// return KnoBe
console.log(jediName('Beyonce','Knowles'));