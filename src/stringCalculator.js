export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    let delimiters = /,|\n/;

    if (numbers.startsWith("//")) {
        const splitInput = numbers.split("\n");
        const extractDelimiters = splitInput[0].slice(2);
        numbers = splitInput[1];

        if (extractDelimiters.startsWith("[")) {
            const customDelimiter = extractDelimiters.slice(1, -1);
            delimiters = new RegExp(escapeRegExp(customDelimiter));
        } else {
            delimiters = new RegExp(escapeRegExp(extractDelimiters));
        }
    }
    const splitNumbers = numbers.split(delimiters);
    const negativeNumbers = splitNumbers.filter(num => num < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
    }
    const sum = splitNumbers
                .map(Number)
                .filter((num) => num <= 1000)
                .reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Escapes special regex characters in a string
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

console.log(add(""));
console.log(add(" "));
console.log(add("10"));
console.log(add("10,10"));
console.log(add("10\n20,30\n40"));
console.log(add("1001,20"));
console.log(add("//[***]\n1***2***3")); 