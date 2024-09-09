function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
        odds.push(number);  
        }
    }
    // return odds;
    let sum = 0;
    for(const number of odds){
       sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}

const num = [1, 2, 7, 8, 9, 10, 11];
const average = oddAverage(num);
console.log('average of the odd number is',average);