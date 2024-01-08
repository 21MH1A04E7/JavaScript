let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.printname=function(){
    console.log(`my name is hariom`)
}

heroPower.printname()

myHeros.printname()
//inheritance

const Adity={
    name:"college",
    email:"college@gmail.com"
}
const Teacher={
    makevideo:true
}
const TeacherSupport={
    isAvailable:false
}
const TASupport={
    makeAssignement:'js assignment',
    fullTime:true,
    //prototypal inheritance 
    //accessing property of TeacherSupport class
    __proto__:TeacherSupport
}
// Teacher.__proto__ = Aditya

console.log(Adity)
console.log(TASupport.isAvailable)

//modern syntax
//nheriting the properties of Aditya into Teacher
Object.setPrototypeOf(Teacher,Adity)

console.log(Teacher.name)

//
let anotheruserName="chaiorcode   "
String.prototype.trueLength=function(){
    console.log(this.trim())
    console.log(this.trim().length)
}
anotheruserName.trueLength()
"hariom".trueLength()
/* array  ->object ->null

*/