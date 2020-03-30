import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import { blogData } from '../../tourData';

class Blogs extends Component {
    render() {
        const { Title } = Typography;

        const h2Style = {
            paddingTop: '2.5rem',
            fontSize: '2rem',
            color: '#000',
            textAlign: 'center'
        }

        const h3Style = {
            fontSize: '1.5rem',
            color: '#0f4',
            marginTop: '-0.5rem',
            marginBottom: '1rem',
            textAlign: 'center'
        }

        const blogStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            width: '80vw',
            margin: '0 auto'
        }
        const blogListStyle = {
            padding: '2rem'
        }

        return (
            <div>
                <Title style = {h2Style} level={2}>From our Blogs</Title>
                <Title style = {h3Style} level={3}>Don't miss the latest blog and event from us</Title>
                <div style = {blogStyle}>
                    {
                        blogData.map(blog => (
                            <div key = {blog.id} style = {blogListStyle} >
                                <h3>{ blog.date }</h3>
                                <h4>{ blog.title }</h4>
                                <p>{ blog.content }</p>
                            </div>
                        ))
                    }
                </div>  
            </div>
        )
    }
}

export default Blogs
