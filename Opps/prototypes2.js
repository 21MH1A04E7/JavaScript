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

/* array  ->object ->null
*/