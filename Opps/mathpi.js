console.log(Math.PI)
Math.PI=3
console.log(Math.PI)

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//wirtable=false,enumerable=flase,configurable=false
console.log(descriptor)

const college={
    name:'hariom',
    price:200,
    isavailable:true
}
//writable=true,enumerable=true,configurable=true
console.log(Object.getOwnPropertyDescriptor(college,"name"))
Object.defineProperty(college,'name',{
    writable:false,
    //flase,itration
    enumerable:true,
    configurable:true,
})
for (let [key,value] of Object.entries(college)){
    console.log(key,value)
}
console.log(Object.getOwnPropertyDescriptor(college,'name'))