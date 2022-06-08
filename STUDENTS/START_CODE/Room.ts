import { Customer } from "./Customer";
export class Room {
    public customers?: Customer[] = [];
    constructor(private roomId:number, private numberOfBed:number){}

    isRoomFull(){
        let isNotFull = false;
        if (this.customers.length < this.numberOfBed){
            isNotFull = true;
        }
        return isNotFull;
    }

}

