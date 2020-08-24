import { storeProducts, detailProduct } from '../data';

export const get_products = () => ((dispatch) => {
    return dispatch({
        type: 'GET_PRODUCTS',
        payload: storeProducts,
        payload2:detailProduct
    });
});

export const get_product = (id) => ({
    type: 'GET_PRODUCT',
    payload:id
});

export const add_to_cart = (id) => ({
    type: 'ADD_TO_CART',
    payload:id
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
});
