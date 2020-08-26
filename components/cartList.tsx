declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartList extends React.Component {
    render() {
        let list_c = this.props.cart.map(function (item) {
            return <CartItem key={item.id} item={{...item,count:item.count}} />
        });
        return (
            <div className='container-fluid'>
                {list_c}
            </div>
            );
    }
}

const mapStateToProps = state => ({
    cart: state.reducer.cart
});

export default connect(mapStateToProps, null)(CartList);