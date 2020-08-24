declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import Product from './Product';
import Title from './Title';
import { connect } from 'react-redux';
import { get_products } from '../Actions/productListAction'

class ProductList extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.get_products();
    }
    render() {
        let list = this.props.products.map((product) => (
            <Product key={product.id} product={product}/>
        ));
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            {list}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products:state.reducer.products
});
export default connect(mapStateToProps, {get_products})(ProductList);