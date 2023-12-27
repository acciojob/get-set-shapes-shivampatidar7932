//complete this code
class Rectangle {
	constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
	constructor(side) {
    // Calling the constructor of the superclass (Rectangle) with the same side for width and height
    super(side, side);
  }

  // Method to calculate and return the perimeter of the square
  getPerimeter() {
    // The perimeter of a square is the sum of all four sides
    return 4 * this.width;
  }
}
const rectangle = new Rectangle(5, 10);
console.log( rectangle.getArea());

const square = new Square(4);
console.log( square.getArea());
console.log( square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
