import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        const mainFooter = {
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw',
            margin: 'auto',
            backgroundColor: '#555',
            marginTop: '2rem',
            marginBottom: '2rem'
        }

        const quickLinks = {
            fontSize: '1rem',
            paddingTop: '2rem',
            color: 'white'
        }

        const linkStyle = {
            backgroundColor: '#555',
            border: 'none'
        }
        return (
            <div style = {mainFooter}>
                <div>
                    <h3 style= {quickLinks}>Quck Links</h3>
                    <div>
                        <Menu mode="vertical" style = {linkStyle} >
                            <Menu.Item key="home"> <Link to = "/">Home</Link> </Menu.Item>
                            <Menu.Item key="about"><Link to = "/about">About</Link> </Menu.Item>
                            <Menu.Item key="package"><Link to = "/package">Package</Link> </Menu.Item>
                            <Menu.Item key="destination"><Link to = "/destination">Destination</Link> </Menu.Item>
                        </Menu>  
                    </div>
                </div>
                <div >
                    <h3 style = {quickLinks}>Contact us</h3>
                </div>
                <div >
                    <h3 style = {quickLinks}>About us</h3>
                </div>
            </div>
        )
    }
}

export default Footer;
