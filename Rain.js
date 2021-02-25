class Rain {
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.1,
            density:0.1
        }

        this.body = Bodies.circle(x,y,r/2, options);
        this.rainImage=loadImage("rain.png");
        World.add(world,this.body);

       
    }

    


display() {
    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }
    image(this.rainImage,this.position.x,this.position.y);
}
}