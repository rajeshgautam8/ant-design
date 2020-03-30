import React, { Component } from 'react';
import { packageData } from '../../tourData';
import { Typography, Button } from 'antd';
import Header from '../../Home/Header';
import Navbar from '../../Home/Navbar';
import Footer from '../../Home/Footer';

class DestinationDetail extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            opacity: 0
        }
    }
    render() {

        const showButton = (id) => {
            this.setState({
                opacity: 1
            })
        }

        const hideButton = () => {
            this.setState({
                opacity: 0
            })
        }
        const destinationDetailStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            width: '80vw',
            margin: '0 auto',
            padding: '2rem',
            position: 'relative'
        }

        const imgStyle = {
            width: '250px',
            height: '200px',
            padding: '0.5rem'
        }

        const cityNameStyle = {
            textTransform: 'Capitalize',
            fontSize: '1rem',
            textAlign: 'center',
            paddingBottom: '0.5rem'
        }

        const hiddenButtonStyle = {
            display: 'block',
            background:'grey',
            color: 'white',
            position: 'absolute',
            top: '100px',
            left: '100px',
            opacity: this.state.opacity
        }
        return (
            <div>
                <h1 style= {{textAlign:'center',padding: '0.5rem'}}>Destination page</h1>
                <Header />
                <Navbar />
                <div style = {destinationDetailStyle}>
                    {
                        packageData.map(dst => (
                            <div key = {dst.id} >
                                <img src = {dst.img}  style= {imgStyle}
                                onMouseEnter = {showButton}
                                onMouseLeave = {hideButton}
                                />
                                <Button style = {hiddenButtonStyle}>View Details</Button>
                                <h5 style= {cityNameStyle}> {dst.city}</h5>
                                
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default DestinationDetail
