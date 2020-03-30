import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FacebookFilled,TwitterCircleFilled,YoutubeFilled,InstagramFilled } from '@ant-design/icons';

class Header extends Component {
    render() {

        const mainHeaderStyle = {
            background: 'grey',
            paddingLeft: '2.5rem'
        }

        const headerStyle = {
            color: 'white',
            padding: '0.25rem'
        }

        const iconStyle = {
            color: 'white',
            fontSize: '1.5rem',
            padding: '0.75rem',
            float: 'right'
        }

        const mainIconStyle = {
            paddingRight: '2.5rem'
        }

        return (
            <div>
                <Row style = {mainHeaderStyle}>
                    <Col span={16} > <h2 style = {headerStyle}>Support call +977-01-XXXXXXX</h2></Col>
                    <Col span={8} >
                        <div style = {mainIconStyle}>
                            <i style = {iconStyle}><FacebookFilled /></i>
                            <i style = {iconStyle}><TwitterCircleFilled /></i>
                            <i style = {iconStyle}><YoutubeFilled /></i>
                            <i style = {iconStyle}><InstagramFilled /></i>    
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
