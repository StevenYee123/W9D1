export default class Bird {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 3; 
        this.y = this.dimensions.height / 2;
        this.velocity = 0;
    }

    animate(context){
        this.drawBird(context);
    }

    drawBird(context){
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, 40, 30);
    }
}