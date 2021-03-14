const operator_array = ["+", "-", "*", ""];

function random_int(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function random_array_element(arr) {
    if (arr && arr.length) {
        return arr[random_int(arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}

function random_numbers(number_num) {
    let number_of_numbers = Number(number_num);
    var numbers = [];
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let step = 0; step < number_of_numbers; step++) {
        let number = random_array_element(digits);
        numbers.push(number);
    }
    return numbers;
}

function create_solution(numbers) {
    let expression = "";
    let operators = [];
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        expression += item;
        let operator = random_array_element(operator_array);
        expression += operator;
        operators.push(operator);
    }
    var last_char = expression.charAt(expression.length - 1);
    if (operator_array.includes(last_char)) {
        expression = expression.slice(0, -1);

    }
    operators = operators.slice(0, -1);
    let answer = eval(expression);
    return [expression, numbers, answer, operators];
}
