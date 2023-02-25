import React from "react";
import "./plf.css";
import { Button, InputNumber, Form, Input, notification, Select } from "antd";

const ParkingLotForm = () => {
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
    <div className="parking_lot_form">
      <h2>Parking Lot Form</h2>
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
          label="Name"
          name="parkingLotName"
          rules={[
            {
              required: true,
              message: "Please enter name for parking lot!",
            },
          ]}
        >
          <Input placeholder="Please enter Parking Lot Name" />
        </Form.Item>

        <Form.Item
          label="Parking Lot Type"
          name="plt"
          rules={[
            {
              required: true,
              message: "Please select lot type!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a lot type"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "2-Wheeler",
                label: "2-Wheeler",
              },
              {
                value: "4-Wheeler",
                label: "4-Wheeler",
              },
              {
                value: "8-Wheeler",
                label: "8-Wheeler",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Minimum Charge Rate"
          name="minimumCharge"
          rules={[
            {
              required: true,
              message: "Please enter minimum cost to use parking lot!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: 400,
            }}
            placeholder="Minimum charge per vehicle"
          />
        </Form.Item>

        <Form.Item
          label="Charge Rate Per Minutes"
          name="chargePerMin"
          rules={[
            {
              required: true,
              message: "Please enter the cost per minutes to use parking lot!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: 400,
            }}
            placeholder="Charge per Minutes on vehicle"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ParkingLotForm;
