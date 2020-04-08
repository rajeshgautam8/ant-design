import React, { Component } from 'react';
import { Menu } from 'antd';
import { Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {Navbar}  from '../../components';
import './index.css'

class AboutPage extends Component {
    render() {
        const { Title } = Typography;        
        return (
            < >
                <Navbar />
                <div className = "mainStyle">    
                    <Title className = "titleStyle">Add New Product</Title>
                    <Menu mode="horizontal" className="navStyle">
                        <Menu.Item key="home"> Item </Menu.Item>
                        <Menu.Item key="about"> Item1</Menu.Item>
                        <Menu.Item key="package">Item 2</Menu.Item>
                    </Menu>  
                    <div className="uploadPart">
                        <div className = "imageUpload">
                            <PlusOutlined className= "iconUploadStyle" /><br/>
                            <span className= "spanStyle">Upload Images</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export {AboutPage};
