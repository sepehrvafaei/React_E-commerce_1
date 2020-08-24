declare var require: any

var React = require('react');
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { closeModal} from '../Actions/productListAction';

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`;

class Modal extends React.Component {
    render() {
        if (!this.props.modalOpen) { return null; }
        else {
            return (
                <ModalContainer>
                    <div className='container'>
                        <div className='row'>
                            <div id='modal'
                                className='col-8 mx-auto col-md-6 col-lg-4
                            text-center text-capitalize'>
                                <h5>item added to the cart</h5>
                                <Link to='/'>
                                    <button className='btn btn-outline-primary'
                                        onClick={() => this.props.closeModal()}>
                                        store
                                </button>
                                </Link>
                                <Link to='/cart'>
                                    <button className='btn btn-outline-primary ml-2'
                                        onClick={() => this.props.closeModal()}>
                                        cart
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            );
        }
    }
}

const mapStateToProps = state => ({
    modalOpen: state.reducer.modalOpen,
});

export default connect(mapStateToProps, { closeModal})(Modal);