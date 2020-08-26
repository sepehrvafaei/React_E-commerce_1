declare var require: any;

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_products } from '../Actions/productListAction';
import { clearCart } from '../Actions/cartAction';


class CartTotals extends React.Component {
    clearCart = () => {
        this.props.get_products();
        this.props.clearCart();
    };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 
                        ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to="/">
                            <button
                                className='btn btn-outline-danger text-uppercase
                                mb-3 px-5' type='button'
                                onClick={this.clearCart}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className='text-title'>subtotal :</span>
                            <strong>$ {this.props.cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>tax :</span>
                            <strong>$ {this.props.cartTax}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>total :</span>
                            <strong>$ {this.props.cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartSubTotal: state.reducer.cartSubTotal,
    cartTax: state.reducer.cartTax,
    cartTotal: state.reducer.cartTotal
});

export default connect(mapStateToProps, { get_products,clearCart})(CartTotals);