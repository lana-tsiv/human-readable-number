module.exports = function toReadable(number) {
    const arr1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const arr2 = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const arr3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }
    if (number <= 10) {
        return arr1[number];
    }
    if (number > 10 && number < 20) {
        return arr2[number % 10];
    }
    if (number >= 20 && number < 100) {
        return `${arr3[Math.trunc(number / 10)]} ${arr1[number % 10]}`.trim();
    }
    if (number >= 100 && number < 1000) {
        if (Math.trunc((number % 100) / 10) > 1) {
            return `${arr1[Math.trunc(number / 100)]} hundred ${
                arr3[Math.trunc((number % 100) / 10)]
            } ${
                arr1[number % 100]
                    ? arr1[number % 100]
                    : arr1[(number % 100) % 10]
            }`.trim();
        } else {
            return `${arr1[Math.trunc(number / 100)]} hundred${
                arr2[Math.trunc(number / 100 / 10)]
            } ${
                arr1[number % 100]
                    ? arr1[number % 100]
                    : arr2[(number % 100) % 10]
            }`.trim();
        }
    }
};
