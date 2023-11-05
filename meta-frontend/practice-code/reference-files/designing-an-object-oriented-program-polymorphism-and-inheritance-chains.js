//////////////////  Designing an Object Oriented Program    /////////////////////////////

/*
Building the following inheritance hierarchy

                      Animal
                    /       \
                 Cat        Bird
                /   \         \
          HouseCat  Tiger     Parrot 
      
*/

class Dinosaur {
  // ... class code here ...
}

class TRex extends Dinosaur {
  // ... class code here ...
}
/*
This is how the extends keyword is used to setup inheritance relationships.
The super keyword allows me to "borrow" functionality from a super-class, 
in a sub-class.
    Now I can start thinking about how to implement my OOP class hierarchy.
Before I even begin, I need to think about things like: * What should go 
into the base class of Animal? In other words, what will all the sub-classes
inherit from the base class? * What are the specific properties and 
methods that separate each class from others? * Generally, how will my 
classes relate to one another?
*/

class Animal {
  constructor(color = 'yellow', energy = 100) {
      this.color = color;
      this.energy = energy;
  }
  isActive() {
      if(this.energy > 0) {
          this.energy -= 20;
          console.log('Energy is decreasing, currently at:', this.energy)
      } else if(this.energy == 0){
          this.sleep();
      }
  }
  sleep() {
      this.energy += 20;
      console.log('Energy is increasing, currently at:', this.energy)
  }
  getColor() {
      console.log(this.color)
  }
}

class Cat extends Animal {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
      super(color, energy);
      this.sound = sound;
      this.canClimbTrees = canClimbTrees;
      this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
      console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
      super(color, energy);
      this.sound = sound;
      this.canFly = canFly;
  }
  makeSound() {
      console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.tigerSound = tigerSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound,canFly, color,energy) {
      super(sound,canFly, color,energy);
      this.canTalk = canTalk;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      if (this.canTalk) {
          console.log("I'm a talking parrot!");
      }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

const eagle = new Bird(undefined, undefined, "red", 300);
console.log(eagle);
/* 
Note: If I didn't use the super keyword in our sub-classes, once I'd run
 the above code, I'd get the following error: Uncaught ReferenceError: Must
  call super constructor in derived class before accessing 'this' or 
  returning from derived constructor. 
  */

