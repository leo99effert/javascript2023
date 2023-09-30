/**
 * check for errors first
 */

let person = 'sune';
function printPerson(person) {
  if ( 
    typeof person === 'undefined' ||
    person.trim() === '' || 
    person === 'none'
  ) {
    console.log('person is not valid');
    return;
  }

  console.log('the person is: ' + person);
}
printPerson(person);
