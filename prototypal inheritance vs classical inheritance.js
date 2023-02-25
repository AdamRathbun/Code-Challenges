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






// more prac, prototype

const foo2 = {
    age: 72, 
    hello(){
        console.log(`I'm ${this.age} years old!`)
    }
}

foo2.hello()

const foo3 = Object.create(foo2)
foo3.name = 'James'
foo3.bye=function(){
    console.log(`I'm ${this.name} and I'm ${this.age} years old!`)
}

foo3.bye()

// class
class Person2{
    constructor(age, name){
        this.age=age
        this.name='James'
    }

    hello(){
        console.log(`This is ${this.name}.`)
    }
}

const jenny = new Person2(22, 'Jenny')
jenny.hello()

class Student2 extends Person2{
    constructor(age, name, sex){
        super(age, name)
        this.sex=sex
    }

    bye(){
        console.log(`This is ${this.name}, I'm ${this.age} years old and I'm ${this.sex}.`)
    }
}

const bob = new Student2(44, 'Bob', 'male')
bob.bye()
