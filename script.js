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

