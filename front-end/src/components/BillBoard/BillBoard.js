import React from "react";
import "./billboard.css";
import { Button, Form, Input, notification } from "antd";

const BillBoard = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    notification.open({
      message: "Notification Title",
      placement: "bottomRight",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bill_board">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please vehicle number from number plate!",
            },
          ]}
        >
          <Input className="bill_input" placeholder="Enter Number Plate" />
        </Form.Item>

        <Form.Item style={{ display: "none" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BillBoard;
