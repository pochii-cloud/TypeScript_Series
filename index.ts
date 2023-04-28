console.log('hello world');

//Array of know type
let myarray:number[]=[1,2,3,4,4]

//Array of unknown type

let arr:any[]=[1,'me',true]

//Tuple
let Tp1:[number,string,boolean]=[1,'me',false]

//Unions
let Un1:number|string

Un1=2
Un1='2'

//Enum

enum  Enum1{
    Top,Right,Down,Left
}
console.log(Enum1.Top)

//objects

let user:{id:number,name:string}={
  id:1,
  name:'john'
}

//types
type Book={
    id:number,
    name:string
}

let book:Book={
    id:1,
    name:'testbook'
}

//Interfaces

interface Car{
    id:number,
    model:string,
    mileage:number
}

let Benz:Car={
    id:1,
    model:'E250',
    mileage:1000
}

//functions
function sum(x:number,y:number):number{
    return x+y
}
console.log(sum(5,10))

//Void functions
function logmessage (message:string|number):void{
   console.log(message)

}


//classes

class Person{
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    showname(){
        return `${this.name} is now active`
    }
}

let Person1=new Person(1,'john')

console.log(Person1)


//Extending in classes
class Employee extends Person{
    active:boolean

    constructor(id:number,name:string,active:boolean){
        super(id,name)
        this.active=active
    }
}
const employee=new Employee(2,'james',false)

console.log(employee.showname())


//Generics

function concatarrays<T>(items:T[]):T[]{
     return items
}

let numarray=concatarrays<number>([1,2,3,4])
let strarray=concatarrays<string>(['1','2','3'])