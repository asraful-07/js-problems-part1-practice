const today = new Date();
console.log(today);


const date = new Date ('2062-10-12');
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());


const specificDate = new Date (2094, 0, 26);
console.log(specificDate);
specificDate.setMonth(10)
console.log(specificDate);
console.log(specificDate.toDateString('en-GB'));

