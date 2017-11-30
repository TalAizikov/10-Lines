let spacing = 10;
let x = 0;
let y = 0;

function setup () {
    createCanvas(400,400);
    background(0);
}
function draw() {
    stroke(random(365));
    if (random(1) < 0.12) {
        stroke(random(365), random(365), random(365))
    }
    if (random(1) < 0.5) {
        line(x, y, x+spacing + random(5), y+spacing + random(5));
        } else {
            line(x,y + spacing + random(5), x + spacing + random(5), y)
        }
    x += spacing;
    if (x > width) {
        x = 0;
        y += spacing;
    }
}
