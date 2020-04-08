import React, { Component } from 'react';
import { Carousel } from 'antd';
import { tourData } from '../../tourData';
import './index.css';

class AntSlider extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    {
                        tourData.map(pkg => (
                            <div key = {pkg.id} className = "antSliderContainer">
                                <img src = {pkg.img} className = "antSliderImage" alt = "slider-image" />
                                <h1 className = "antSliderContent">{pkg.city}</h1>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}

export  {AntSlider};

