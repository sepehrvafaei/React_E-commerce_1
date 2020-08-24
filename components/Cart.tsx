declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import CartList from './CartList';
import Title from './Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';



class Cart extends React.Component {
    render() {
        if (this.props.cart.length > 0) {
            return (
                <section>
                    <Title name='your' title='cart' />
                    <CartColumns />
                    <CartList />
                    <CartTotals/>
                </section>
            );
        }
        else {
            return (
                <section>
                    <EmptyCart />
                </section>
            );
        }
    }
}

const mapStateToProps = state => ({
    cart: state.reducer.cart
});

export default connect(mapStateToProps, null)(Cart);