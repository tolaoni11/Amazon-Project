class Car {
  #brand;
  #model;
  speed = 0;
  isTruckOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model} ${this.speed}mph`);
  }

  go() {
    if (this.isTruckOpen === false) {
      this.speed += 5;
    }

    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTruck() {
    if (this.speed === 0) {
      this.isTruckOpen = true;
    }
  }

  closedTruck() {
    this.isTruckOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTruck() {
    console.log("Does not have a Truck");
  }

  closedTruck() {
    console.log("Does not have a Truck");
  }
}

const toyota = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const tesla = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const racecar1 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

toyota.openTruck();
toyota.go();
toyota.go();
toyota.go();
toyota.brake();
toyota.displayInfo();

tesla.go();
tesla.brake();
tesla.brake();
tesla.displayInfo();

racecar1.go();
racecar1.go();
racecar1.brake();
racecar1.displayInfo();
