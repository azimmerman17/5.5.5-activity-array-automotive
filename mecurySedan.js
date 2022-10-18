//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)

        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160
        this.scheduleService = false;
        this.fuel = 10;
    }

    loadPassenger(num) {
        if (this.passenger + num <= this.maximumPassengers) {
            this.passenger += num;
            return this.passenger
        } else {console.log(`${this.make} ${this.model} does not have enough space for the passengers`)}

        if (this.passenger = this.maximumPassengers) {
            console.log(`${this.make} ${this.model} is full`)
        }
    };
    
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            console.log('Please schedule your service soon.')
            return this.scheduleService;                       
        }
    }
}



//this shows how to call from this module...
let myCar = new Car('Mercury', 'A28 Sedan',2022,'blue',34000 )

myCar.start()
myCar.loadPassenger(3)
myCar.stop()
myCar.checkService()

console.log(myCar)