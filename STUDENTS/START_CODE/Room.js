"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(roomId, numberOfBed) {
        this.roomId = roomId;
        this.numberOfBed = numberOfBed;
        this.customers = [];
    }
    Room.prototype.isRoomFull = function () {
        var isNotFull = false;
        if (this.customers.length < this.numberOfBed) {
            isNotFull = true;
        }
        return isNotFull;
    };
    Room.prototype.customerIsInHotel = function (customer) {
        var isNotInHotel = false;
        this.customers.forEach(function (cust) {
            if (cust.isEqual(customer)) {
                isNotInHotel = true;
            }
        });
        return isNotInHotel;
    };
    Room.prototype.registerCustomer = function (customer) {
        if (this.isRoomFull()) {
            if (this.customerIsInHotel(customer)) {
                this.customers.push(customer);
            }
        }
    };
    return Room;
}());
exports.Room = Room;
