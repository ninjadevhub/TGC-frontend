import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { RegisterButton, LayoutWrapper, Paragraph } from '../../styles/mixins';
import checkIcon from '../../images/check-icon.svg';

const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 82px 118px 95px;

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
      color: #fff;
      font-family: 'San Francisco', Arial, sans-serif;

      &::before {
        content: '';
        width: 19px;
        height: 19px;
        display: inline-block;
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

const RegistrationFormButton = styled(RegisterButton)`
  max-width: 306px;
  margin: 0 auto;
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
      <RegistrationFormButton>Join Now</RegistrationFormButton>
    </RegistrationFormWrapper>
  );
}

export default RegistrationForm;
