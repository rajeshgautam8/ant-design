import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FacebookFilled,TwitterCircleFilled,YoutubeFilled,InstagramFilled } from '@ant-design/icons';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Row className = "mainHeaderStyle">
                    <Col span={16} > <h2 className = "headerStyle">Support call +977-01-XXXXXXX</h2></Col>
                    <Col span={8} >
                        <div className = "mainIconStyle">
                            <i className = "iconStyle"><FacebookFilled /></i>
                            <i className = "iconStyle"><TwitterCircleFilled /></i>
                            <i className = "iconStyle"><YoutubeFilled /></i>
                            <i className = "iconStyle"><InstagramFilled /></i>    
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export {Header}
