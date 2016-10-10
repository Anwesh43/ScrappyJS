function GameObject(x,y){
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
    this.speedRot = 0
    this.deg = 0
    this.fillColor = "black"
    this.strokeColor = "black"
}
GameObject.prototype.setInitialRotation = function(deg){
    this.deg = deg
}
GameObject.prototype.setRotationSpeed = function(speedRot){
    this.speedRot = speedRot
}
GameObject.prototype.setSpeedX = function(speedX){
    this.speedX = speedX
}
GameObject.prototype.setSpeedY = function(speedY){
    this.speedY = speedY
}
GameObject.prototype.draw = function(ctx){

}
GameObject.prototype.setStrokeColor = function(color) {
    this.strokeColor = color
}
GameObject.prototype.setFillColor = function(color) {
    this.fillColor = color
}
GameObject.prototype.move = function()  {
    this.x += this.speedX
    this.y += this.speedY
    this.deg += this.speedRot*Math.PI/180
}
GameObject.prototype.getX = function() {
    return this.x
}
GameObject.prototype.getY = function() {
    return this.y
}
GameObject.prototype.setX = function(x) {
    this.x = x
}
GameObject.prototype.setY = function(y) {
    this.y = y
}
function RectObject(x,y,w,h) {
    GameObject.call(this,x,y)
    this.w = w
    this.h = h
}
RectObject.prototype = Object.create(GameObject.prototype)

RectObject.prototype.draw = function(ctx) {
   ctx.fillStyle = this.fillColor
   ctx.strokeStyle = this.strokeColor
   ctx.save()
   ctx.translate(this.x+this.w/2,this.y+this.h/2)
   ctx.rotate(this.deg)
   ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h)
   ctx.restore()
}

function CircleObject(x,y,r){
    GameObject.call(this,x,y)
    this.r = r
}
CircleObject.prototype = Object.create(GameObject.prototype)

CircleObject.prototype.draw = function(ctx) {
   ctx.fillStyle = this.fillColor
   ctx.strokeStyle = this.strokeColor
   ctx.save()
   ctx.translate(this.x+this.r,this.y+this.r)
   ctx.rotate(this.deg)
   ctx.beginPath()
   ctx.arc(0,0,this.r,0,2*Math.PI)
   ctx.fill()
   ctx.stroke()
   ctx.restore()
}
