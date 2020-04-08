import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { blogData } from '../../tourData';
import './index.css';

class Blog extends Component {
    render() {
        const { Title } = Typography;

        return (
            <div>
                <Title className = "h2Style" level={2}>From our Blogs</Title>
                <Title className = "h3Style" level={3}>Don't miss the latest blog and event from us</Title>
                <div className = "blogStyle">
                    {
                        blogData.map(blog => (
                            <div key = {blog.id} className = "blogListStyle" >
                                <h3 className = "blogDate">{ blog.date }</h3>
                                <h4 className = "blogName">{ blog.title }</h4>
                                <p className = "blogContent">{ blog.content }</p>
                            </div>
                        ))
                    }
                </div>  
                <button className = "button">Blogs</button>
            </div>
        )
    }
}

export {Blog}
