export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    const sum = numbers.split(",")
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
    return sum;
}

console.log(add(""));
console.log(add(" "));
console.log(add("10"));
console.log(add("10,10"));