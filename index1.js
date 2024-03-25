const shoppingCart = ['Milk', 'Coffee', 'Tea','Honey'];
console.log(shoppingCart);
// add Meat in the beginning 
shoppingCart.unshift('Meat');

console.log(shoppingCart);
// add Sugar in the end

shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove honey
const removeHoney = shoppingCart.pop('Honey')
console.log(removeHoney);
// Modify tea to green tea
shoppingCart.splice(2 , 1 , 'Green tea')
console.log(shoppingCart);