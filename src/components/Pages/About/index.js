import React, { Component } from 'react';
import { Menu } from 'antd';
import Navbar from '../../Home/Navbar';

class About extends Component {
    render() {
        const navStyle = {
            fontSize: '1rem',
            color: '#000',
            fontWeight: 'bold'
        }
        const mainStyle = {
            padding: '2rem'
        }
        return (
            <div>
                <Navbar />
                <div style = {mainStyle}>
                    <Menu mode="horizontal" style={navStyle}>
                        <Menu.Item key="home"> Item </Menu.Item>
                        <Menu.Item key="about"> Item1</Menu.Item>
                        <Menu.Item key="package">Item 2</Menu.Item>
                    </Menu>  
                </div>
            </div>
        )
    }
}

export default About
