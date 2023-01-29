import { v4 as uuidv4 } from 'uuid';

export class CustomerRole{
    constructor(customerId, categoryRoleIdArray, customCategoryIdArray){
        this.CustomerId = customerId;
        this.CategoryRoleIdArray = categoryRoleIdArray;
        this.CustomCategoryIdArray = customCategoryIdArray;
        this.Id = uuidv4();
        this.CreatedAt = new Date();
        this.DeletedAt = null;
        this.Active = true;
    }
    // methods to set properties should go below
}
