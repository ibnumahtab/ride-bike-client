import React from 'react';
import AppBar from '../../sharedComponents/AppBar/AppBar'
import Footer from '../../sharedComponents/Footer/Footer';
import Checkout from '../Checkout/Checkout';

const SingleCheckout = () => {
    return (
        <div>
            <AppBar></AppBar>
            <Checkout></Checkout>
            <Footer></Footer>
        </div>
    );
};

export default SingleCheckout;