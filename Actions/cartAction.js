export const increment = (id) => ({
    type: 'INCREMENT',
    payload: id
});

export const decrement = (id) => ({
    type: 'DECREMENT',
    payload: id
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
});

export const clearCart= () => ({
    type: 'CLEAR_CART'
});
