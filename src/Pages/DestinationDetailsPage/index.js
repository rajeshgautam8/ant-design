import React, { Component } from 'react';
import { packageData } from '../../tourData';
import {Navbar, Header, Footer} from '../../components';

class DestinationDetailsPage extends Component {
    render() {

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
        return (
            <div>
                <Header />
                <Navbar />
                <div style = {destinationDetailStyle}>
                    {
                        packageData.map(dst => (
                            <div key = {dst.id} >
                                <img src = {dst.img}  style= {imgStyle} alt = "destination-images"/>
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

export {DestinationDetailsPage}
