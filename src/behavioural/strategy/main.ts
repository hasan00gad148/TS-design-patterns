import ShopCart from "./shop_cart";
import {CreditCard, PayBal, BitCoin} from "./payment_strategy"


let shopCart = new ShopCart();

shopCart.choosePaymentMethod(new CreditCard());
shopCart.checkout(10)

shopCart.choosePaymentMethod(new PayBal());
shopCart.checkout(15)

shopCart.choosePaymentMethod(new BitCoin());
shopCart.checkout(20)