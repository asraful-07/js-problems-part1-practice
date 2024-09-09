/****
 *Task-1:
 
 *Write a function to convert temperature from Celsius to Fahrenheit.
 *
 * 
 */

// Ans 

function celToFah(dgree){
   const sec = (dgree * 9.0 / 5.0) + 32.0;
   return sec;
}

const end = 20;
const hot = celToFah(end);
// console.log(hot, 'celsius'); 

/**
 * Task-2:
 * 
 *You are given an array of numbers. Count how many times the a number is repeated in the array.
 *
 *sample-input: numbers = [5,6,11,12,98, 5]
 * 
 */

function countOccurrences(arr,n,x)
{
    let res = 0;
    for (let i=0; i<n; i++)
    {
        if (x == arr[i])
            res++;
    }
    return res;
}

arr=[5,6,11,12,98, 5]
let  n = arr.length;
let x = 2;
// console.log(countOccurrences(arr, n, x));

/**
 * 
 * Task-3:
 * 
 *Write a function to count the number of vowels in a string.
 *
 */

//  Ans
function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
    " A Computer Science Portal for Geeks:" +
    getVowels("A Computer Science Portal for Geeks")
);

/**
 * 
 * Task-4:
 * 
 Write a function to find the longest word in a given string.

 sample-input: I am learning Programming to become a programmer

 *sample-output: Programming
 *
 *
 */

// Ans

function longestWordLength(string)
    {
        //   let length = 0;
          const words = string.split(" ");
        // Finding longest word in sentence
          for (const word of words) 
        {
            if (word.length > length) 
            {
              length = word.length;
            }
          }
          return length;
    }
 
    const sentence = "I am learning Programming to become a programmer";
    console.log(longestWordLength(sentence));

/**
 * Task-5:
 * 
 *Generate a random number between 10 to 20.
 *
 */

//  Ans

function randomIntFromInterval(min, max) { // min and max included 
    // return Math.floor(Math.random() * (max - min + 1) + min);
    const int = Math.round(Math.random() * (max - min + 1) + min);
    return int;
  }
  
  const rndInt = randomIntFromInterval(10, 20);
//   console.log(rndInt);