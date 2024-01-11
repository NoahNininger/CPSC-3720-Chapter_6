/* 
   TESTING WITH HARDCODED NUMBERS

   Invoke the function with different start numbers as the arguments 
   that are passed into the function.
*/
console.log("Testing from 0");
count(0);
console.log("Testing from 5");
count(5);
console.log("Testing from 10");
count(10);

function count(startNum)
{
   if (startNum >= 10)
      { console.log(10); }
   else
   {
      console.log(startNum);
      count(startNum + 1);    // recursion
   }
}

// for user-selected numbers
function setStartNum()
{
 // converts HTML value into a numerical value
   let input = document.getElementById("input");
   let startNum = parseInt(input.value);

   console.log("Counting from " + startNum);
   count(startNum);
}