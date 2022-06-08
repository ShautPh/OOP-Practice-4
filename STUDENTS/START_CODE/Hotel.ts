import { Address } from "./Address";
import { Room } from "./Room";
export class Hotel { 
    private address:Address;
    private rooms: Room[] = [];
    constructor(private name:string){}

    setAddressHotel(address:Address){
        this.address = address; 
    }

    addRoomToHotel(...rooms:Room[]){
        this.rooms = this.rooms.concat(rooms);
    }

    customerIsInHotel(customer:Customer){
        let isInHotel = false;
        if (this.customers.length > 0){
            this.customers.forEach(cust => {
                if (cust.isEqual(customer)){
                    isInHotel =  true;
                }
            });
        }
        return isInHotel;
    }
    registerCustomer(customer:Customer){
        if (this.isRoomFull()){
            if (this.customerIsInHotel(customer)){
                this.customers.push(customer);
            }
        }
    }

}