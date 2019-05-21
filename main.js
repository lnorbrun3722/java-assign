//Question #1. Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

 function printInt(n) {
    for(var i=1;1<=n;i++){
        console.log(i);
    }
    }
// printInt(10);
// printInt(13);


//Question #2. Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

 function printIntRev(n) {
    for(var x=n;x>=i;x--){
        console.log(x);
    }
}
// printIntRev(22);

//Question # 3 Write the function checkInput(x) taking one parameter x 
//and return the string ‘number’ if x is a number; return the string 
//‘string’ if x is a string; and return ‘boolean’ if x is a boolean. 
//Otherwise returns -1.
function  checkInput(x) {
    // if(typeof x === "number") {
    //   return typeof x
    // } else if (typeof x === "string") {
    //   return typeof x
    // } else if (typeof x === "boolean") {
    //   return typeof x
    // } else {
    //   return -1;
    // }
    if (typeof x === "number" || typeof x === "string" || typeof x ==="boolean") {
      return typeof x;
    } else {
      return -1;
    }
  }

//Question # 4 Write the function simpleEvenAdding(num)
// taking a number and add up all the even numbers from 1 to num. 
//Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
//simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
//simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
//simpleEvenAdding(1) ======> 0

function simpleEvenAdding(num) {

    // Store the answer
    var solution = 0;
  
    // // Loop from 1 to num
    // for(var i=1; i<=num;i++){
    //   // check if i is even number
    //   if(i % 2 === 0) {
    //     solution += i;
    //   }
    // }
    for(var i=0;i<=num;i+=2) {
        solution += i;
    }
    return solution;
  }
  
  // console.log(simpleEvenAdding(12));
  

//Question #5 Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
//Examples:
//letterCapitalize(“hello world”) ===========> “Hello World”
//letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
//Hint: There is a built-in function in javaScript that change string into uppercase. There is also a function to separate string into an array of words.
function letterCapitalize(str) {
    //separateb each word inside str
var words = str.split(" ");
//Answer
var solution = "";

//find the 1st character in each word
for(var i=0;i<words.length;i++){
var upperWord = words[i].replace(words[i][0].toUpperCase());
solution += "  " + upperWord;
}
return solution.slice(1);
}
console.log(letterCapitalize("you cannot find the answer online"));


//Question # 6 Write the function simpleReverse(str) taking
//a string and return the string in reversed order. 
//Examples:
// simpleReverse(‘hello’) ======> ‘olleh’
// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
//Hint: Think of how you can loop through a string or 
//array of characters backwards to produce a new string

function simpleReverse(str){
//tranfer str into array
var strArray = str.split("");
//reverse the array
var revArray = strArray.reverse();
//trasfer the array back to string
return revArray.join("");
}

//Question #7 Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
//Examples:
//findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
//findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
//findDiff([1, 1, 1, 1, 1]) =======> 0 
//findDiff([1]) ======> 0;
//findDiff([]) =======> 0;


function findDiff(arr) {
//find maximum number
var max = Math.max(...arr);

//find minimum number
var min = Math.min(...arr);

//find max - min
return max - min;
}

//Question #8 Write the function timeConvert(num) taking a number
// as parameter and return the number of hours and minutes 
//the parameter converts to. Separate the number of hours
// and minutes with a colon.
//Example:
//timeConvert(61) ======> 1:1
//timeConvert(63) =======> 1:3
//timeConvert(120)======> 2:0
//timeConvert(59)=======> 0:59
//Hints: Dividing and modulo the number 60.

function timeConvert(num) {
//getting hour
var hour =parseInt(num/60);
//getting minutes
var minutes= num % 60
//combine the answer
return hour + ":" + minutes}
}
console.log(timeConvert(123));
console.log(timeConvert(59));

//Question #9 Write the function findStr(str, long) taking two 
//strings as parameters and return how many str you can find in long.
// Assume Str is not empty string.
//Example:
//findStr(“hi”, “dasdhidasdahidashi”) =======> 3
//findStr(“o”, “daodo”) =======> 2
//findStr(“ha”,”abcde”)=======> 0
//findStr(“h”, “hihelloho”)======> 3

function findStr(str, long) {
    var splitedArray = long.split(str);
    return splitedArray.length - 1;
}

//Question #10) Write the function selfDividingNumbers(left, right) 
//taking two number bound as parameters and returns an 
//array of every possible self dividing number between 
//them, including the bounds. 
//Hint: A self-dividing number is a number that is divisible by 
//every digit it contains. For example, 128 is a self-dividing 
//number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 
//Examples:
//selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
//selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
//selfDividingNumbers(12, 21) =======> [12, 15]

function selfDividingNumbers(left, right){
    
    var solution = [];
    for(var i=left;i<=right;i++){
      if(isSelfDividing(i)){
        solution.push(i)
      }
    }
    return solution;
  }
  
  
  function isSelfDividing(num) {
    var digits = num.toString().split("");
    
    for(var i=0; i< digits.length; i++){
      if(num % digits[i] !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(selfDividingNumbers(1,22));
  

//Question 11 11. Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
//moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
//moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
//moveZeros([0,0,0]) ======> [0,0,0]
//moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]
function moveZeros(nums) {
    // count number of 0s
    var counter = 0;
  
    // store the solution array
    var solution = [];
  
    for(var i=0;i<nums.length;i++){
      if(nums[i] === 0){
        counter++;
      } else {
        solution.push(nums[i]);
      }
    }
  
    // adding 0s
    for(var j=counter;j>0;j--){
      solution.push(0);
    }
    return solution;
  }
  
  console.log(moveZeros([1,0,21,4,0,0,4]));


//Question 12 Create an average(nums) function that calculates the average of an array of numbers.
//Examples: 
//average([2, 6]) =====> 4
//average([2, 3, 3, 5, 7, 10]) ======> 5
//average([7, 1432, 12, 13, 100]) ======> 312.8
//average([]) ======> 0

function average(nums) {
    if (nums.length === 0) {
      return 0;
    } 
    // adding up all numbers
    var sum = 0;
    for(var i=0;i<nums.length;i++){
      sum += nums[i];
    }
    // divide by its length
    return sum / nums.length
  }
  
  console.log(average([]));

