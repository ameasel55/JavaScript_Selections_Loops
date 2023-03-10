console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        continue;
    }
    else {
        console.log (i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz")
    }
    if (i % 3 == 0) {
        console.log(i, "fizz")
    }
    else if (i % 5 == 0) {
        console.log(i, "buzz")
    }
}

// Exercise 3 Section - Ignore Even Do/While
console.log("EXERCISE 3, Pt1:\n================\n");

let i = 0;
do {
        if (i % 2 != 0) {
        console.log (i);
       }
        i++;
    } 
while (i < 100);


// Exercise 3 Section - Fizzbuzz Do/While
console.log("EXERCISE 3, Pt2:\n================\n");

let x = 1
do{
        if (x % 3 == 0 && x % 5 == 0) {
            console.log(x, "fizzbuzz")
        }
        if (x % 3 == 0) {
            console.log(x, "fizz")
        }
        else if (x % 5 == 0) {
            console.log(x, "buzz")
        }
        x++
    }
while (x <= 100)

// Exercise 4 
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let n = 0; n <= 500; n++) {
    if (n == value) {
        console.log(n, "Found Value!")
        break;
    }
    else if (n != value){
        console.log(n, "Did not find value")
    }
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = 1; i <= m; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz")
    }
    if (i % 3 == 0) {
        console.log(i, "fizz")
    }
    else if (i % 5 == 0) {
        console.log(i, "buzz")
    }
}