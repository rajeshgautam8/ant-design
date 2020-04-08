import React, { Component } from 'react';
import {Header,Navbar,AntSlider,Forms,Destination,Package,Blog,Footer} from '../../components';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <AntSlider />
                <Forms />
                <Destination />
                <Package />
                <Blog />
                <Footer />
            </div>
        )
    }
}

export  {HomePage}
