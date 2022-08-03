import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { signInRequest } from 'app/pages/user/sign-in/screen/action';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';

export const SignInForm: React.FC<any> = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory()

  const [messageError, setMessageError] = useState('');

  const state = useSelector((state: RootState) => state?.signInReducer);

  useEffect(() => {
    // if status === 401 or 404 , has error and show message
    if (state?.status !== '' && state?.message !== '') {
      setMessageError(state?.message);
    }
    if (
      state?.status === 200 &&
      state?.message === '' &&
      state.dataResponse?.role === 'admin'
    ) {
      history.push('/admin/dashboard');
    }
  }, [state?.status]);

  const onFinish = (values: any) => {
    const body = {
      email: values?.email,
      password: values?.password,
      deviceId: `deviceId-${values?.email}`,
    };
    dispatch(signInRequest(body));
  };

  return (
    <Fragment>
      <div className="signInForm__container">
        <div className="signInForm__content">
          <p className="signInForm__label">SIGN IN</p>

          {messageError ? (
            <div className="alert alert-danger" role="alert">
              {messageError}
            </div>
          ) : (
            ''
          )}

          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            form={form}
            autoComplete="off"
            style={{
              width: 500,
            }}
          >
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  message: 'Enter Email Address please !',
                },
              ]}
            >
              <Input
                size="large"
                style={{ width: '100%' }}
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Enter Password please !',
                },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                size="large"
              />
            </Form.Item>

            <Button
              loading={state?.loading}
              htmlType="submit"
              size="large"
              className="signInForm__btn"
            >
              SIGN IN
            </Button>
          </Form>
          <div className="signInForm__indicateSignUp">
            <Link to="/sign-up">New customer? Register</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
