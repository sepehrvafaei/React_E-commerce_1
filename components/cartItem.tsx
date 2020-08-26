declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import { increment, decrement, removeItem } from '../Actions/cartAction';


class CartItem extends React.Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        return (
            <div className='row  my-1 text-capitalize text-center'>
                <div className='col-10 mx-auto col-lg-2'>
                    <img src={img} alt='product' className='img-fluid'
                        style={{ width: '5rem', height: '5rem' }}
                    />
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <span className='d-lg-none'>product : </span>
                    {title}
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <span className='d-lg-none'>price : </span>
                    {price}
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <div className='justify-content-center'>
                        <button type='button' className='btn btn-outline-dark mx-1'
                            onClick={() => { this.props.increment(id) }}>
                            <i className='fa fa-plus'></i>
                        </button>
                        <span className='btn btn-outline-dark'>{count}</span>
                        <button type='button' className='btn btn-outline-dark mx-1'
                            onClick={() => {
                                if (count === 1) { }
                                else { this.props.decrement(id) }
                            }}>
                            <i className='fa fa-minus'></i>
                        </button>
                    </div>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <button type='button' className='btn btn-warning'
                        onClick={() => { this.props.removeItem(id) }}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <strong>item total : $ {total}</strong>
                </div>
            </div>
        );
    }
}
export default connect(null, { increment, decrement, removeItem })(CartItem);