import Store from "./store";
import User from "./user";




let store = new Store();




let user1 = new User(0,'user1','user1@store.com');
let user2 = new User(1,'user2','user2@store');

store.subscribe(user1,"newItem",)
store.subscribe(user2,"newItem",)
store.newItemEvent()


let user3 = new User(2,'user3','user3@store.com');
let user4 = new User(3,'user4','user4@store');

store.subscribe(user3,"newSale",)
store.subscribe(user4,"newSale",)
store.newSaleEvent()
