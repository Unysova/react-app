import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addUser } from '../../store/actions/users';
import style from './style.css'

const NewUser = props => {
  const { addUser } = props;
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
 
  const nameError = isFieldTouched('name') && getFieldError('name');
  const emailError = isFieldTouched('email') && getFieldError('email');
  const departmentError = isFieldTouched('department') && getFieldError('department');

  const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);


  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        addUser(values);
        props.form.resetFields();
      } else {
        alert('Поля должны быть заполнены');
      }
    });
  };
  
  return (
    <div className="new-user-form">
      <div className="wrapper">
        <h1>Введите данные по сотруднику</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Введите имя сотрудника' }],
            })(
              <Input
                placeholder="Имя"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Введите почту' }],
            })(
              <Input
                placeholder="Почта"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={departmentError ? 'error' : ''} help={departmentError || ''}>
            {getFieldDecorator('department', {
              rules: [{ required: true, message: 'Введите отдел' }],
            })(
              <Input
                placeholder="Отдел"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('job')(
              <Input
                placeholder="Должность"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('photo')(
              <Input
                placeholder="Прямая ссылка на фото"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(
  null,
  mapDispatchToProps
) (Form.create({ name: 'normal_login' })(NewUser));  