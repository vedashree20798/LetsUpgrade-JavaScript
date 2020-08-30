// Print elements within an array which contain letter a 

let vehicles = ["Car", "Jeep", "Truck", "Bicycle", "Auto Rickshaw"];

console.log("The elements wihtin array containing letter a are: ");
for(i=0; i<vehicles.length; i++) {
    if(vehicles[i].includes("a")) {
        console.log(vehicles[i]);
    }
}