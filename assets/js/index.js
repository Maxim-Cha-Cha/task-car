function Car(manufacturer, model, color, releaseYear, fuelConsumption, volume) {
  this.drive = function () {
    return "Drive";
  };
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.fuelConsumption = fuelConsumption + " l/km";
  this.volume = volume;
}
const car1 = new Car("BMW", "M8", "white", "2022", "15", "60");
