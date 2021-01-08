class Hero
{
    constructor(x,y,r)
    {

        var options = 
        {
            density: 1,
            frictionAir: 1
        }


        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)        
        World.add(world, this.body);
    }

    display()
    {
        var heropos = this.body.position;
        
        push()
        translate(heropos.x, heropos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)

        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop()
    }
}