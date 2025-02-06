// // 13
// abstract class Shape {
//   abstract getPerimiter(): number;
//   constructor(private color: string) {
//     this.color = color;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Circle extends Shape {
//   private radius: number;
//   private phi = 3.14;
//   constructor(color: string, radius: number) {
//     super(color);
//     this.radius = radius;
//   }
//   getPerimiter(): number {
//     return 2 * this.phi * this.radius;
//   }
// }
// class Rectangle extends Shape {
//   private length: number;
//   private width: number;
//   constructor(color: string, length: number, width: number) {
//     super(color);
//     this.length = length;
//     this.width = width;
//   }
//   getPerimiter(): number {
//     return 2 * (this.width + this.length);
//   }
// }
// const circle_1 = new Circle("red", 23);
// const rectange_1 = new Rectangle("yellow", 24, 24);
// console.log(rectange_1.getPerimiter());
// 14
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.makeSound = function (sound) {
        console.log(sound);
    };
    return Tiger;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.makeSound = function (sound) {
        console.log(sound);
    };
    return Lion;
}(Animal));
var lion_1 = new Lion("Lion");
lion_1.makeSound("Roar");
var tiger_1 = new Tiger("Tiger");
tiger_1.makeSound("Roarrr");
