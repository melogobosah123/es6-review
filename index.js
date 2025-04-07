import logger, { appName, dummyFunction } from './tools.js';
import myDummyFunction from './tools.js';
import { Person } from './tools.js';

let person1 = new Person("Afam", "Okonkwo", 1.7, 23);
let person2 = new Person("Victor", "Ikpati", 1.2, 13);

logger("Person1 is " + person1.firstName + 
       ", whose height is " + person1.height + ".");
logger("Person2 is " + person2.firstName + 
       ", whose height is " + person2.height + ".");


import { log_Mel, User, PromiseMel } from './tools.js';

//Promise
PromiseMel()
   .then((data) => {
         log_Mel("Timeout message: " + data);
           })
   .catch((error) => {
         log_Mel("Error message received: " + error);
           });
       
let user1 = new User("myusername", "mypassword", "Plus", "Onobhayedo", "Male", undefined);
log_Mel("The username of " + user1.firstName + " is " + user1.username + ".");


//Async/ await
import { waitOneSecond } from './tools.js';

async function doSomething() {
    let result = await waitOneSecond();
    console.log(result);
}

doSomething();

//other examples
import { getUserById } from './tools.js';

getUserById(2);

import { student, setKey, getKey, hasKey, deleteKey, clearStud, Size } from './tools.js';


// Using the Map features
setKey('name', 'Paula');
setKey('age', 21);
setKey('grades', [90, 84, 85]);

console.log("Name:", getKey('name'));          
console.log("Has age?", hasKey('age'));    
console.log("Size:", Size());              

deleteKey('age');
console.log("Has age?", hasKey('age'));      

clearStud();
console.log("Size after clear:", Size()); 



