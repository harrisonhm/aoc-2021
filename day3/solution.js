var text = require("fs").readFileSync("./puzzle_input_1.txt", "utf-8");
const numbers = text.split("\n")

let gammaRate = [];
let epsilonRate = [];
let onesum = 0;
let zerosum = 0;

for(i = 0; i<numbers[0].length; i++) {
    onesum = 0;
    zerosum = 0;
    numbers.forEach(number => {
        if (number[i] === "1") {
            onesum += 1;
        } else {
            zerosum +=1;
        }
    })
    gammaRate.push(onesum > zerosum ? "1" : "0")
    epsilonRate.push(onesum < zerosum ? "1" : "0")
}

const epsilonRateBinary = epsilonRate.join("");
const gammaRateBinary = gammaRate.join("");

const epsilonRateNumber = parseInt(epsilonRateBinary, 2);
const gammaRateNumber = parseInt(gammaRateBinary, 2);

console.log(epsilonRateNumber * gammaRateNumber)

// O2 Gen Rating

let O2rating;

let matcher;
let keptNumbers = numbers;

for(i = 0; i< (keptNumbers?.[0]?.length || 0); i++) {
    onesum = 0;
    zerosum = 0;
    keptNumbers.forEach(number => {
        if (number[i] === "1") {
            onesum += 1;
        } else {
            zerosum +=1;
        }
    })
    if (onesum >= zerosum) {
        matcher = '1'
    } else {
        matcher = '0'
    }
    const newKeptNumbers = [];
    keptNumbers.forEach(number => {
        if (number[i] === matcher) {
            newKeptNumbers.push(number)
        }
    })
    keptNumbers = newKeptNumbers;
    if (newKeptNumbers.length === 1) {
        O2rating = newKeptNumbers[0]
        console.log("O2 rating", newKeptNumbers[0])
    }
}

// CO2 Scrub Rating

let CO2rating;

keptNumbers = numbers;

for(i = 0; i<(keptNumbers?.[0]?.length || 0); i++) {
    onesum = 0;
    zerosum = 0;
    keptNumbers.forEach(number => {
        if (number[i] === "1") {
            onesum += 1;
        } else {
            zerosum +=1;
        }
    })
    if (onesum >= zerosum) {
        matcher = '0'
    } else {
        matcher = '1'
    }
    const newKeptNumbers = [];
    keptNumbers.forEach(number => {
        if (number[i] === matcher) {
            newKeptNumbers.push(number)
        }
    })
    keptNumbers = newKeptNumbers;
    console.log(newKeptNumbers)
    if (keptNumbers.length === 1) {
        CO2rating = keptNumbers[0]
        console.log("CO2 rating", keptNumbers[0])
    }
}

const o2RateNumber = parseInt(O2rating, 2);
const co2RateNumber = parseInt(CO2rating, 2);

console.log(o2RateNumber * co2RateNumber)
