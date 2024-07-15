const test = require('../checkFive.js');
const checkFive = require('../checkFive.js');


function checkFive(num){
   let result = '';
   if (num < 5){
     result = num + " is less than 5.";
   } else if (num === 5){
     result = num + " is equal to 5.";
   } else {
     result = num + " is greater than 5.";
   }
   return result;
 }


describe("checkFive", function(){

    test("returns 'num is less than 5' when num < 5.", function(){
       let output = checkFive(2);
       expect(output).toBe("2 is less than 5.");
    });

 });
