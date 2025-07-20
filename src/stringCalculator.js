export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    let delimiters = [",", "\n"];

    if (numbers.startsWith("//")) {
        const splitInput = numbers.split("\n");
        const extractDelimiters = splitInput[0].slice(2);
        numbers = splitInput[1];

        const handleCustomDelimiters = extractDelimiters.match(/\[.*?]/g);

        if (handleCustomDelimiters) {
            delimiters = handleCustomDelimiters.map(d =>
                d.slice(1, -1)
            );
        }  else {
            delimiters = [extractDelimiters];
        }
    }

    const splitRegex = new RegExp(delimiters.map(escapeRegExp).join("|"));
    const splitNumbers = numbers.split(splitRegex).map(Number);
    const negativeNumbers = splitNumbers
                            .filter(num => num < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
    }
    const sum = splitNumbers
                .filter((num) => num <= 1000 && !isNaN(num))
                .reduce((acc, curr) => acc + curr, 0);
    return sum;
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

console.log(add(""));  
console.log(add(" ")); 
console.log(add("10"));     
console.log(add("10,10"));      
console.log(add("10\n20,30\n40"));      
console.log(add("//;\n10;20"));     
console.log(add("//;\n10;1000"));    
console.log(add("1001,20"));        
console.log(add("//[***]\n10***20***30"));
console.log(add("//[*][%]\n10*20%30"));
console.log(add("//[**][%%]\n10**20%%30"));
