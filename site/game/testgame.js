let canvas = new fabric.Canvas('myCanvas', {
    backgroundColor: 'rgb(250, 250, 250)',
});

let operators = ['+', '-', '*', '/', '(', ')']

function changeScore(new_score) {
    score.set('text', 'Score: ' + new_score.toString());
}

for (let i = 0; i < operators.length; i++) {
    let op_text = new fabric.Text(operators[i], {
        top: 300,
        left: 50 * i,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        hasBorders: false,
        hasControls: false,
    });
    op_text.on('modified', function (options) {
        console.log('YOU FRICKING TOUCHED ME WHY');
    })
    canvas.add(op_text);
}

let score = new fabric.Text('Score: 0', {
    top: 0,
    left: 500,
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasBorders: false,
    hasControls: false,
});
score.on('mousedown', function (options) {
    let score = prompt('yeah how much do you want bro');
    changeScore(score);
});
canvas.add(score);















