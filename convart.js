function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet;
}

const inch = (75)
const shuvoHight = inchToFeet(inch);
// console.log(shuvoHight);


// ofsonal thic part
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inRemaining = inch % 12;
    const result = feetNumber + 'ft' + inRemaining + 'inch';
    return result;
}

const shuvoHight2 = inchToFeet2(75);
// console.log(shuvoHight2)

// 2nd function 
function milTokillo(mile){
    const killo = mile * 1.6093;
    return killo;
}
console.log(milTokillo(2))

