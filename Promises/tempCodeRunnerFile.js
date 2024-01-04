const promiseOne=new Promise(function(resolve,reject){
    //Do as async task
    //db call ,cryptograpy,..
    setTimeout(function(){
        console.log("Async task is compelete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promiseOne is resolved")
})
///

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is compelete");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

///
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task3 is compelete");
        //passing the data through the resolve
        resolve({usename:"hariom",emil:"hk52@gamil.com"})
    },1000)
})
//printing the data
promiseThree.then(function(data){
    console.log(data);
})  



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task4 is compelete");
        let flag=true
        if(flag){
            resolve({username:"hariom",emil:"hk52@gamil.com"})
        }else{
            //reject is handel by cath()
            reject("Error: something went wrong");
        }
    },1000)
})
promiseFour.then((data)=>{
    console.log(data)
    return data.username;
})
.then((user)=>{
    console.log(user)
})
.catch(function(Error){
    console.log(Error)
}).finally(()=>{
    //it will always call
    console.log("promise is either resolve or rejected")
})

//////////////////
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(error){
            resolve({username:"hariom",rollno:"21mhd"});
        }else{
            reject("Error: in Promise five")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        //holding data in response
        const response=await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
//call
consumePromiseFive()


async function getUser(){
    try{
        const response=await fetch('https://api.github.com/users/hiteshchoudhary')
        console.log(response)
    }
    catch(error){

    }
}

