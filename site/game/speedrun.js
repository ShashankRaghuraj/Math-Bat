var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
function getArrayRandomElement (arr) {
        if (arr && arr.length) {
          return arr[Math.floor(Math.random() * arr.length)];
        }
        // The undefined will be returned if the empty array was passed
      }
    function getnumbers(number_num) {
        number_of_numbers = Number(number_num);
        let numbers = [];
        for (let step = 0; step < number_of_numbers; step++) {
           number = getRandomInt(9);
           numbers.push(number);}
        return numbers;}
        
    function create_solution(numbers) {
        let operator_array = ["+", "-", "*", "/", ""];
        let expression = "";
        for (let item in numbers) {
            expression += item
            let element = getArrayRandomElement(operator_array);
            expression += element
        
        }

        

    }

    