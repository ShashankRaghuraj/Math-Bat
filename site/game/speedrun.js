function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getArrayRandomElement(arr) {
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}

function getnumbers(number_num) {
    let number_of_numbers = Number(number_num);
    var numbers = [];
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let step = 0; step < number_of_numbers; step++) {
        let number = getArrayRandomElement()igits;
        
        numbers.push(number);
    }
    return numbers;
    
}

function create_solution(numbers) {
    const operator_array = ["+", "-", "*", "/", ""];
    let expression = "";
    let proper_answer = "";
    for (var item in numbers) {
        expression += numbers[item];
        let element = getArrayRandomElement(operator_array);
        expression += element;
        proper_answer += element;
    }
    return expression;

}


