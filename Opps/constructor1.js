//Constructor function for creating the object
function User(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
    this.getDetails=function(){
        console.log(`my name is ${this.name}`)
    }
    //this refers the newly created object
    return this
    //in case of cosntructor function by default it returns the this(curent object)
}
//overwriting  the value
// const user1=User("hariom",23,34)
// console.log(user1.getDetails())
// const user2=User("sujit",23,43);
// console.log(user1.getDetails())


//Creating instances of the User constructor (creating new object)
const user3=new User("hariom",23,56);
const user4=new User("amit",34,5);

//accesting the properties of the created objects
user3.getDetails();
user4.getDetails();

//instanceof
function login(name,email){
    this.emil=email;
    this.name=name;
}
const l=new login("amit","hemsdld");
console.log(l instanceof login)//true
console.log(user3 instanceof login)//false

/*notes
a constructor function is a function that is used to create and initialize objects. 
It serves as a blueprint for creating multiple objects with similar properties and methods. 
//instanceof
*/