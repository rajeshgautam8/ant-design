import React, { Component } from 'react';
import { Menu, Avatar  } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

class Navbar extends Component {
    render() {
        return (
            <div className = "mainNavigation">
                <Avatar shape="square" size={64} src = '../logo.png' />
                <div>
                    <Menu mode="horizontal" className = "navigationStyle" >
                        <Menu.Item key="home"> <Link to = "/">Home</Link> </Menu.Item>
                        <Menu.Item key="about"><Link to = "/about">About</Link> </Menu.Item>
                        <Menu.Item key="package"><Link to = "/package">Package</Link> </Menu.Item>
                        <Menu.Item key="destination"><Link to = "/destination">Destination</Link> </Menu.Item>
                        <Menu.Item key="contact"><Link to = "/contact">Contact</Link> </Menu.Item>
                        <Menu.Item key="blog"><Link to = "/blog">Blogs</Link> </Menu.Item>
                    </Menu>  
                </div>
            </div>
        )
    }
}

export {Navbar}
