const user={
    name: "John",
    age: 25,
    userId:12,
    //functions
    getUserDetails:function(){
        //this refers the current object
        console.log(`your name is ${this.name}`)
        console.log(this)
    }
}
console.log(user.name)
console.log(user.getUserDetails())