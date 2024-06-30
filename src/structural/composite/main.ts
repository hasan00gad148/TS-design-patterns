import Item from "./items";
import AmazonBox from "./amazon_box";




let amazon_box = new AmazonBox(
    [
        new Item(50,"book"),
        new Item(2,"pen"),
        new AmazonBox([
            new Item(220,"headPhone"),
            new AmazonBox([
                new Item(150,"controller")
            ])
        ]),
    ]
);

console.log(`total price: ${amazon_box.calcPrice()}`);








