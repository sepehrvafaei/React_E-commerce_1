declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

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
export default Navbar;