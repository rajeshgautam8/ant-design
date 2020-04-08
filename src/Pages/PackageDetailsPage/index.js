import React, { Component } from 'react';
import { packageData } from '../../tourData';
import {Header,Footer,Navbar} from '../../components';

class PackageDetailsPage extends Component {
    render() {
        const packageDetailStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            width: '80vw',
            margin: '0 auto',
            padding: '2rem'
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
                <h1 style= {{textAlign:'center',padding: '0.5rem'}}>Package page</h1>
                <Header />
                <Navbar />
                <div style = {packageDetailStyle}>
                    {
                        packageData.map(pkg => (
                            <div key = {pkg.id} >
                                <img src = {pkg.img}  style= {imgStyle}/>
                                <h5 style= {cityNameStyle}> {pkg.city}</h5>
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export  {PackageDetailsPage}
