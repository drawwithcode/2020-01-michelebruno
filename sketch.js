function setup() {
    createCanvas(windowWidth, windowHeight)

    angleMode(DEGREES);

    colorMode(RGB);

    background(0,0,0);
}

function draw() {
    // put drawing code here
}

function polygon(x, y, radius, npoints) {
    let angle = 360 / npoints;
    beginShape();
    for (let a = 0; a < 360; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
