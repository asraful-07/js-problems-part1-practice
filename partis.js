function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inRemaining + ' inch ';

    return result;
}

const myHight = inchToFeet(68);
console.log(myHight);