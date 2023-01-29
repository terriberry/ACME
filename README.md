# ACME

Below is how the entities relate to one another:
![ERD4](https://user-images.githubusercontent.com/103587065/215344590-90869505-ea79-4689-9a1a-75843818d7bd.png)

___

### To run the code: 
```
node index.js
```

___

### When the code runs it does the following:
1. Create 4 nested Category entities as follows:  
![categoryTree](https://user-images.githubusercontent.com/103587065/215344480-408776c4-2da5-45e1-88e3-1283e370f241.png)  
2. Create 2 Items per Category, one which is unique and the other which is shared with one other Category
3. The CategoryItem joining entities are created during step 2
4. 2 CategoryRoles are created. The CategoryRoles are used to store an array of CategoryIds to easily assign and modify multiple Categories access to CUstomerRole of newly registering Customers
5. Register 2 new Customers and assign them CustomerRoles. Add CategoryRole and Custom ones
6. Run the precomputeCustomerItems function console log the list


### Notes
- The system is designed in such a way that it was much easier to pass in the repos (data persistence) of the full list of each of the entities to the precompute function rather than the root Category object as orginally requested in the question. Although I was deviating from the requirement of the question, it made sense that the repos of the full list of each of the entities as designed will always be available and thus the decision was made to go with this approach.
___
