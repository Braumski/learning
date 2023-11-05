// defining a class

// class Train{}

// constructor

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
        // return proto;
    }
}

var myFirstTrain = new Train('red', true);

console.log(myFirstTrain);

myFirstTrain.getPrototype();

// Polymorphism

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status', this.highSpeedOn);
    }
    /*
    Below, you are reusing the name of a method in the train parent
    You can reuse the name like this, and when it is called, it will
    perform a different function based on which object it is being called
    from. e.g. HighSpeedTrain.toggleLights() is different than Train toggle.lights()
    */
    toggleLights() {
        super.toggleLights;
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}   

var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(highSpeed1);

myFirstTrain.getPrototype();
highSpeed1.getPrototype(); 

// Using class instance as another class' constructor property

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

/* 
    In the above code, the Gym class is using the Treadmill and Stationary Bike
classes to construct objects while the gym is being constructed, demonstrating
that it is possible to create objects within an object when the parent object
is being constructed. 
*/