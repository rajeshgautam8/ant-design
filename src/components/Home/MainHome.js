import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Form from './Form';
import Destination from './Destination';
import Packages from './Package';
import Footer from './Footer';
import Blogs from './Blog';

class MainHome extends Component {
    render() {
        return (
            <div>
                <h1 style = {{textAlign: 'center'}}>MainHome page</h1>
                <Header />
                <Navbar />
                <Form />
                <Destination />
                <Packages />
                <Blogs />
                <Footer />
            </div>
        )
    }
}

export default MainHome
