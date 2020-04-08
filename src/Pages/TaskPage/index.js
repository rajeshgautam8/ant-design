import React, { Component } from 'react';
import {Navbar}  from '../../components'
import { Button } from 'antd';
import './index.css';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

class TaskPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className = "mainStyle">
                    <h1 className = "h1Style">Products</h1>
                    <div className="button">
                        <Button type="primary" className = "addProductStyle">Add New Product</Button>
                        <Button  className = "importProductStyle">Import  Product</Button>
                    </div>
                    <div className = "inputField">
                        <Button className = "filterStyle">Filter <DownOutlined /></Button>
                        <div className="searchIcon">
                            <span><SearchOutlined /></span> 
                        </div>               
                    </div>
                </div>
            </div>
        )
    }
}

export  {TaskPage};
