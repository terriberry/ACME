# ACME

Below is how the entities relate to one another:
![ERD3](https://user-images.githubusercontent.com/103587065/215336108-9a6cee54-4b4b-4e67-9996-f0b4e954983d.png)

To run the code: 
```
node index.js
```

When the code runs it does the following:
1. Create 3 Category entities
2. Create 2 Items per Category, one which is unique and the other which is shared with one other Category
3. The CategoryItem joining entities are created during step 2
4. 2 CategoryRoles are created. The CategoryRoles are used to store an array of Category/s to easily assign, modify multiple Category access to newly registering Customers
5. Register 2 new Customers and assign them CustomerRoles
6. Run the precomputeCustomerItems function console log the list