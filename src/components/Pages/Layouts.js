import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Typography, Layout, Avatar, Menu,Breadcrumb   } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Layouts extends Component {
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        const { Title } = Typography;
        const { SubMenu } = Menu;
        return (
            <div>
                <Layout>
                    <Header style={{padding:'10px'}}>
                        <Avatar style={{float:'right'}} icon={<UserOutlined />} />
                        <Title level={3} style={{color:'#fff'}}>Rajesh</Title>
                    </Header>
                    <Layout>
                        <Sider >
                            <Menu defaultSelectedKeys = {['DashBoard']} mode="inline">
                                <Menu.Item key="DashBoard"> DashBoard </Menu.Item>
                                    <SubMenu title = "Contact">
                                        <Menu.ItemGroup key = 'aboutUs' title = "About us">
                                            <Menu.Item key = 'contact1'>Phone</Menu.Item>
                                            <Menu.Item key = 'contact2'>Email</Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                <SubMenu title = "Branches">
                                    <Menu.ItemGroup title = "Location">
                                        <Menu.Item key = 'branch1'>Kathmandu</Menu.Item>
                                        <Menu.Item key = 'branch2'>Lalitpur</Menu.Item>
                                        <Menu.Item key = 'branch3'>Bhaktapur</Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-content">Content</div>
                            </Content>
                        </Layout>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Ant Design Created by Rajesh</Footer>
                </Layout>  
            </div>
        )
    }
}

export default Layouts;
