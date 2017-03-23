var firstObject = function () {
    this.firstValue = '1';
}
firstObject.prototype.FirstMultiply = function () {
    return this.firstValue * this.firstValue;
}

var secondObject = function () {
    firstObject.call(this);
    this.secondValue = '2';
}

secondObject.prototype = Object.create(firstObject.prototype);

secondObject.prototype.SecondMultiply = function () {
    return this.secondValue * this.firstValue;
}

var thirdObject = function () {
    secondObject.call(this);
    this.thirdValue = '3';
}

thirdObject.prototype = Object.create(secondObject.prototype);

thirdObject.prototype.ThirdMultiply = function () {
    return this.thirdValue * this.secondValue * this.firstValue;
}

var accessAllVariableObject = new thirdObject();

console.log(accessAllVariableObject.SecondMultiply());