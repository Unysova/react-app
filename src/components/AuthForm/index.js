import React from 'react';
import { auth } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import style from './style.css'

const AuthForm = props => {
  const { auth } = props;

  //variables

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const loginError = isFieldTouched('login') && getFieldError('login');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  //functions

  const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        auth(values);
      } else {
        alert('Оба поля должны быть заполнены');
      }
    });
  };
  

  return (
    <div className="auth-form">
      <div className="wrapper">
        <h1>Введите данные для входа</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Item validateStatus={loginError ? 'error' : ''} help={loginError || ''}>
            {getFieldDecorator('login', {
              rules: [{ required: true, message: 'Введите логин! Он совпадает с вашей почтой' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логин"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Пожалуйста, введите пароль' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    auth: values => dispatch(auth(values))
  };
};

export default connect(
  null,
  mapDispatchToProps
) (Form.create({ name: 'normal_login' })(AuthForm));