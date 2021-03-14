let canvas = new fabric.Canvas('myCanvas', {
    backgroundColor: 'rgb(250, 250, 250)',
    selection: false,
});

/*
canvas.on('mouse:move', function (options) {
    console.log(options.pointer.x, options.pointer.y);
})
*/

let problem = create_solution(random_numbers(6));

console.log(problem);

let operators = ['+', '-', '*', '/'];

let x = 0;
let y = 0;

let ops_chosen = [];
function reset_ops_chosen() {
    ops_chosen = [];
    for (let i = 0; i < problem[3].length; i++)
        ops_chosen.push("");
}
reset_ops_chosen();

function within(blank, x, y) {
    return x > blank.left && x < blank.left + blank.width
        && y > blank.top && y < blank.top + blank.height;
}

let ops = [];
for (let i = 0; i < operators.length; i++) {
    for (let j = 0; j < 20; j++) {
        let op = new fabric.Text(operators[i], {
            top: 400,
            left: 250 + 100 * i,
            lockRotation: true,
            lockScalingX: true,
            lockScalingY: true,
            hasBorders: false,
            hasControls: false,
            MY_defaulttop: 400,
            MY_defaultleft: 250 + 100 * i,
            MY_isoperator: true,
            MY_operatorkind: operators[i],
        });
        op.on('mousedown', function (options) {
            x = options.target.left;
            y = options.target.top;
        });
        op.on('moved', function (options) {
            let t = options.target;
            let success = false;
            for (let i = 0; i < blanks.length; i++) {
                let blank = blanks[i];
                if (within(blank, t.left, t.top)) {
                    ops_chosen[blank.MY_position] = t.MY_operatorkind;
                    console.log(ops_chosen);
                    success = true;
                    t.left = blank.left + margin - 10;
                    t.top = blank.top + margin - 20;

                    let equal = true;
                    for (let i = 0; i < problem[3].length; i++) {
                        if (ops_chosen[i] != problem[3][i]) {
                            equal = false;
                            break;
                        }
                    }
                    if (equal) {
                        alert('you did it buddy');
                        points += 69;
                        elapsed += 69
                        problem = create_solution(random_numbers(7));
                        reset_ops_chosen();
                        reset_reactants();
                        for (let i = 0; i < ops.length; i++)
                        {
                            ops[i].top = ops[i].MY_defaulttop;
                            ops[i].left = ops[i].MY_defaultleft;
                        }
                        changeScore(points);
                        console.log(problem);
                    }
                    break;
                }
            }
            if (!success) {
                t.left = x;
                t.top = y;
            }
        });
        ops.push(op);
        canvas.add(op);
    }
}

// blanks
let current_blank = null;
let blanks = [];
const n_numbers = 8;
const margin = 32;
for (let i = 0; i < n_numbers; i++) {
    let x_pos = 300 + 75 * i;
    let blank = new fabric.Rect({
        top: 260 - margin,
        left: x_pos - margin,
        width: 2 * margin,
        height: 2 * margin,
        fill: 'red',
        opacity: 0.02,
        selectable: false,
        MY_position: i,
    });
    blanks.push(blank);
    canvas.add(blank);
}
console.log(blanks);

// REACTANTS
let reactants = [];
function reset_reactants() {
    for (let i = 0; i < reactants.length; i++)
        canvas.remove(reactants[i]);
    reactants = [];
    for (let i = 0; i < problem[1].length; i++) {
        let reactant = new fabric.Text(problem[1][i].toString(), {
            top: 240,
            left: 250 + 75 * i,
            selectable: false,
        });
        reactants.push(reactant);
        canvas.add(reactant);
    }
}
reset_reactants();

// equals sign
canvas.add(new fabric.Text('=', {
    top: 240,
    left: 200,
    selectable: false,
}));

// target value
let target = null;
function reset_target() {
    let target = new fabric.Text(problem[2].toString(), {
        top: 240,
        left: 100,
        selectable: false,
    });
    canvas.add(target);
}
reset_target();

// TIME
let elapsed = 420;
let time = new fabric.Text('0', {
    top: 50,
    left: 100,
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
let points = 0;
let score = new fabric.Text('0', {
    top: 50,
    left: 800,
    selectable: false,
});
score.on('mousedblclick', function (options) {
    let score = prompt('yeah how much do you want lol');
    changeScore(score);
});
canvas.add(score);
