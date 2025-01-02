class Car{
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(productDetails){
    this.brand = productDetails.brand;
    this.model = productDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo(){
    console.log(`Brand: ${this.brand}, Model: ${this.model},`, `Speed: ${this.speed},`, `Trunk: ${this.isTrunkOpen ? 'Open' : 'Closed'}`);
  }
  go(){
    if(!this.isTrunkOpen){
      this.speed <= 200 ? this.speed += 5 : this.speed = 200;
    };
  }
  brake(){
    this.speed <= 0 ? this.speed = 0 : this.speed -= 5;
  }

  openTrunk(){
    this.speed === 0 ? this.isTrunkOpen = true : this.isTrunkOpen = false;
  }
  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

export const carProducts =[
  {
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    brand: 'Tesla',
    model: 'Model 3'
  }
].map((productDetails) => {
  return new Car(productDetails);
});

carProducts.forEach((car) => {
  car.displayInfo();
});