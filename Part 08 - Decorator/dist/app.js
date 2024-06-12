"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function PropertyDecorator(target, propertyName) {
    console.log(`Property ${propertyName}`);
    console.log(target, propertyName);
}
function AccessorDecorator(target, accessorName, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
}
function MethodDecorator(target, targetName, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(targetName);
    console.log(descriptor);
}
function ParamaterDecorator(target, name, position) {
    console.log("Paramater Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set changePriceTo(value) {
        if (value > 0) {
            this.price = value;
        }
        else {
            throw new Error("You cannot have a negative number");
        }
    }
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getPriceWithTax(tax) {
        const priceTax = (this.price * tax) / 100;
        return tax + priceTax;
    }
}
__decorate([
    PropertyDecorator
], Product.prototype, "title", void 0);
__decorate([
    AccessorDecorator
], Product.prototype, "changePriceTo", null);
__decorate([
    MethodDecorator,
    __param(0, ParamaterDecorator)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map