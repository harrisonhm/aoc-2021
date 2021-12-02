var text = require("fs").readFileSync("./puzzle_input_1.txt", "utf-8");
const instructions = text.split("\n")

const mappedInstructions = [];

instructions.forEach(instruction => {
    const splitted = instruction.split(' ');
    mappedInstructions.push({direction: splitted[0], value: parseInt(splitted[1])})
});

const SUB_CONTROL_STRATEGY = {
    forward: (value, total) => { return { depth: total.depth, horizontal: total.horizontal + value}},
    up: (value, total) => { return { depth: total.depth - value, horizontal: total.horizontal}},
    down: (value, total) => { return { depth: total.depth + value, horizontal: total.horizontal}}
}

let startingPosition = { aim: 0, depth: 0, horizontal: 0};

const finishedPosition1 = mappedInstructions.reduce((total, instruction) => {
    return SUB_CONTROL_STRATEGY[instruction.direction](instruction.value, total);
}, startingPosition);

console.log(finishedPosition1.depth * finishedPosition1.horizontal)

const SUB_CONTROL_AIM_STRATEGY = {
    forward: (value, total) => { return { aim: total.aim, depth: total.depth + (total.aim * value), horizontal: total.horizontal + value}},
    up: (value, total) => { return { aim: total.aim - value, depth: total.depth, horizontal: total.horizontal}},
    down: (value, total) => { return { aim: total.aim + value, depth: total.depth, horizontal: total.horizontal}}
}

const finishedPosition2 = mappedInstructions.reduce((total, instruction) => {
    return SUB_CONTROL_AIM_STRATEGY[instruction.direction](instruction.value, total);
}, startingPosition);

console.log(finishedPosition2.depth * finishedPosition2.horizontal)