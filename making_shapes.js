// Making shapes
class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {
        return 0;
    }

    toString() {
        return `This shape is $ 
        {this.color}`;
    }
}
    class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `This shape is ${this.color} and has a width of ${this.width} and a height of {this.height}.;`
    } 
    }
 class Circle extends Shape {
    constructor(color) {
        super(color);
        this.radius = "radius";
    }
    getArea() {
        return Math.Pi * radius ^ 2
    }
    toString() {
        return `This shape is ${this.color} and has a radius of ${this.radius}.;`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.base = "base";
        this.height = "height";
    }
    getArea() {
        return 0.5 * base * height;
    }
    toString() {
        return `This shape is ${this.color}  and has a base of ${this.base} and a height ${this.height}.;`
    }
}

const rectangle = new Rectangle('Pink', 5, 10);
const circle = new Circle('Red', 15);
const triangle = new Triangle('Ash', 10, 20);

console.log(`Is rectangle an instance of Rectangle?`, rectangle instanceof Rectangle);
console.log(`Is circle an instance of Circle?`, circle instanceof Circle);
console.log(`Is triangle an instance of Triangle?`, triangle instanceof Triangle);