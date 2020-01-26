import React from "react"
import styles from "./index.less"
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Button,
  Cascader,
  InputNumber
} from "antd"
import ImageUpload from "./ImageUpload"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-validate-static">
      <Form {...formItemLayout}>
        <Form.Item label="Demo #" hasFeedback>
          <Select defaultValue="0">
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
          </Select>
        </Form.Item>
        <ImageUpload />

        <Button type="primary" htmlType="submit" className="Show Demo">
          Show Demo
        </Button>

        {/* <Form.Item
          label="Fail"
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
        >
          <Input placeholder="unavailable choice" id="error" />
        </Form.Item>

        <Form.Item label="Warning" validateStatus="warning">
          <Input placeholder="Warning" id="warning" />
        </Form.Item>

        <Form.Item
          label="Validating"
          hasFeedback
          validateStatus="validating"
          help="The information is being validated..."
        >
          <Input
            placeholder="I'm the content is being validated"
            id="validating"
          />
        </Form.Item>

        <Form.Item label="Success" hasFeedback validateStatus="success">
          <Input placeholder="I'm the content" id="success" />
        </Form.Item>

        <Form.Item label="Warning" hasFeedback validateStatus="warning">
          <Input placeholder="Warning" id="warning2" />
        </Form.Item>

        <Form.Item
          label="Fail"
          hasFeedback
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
        >
          <Input placeholder="unavailable choice" id="error2" />
        </Form.Item>

        <Form.Item label="Success" hasFeedback validateStatus="success">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Warning" hasFeedback validateStatus="warning">
          <TimePicker style={{ width: "100%" }} />
        </Form.Item>



        <Form.Item
          label="Validating"
          hasFeedback
          validateStatus="validating"
          help="The information is being validated..."
        >
          <Cascader defaultValue={["1"]} options={[]} />
        </Form.Item>

        <Form.Item label="inline" style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="Please select the correct date"
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              textAlign: "center"
            }}
          >
            -
          </span>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Success" hasFeedback validateStatus="success">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item> */}
      </Form>
    </div>
  </div>
)
