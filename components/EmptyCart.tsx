declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');


class EmptyCart extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className='col-10 mx-auto text-center text-title'>
                        <h1>your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmptyCart;