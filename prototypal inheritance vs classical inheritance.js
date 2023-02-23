// Prototypal Inheritance

const foo1 = {
    height: 6,
    hello(){
        console.log(`${this.name} reporting!`)
    }, weight:155
}

const john = Object.create(foo1)
john.name='John'
john.age=22

john.hello()

john.yell = function(){
    console.log(`I'm ${this.age} years old!`)
}

// Classical Inheritance

class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    describe(){
        console.log(`This is ${this.name} and I'm ${this.age} years old.`)
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age)
        this.grade=grade
    }

    karate(){
        console.log(`I'm a blackbelt in my ${this.grade} grade karate class.`)
    }
}

const james = new Student('James', 12, '6th')

james.describe()
james.karate()