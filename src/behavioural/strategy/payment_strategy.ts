export default interface PaymentStrategy {
    pay(amount: number): void 
}


class CreditCard implements PaymentStrategy{

    pay(amount: number): void {
        console.log(`Paying ${amount}$ with CreditCard`);      
    }
}

class PayBal implements PaymentStrategy{

    pay(amount: number): void {
        console.log(`Paying ${amount}$ with PayBal`);      
    }
}

class BitCoin implements PaymentStrategy{

    pay(amount: number): void {
        console.log(`Paying ${amount}$ with BitCoin`);      
    }
}


export {CreditCard, PayBal, BitCoin}