
let gameState="start"
let btnplay
let inicial
let cenarios = []
let sprites = []
let transicao = false
let transitionAlpha=0;
let telaAtual

function preload(){
  inicial= loadImage("img/inicial.avif")
  cenários [ 0 ] = loadImage("img/mapa.webp")
  sprites[0] = loadImage("img/start.png" )

}
function setup() {
  createCanvas(700, 550);
  criarSprites()
}

function draw() {
  background(220);
  telainicial()
  verificarStatus()
  transicaoTel(telaAtual)
  
  if (btnplay.mouse.hovering()){
  mouse.cursor = 'pointer';
  btnplay.scale = 1.50
}
  else {
    mouse.cursor = 'default';
    btnplay.scale = 1
  }

}
function criarSprites(){
  btnplay = new Sprite ()
  btnplay.w = 100;
  btnplay.h = 50;
  btnplay.x = width/2;
  btnplay.y = 400;
  btnplay.image = sprites[0]
  btnplay.image.scale = 0.75
  
}

function telainicial(){
  img=image(inicial,0,0,width,height)
  textAlign(CENTER)
  textSize(40)
  fill("black")
  text("Super Bunny Quest", width/2, height/2)


}

function mousePressed(){
  if(gamestate === 'start' && btnplay.mouse.pressing()){
    transicao = true;
    trnsitionAlpha = 0;
    telaAtual = 'playing'
    btnplay.visible = false;
  }
}

function verificarStatus(){
  switch (gameState){
      case "start":
      telainicial()
      break;
      case "playig":
      telaDojogo()
      break;
      }
}
function telaDojogo(){
  image(cenarios[0],0,0,width,height)
  }
function trnsicaoTela(mapa.webp){
  if (trnsicao){
    fill(0, transitionAlha);
  noStroke();
    rect(00,width,height);
    transitionAlpha+=5;
    if (trnsitionAlpha >= 255) {
      trasicao = false;
      gameState = novaTela;
      transitionAlpha = 255;
      setTimeout( () => { transitionAlpha = 0;})
    }