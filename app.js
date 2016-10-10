var stage = new Stage(600,600)
var rect1 = new RectObject(0,0,100,100)
var renderer = new Renderer(stage)
rect1.setInitialRotation(0)
rect1.setStrokeColor("black")
rect1.setFillColor("green")
rect1.setSpeedX(10)
rect1.setRotationSpeed(10)
var circle1 = new CircleObject(100,100,50)

circle1.setStrokeColor("black")
circle1.setFillColor("green")
circle1.setSpeedX(10)

var circle2 = new CircleObject(300,300,50)
circle2.setStrokeColor("black")
circle2.setFillColor("green")
circle2.setSpeedY(-10)

stage.addCondition(()=>{
  if(rect1.getX()>600) {
      rect1.setX(0)
  }
  if(circle1.getX()>600) {
      circle1.setX(0)
  }
  if(circle2.getY()<=100) {
    circle2.setSpeedY(10)
  }
  if(circle2.getY()>=400) {
      circle2.setSpeedY(-10)
  }
})
renderer.addObjects(rect1,circle1,circle2)
renderer.render()
