const GRAVITY = 1.625;

let l = new Ship();

let hSpeed = 0;
let hAccel = 0;
let vPos = 0;
let vSpeed = 0;
let vAccel = 0;
let fuelRemaining = 0;

const SCREEN_WIDTH = 1600;
const SCREEN_HEIGHT = 800;

function setup()
{
    createCanvas(800, 400);
}

function mouseWheel(event)
{
  l.throttle -= 0.01 * event.getCount();
  l.throttle = constrain(l.throttle, 0, 1);
}

function draw()
{
    background(0);
    fill(0);
    stroke(255);

    // HUD
    push();
    fill(255);
    text(vPos, 50, 40);
    text(vSpeed, 50, 50);
    text(vAccel, 50, 60);
    text(hSpeed, 50, 70);
    text(hAccel, 50, 80);
    text(fuelRemaining, 50, 90);
    if (frameCount % 30 == 0)
    {
        vPos = l.position.y;
        vSpeed = l.velocity.y;
        vAccel = l.acceleration.y;
        hSpeed = l.velocity.x;
        hAccel = l.acceleration.x;
        fuelRemaining = l.fuel;
    }
    pop();
    // fuel
    rect(50, 100, 50, 100);
    line(50, lerp(200, 100, l.throttle), 100, lerp(200, 100, l.throttle));
    // rotation indicator
    push();
    translate(100, 300);
    scale(1, -1);
    strokeWeight(5);
    line(0, 0, 20 * l.rotation.x, 20 * l.rotation.y);
    strokeWeight(10);
    point(20 * l.rotation.x, 20 * l.rotation.y);
    pop();

    if (keyPressed)
    {
        if (keyCode == LEFT)
            l.rotation.rotate(0.05);
        else if (keyCode == RIGHT)
            l.rotation.rotate(-0.05);
    }

    pushMatrix();  
    translate(0.5 * SCREEN_WIDTH, SCREEN_HEIGHT);
    scale(2, -2);

    if (l.position.x < -0.5 * SCREEN_WIDTH)
        l.position.x = 0.5 * SCREEN_WIDTH;
    else if (l.position.x > 0.5 * SCREEN_WIDTH)
        l.position.x = -0.5 * SCREEN_WIDTH;

    l.update(1 / frameRate);
    l.draw();
    popMatrix();
}
