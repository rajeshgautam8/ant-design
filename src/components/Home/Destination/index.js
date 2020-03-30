import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { tourData } from '../../tourData';

class Destination extends Component {
    render() {
        const { Title } = Typography;

        const h2Style = {
            paddingTop: '2.5rem',
            fontSize: '2rem',
            color: '#000',
            textAlign: 'center'
        }

        const h3Style = {
            fontSize: '1.5rem',
            color: 'grey',
            marginTop: '-0.5rem',
            marginBottom: '1rem',
            textAlign: 'center'
        }

        const buttonStyle = {
            fontSize: '1.25rem',
            color: 'white',
            background: 'grey',
            display: 'block',
            width: '160px',
            margin: 'auto',
            padding: '0.5rem',
            borderRadius: '2rem',
            fontWeight: 'bold',
            border: 'none'
            
        }

        const destinationCity = {
            fontSize: '1rem',
            color: 'green',
            padding: '1rem',
            textTransform: 'capitalize',
            textAlign: 'center'
        }

        const destinationImage = {
            width: '200px',
            height: '200px',
            borderRadius: '50%'
        }

        const destinationStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            width: '80vw',
            margin: 'auto'
        }

        const destinationListStyle = {
            padding: '1rem'
        }
        return (
            <div>
                <Title style = {h2Style} level={2}>Popular destinations</Title>
                <Title style = {h3Style} level={3}>Check out the most promotional tour</Title>
                <div style = {destinationStyle}>
                    {
                        tourData.map(pkg => (
                            <div key = {pkg.id} style = {destinationListStyle}>
                                <img style={destinationImage}src = {pkg.img} />
                                <h5 style={destinationCity}> {pkg.city}</h5>
                            </div>
                        ))
                    }
                </div>    
                <button style = {buttonStyle}>Destinations</button>
            </div>
        )
    }
}

export default Destination
