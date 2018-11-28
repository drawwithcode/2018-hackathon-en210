var song
var vol
var sposta_x
var sposta_y
var caso=[]
var casob=[]
var foto
var goku

function preload(){
  // put preload code here
  song=loadSound("./Dragonball - Sigla italiana.mp3")
  foto=loadImage('./ciao.jpg')
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  song.play()

  vol=new p5.Amplitude()
  vol.setInput(song)

  for(n=0;n<8;n++){caso[n]= random(1,width/2)
  casob[n]=random(1,height/2)}

  //console.log(0+Math.floor(1/2))
}

function draw() {
  // put drawing code here
//  console.log(vol.getLevel())

  foto.filter('threshold',0.5)
goku=image(foto,0,0,width,height)


colorMode(HSB,255)
fill(0,0,0,255-vol.getLevel()*100)
rect(0,0,width,height)
colorMode(RGB)


  for(i=1;i<8;i++){
    noStroke()
    fill(255,200,0)


//
 frameRate(20)
  rotate(frameCount/100)
    ellipse(caso[i]+frameCount%(width-caso[i]),
    casob[i]+frameCount%(height-casob[i]),vol.getLevel()*210*Math.ceil(i/2)-i*10)

  for(k=0;k<i;k++){
    if(k/2%1){sposta_x=vol.getLevel()*i*15}
    else{sposta_x=-1*vol.getLevel()*i*10}

fill(200,0,0)


    star(caso[i]+sposta_x+frameCount%(width-caso[i]),
      casob[i]+Math.floor(k/2)*vol.getLevel()*60+frameCount%(height-casob[i])-vol.getLevel()*i*10,
    vol.getLevel()*25,vol.getLevel()*12,5)}
}
}




function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized(){
  createCanvas(windowWidth,windowHeight)
}
