"use strict";
function createCar(Manufacturer, Model, ...extra) {
    const car = {
        Manufacturer,
        Model
    };
    extra.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const theCar = createCar("Toyota", "Passo", ["Color", "Pearl White"], ["Year", 2014], ["Features", ["GPS", "Bluetooth", `V22`]]);
console.log(theCar);
