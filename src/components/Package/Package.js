import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { tourData } from '../../tourData';
import './index.css';


class Package extends Component {
    
    render() {
        const { Title } = Typography;
        return (
            <div>
                <Title className = "h2Style" level={2}>Popular Packages</Title>
                <Title className = "h3Style" level={3}>Check out the most promotional tour</Title>
                <div className = "packageStyle">
                    {
                        tourData.map(pkg => (
                            <div key = {pkg.id} className = "packageListStyle">
                                <img className = "packageImage" src = {pkg.img} />
                                <h5 className= "packageCity"> {pkg.city}</h5>
                            </div>
                        ))
                    }
                </div>    
                <button className = "button"><Link to = "/package" >View All Packages</Link></button>
            </div>
        )
    }
}

export {Package};
