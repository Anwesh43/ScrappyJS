function Stage(w,h)  {
    var canvas = document.createElement('canvas')
    this.moreConditions = []
    canvas.width = w
    canvas.height = h
    this.w = w
    this.h = h
    document.body.appendChild(canvas)
    this.ctx = canvas.getContext('2d')
}
Stage.prototype.loop = function(cb) {
    setInterval(function(){
      this.ctx.clearRect(0,0,this.w,this.h)
      cb(this.ctx)
      this.moreConditions.forEach((condition)=>{
        condition()
      })
    }.bind(this),100)
}
Stage.prototype.addCondition = function(cb) {
    this.moreConditions.push(cb)
}
