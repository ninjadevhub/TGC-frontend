import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import { device } from '../../styles/constants';

const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 82px 20px 76px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 650px;
    border-radius: 8px;
    padding: 82px 118px 95px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
`;

const ForgotPasswordLink = styled.a`
  margin-bottom: 50px;
  color: #DB4C4C;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`;

const LoginForm: React.FC = () => {
  return (
    <RegistrationFormWrapper>
      <InputBlock placeholder='Email' type='email' />
      <InputBlock placeholder='Password' type='password' />
      <ForgotPasswordLink>Forgot Password?</ForgotPasswordLink>
      <LoginRegisterButton>Login</LoginRegisterButton>
    </RegistrationFormWrapper>
  );
}

export default LoginForm;
