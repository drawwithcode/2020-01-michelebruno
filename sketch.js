let sideSlider,
    repeatSlider,
    wUnit,
    hUnit;

function setup() {
    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES);

    colorMode(RGB);

    wUnit = width / 6;
    hUnit = height / 6;

    background(0, 0, 0);

    frameRate(30);

    let repeat = createDiv('<h3>Repeat it</h3>');
    repeat.style('color', 'white')
    repeat.position(width - wUnit, height / 2);
    repeat.size(wUnit / 3);


    repeatSlider = createSlider(1, 10, 6, 1);
    repeatSlider.size(wUnit / 3);
    // repeatSlider.position(width - wUnit, height / 2)
    repeatSlider.parent(repeat);

    let side = createDiv('<h3>Shape it</h3>');
    side.style('color', 'white');
    side.position(wUnit / 2, height / 2);
    side.size(wUnit / 3);

    sideSlider = createSlider(2, 13, 6, 1);
    sideSlider.parent(side);
    sideSlider.style('width', '100%');


    noFill();
    strokeWeight(3);
    stroke('white');
}

function draw() {

    background(0, 0, 0, 18);
    translate(width / 2, height / 2);

    let h = sin(frameCount * 2) * wUnit,
        d = repeatSlider.value();


    for (let i = 0; i < d; i++) {
        push();

        rotate(i * 360 / d);

        let g = map(mouseY, 0, windowHeight, 80, 200);
        let r = map(mouseX, 0, windowWidth, 80, 255);
        let b = map(r * g + 1, 0, 255 * 255, 0, 250);

        stroke(lerpColor(color(b, g, r), color(r, g, b), i / d));

        translate(h, 0);

        let p = sideSlider.value()
        f = p > 12 ? ellipse : polygon;

        f(sin(frameCount) * 150, -sin(frameCount) * 150, (cos(frameCount) + 1.1) * wUnit/3, p > 12 ? undefined : p)

        pop();
    }


}

function drawpoly() {
    polygon(sin(frameCount) * 150, -sin(frameCount) * 150, (cos(frameCount) + 1.1) * 80, sideSlider.value())

    // ellipse(cos(frameCount) * 150, sin(frameCount) * 50, (cos(frameCount) + 1.5) * 100);
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
