var x, edges;


function setup() {
  createCanvas(600,600);
  x = createSprite(300, 300, 100, 100);
  x.shapeColor = 'lime';
  edges = createEdgeSprites()

}

function draw() 
{
  background('cyan');

  if (keyIsDown(RIGHT_ARROW)){
     background('black')
  }
  if (keyIsDown(LEFT_ARROW)){
      background('red')
  }
  if (keyIsDown(UP_ARROW)){
     background('green')
  }
  if (keyIsDown(DOWN_ARROW)){
     background('yellow')
  }


  x.bounceOff(edges[0])
  x.bounceOff(edges[1])
  x.bounceOff(edges[2])
  x.bounceOff(edges[3])

  

  drawSprites();
}




