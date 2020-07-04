const Joi = require("joi");

class Car {
    CarId;
    Availability;
    Price;
    ModelName;
    RegNo;
}

function validateCar(car) {
    const schema = {};

    return Joi.validate(car, schema);
}

exports.Car = Car;
exports.validateCar = validateCar;
