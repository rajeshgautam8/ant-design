import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { tourData } from '../../tourData';
import { Link } from 'react-router-dom';
import './index.css';

class Destination extends Component {
    render() {
        const { Title } = Typography;

        return (
            <div className = "destination">
                <Title className = "h2Style" level={2}>Popular destinations</Title>
                <Title className = "h3Style" level={3}>Check out the most promotional tour</Title>
                <div className = "destinationStyle">
                    {
                        tourData.map(pkg => (
                            <div key = {pkg.id} className = "destinationListStyle">
                                <img className="destinationImage" src = {pkg.img} />
                                <h5 className = "destinationCity"> {pkg.city}</h5>
                            </div>
                        ))
                    }
                </div>    
                <button className = "button"><Link to = "/destination" >View All Destination</Link></button>
            </div>
        )
    }
}

export {Destination}
