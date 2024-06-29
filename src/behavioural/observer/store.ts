import NotificationService from "./notification_service";
import User from "./user";

type Notification = {
    newItem:NotificationService,
    newSale:NotificationService
}


export default class Store{
    private notification: Notification;
    
    constructor(){
        this.notification = {
            newItem:new NotificationService(),
           newSale:new NotificationService()
        }
    }


    newItemEvent(): void {
        this.notification.newItem.notify("new item")
    }

    newSaleEvent(): void {
        this.notification.newSale.notify("new sale")
    }

    subscribe(user:User,event:"newItem"|"newSale"): void {
        switch(event){
            case "newItem":
                return this.notification.newItem.subscribe(user)
            case "newSale":
                return this.notification.newSale.subscribe(user)
            default:
                throw new Error("event not supported");
        }
        
    }

    unsubscribe(user:User, event:"newItem"|"newSale"): void {
        switch(event){
            case "newItem":
                return this.notification.newItem.unsubscribe(user)
            case "newSale":
                return this.notification.newSale.unsubscribe(user)
            default:
                throw new Error("event not supported");
        }
    }
}