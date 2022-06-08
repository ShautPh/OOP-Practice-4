import { Address } from "./Address";
import { Room } from "./Room";
export class Customer {
    private address:Address;
    constructor(private firstName: string, private lastName: string){}

    setCustomerAddress(address:Address){
        this.address = address;
    }

    isEqual(other:Customer){
        return (this.firstName == other.firstName && this.lastName == other.lastName);
    }
    
}