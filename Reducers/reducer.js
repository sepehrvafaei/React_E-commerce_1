const initialState = {
    products: [],
    detail_product: {},
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
                ...state,
                products:my_products ,
                detail_product: action.payload2,
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
            const tax = parseFloat(tempTax.toFixed(2));
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
            let tempCart_i = [...state.cart];
            const selected = tempCart_i.find(x => x.id === action.payload);
            const index_i_cart = tempCart_i.indexOf(selected);
            const p_i = tempCart_i[index_i_cart];
            p_i.count += 1;
            p_i.total += p_i.price;
            const product_chs_i = state.products.find(x => x.id === action.payload);
            let tempProducts_i = [...state.products];
            const index_i = tempProducts_i.indexOf(product_chs_i);
            let i_product = tempProducts_i[index_i];
            /*i_product.count += 1;
            i_product.total += i_product.price;*/
            let subTotal_i = state.cartSubTotal;
            subTotal_i += i_product.price;
            const tempTax_i = subTotal_i * 0.1;
            const tax_i= parseFloat(tempTax_i.toFixed(2));
            const total_i = subTotal_i + tax_i;
            return {
                ...state,
                products: tempProducts_i,
                cart: tempCart_i,
                cartTotal: total_i,
                cartSubTotal: subTotal_i,
                cartTax: tax_i
            }
        case 'DECREMENT':
            let tempCart_d = [...state.cart];
            const selected_d = tempCart_d.find(x => x.id === action.payload);
            const index_d_cart = tempCart_d.indexOf(selected_d);
            const p_d = tempCart_d[index_d_cart];
            p_d.count -= 1;
            p_d.total -= p_d.price;
            const product_chs_d = state.products.find(x => x.id === action.payload);
            let tempProducts_d = [...state.products];
            const index_d = tempProducts_d.indexOf(product_chs_d);
            let d_product = tempProducts_d[index_d];
            /*i_product.count += 1;
            i_product.total += i_product.price;*/
            let subTotal_d = state.cartSubTotal;
            subTotal_d -= d_product.price;
            const tempTax_d = subTotal_d * 0.1;
            const tax_d = parseFloat(tempTax_d.toFixed(2));
            const total_d = subTotal_d + tax_d;
            return {
                ...state,
                products: tempProducts_d,
                cart: tempCart_d,
                cartTotal: total_d,
                cartSubTotal: subTotal_d,
                cartTax: tax_d
            }
        case 'REMOVE_ITEM':
            let tempCart = [...state.cart];
            tempCart = tempCart.filter(x => x.id !== action.payload);
            const product_chs_r = state.products.find(x => x.id === action.payload);
            let tempProducts_r = [...state.products];
            const index_r = tempProducts_r.indexOf(product_chs_r);
            let r_product = tempProducts_r[index_r];
            r_product.inCart = false;
            r_product.count = 0;
            let subTotal_r = state.cartSubTotal;
            subTotal_r -= r_product.total;
            const tempTax_r = subTotal_r * 0.1;
            const tax_r = parseFloat(tempTax_r.toFixed(2));
            const total_r = subTotal_r + tax_r;
            r_product.total = 0;
            return {
                ...state,
                products: tempProducts_r,
                cart: tempCart,
                cartTotal: total_r,
                cartSubTotal: subTotal_r,
                cartTax: tax_r
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0
            }
        default:
            return state;
    }
}