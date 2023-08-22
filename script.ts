class Shape {
    private color: string;
    private filled: boolean;

    constructor(color: string, filled: boolean) {

        this.color = color;
        this.filled = filled;
    }

    getColor(): string {
        return  this.color
    }

    setColor(color: string): void {
        this.color = color
    }
    getFilled(): boolean {
        return this.filled
    }
    setFilled(filled: boolean): void {
        this.filled = filled;
    }
    ToString(): string {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ]`
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }


    getRadius(): string {
        return `Radius = ${this.radius}`
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
    ToString(): string {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} , Radius = ${this.getRadius()} ]`
    }
}

class Rectangle extends Shape {
    private width: number
    private lenght: number

    constructor(color: string, filled: boolean, width: number, lenght: number) {
        super(color, filled)
        this.width = width;
        this.lenght = lenght
    }
    getWidth(): number {
        return this.width
    }
    setWidth(width: number): void {
        this.width = width;
    }
    getLenght(): number {
        return this.lenght
    }
    setLenght(lenght: number): void {
        this.lenght = lenght;
    }
    getArea(): number {
        return this.width * this.lenght
    }
    getPerimeter(): number {
        return this.width + this.lenght
    }
    ToString(): string {
        return `Shape => [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ],[ width = ${this.getWidth()} , Lenght = ${this.getLenght()}]`
    }
}

class Square extends Rectangle {
    private side: number

    constructor(color: string, filled: boolean, width: number, lenght: number, side: number) {
        super(color, filled, width, lenght)

        this.side = side;
    }

    getSide(): number {
        return this.side
    }
    setSide(side: number): void {
        this.side = side;
    }

   ToString(): string {
       return `Square => Rectangle [Shape [ Color = ${this.getColor()}  , Filled = ${this.getFilled()} ],[ width = ${this.getWidth()} , Lenght = ${this.getLenght()}]]`
   }
}


const shape = new Shape ('red' , true)
console.log(shape.ToString())

console.log(`Color = ${shape.getColor()}`);
console.log(`Filled =  ${shape.getFilled()}`);

shape.setColor('green')
console.log(`New Color = ${shape.getColor()}`);

shape.setFilled(false)
console.log(`Filled =  ${shape.getFilled()}`);



console.log("============================================")

const circle = new Circle('red',true,1.0)
console.log(circle.ToString())

console.log(circle.getRadius())
circle.setRadius(2)
console.log(circle.getRadius())


console.log( `Area = ${circle.getArea()}`)
console.log(`Perimeter = ${circle.getPerimeter()}`)




console.log("============================================")

const rect = new Rectangle('red',true,1.0,1.0)
console.log(rect.ToString())

console.log(`Width = ${rect.getWidth()}`)
rect.setWidth(5)
console.log(`Width = ${rect.getWidth()}`)

console.log(`Lenght = ${rect.getLenght()}`)
rect.setLenght(4)
console.log(`Lenght = ${rect.getLenght()}`)

console.log( `Area = ${rect.getArea()}`)
console.log(`Perimeter = ${rect.getPerimeter()}`)

console.log("============================================")

const square = new Square('red',true,1.0,1.0,1.0)

console.log(square.ToString())
