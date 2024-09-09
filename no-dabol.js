function noDuplication(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const briyani =['abul', 'kabul','abul','habul','labul','kabul']
const  adds = noDuplication(briyani);
// console.log(adds);

// noDuplication  number function
function noDuplicationNumber(parry){
    let unique = [];
    for(const num of parry){
        if(unique.includes(num) === false){
            unique.push(num);
        }
    }
    return unique;

}

const number =[2, 4, 7, 9, 4, 7];
console.log(noDuplicationNumber(number));