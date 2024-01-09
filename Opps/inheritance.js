class College{
    constructor(username){
        this.username=username;
    }
    //method
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}
//inheriting the College class property
class Teacher extends College{
    constructor(username,email,password){
        super(username)//all the constructor of the base class
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const faculty1=new College("suresh");

faculty1.logme()

const teacher1=new Teacher("amit")
console.log(teacher1 instanceof College)