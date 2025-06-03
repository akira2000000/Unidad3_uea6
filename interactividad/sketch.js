let imagenActual = null;
let img1, img2, img3;
let posX = 0;
let posY = 0;
let frase= "Quisiera Saber - Los Daniels";
let frase1= "";
let frase2= "";
let colorFondo = "gray";
let colorTexto = "white";


function preload() {
  img1 = loadImage('assets/E.png');
  img2 = loadImage("assets/Y.jpg");
  img3 = loadImage("assets/P.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    background(200);
    textSize(50);

}

function draw() {
  background(colorFondo);
  
  fill(colorTexto);
  text(frase, 200, 200);
  text(frase1, 500, 400);
  text(frase2, 900, 500);

      // Draw the image.
  if (imagenActual){
    image(imagenActual, posX, posY, 300, 400);
  }

}

function keyPressed(){
 
  if(key == 'q'){
    frase = ("quisiera saber si eres TU");
  }

  if (key === 'w') {
    colorTexto = "white";
  }

  if(key == 'e'){
    imagenActual = img1;
    posX = 200;
    posY = 300;
  }

    if (key === 'r') {
    colorFondo = "red"; // cambia a azul
  }

  if(key == "t"){
    frase1="solo TU cuerpo sigue aqui";
  }

  if(key == 'y'){
    imagenActual = img2;
    posX = 700;
    posY = 500;
  }

  if(key == "i"){
    frase2="esperando por TI";
  }

  if(key == 'p'){
    imagenActual = img3;
    posX = 1300;
    posY = 500;
  }
}