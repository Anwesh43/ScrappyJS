# ScrappyJS
##A very Scrappy 2d game framework
###ScrappyJS is a javascript library written to easily create 2d games

##Important Components
```
  Create some basic objects like rectangle or circle and define how they move, how they look
  Create a stage which will the canvas where all the rendering takes place
  Create a Renderer by passing the stage we have defined above. It will render the objects
```

##To create a stage
```
  var stage = new Stage(width,height)
```

##To create a Rectangle at 0,0, having width 100 and height 100
```
  var rect = new RectObject(0,0,100,100)
```

##Setting the linear speed of a object
```
    rect.setSpeedX(10)
```
##Setting the background color of the object

```
    rect.setFillColor("green")
```
##Creating a Renderer
```
    var renderer = new Renderer(stage)
```
##Adding objects to renderer
```
   renderer.addObjects(rect,rect1....)
```
##Rendering all changes
```
   renderer.render()
```

###And there are many more functionalities like setting rotation speed and creating a circle. To see a fully functional game see example/demo


##Usage
```
   git clone https://github.com/Anwesh43/ScrappyJS

   in html file do
   <script src="/lib/Stage.js"></script>
   <script src="/lib/GameObject.js"></script>
   <script src="/lib/Renderer.js"></script>
```
