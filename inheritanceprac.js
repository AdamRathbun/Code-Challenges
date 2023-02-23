// https://www.hackerrank.com/challenges/java-inheritance-1/problem

class Animal{
    constructor(alive){
        this.alive=alive
    }
    walking(){
        console.log('I am walking.')
    }
}

class Bird extends Animal{
    constructor(alive, age, sex){
        super(alive)
        this.age=age
        this.sex=sex
    }
    flying(){
        console.log('I am flying.')
    }
    singing(){
        console.log('I am singing.')
    }
}

const birdy = new Bird(true, 3, 'female')
birdy.singing()
birdy.walking()
birdy

// Class vs Constructor

class Student {
    constructor(grade, name){
        this.grade=grade
        this.name=name
    }

    hello(){
        console.log(`This is ${this.name} from the ${this.grade} grade.`)
    }
}
const james = new Student('10th', 'James')
james.hello()

function Student2(grade, name){
    this.grade=grade
    this.name=name
    this.hello=function(){
        console.log(`This is ${this.name} from the ${this.grade} grade.`)
    }
}

const nancy = new Student2('11th', 'Nancy')
nancy.hello()