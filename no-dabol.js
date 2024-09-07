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
console.log(adds);