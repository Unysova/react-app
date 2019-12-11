import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const UsersPage = props => {

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
        //console.log('Received values of form: ', values);
        alert('заявка отправлена'); 
      } else {
        alert('Оба поля должны быть заполнены');
      }
    });
  };
  

  return (
    <div className="users-page">
      <h1>Список сотрудников</h1>
    </div>
  );
};

export default UsersPage;
  