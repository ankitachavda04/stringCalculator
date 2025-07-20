const MAX_NUMBER = 1000;
export default function add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;
    let delimiters = [",", "\n"];

    if (numbers.startsWith("//")) {
        const [getDelimiterPart, getNumberPart] = numbers.split("\n");
        const delimiterPart = getDelimiterPart.slice(2);
        numbers = getNumberPart;

        const multipleDelimiters = getDelimiterPart.match(/\[.*?]/g);

        if (multipleDelimiters) {
            delimiters = multipleDelimiters
                            .map(d =>
                                d.slice(1, -1)
                            );
        }  else {
            delimiters = [delimiterPart];
        }

        if (delimiters.some(d => d === "")) {
            throw new Error("Empty delimiter is not allowed");
        }
    }

    const splitRegex = new RegExp(delimiters
                        .map(escapeRegExp)
                        .join("|"));
    const splitNumbers = numbers
                        .split(splitRegex)
                        .map(Number);
    const negativeNumbers = splitNumbers
                            .filter(num => num < 0);

    if (negativeNumbers.length) {
        throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
    }
    const sum = splitNumbers
                .filter((num) => num <= MAX_NUMBER && !isNaN(num))
                .reduce((acc, curr) => acc + curr, 0);
    return sum;
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
