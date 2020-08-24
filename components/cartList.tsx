declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartList extends React.Component {
    render() {
        const list = this.props.cart.map(item => {
            return <CartItem key={item.id} item={item}/>
        });
        return (
            <div className='container-fluid'>
                {list}
            </div>
            );
    }
}

const mapStateToProps = state => ({
    cart: state.reducer.cart
});

export default connect(mapStateToProps, null)(CartList);