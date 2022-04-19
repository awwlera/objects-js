function Car(production, model, year, averageSpeed, fuelTank, fuelPer100) {
    this.production = production;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
    this.fuelTank = fuelTank;
    this.fuelPer100 = fuelPer100;
};

let cadillac = new Car('General Motors', 'Luxury 4WD', 2022, 120, 6, 3);

console.log(cadillac);

//add drivers, who are allowed to drive the vehicle
cadillac.drivers = {
    John: true,
    Mark: false
};

console.log(cadillac.drivers.John);

//display all of the characteristics
for (let key in cadillac) {
    console.log(`${key} = ${cadillac[key]}`);
};

//show whether the driver is allowed to control the vehicle
function canDrive() {
    let driverName = prompt('Enter your name!');

    if (driverName == 'John') {
        alert('You are allowed to drive the vehicle.');
    } else {
        alert('Driving is prohibited!');
    };
};

canDrive();

//calculate time needed to reach the destination(including 1 hour rest every 4 hours)
let distance = +prompt('Enter the distance');

function calcTime() {
    let avSpeed = cadillac.averageSpeed;
    let time = distance / avSpeed;

    if (time >= 4) {
        alert(`You will need to take a rest! You will reach the destination in ${Math.trunc(time + 1)} hours.`);
    } else {
        alert(`You will reach the destination in ${Math.trunc(time)} hours.`);
    };
};

calcTime();

//show whether the driver has to fuel the car
function needFuel() {
    let maxFuel = cadillac.fuelTank;
    let minFuel = cadillac.fuelPer100;
    let needLitres = (distance / 100) * minFuel;

    if (needLitres > maxFuel) {
        alert('You will need a gas station!');
    };
};

needFuel();

//Створити об'єкт, що описує час (години, хвилини, секунди)

//виведення часу на екран.

//Зміни часу на передане кількість секунд.

//Зміни часу на передане кількість хвилин.

//Зміни часу на передане кількість годин.

//Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.

let time = {
    hours: 15,
    minutes: 30,
    seconds: 45
};

function showTime() {
    alert(`${time.hours} : ${time.minutes} : ${time.seconds}`);
};

showTime();

function addSeconds() {
    let addS = Number(prompt('Add seconds'));
    let newS = time.seconds + addS;

    if (newS > 60) {
        newS = time.seconds + addS - 60;
        newM = time.minutes + 1;
        alert(`${time.hours} : ${newM} : ${newS}`);
    } else {
        alert(`${time.hours} : ${time.minutes} : ${newS}`);
    };
};

addSeconds();

function addMinutes() {
    let addM = Number(prompt('Add minutes'));
    let newM = time.minutes + addM;

    if (newM > 60) {
        newM = time.minutes + addM - 60;
        newH = time.hours + 1;
        alert(`${newH} : ${newM} : ${time.seconds}`);
    } else {
        alert(`${time.hours} : ${newM} : ${time.seconds}`);
    };
};

addMinutes();

function addHours() {
    let addH = Number(prompt('Add hours'));
    let newH = time.hours + addH;
    
    if (newH > 24) {
        newH = time.hours + addH - 24;
        alert(`${newH} : ${time.minutes} : ${time.seconds}`);
    } else {
        alert(`${newH} : ${time.minutes} : ${time.seconds}`);
    };
};

addHours();