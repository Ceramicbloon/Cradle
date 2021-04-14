class rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        this.rope=Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        var line1x = pointA.x
        var line1y = pointA.y
        var line2x = pointB.x+this.offsetX
        var line2y = pointB.y+this.offsetY
        strokeWeight(2)
        line(line1x, line1y, line2x, line2y)
    }
}