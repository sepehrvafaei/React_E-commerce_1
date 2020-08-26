declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {add_to_cart } from '../Actions/productListAction';

class Details extends React.Component {
    render() {
        const { id, company, img, info, price, title, inCart } = this.props.detailProduct;
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className="img-fluid" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model : {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by : <span className="text-uppercase">{company}</span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price : <span>$</span>{price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about product :
                        </p>
                        <p className="text-muted lead">{info}</p>
                        
                            <Link to="/">
                                <button type="button" className="btn btn-outline-primary mr-3">
                                    back to products
                                </button>
                            </Link>
                            <button type="button" className="btn btn-outline-warning"
                            onClick={() => { this.props.add_to_cart(id)}}
                                disabled={inCart ? true : false}>
                                {inCart ? "in cart" : "add to cart"} 
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    detailProduct: state.reducer.detail_product
});
export default connect(mapStateToProps, {add_to_cart})(Details);