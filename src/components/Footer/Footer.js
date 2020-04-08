import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'

export class Footer extends Component {
    render() {

        return (
            <div className = "mainFooter">
                <div>
                    <h3 className= "quickLinks" >Quick Links</h3>
                    <div>
                        <Menu mode="vertical" className = "linkStyle" >
                            <Menu.Item key="home"> <Link to = "/">Home</Link> </Menu.Item>
                            <Menu.Item key="about"><Link to = "/about">About</Link> </Menu.Item>
                            <Menu.Item key="package"><Link to = "/package">Package</Link> </Menu.Item>
                            <Menu.Item key="destination"><Link to = "/destination">Destination</Link> </Menu.Item>
                        </Menu>  
                    </div>
                </div>
                <div>
                    <h3 className= "quickLinks" >Contact</h3>
                    <div>
                        <Menu mode="vertical" className = "linkStyle" >
                            <Menu.Item key="home"> email@gmail.com </Menu.Item>
                            <Menu.Item key="about"> +977 01XXXXXXX </Menu.Item>
                            <Menu.Item key="package">Lalitpur,Nepal </Menu.Item>
                        </Menu>  
                    </div>
                </div>
                <div>
                    <h3 className= "quickLinks" >About us</h3>
                    <div>
                        <Menu mode="vertical" className = "linkStyle" >
                            <Menu.Item key="home"> email@gmail.com </Menu.Item>
                            <Menu.Item key="about"> +977 01XXXXXXX </Menu.Item>
                            <Menu.Item key="package">Lalitpur,Nepal </Menu.Item>
                        </Menu>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
