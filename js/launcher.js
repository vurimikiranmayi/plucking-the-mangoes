class Launcher{
	constructor(bodyA,bodyB){
		var options={
			bodyA:bodyA,
            bodyB:bodyB,
			stiffness:0.04,
            length:10,
			}
		this.pointB=this.pointB
        this.launcher=constraint.create(options);
        world.add(world.this.launcher);
	}

    fly(){
        this.launcher.bodyA=null;
    }

	display(){
	var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.bodyB;
    strokeweight(4);
    Line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}