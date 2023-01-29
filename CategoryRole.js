import { v4 as uuidv4 } from 'uuid';

export class CategoryRole{
    constructor(name, description, categoryIdArray){
        this.Name = name;
        this.Description = description;
        this.CategoryIdArray = categoryIdArray;
        this.Id = uuidv4();
        this.CreatedAt = new Date();
        this.DeletedAt = null;
        this.Active = true;
    }
    // methods to set properties should go below
}
