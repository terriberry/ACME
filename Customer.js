import { v4 as uuidv4 } from 'uuid';

export class Customer{
    constructor(name){
        this.Name = name;
        this.Id = uuidv4();
        this.CreatedAt = new Date();
        this.DeletedAt = null;
        this.Active = true;
    }
    // methods to set properties should go below
}
