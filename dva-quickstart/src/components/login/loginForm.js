import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {Link} from 'react-router-dom'
import styles from './loginForm.css';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleLogin({username: values.username, password: values.password})
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Card title="React-Login" bordered={true}>
            <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Link className={styles.loginFormForgot} to="/login">Forgot password</Link>
                <br />
                <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                    Log in
                </Button>
                Or <Link to="/login">register now!</Link>
                </Form.Item>
            </Form>
          </Card>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;