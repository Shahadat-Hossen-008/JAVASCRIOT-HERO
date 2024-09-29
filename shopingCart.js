function cartTotal(products){
    let total = 0;
    for(const product of products)//Every object element
        {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const products = [
{name:'Shampoo', price:10, quantity:3},
    {name:'Soap', price:50, quantity:5},
    {name:'Conditioner', price:20, quantity:3},
    {name:'Facewash', price:200, quantity:2},
]
let shoppingCost = cartTotal(products);
console.log(shoppingCost);
