let Vquantidade  = 1000
let VtamanhoMax  = 3
let VvelocidadeX = 3
let VvelocidadeY = 5
let Vvermelho  = 55
let Vverde  = 55
let Vazul  = 255

let balls = [];



window.onload = function(){
    display()
}

function display(){

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  
  document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    Vquantidade = parseInt(document.querySelector("#quantidade").value);
    VtamanhoMax = parseInt(document.querySelector("#tamanho").value);
    VvelocidadeX = parseInt(document.querySelector("#velocidadeX").value);
    VvelocidadeY = parseInt(document.querySelector("#velocidadeY").value);

    if(isNaN(Vquantidade)){
      Vquantidade = 10
    }

    if(isNaN(VtamanhoMax)){
      VtamanhoMax = 3
    }

    if(isNaN(VvelocidadeX)){
      VvelocidadeX = 0
    }

    if(isNaN(VvelocidadeY)){
      VvelocidadeY = 0
    }
    
    balls = [];
    CriarConjunto(Vquantidade, VtamanhoMax, VvelocidadeX, VvelocidadeY, Vvermelho, Vverde, Vazul);
  });


  document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    Vvermelho = parseInt(document.querySelector("#vermelho").value);
    Vverde = parseInt(document.querySelector("#verde").value);
    Vazul = parseInt(document.querySelector("#azul").value);

    if(isNaN(Vvermelho)){
    Vvermelho = 255
    }

    if(isNaN(Vverde)){
    Vverde = 255
    }

    if(isNaN(Vazul)){
    Vazul = 255
    }
    
    balls = [];
    CriarConjunto(Vquantidade, VtamanhoMax, VvelocidadeX, VvelocidadeY, Vvermelho, Vverde, Vazul);
  });


CriarConjunto(Vquantidade,VtamanhoMax,VvelocidadeX,VvelocidadeY,Vvermelho,Vverde,Vazul)

function CriarConjunto(quantas,tamanhoMax,velocidadeXMax,velocidadeYMax,red,green,blue){

for(i=1;i<quantas+1;i++){

    var tempSize = random(0,tamanhoMax)
    var tempX = random(tempSize*3,width-tempSize*3)
    var tempY = random(tempSize*3,height-tempSize*3)
    var tempVX = random(0,velocidadeXMax)
    var tempVY = random(0,velocidadeYMax)
    var tempCor = 'rgb('+random(0,red)+', '+random(0,green)+', '+random(0,blue)+')'

    var ball = new Ball(tempX, tempY, tempVX, tempVY, tempCor, tempSize)

    balls.push(ball);

}
}

Ball.prototype.update = function() {
if ((this.x + this.size) >= width) {
  this.velX = -(this.velX);
}

if ((this.x - this.size) <= 0) {
  this.velX = -(this.velX);
}

if ((this.y + this.size) >= height) {
  this.velY = -(this.velY);
}

if ((this.y - this.size) <= 0) {
  this.velY = -(this.velY);
}


this.x += this.velX;
this.y += this.velY;
}

function loop() {

ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
ctx.fillRect(0, 0, width, height);

for (let i = 0; i < balls.length; i++) {
  balls[i].draw();
  balls[i].update();
}

requestAnimationFrame(loop);
}
loop();

}
