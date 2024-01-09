//after ES6
class User{
    //constructor
    constructor(username,emil,pass){
        this.username=username;
        this.emil=emil;
        this.pass=pass;
    }
    //method(syntax)
    encryptPassword(){
        return `${this.pass}AB#`
    }
    //method
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const user1=new User("hariom","hk@gmail.com",123)
console.log(user1.encryptPassword())
console.log(user1.changeUserName())

/*
1. Constructor Functions:
Defined using a regular function.
Properties are assigned to the this keyword.
Functions and methods are added to the prototype.
2. ES6 Classes:
Defined using the class keyword.
Properties and methods are defined inside the class body.
Cleaner syntax and more readable.
*/