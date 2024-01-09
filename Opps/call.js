function SetUsername(username){
    this.username=username
    console.log("hi")
}
function createUser(username,email,password){
    // SetUsername(username)//running
    //passing the reference
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const user1=new createUser("hariom","hk@gamil.com","123")
console.log(user1)