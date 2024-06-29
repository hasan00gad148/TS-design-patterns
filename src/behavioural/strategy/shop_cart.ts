import PaymentStrategy, {CreditCard, PayBal, BitCoin} from "./payment_strategy"




export default class ShopCart{
    payment_strategy: PaymentStrategy|undefined;

    choosePaymentMethod(method:PaymentStrategy): void{
        this.payment_strategy =  method;
    }

    checkout(amount:number){
        if(this.payment_strategy === undefined) 
            throw new Error("payment_strategy is undefined");
        
        this.payment_strategy.pay(amount);
    }
}






