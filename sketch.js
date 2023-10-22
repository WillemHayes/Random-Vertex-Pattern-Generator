function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  var colors = ['#503eff', '#b0b6ff', '#99ffa3', '#85ff0c', '#38305b'];
  var vertexLimit = random(3, 6);
  var shapeLimit = random(2, 3);

  for (var j = 0; j <= shapeLimit; j++) {
    beginShape();

    blendMode(MULTIPLY);
    noStroke();
    fill(random(colors));

    for (var i = 0; i <= vertexLimit; i++) {
      vertex(random(50, 350), random(50, 350));
    }

    endShape(CLOSE);
    
    }
    
  noLoop();
  
}