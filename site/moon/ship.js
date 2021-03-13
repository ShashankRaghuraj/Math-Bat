console.log(blue(color(0, 0, 0)));

class Ship
{
    constructor() {
        this.position = createVector(0, 156);
        this.velocity = createVector(21, -5);
        this.acceleration = createVector(0, 0);
        this.rotation = p5.Vector.fromAngle(HALF_PI);
        this.throttle = 0.5;
        this.size = 10;
        this.maxForce = 45000; // N
        this.dryMass = 6855;
        this.fuel = 8248; // kg
        this.efficiency = 0.00001;
    }

    update(delta)
    {
        acceleration = createVector(0, -GRAVITY);

        if (fuel > 0)
        {
            let force = throttle * maxForce;
            let thrust = force / (dryMass + fuel);
            acceleration.add(p5.Vector.mult(rotation, thrust));
            fuel -= force * efficiency;
        }

        velocity.add(p5.Vector.mult(acceleration, delta));
        position.add(p5.Vector.mult(velocity, delta));

        if (position.y < 0)
        {
            position.y = 0;
            velocity.y *= -0.25;
            velocity.x = 0;
        }
    }

    draw()
    {
        circle(position.x, position.y, size);
        let pointLocation = p5.Vector.add(position, p5.Vector.mult(rotation, 0.3 * size));
        circle(pointLocation.x, pointLocation.y, 0.1 * size);
    }
}
