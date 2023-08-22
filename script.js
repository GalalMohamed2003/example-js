class Shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    ToString() {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ]`;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, filled, radius) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return `Radius = ${this.radius}`;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    ToString() {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} , Radius = ${this.getRadius()} ]`;
    }
}
class Rectangle extends Shape {
    width;
    lenght;
    constructor(color, filled, width, lenght) {
        super(color, filled);
        this.width = width;
        this.lenght = lenght;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLenght() {
        return this.lenght;
    }
    setLenght(lenght) {
        this.lenght = lenght;
    }
    getArea() {
        return this.width * this.lenght;
    }
    getPerimeter() {
        return this.width + this.lenght;
    }
    ToString() {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ],[ width = ${this.getWidth()} , Lenght = ${this.getLenght()}]`;
    }
}
class Square extends Rectangle {
    side;
    constructor(color, filled, width, lenght, side) {
        super(color, filled, width, lenght);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    ToString() {
        return `Square => Rectangle [Shape [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ],[ width = ${this.getWidth()} , Lenght = ${this.getLenght()}]]`;
    }
}
const shape = new Shape('red', true);
console.log(shape.ToString());
console.log(`Color = ${shape.getColor()}`);
console.log(`Filled =  ${shape.getFilled()}`);
shape.setColor('green');
console.log(`New Color = ${shape.getColor()}`);
shape.setFilled(false);
console.log(`Filled =  ${shape.getFilled()}`);
console.log("============================================");
const circle = new Circle('red', true, 1.0);
console.log(circle.ToString());
console.log(circle.getRadius());
circle.setRadius(2);
console.log(circle.getRadius());
console.log(`Area = ${circle.getArea()}`);
console.log(`Perimeter = ${circle.getPerimeter()}`);
console.log("============================================");
const rect = new Rectangle('red', true, 1.0, 1.0);
console.log(rect.ToString());
console.log(`Width = ${rect.getWidth()}`);
rect.setWidth(5);
console.log(`Width = ${rect.getWidth()}`);
console.log(`Lenght = ${rect.getLenght()}`);
rect.setLenght(4);
console.log(`Lenght = ${rect.getLenght()}`);
console.log(`Area = ${rect.getArea()}`);
console.log(`Perimeter = ${rect.getPerimeter()}`);
console.log("============================================");
const square = new Square('red', true, 1.0, 1.0, 1.0);
console.log(square.ToString());
