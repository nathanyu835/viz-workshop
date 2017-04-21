function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    /*let red = random(255);
    let green = random(255);
    let blue = random(255);
    fill(red, green, blue);*/
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  rect(mouseX,mouseY,50,50);
  stroke(255, 255, 255, 25);

}
