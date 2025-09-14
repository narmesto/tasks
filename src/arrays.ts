import { PassThrough } from "stream";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let temp: number[] = [];
    if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }
    if (numbers.length < 2) {
        return numbers;
    }
    temp.push(numbers[0]);
    temp.push(numbers[numbers.length - 1]);
    return temp;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let temp: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        temp.push(numbers[i] * 3);
    }
    return temp;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let ret: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i])) {
            ret.push(parseInt(numbers[i]));
        } else {
            ret.push(0);
        }
    }
    return ret;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let temp: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        if (!amounts[i].startsWith("$")) {
            if (parseInt(amounts[i])) {
                temp.push(parseInt(amounts[i]));
            } else {
                temp.push(0);
            }
        } else {
            if (parseInt(amounts[i].slice(1))) {
                temp.push(parseInt(amounts[i].slice(1)));
            } else {
                temp.push(0);
            }
        }
    }
    return temp;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let ret: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].slice(-1) === "!") {
            ret.push(messages[i].toUpperCase());
        } else if (messages[i].slice(-1) !== "?") {
            ret.push(messages[i]);
        }
    }
    return ret;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let num = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            num++;
        }
    }
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    for (let i = 0; i < colors.length; i++) {
        if (
            colors[i].toLowerCase() !== "red" &&
            colors[i].toLowerCase() !== "green" &&
            colors[i].toLowerCase() !== "blue"
        ) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let tot = 0;
    let temp = "";
    if (addends.length == 0) {
        return "0=0";
    }
    for (let i = 0; i < addends.length; i++) {
        tot += addends[i];
    }
    temp = tot.toString() + "=";
    for (let i = 0; i < addends.length; i++) {
        temp += addends[i].toString();
        if (i != addends.length - 1) {
            temp += "+";
        }
    }
    return temp;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let temp: number[] = [];
    let num = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= 0) {
            num += values[i];
        } else {
            temp.push(values[i]);
            temp.push(num);
            for (let j = i + 1; j < values.length; j++) {
                temp.push(values[j]);
            }
            return temp;
        }
        temp.push(values[i]);
    }
    temp.push(num);
    return temp;
}
