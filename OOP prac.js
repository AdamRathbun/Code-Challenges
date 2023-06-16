// OOP practice

// rectangle class
// Create a class called Rectangle with properties width and height. Include a method called calculateArea() that calculates and returns the area of the rectangle.
class Rectangle{
    constructor(width, height){
        this.width=width
        this.height=height
    }

    calculateArea(){
        return this.width*this.height
    }
}
let rect1=new Rectangle(3,4)
console.log(rect1.calculateArea())

// Question: Create a class called Circle with a property radius. Include a method called calculateCircumference() that calculates and returns the circumference of the circle.

class Circle{
    constructor(radius){
        this.radius=radius
    }

    calculateCircumference(){
        return 2*(Math.PI)*this.radius
    }
}
let circ1=new Circle(4)
console.log(circ1.calculateCircumference())

// Question: Create a class called Employee with properties name and salary. Include a method called calculateBonus() that calculates and returns a bonus amount based on the employee's salary. The bonus is calculated as 10% of the salary.

class Employee{
    constructor(name, salary){
        this.name=name
        this.salary=salary
    }

    calculateBonus(){
        return this.salary*1.1
    }
}
let emp1=new Employee('John', 100000)
console.log(emp1.calculateBonus())

// Question: Create a class called Car with properties make, model, and year. Include a method called startEngine() that logs a message indicating the car has started.

class Car{
    constructor(make, model, year){
        this.make=make
        this.model=model
        this.year=year
    }
    startEngine(){
        console.log(`This ${this.make} ${this.model} made in ${this.year} has started.`)
    }
}
let car1=new Car('Chevy', 'El Dorado', 2008)
console.log(car1.startEngine())

// Question: Create a class called BankAccount with properties accountNumber and balance. Include methods deposit(amount) and withdraw(amount) that add or subtract the specified amount from the balance, respectively.

class BankAccount{
    #accountNumber
    #balance
    constructor(accountNumber, balance){
        this.#accountNumber=accountNumber
        this.#balance=balance
    }

    get balance(){
        return this.#balance
    }

    deposit(amount){
        this.#balance+=amount
    }

    withdraw(amount){
        this.#balance-=amount
    }
}
let bankAcc1=new BankAccount(484840174840, 100000)
bankAcc1.withdraw(20000)
bankAcc1.deposit(5000)
console.log(bankAcc1.balance)

// Question: Create a class called Student with properties name and grades (an array of numbers). Include a method called calculateAverageGrade() that calculates and returns the average grade for the student.

class Student{
    constructor(name, grades){
        this.name=name
        this.grades=grades
    }

    calculateAverageGrade(){
        return this.grades.reduce((a,c)=>a+c)/this.grades.length
    }

}
let student1=new Student('Sara', [87, 79, 92, 100, 98])
console.log(student1.calculateAverageGrade())

// Question: Create a class called Shape with properties color and name. Include a method called calculateArea() that throws an error with a message indicating that the shape's area calculation is not implemented. Then, create two subclasses, Circle and Rectangle, that inherit from Shape and implement the calculateArea() method to calculate the area of the respective shapes.

class Shape{
    constructor(color, name, side){
        this.color=color
        this.name=name
        this.side=side
    }

    calculateArea(){
        throw new Error('Area calculation not implemented.')
    }
}
let shape2=new Shape('yello', 'zeltoid', 10)
shape2.calculateArea()

class Circle extends Shape{
    constructor(color, name, side){
        super(color, name, side)
    }
    calculateArea(){
        return Math.PI*(this.side**2)
    }
}

class Square extends Shape{
    constructor(color, name, side){
        super(color, name, side)
    }
    calculateArea(){
        return this.side**2
    }
}

let circ2=new Circle('red', 'circle', 3)
console.log(circ2.calculateArea())
let square2=new Square('blue', 'square', 5)
console.log(square2.calculateArea())

