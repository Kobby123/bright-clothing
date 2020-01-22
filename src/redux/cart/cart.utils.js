export const addItemToCart = (cartItems, cartItemToAdd) => {
    //find if the item being searched exits in the Cart Items array
    const existingItem = cartItems.find(item => (
        item.id === cartItemToAdd.id
    ));
    /*If the item exists find the item in the array and increment its quantity property value*/
        if(existingItem){
            return cartItems.map(
                (item) => (item.id === cartItemToAdd.id) ? {...item, quantity : item.quantity + 1} : item
            )
        }
    /*Else return the array with the original items plus the new item with a quantity of 1*/
    return [...cartItems, {...cartItemToAdd, quantity:1} ]
};

//Check if the quantity of the Item to be removed is 1, remove from the  cart array, else reduce its quantity
export const removeCartItem = (cartItems, cartItemToRemove)=> {

    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1 } : cartItem
        )
};