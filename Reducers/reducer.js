const initialState = {
    products: [],
    detail_product: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            let my_products = [];
            action.payload.forEach(x => {
                const single = { ...x };
                my_products = [...my_products,single];
            });
            return {
                products:my_products ,
                detail_product: action.payload2,
                cart: [],
                modalOpen: false,
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal:0
            }
        case 'GET_PRODUCT':
            const product = state.products.find(x => x.id === action.payload);
            return {
                ...state,
                detail_product:product
            }
        case 'ADD_TO_CART':
            const product_chs = state.products.find(x => x.id === action.payload);
            let tempProducts = [...state.products];
            const index = tempProducts.indexOf(product_chs);
            const product_cart = tempProducts[index];
            product_cart.inCart =true;
            product_cart.count = 1;
            const price = product_cart.price;
            product_cart.total = price;
            let subTotal = state.cartSubTotal;
            subTotal += price ;
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(subTotal.toFixed(2));
            const total = subTotal + tax;
            return {
                ...state,
                products: tempProducts,
                cart: [...state.cart, product_cart],
                modalOpen: true,
                cartTotal: total,
                cartSubTotal: subTotal,
                cartTax: tax
            }
            /*
            const product_chs = state.products.find(x => x.id === action.payload);
             product_chs.inCart = true;
             product_chs.count = 1;
             const price = product_chs.price;
             product_chs.total = price;
            const product_cart = { ...product_chs };
             return {
                 ...state,
                 cart:[...state.cart,product_cart]
             }
             */
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalOpen: false,
            }
        case 'INCREMENT':
        case 'DECREMENT':
        case 'REMOVE_ITEM':
        default:
            return state;
    }
}