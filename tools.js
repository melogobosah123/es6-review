//Modularity
var log = function(output) {
    console.log(output);
}
export const appName = 'ES6 Review';

export const dummyFunction = function() {
    return "I am a dummy function";
}
export const myDummyFuntion = () => "I am a brother to myDummyFunction";

export default log;


//Class
export class Person {
    constructor(firstName, lastName, height, weight) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
    }   
    toUpperCase(str) {
        return str.toUpperCase();
    } 
    getfirstName() {
        return this.toUpperCase(this.firstName);
    }
} 


//Promises

// Dummy log function
export function log_Mel(message) {
  console.log(message);
}
// User class
export class User {
  constructor(username, password, plan, firstName, gender, age) {
      this.username = username;
      this.password = password;
      this.plan = plan;
      this.firstName = firstName;
      this.gender = gender;
      this.age = age;
  }
}  
  
export function PromiseMel() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject("Timeout is over. You should not have invoked a timeout in the first place. Hence I am rejecting");

      }, 1000);  
});
}




//Async programming - async and await
export function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Waited 1 second - MELLY");
      }, 1000);
    });
  }
  

  

//other examples
const usersUrl = 'http://jsonplaceholder.typicode.com/users/';
 export const getUserById = async(userId) => {
    let url = usersUrl + userId;
  try{
    const response = await fetch(url);
    const data = await response.json();

    if(response.status >= 200 && response.status < 300){
        log(data.name);

    }else{
        throw Error(response.status);
    }

 }catch(error){
    console.log("Error: " + error);
 }

}




//Map ES6 Feature
const student = new Map();

// Set key-value
function setKey(key, value) {
  student.set(key, value);
}

// Get value by key
function getKey(key) {
  return student.get(key);
}

// Check if key exists
function hasKey(key) {
  return student.has(key);
}

// Delete a key
function deleteKey(key) {
  student.delete(key);
}

// Clear the whole map
function clearStud() {
  student.clear();
}

// Get size of map
function Size() {
  return student.size;
}

export { student, setKey, getKey, hasKey, deleteKey, clearStud, Size };