function Renderer(stage) {
    this.objects = []
    this.stage = stage
}
Renderer.prototype.addObjects = function() {
    for(var i in arguments) {
        this.objects.push(arguments[i])
    }
}
Renderer.prototype.render = function(){
    this.stage.loop(function(ctx){
        this.objects.forEach((object)=>{
           object.draw(ctx)
           object.move()
        })
    }.bind(this))
}
