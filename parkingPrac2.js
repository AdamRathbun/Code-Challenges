// parking lot prac

class Car{
    constructor(licensePlate){
        this.licensePlate=licensePlate
    }
}

class Spot{
    constructor(id){
        this.id=id
        this.occupied=false
        this.car=null
    }
}

class ParkingLot{
    constructor(capacity){
        this.capacity=capacity
        this.lot={}
        this.nextId=1
    }

    park(car){
        // first see if we've reached maximum occupancy
        const occupiedSpots = Object.keys(this.lot).filter(el=>el.occupied).length
        if (occupiedSpots===capacity){
            return 'No more spots in this parking lot.'
        }
        while(this.lot[this.nextId]&&this.lot[this.nextId].occupied){
            this.nextId++
        }
        if (!this.lot[this.nextId]){
            this.lot[this.nextId]=new Spot(this.nextId)
        }
        this.lot[this.nextId].occupied=true
        this.lot[this.nextId].car=car
        const message = `Your car with ${car.licensePlate} is parked in spot ${this.nextId}`
        this.nextId++
        return message
    }

    unPark(car){
        const mySpot = Object.keys(this.lot).find(el=>this.lot[el].car.licensePlate===car.licensePlate)
        if (!mySpot){
            return 'Your car is not parked here.'
        }
        const message = `Your car with ${car.licensePlate} plate is parked at spot ${mySpot}.`
        this.lot[mySpot].occupied=false
        this.lot[mySpot].car=null
        if (mySpot<this.nextId){
            this.nextId===mySpot
        }
        return message
    }

    capacity(){
        const occupiedSpots = Object.keys(this.lot).filter(el=>this.lot[el].occupied).length
        return capacity > occupiedSpots ? `${occupiedSpots} spots left.` : 'No more spots.'
    }

    findCar(car){
        const spot = Object.keys(this.lot).find(el=>this.lot[el].car.licensePlate===car.licensePlate)
        if (!spot){
            return 'Your car is not parked here.'
        }
        return `Your car with ${car.licensePlate} plate is parked at spot ${spot}!`
    }
}