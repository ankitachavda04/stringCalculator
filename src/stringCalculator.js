export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    return parseInt(numbers);
}

console.log(add(""));
console.log(add(" "));
console.log(add("10"));