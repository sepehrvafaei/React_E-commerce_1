declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import Product from './Product';
import Title from './Title';
import { connect } from 'react-redux';

class ProductList extends React.Component {

    render() {
        let list_p = this.props.products.map((product) => (
            <Product key={product.id} product={{...product,inCart:product.inCart}}/>
        ));
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            {list_p}
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
export default connect(mapStateToProps, null)(ProductList);