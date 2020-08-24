declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

class CartColumns extends React.Component {
    render() {
        return (
            <div className='container-fluid text-center d-none d-lg-block'>
                <div className='row '>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>products</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>name</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>price</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>quantity</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>remove</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uoppercase'>total</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CartColumns;