let captura;

function setup() {
  createCanvas(400, 400);
  captura = createCapture(VIDEO, {flipped:true});
  captura.size(windowWidth,windowHeight);
  captura.hide();
}

function draw() {
  background(220);
  imageMode(captura, 0, 0, CENTER);
}
