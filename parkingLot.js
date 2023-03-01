// Parking lot
class Car {
    constructor(licensePlate){
        this.licensePlate=licensePlate
    }
}

class Spot {
    constructor(id){
        this.id=id
        this.occupied=false
        this.car=null
    }
}

class ParkingLot {
    constructor(capacity){
        this.lot={}
        this.capacity=capacity
        this.nextId=0
    }
// takes in car object, which is just going to have the licensePlate property
    park(car){
        // check if the lot is full by filtering all the keys with occupied in this.lot and comparing that count to capacity
        const occupiedSpots=Object.keys(this.lot).filter(el=>el.occupied===true).length
        if (occupiedSpots===this.capacity){
            return 'Sorry, the lot is full.'
        }
        // checking for nearest available lot, making sure there's a spot in the first place
        while (this.lot[this.nextId] && this.lot[this.nextId].occupied){
            this.nextId++
        }
        if (!this.lot[this.nextId]){
            this.lot[this.nextId] = new Spot(this.nextId)
        }
        this.lot[this.nextId].occupied=true
        this.lot[this.nextId].car=car
        const msg = `Your car with license plate ${car.licensePlate} is parked at spot ${this.nextId}, don't forget!`
        this.nextId++
        return msg
    }   

    unPark(car){
        // first grab the spot id
        const spotId = Object.keys(this.lot).find(el=> this.lot[el].occupied && this.lot[el].car===car)
        if (!spotId){
            return `Your car with license plate ${car.licensePlate} is not in this parking lot.`
        }
        this.lot[spotId].occupied=false
        this.lot[spotId].car=null
        // this makes it faster to find a spot to park because the system will know this newly opened up spot should be the next available
        if (spotId<this.nextId){
            this.nextId=spotId
        }
        return `Your car with license plate ${car.licensePlate} has been unparked.`
    }

    available(){
        // find the difference of capacity minus occupied spots
        const spotCount = this.capacity - Object.keys(this.lot).filter(el=>this.lot[el].occupied).length
        return `This parking lot has ${spotCount} spots available`
    }

    findCar(car){
        const spot = Object.keys(this.lot).find(el=> this.lot[el].occupied && this.lot[el].car.licensePlate===car.licensePlate)
        if (!spot){
            return 'Your car is not here.'
        }else{
            return `Your car is in spot ${spot}.`
        }
    }
}

const car1=new Car(103)
const parkingLot1=new ParkingLot(100)
parkingLot1.park(car1)
parkingLot1.available()
parkingLot1.findCar(car1)



// extra inheritance
class Librarian {
  constructor(name, contactInfo, library) {
    this.name = name;
    this.contactInfo = contactInfo;
    this.library = library;
  }

  getBookInformation(bookTitle) {
    return this.library.getBookInformation(bookTitle);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  getBookInformation(bookTitle) {
    for (let book of this.books) {
      if (book.title === bookTitle) {
        return book;
      }
    }
    return null; // book not found
  }
}

