"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.setCustomerAddress = function (address) {
        this.address = address;
    };
    Customer.prototype.isEqual = function (other) {
        return (this.firstName == other.firstName && this.lastName == other.lastName);
    };
    return Customer;
}());
exports.Customer = Customer;
