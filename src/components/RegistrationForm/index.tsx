import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import checkIcon from '../../images/check-icon.svg';
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
    width: 675px;
    border-radius: 8px;
    padding: 82px 107px 95px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 52px;
    }
  }
`;

const DateOfBirthBlock = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: 16px;
  }
`;

const LabeledCheckbox = styled.div`
  div {
    display: flex;

    input {
      width: auto;
      display: none;
    }

    label {
      position: relative;
      padding-left: 32px;
      color: #fff;
      font-family: 'San Francisco', Arial, sans-serif;
      font-size: 12px;
      line-height: 21px;

      @media ${device.tablet} {
       
      }

      &::before {
        content: '';
        width: 19px;
        height: 19px;
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 12px;
        background-color: inherit;
        border: 1px solid #B2212B;
        vertical-align: middle;
      }
    }

    input:checked + label {
      &::after {
        content: url(${checkIcon});
        position: absolute;
        left: 1px;
        top: 3px;
      }
    }
  }
`;

const RegistrationForm: React.FC = () => {
  return (
    <RegistrationFormWrapper>
      <InputBlock placeholder='Full Name' />
      <InputBlock placeholder='Email' type='email' />
      <InputBlock placeholder='Password' type='password' hasError error='Your password must contain at least one uppercase, or capital, letter' />
      <InputBlock placeholder='Confirm Password' type='password' />
      <InputBlock placeholder='Country' />
      <DateOfBirthBlock>
        <InputBlock placeholder='Birth Date' />
        <InputBlock placeholder='Birth Month' />
        <InputBlock placeholder='Birth Year' />
      </DateOfBirthBlock>
      <LabeledCheckbox>
        <InputBlock label='I agree to the Terms of Use and I have read and acknowledge the Privacy Policy.' type='checkbox' id='checkTerms' />
      </LabeledCheckbox>
      <LoginRegisterButton>Join Now</LoginRegisterButton>
    </RegistrationFormWrapper>
  );
}

export default RegistrationForm;
