declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from 'react-router-dom';
import { get_products } from '../Actions/productListAction'
import { connect } from 'react-redux';


class Navbar extends React.Component {
    componentDidMount() {
        this.props.get_products();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-s">
                <Link to='/'>
                    <i className="material-icons md-48 navbar-brand">smartphone</i>
                </Link>
                <Link to='/' style={{ color: 'white' }}>
                    Products
                </Link>
                <Link to='/cart' className='ml-auto'>
                    <i className="material-icons md-48 navbar-brand">add_shopping_cart</i>
                </Link>
            </nav>
        );
    }
}
export default connect(null, {get_products})(Navbar);