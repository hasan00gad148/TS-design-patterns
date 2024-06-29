import User from "./user"




export default class NotificationService {
    private  users: User[];
    constructor(){
        this.users=[]
    }
    notify(about:string):void{
        this.users.forEach(user => user.sendEmail(about));
    }
    subscribe(user: User):void{
        this.users.push(user);
    }
    unsubscribe(user: User):void{
        this.users= this.users.filter(u => u.id !== user.id) 
    }
}