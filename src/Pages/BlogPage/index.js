import React from 'react';
import { Upload, Modal,Menu,Typography,Card,Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class BlogPage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      
    ],
    videoList: [

    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {this.setState({ fileList })};
  handleVideoChange = ({ videoList }) => this.setState({ videoList });

  render() {
    const { Title } = Typography; 
    const { previewVisible, previewImage, fileList, videoList } = this.state;
    const uploadImage = (
      <div>
        <PlusOutlined className = "plusOutlined"/>
        <div className="ant-upload-text">Upload Image</div>
      </div>
    );
    const uploadVideo = (
      <div className = "uploadVideo">
        <PlusOutlined className = "plusOutlined"/>
        <div className="ant-upload-text">Upload Video</div>
      </div>
    );
    return (
      <div className = "mainContainer"> 
        <Title className = "titleStyle">Add New Product</Title>
        <Menu mode="horizontal" className="itemList">
          <Menu.Item key="home"> Item </Menu.Item>
          <Menu.Item key="about"> Item1</Menu.Item>
          <Menu.Item key="package">Item 2</Menu.Item>
        </Menu> 
        <div className="clearfix">   
        <Form className = "form">
        <Form.Item >
          <div className = "imageUploadPart">
            <Card className = "card">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 8 ? null : uploadImage}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </Card>
          </div>
        </Form.Item>
        
        <Form.Item>
            <Card className = "card">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 5 ? null : uploadVideo}
              </Upload>
            </Card>
        </Form.Item> 
        
          <Card className = "card">
            <Form.Item label="Title" className = "label"
              name="title" 
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input className = "input"/>
            </Form.Item>
            <Form.Item label="Description" className = "label"
              name="description" 
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input className = "input"/>
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" className = "submitButton">
                Submit
              </Button>
            </Form.Item>
          </Card>
        </Form>
        </div>
      </div>
    );
  }
}

export {BlogPage}