import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { tourData } from '../../tourData';

class Packages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            opacity: 0
        }
    }
    
    render() {
        const { Title } = Typography;

        const showButton = () => {
            this.setState({
                opacity: 1
            })
        }

        const hideButton = () => {
            this.setState({
                opacity: 0
            })
        }
        
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

        const packageCity = {
            fontSize: '1rem',
            color: 'green',
            padding: '1rem',
            textTransform: 'capitalize',
            textAlign: 'center'
        }

        const packageImage = {
            width: '250px',
            height: '200px'
        }

        const packageStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            width: '80vw',
            margin: 'auto'
        }

        const packageListStyle = {
            padding: '1rem',
            position:'relative'
        }

        const hiddenButtonStyle = {
            display: 'block',
            background:'grey',
            color: 'white',
            position: 'absolute',
            bottom: '100px',
            left: '100px',
            opacity: this.state.opacity
        }
        
        return (
            <div>
                <Title style = {h2Style} level={2}>Popular Packages</Title>
                <Title style = {h3Style} level={3}>Check out the most promotional tour</Title>
                <div style = {packageStyle}>
                    {
                        tourData.map(pkg => (
                            <div key = {pkg.id} style = {packageListStyle}>
                                <img style={packageImage} src = {pkg.img} 
                                onMouseEnter = {showButton}
                                onMouseLeave = {hideButton}
                                />
                                <h5 style={packageCity}> {pkg.city}</h5>
                                <Button style = {hiddenButtonStyle}>View Details</Button>
                            </div>
                        ))
                    }
                </div>    
                <button style = {buttonStyle}>Packages</button>
            </div>
        )
    }
}

export default Packages
