export default class User{
    constructor(
        public id:number,  
        public userName: string,
        public email: string,
    ){}
    sendEmail(about:string): void{
        console.log(`sent an email to ${this.userName} about ${about}`);
    }
}