console.log("Connor's Collatz");

function collatz(x){
  length = 0;
  console.log(x);
  while (x>1){
    if ( (x % 2) == 0){
      x = x / 2;
    }
    else {
      x = 3 * x + 1;
    }
  length++;
  console.log(x);
  }

}

if (process.argv.length >= 3){
  start=process.argv[2]
}
else{
  start=14;
  console.log("14 is the default value. Add an argument to the command line next time!");
}
collatz(start);
console.log( "The length of Collatz sequence for " + start + " is " + length);
