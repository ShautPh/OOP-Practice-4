"use strict";
exports.__esModule = true;
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(name) {
        this.name = name;
        this.rooms = [];
    }
    Hotel.prototype.setAddressHotel = function (address) {
        this.address = address;
    };
    Hotel.prototype.addRoomToHotel = function () {
        var rooms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rooms[_i] = arguments[_i];
        }
        this.rooms = this.rooms.concat(rooms);
    };
    return Hotel;
}());
exports.Hotel = Hotel;
