import { Address } from "./Address";
import { Customer } from "./Customer";
import { Hotel } from "./Hotel";
import { Room } from "./Room";

let customer1 = new Customer('sauth','phouek');
let address1 = new Address('Phnom Penh', 'st 2004', 'Cambodia');
customer1.setCustomerAddress(address1);

let Room1 = new Room(1, 2);
let Room2 = new Room(2, 6);
let Room3 = new Room(3, 3);
console.log(Room1);

let hotel1 = new Hotel('PNC Apartment');
hotel1.setAddressHotel(address1);
hotel1.addRoomToHotel(Room1,Room2,Room3);

// console.log(hotel1);

