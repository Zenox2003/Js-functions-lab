console.log("Js Functions Lab");

// Exercise 1 

const maxOfTwoNumber = (x, y) => {
    if (x >= y) {
        return x;
    } else {
      return y;
    }  
}

console.log(`Exercise 1 Result:`, maxOfTwoNumber(5, 8));

// Exercise 2

const isAdult = (number) => {
    if (number >= 18) {
    return "Adult";
    }else {
    return "Minor";
    }
}

console.log(`Exercise 2 Result:`, isAdult(19));

// Exercise 3

const isCharAVowel = (letter) => {
    if (letter = "a" || "e" || "o" || "u" || "i" ) {
        return "True";
    }else {
    return "False";
    }
}

console.log(`Exercise 3 Result:`, isCharAVowel("a"));

// Exercise 4

const generateEmail = (inputA, inputB) => {
    return inputA + inputB;
}
console.log(`Exercise 4 result:`, generateEmail("johnsmith@", "example.com"));

// Exercise 5

const greetUser = (user, time) => {
    return time + user;
}

console.log(`Exercise 5 Result:`, greetUser(" Lindley.","Good Evening,"));

// Exercise 6

const maxOfThree = (a, b, c) => {
    let greatest = a 
    if (b > greatest) {
        greatest = b;
    }
    if (c > greatest) {
        greatest = c
  }
    return greatest;
}


console.log(`Exercise 6 Result:`, maxOfThree(0, 15, 5));

// Exercise 7

const calculateTip = (numA, numB) => {
     numB = numB/100
    return numA * numB;
}
console.log(`Exercise 7 Result:`, calculateTip(50, 20));

// Exercise 8

const convertTemperature = (temp, typeOfTemp) => {
    if (typeOfTemp === "F") {
    return (temp - 32) * (5/9) + " C";
    } if (typeOfTemp === "C") {
    return temp * (9/5) + 32 + " F";
    }
}

console.log(`Exercise 8 Result:`, convertTemperature(36, "F"));

// Exercise 9

