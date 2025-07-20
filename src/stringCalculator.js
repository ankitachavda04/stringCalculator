export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
        [delimiters, numbers] = numbers.split("\n");
        delimiters = new RegExp(`[${delimiters.slice(2)}]`);
    }
    const splitNumbers = numbers.split(delimiters);
    const negativeNumbers = splitNumbers.filter(num => num < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
    }
    const sum = splitNumbers
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
    return sum;
}

console.log(add(""));
console.log(add(" "));
console.log(add("10"));
console.log(add("10,10"));
console.log(add("10\n20,30\n40"));
console.log(add("//?;\n10;20"));