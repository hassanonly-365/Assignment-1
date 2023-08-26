interface Car {
    Manufacturer: string;
    Model: string;
    [key: string]: any; 
}
function createCar(Manufacturer: string, Model: string, ...extra: [string, any][]): Car {
    const car: Car = {
        Manufacturer,
        Model
    };
    extra.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const theCar = createCar("Toyota", "Passo", ["Color", "Pearl White"], ["Year", 2014], ["Features", ["GPS", "Bluetooth",`V22`]]);
console.log(theCar);
