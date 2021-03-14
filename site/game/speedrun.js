function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getArrayRandomElement(arr) {
    if (arr && arr.length) {
        return arr[getRandomInt(arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}

function getnumbers(number_num) {
    let number_of_numbers = Number(number_num);
    var numbers = [];
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let step = 0; step < number_of_numbers; step++) {
        let number = getArrayRandomElement(digits);
        numbers.push(number);
    }
    return numbers;
}

function create_solution(numbers) {
    const operator_array = ["+", "-", "*", "/", ""];
    let expression = "";
    let proper_answer = "";
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        expression += item;
        let element = getArrayRandomElement(operator_array);
        expression += element;
        proper_answer += element;
    }
    var last_char = expression.charAt(-1);
    if (last_char === "+"||last_char === "-"||last_char === "*"||last_char === "/"){
    	expression = expression.slice(0, -1);
    	
    }
    let answer = eval(expression);
    return [expression, numbers, answer];

}

console.log(create_solution(getnumbers(6)));
