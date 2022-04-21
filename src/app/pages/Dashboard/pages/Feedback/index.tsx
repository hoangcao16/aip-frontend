import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import './style.scss';

const { TextArea } = Input;

const Feedback = () => {
  const [type, setType] = useState('Feature request');

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <p>Give us feedback to improve your experience.</p>

      <Form className="feedback__send">
        <Form.Item>
          <h3>Type</h3>
          <Radio.Group onChange={e => setType(e.target.value)} value={type}>
            <Radio value="Feature request">Feature request</Radio>
            <Radio value="Error report">Error report</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <h3>What would you like feedback?</h3>
        <Form.Item>
          <Input className="input-title" placeholder="Title" />
        </Form.Item>
        <Form.Item>
          <TextArea className="input-message" placeholder="Your message" autoSize={{ minRows: 7, maxRows: 7 }} />
        </Form.Item>
        <Form.Item>
          <Button className="submit" type="primary">
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Feedback;
