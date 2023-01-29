// Configure the entities and register example Customers and return an array of nested objects per Customer that contains the list of Items accessible by the Customer

import { Customer } from "./Customer.js";
import { Category } from "./Category.js";
import { Item } from "./Item.js";
import { CategoryItem } from "./CategoryItem.js";
import { CategoryRole } from "./CategoryRole.js";
import { CustomerRole } from "./CustomerRole.js";

// instantiate 3 Categories
const basic = new Category("basic", "basic items that is available to all of our customers");
const newRelease = new Category("newRelease", "items that only the newly joined customers can buy");
const onlineOnly = new Category("onlineOnly", "items that are only avilable online");

// instantiate 2 Items per Category, 1 item per category is unique to that category while other also belongs to the other categories. Initialize the CategoryItem
const lion = new Item("lion", 18.99, "lion is a carnivore");
const hyena = new Item("hyena", 15.99, "hyenas have a string bite");
const basicLion = new CategoryItem(lion.Id, basic.Id);
const basicHyena = new CategoryItem(hyena.Id, basic.Id);

const elephant = new Item("elephant", 20.99, "elephants are big");
const giraffe = new Item("giraffe", 19.99, "giraffes are tall");
const newReleaseElephant = new CategoryItem(elephant.Id, newRelease.Id);
const newReleaseGiraffe = new CategoryItem(giraffe.Id, newRelease.Id);
const newReleaseHyena = new CategoryItem(hyena.Id, newRelease.Id);

const kestrel = new Item("kestrel", 3.99, "kestrels are small birds fo prey");
const africanFishEagle = new Item("african fish eagle", 9.99, "african fish eagle calls are unmistakable");
const onlineOnlyKestrel = new CategoryItem(kestrel.Id, onlineOnly.Id);
const onlineOnlyAfricanFishEagle = new CategoryItem(africanFishEagle.Id, onlineOnly.Id);
const onlineOnlyElephant = new CategoryItem(elephant.Id, onlineOnly.Id);

const basicKestrel = new CategoryItem(kestrel.Id, basic.Id);

const itemArray = [lion, hyena, elephant, giraffe, kestrel, africanFishEagle];
const categoryItemArray = [basicLion, basicHyena, newReleaseElephant, newReleaseGiraffe, newReleaseHyena, onlineOnlyKestrel, onlineOnlyAfricanFishEagle, onlineOnlyElephant, basicKestrel];

// instantiate the CategoryRole
const allCustomers = new CategoryRole("allCustomers", "categories that all customers will have access to", [basic.Id]);
const newJoiners = new CategoryRole("newJoiners", "category with items only for new joiners", [newRelease.Id]);

const categoryRoleArray = [allCustomers, newJoiners];

// register 2 customers and create CustomerRoles for them
const bob = new Customer("Bob");
const bobRole = new CustomerRole(bob.Id, [allCustomers.Id, newJoiners.Id]);

const joe = new Customer("Joe");
const joeRole = new CustomerRole(joe.Id, [allCustomers.Id], [onlineOnly.Id]);

const customerArray = [bob, joe];
const customerRoleArray = [bobRole, joeRole];

const precomputeCustomerItems = (customerRoleArray, categoryItemArray, categoryRoleArray, itemArray, customerArray) => {
    let finalPrecomputeArray = [];
    customerRoleArray.forEach(customerRole => {

        let customerName = customerArray[customerArray.findIndex(customer => customer.Id === customerRole.CustomerId)].Name;
        let accessibleCategoriesIdList = [];
        let accessibleCategoryItemList = [];
        let accessibleItemIdList = [];
        let uniqueAccessibleItemIdList = [];
        let uniqueAccessibleItemList = [];

        customerRole.CategoryRoleIdArray.forEach(categoryRoleId => {
            let indexOfCategoryRoleInArray = categoryRoleArray.findIndex(categoryRole => categoryRole.Id === categoryRoleId);
            let categoryRoleObject = categoryRoleArray[indexOfCategoryRoleInArray];
            accessibleCategoriesIdList = accessibleCategoriesIdList.concat(categoryRoleObject.CategoryIdArray);
        })
        accessibleCategoriesIdList = accessibleCategoriesIdList.concat(customerRole.CustomCategoryIdArray);
        accessibleCategoryItemList = categoryItemArray.filter(categoryItem => accessibleCategoriesIdList.includes(categoryItem.CategoryId));
        accessibleItemIdList = accessibleCategoryItemList.map(categoryItem => categoryItem.ItemId);
        uniqueAccessibleItemIdList = [... new Set(accessibleItemIdList)];
        uniqueAccessibleItemList = itemArray.filter(item => uniqueAccessibleItemIdList.includes(item.Id));
        finalPrecomputeArray.push({"Customer name" : customerName, "Item List": uniqueAccessibleItemList});

    });

    return finalPrecomputeArray;
}

console.log(JSON.stringify(precomputeCustomerItems(customerRoleArray, categoryItemArray, categoryRoleArray, itemArray, customerArray), null, '  '));
