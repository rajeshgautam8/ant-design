import React, { Component } from 'react';
import { Menu, Avatar  } from 'antd';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        const navStyle = {
            background: '#fff',
            color: 'green',
            fontSize: '1.25rem',
            padding: '0.5rem'
        }

        const mainNav = {
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '5rem',
            paddingRight: '4rem',position: 'sticky',
            top: 0,
            backgroundColor: '#fff',
            zIndex: 1
        }
        return (
            <div style = { mainNav }>
                <Avatar shape="square" size={64} src = '../logo.png' />
                <div>
                    <Menu mode="horizontal" style = {navStyle} >
                        <Menu.Item key="home"> <Link to = "/">Home</Link> </Menu.Item>
                        <Menu.Item key="about"><Link to = "/about">About</Link> </Menu.Item>
                        <Menu.Item key="package"><Link to = "/package">Package</Link> </Menu.Item>
                        <Menu.Item key="destination"><Link to = "/destination">Destination</Link> </Menu.Item>
                        <Menu.Item key="contact"><Link to = "/contact">Contact</Link> </Menu.Item>
                        <Menu.Item key="blog">Blogs </Menu.Item>
                    </Menu>  
                </div>
            </div>
        )
    }
}

export default Navbar
