declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { PayPalButton } from "react-paypal-button-v2";


export default class PPBtn extends React.Component {
    render() {
        const onSuccess = (payment) => {
            alert("Transaction completed");
            console.log("Transaction compeleted", payment);
            this.props.getProducts();
            this.props.clearCart();
            this.props.history.push("/");
        }
        /*const onCancel = (data) => {
            alert("Transaction canceled");
            console.log("Transaction canceled", data);
        };*/
        const onError = (error) => {
            alert("Error");
            console.log("Transaction canceled", error);
        };
        return (
            <PayPalButton
                amount={this.props.total} currency={"USD"}
                onSuccess={onSuccess} onError={onError} 
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            />
        );
    }
}