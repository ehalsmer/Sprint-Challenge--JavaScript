// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
    cubeVolume(){
        return this.length * this.length * this.length;
    };
    cubeSurfaceArea(){
        return 6 * (this.length * this.length)
    };
}

class CubeMaker extends CuboidMaker {
    constructor(length){
        super(length, length, length); // Since here we're sending length to CuboidMaker for not only length, but also width and height, we can use the original volume() and surface() functions for cubes as well. 
    };
};

const cuboid = new CuboidMaker(4, 5, 5);
console.log(cuboid);
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

const cubeOne = new CubeMaker(7);
console.log(cubeOne);
console.log(cubeOne.volume()); // 7 * 7 * 7
console.log(cubeOne.surfaceArea()); // 2 * (49 + 49 + 49)
console.log(cubeOne.cubeVolume()); // 7 * 7 * 7
console.log(cubeOne.cubeSurfaceArea()); // 6 * (7 * 7)
