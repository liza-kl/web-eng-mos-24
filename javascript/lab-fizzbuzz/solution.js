for (let x = 3; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) console.log("FizzBuzz");
    else if (x % 3 == 0) console.log("Fizz"); 
    else if (x % 5 == 0) console.log("Buzz");
    x++;
}