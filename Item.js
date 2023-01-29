import { v4 as uuidv4 } from 'uuid';

export class Item{
    constructor(name, price, description){
        this.Name = name;
        this.Price = price;
        this.Description = description;
        this.Id = uuidv4();
        this.CreatedAt = new Date();
        this.DeletedAt = null;
        this.Active = true;
    }
    // methods to set properties should go below
}
