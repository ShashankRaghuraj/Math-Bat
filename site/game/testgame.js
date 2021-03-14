const resize = false;

function resizeCanvas() {
    const outerCanvasContainer = $('.fabric-canvas-wrapper')[0];

    const ratio = canvas.getWidth() / canvas.getHeight();
    const containerWidth = outerCanvasContainer.clientWidth;
    const containerHeight = outerCanvasContainer.clientHeight;

    const scale = containerWidth / canvas.getWidth();
    const zoom = canvas.getZoom() * scale;
    canvas.setDimensions({ width: containerWidth, height: containerWidth / ratio });
    canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
}

if (resize)
    $(window).resize(resizeCanvas);

let canvas = new fabric.Canvas('myCanvas', {
    backgroundColor: 'rgb(250, 250, 250)',
    selection: false,
});

canvas.on('mouse:move', function (options) {
    console.log(options.pointer.x, options.pointer.y);
})

let operators = ['+', '–', '×', '÷', '(', ')'];

let x = 0;
let y = 0;

for (let i = 0; i < operators.length; i++) {
    for (let j = 0; j < 20; j++) {
        let op = new fabric.Text(operators[i], {
            top: 300,
            left: 100 + 100 * i,
            lockRotation: true,
            lockScalingX: true,
            lockScalingY: true,
            hasBorders: false,
            hasControls: false,
        });
        op.on('mousedown', function (options) {
            x = options.target.left;
            y = options.target.top;
        });
        op.on('moved', function (options) {
            if (!(
                options.target.left > 50 &&
                options.target.left < 400 &&
                options.target.top > 75 &&
                options.target.top < 150
            )) {
                options.target.left = x;
                options.target.top = y;
            }
        });
        canvas.add(op_text);
    }

}

let reactants = [1, 2, 3];
for (let i = reactants.length - 1; i >= 0; i--) {
    canvas.add(new fabric.Text(reactants[i].toString(), {
        top: 150,
        left: 400 - 75 * i,
        selectable: false,
    }));
}

// equals sign
canvas.add(new fabric.Text('=', {
    top: 150,
    left: 450,
    selectable: false,
}));

// target value
let target = 5;
canvas.add(new fabric.Text(target.toString(), {
    top: 150,
    left: 500,
    selectable: false,
}));

// TIME
let elapsed = 30;
let time = new fabric.Text('0', {
    top: 0,
    left: 100,
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    selectable: false,
});
canvas.add(time);
setInterval(function () {
    elapsed--;
    time.set('text', `${elapsed}`);
    canvas.renderAll();
}, 1000);

// SCORE

function changeScore(new_score) {
    score.set('text', `${new_score}`);
    canvas.renderAll();
}

let score = new fabric.Text('0', {
    top: 0,
    left: 500,
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    selectable: false,
});
score.on('mousedblclick', function (options) {
    let score = prompt('yeah how much do you want bro');
    changeScore(score);
});
canvas.add(score);

if (resize)
    sresizeCanvas();












