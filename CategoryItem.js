import { v4 as uuidv4 } from 'uuid';

export class CategoryItem{
    constructor(itemId, categoryId){
        this.ItemId = itemId;
        this.CategoryId = categoryId;
        this.Id = uuidv4();
        this.CreatedAt = new Date();
        this.DeletedAt = null;
        this.Active = true;
    }
    // methods to set properties should go below
}
