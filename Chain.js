class Chain{
    constructor( bodyA, bodyB ){
        var options={
            bodyA: bird.body,
            bodyB: Log6.body, 
            stiffness:0.5, 
            length:10
        }
        this.body= Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        var pointA= this.body.bodyA.position;
        var pointB= this.body.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}