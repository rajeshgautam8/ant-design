import React, { Component } from 'react';
import { Form, Input, InputNumber, Button,Row,Col } from 'antd';

class Forms extends Component {
  render() {
    const formStyle = {
      marginTop: '0.5rem',
      paddingTop: '2rem',
      background: 'grey',
    }

    const rowStyle = {
      marginBottom: '-1.2rem'
    }
    return (
      <div >
        <Form style = {formStyle}>
          <Row style = {rowStyle}>
            <Col span={1}></Col>
            <Col span={4}>
              <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
              </Form.Item>
            </Col>
            
            <Col span={1}></Col>
            <Col span={4}>
              <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' },{ required: true }]}>
              </Form.Item>
            </Col>

            <Col span={1}></Col>
            <Col span={4}>
              <Form.Item name={['user', 'destination']} label="Destination">
              </Form.Item>
            </Col>

            <Col span={6}></Col>
          </Row>

          <Row>
            <Col span={1}></Col>
            <Col span={4}><Input /></Col>
            <Col span={1}></Col>
            <Col span={4}><Input /></Col>
            <Col span={1}></Col>
            <Col span={4}><Input /></Col>
            <Col span={1}></Col>
            <Col span={4}>
              <Form.Item>
              <Button type="primary" htmlType="submit"> Submit </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Forms