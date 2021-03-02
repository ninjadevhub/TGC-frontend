import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { Paragraph, RegisterButton } from '../../styles/mixins';
import circledCheckIcon from '../../images/circled-check.svg';
import arrowIcon from '../../images/arrow.svg';

const PaymentSuccessFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 30px 118px 49px;
  width: 650px;
  box-sizing: border-box;

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
`;

const PaymentSuccessFormButton = styled(RegisterButton)`
  max-width: 306px;
  margin: 69px auto 0;
`;

const SuccessMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessMessage = styled(Paragraph)`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Select = styled.div`
  position: relative;
`;

const SelectArrow = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const PaymentSuccessForm: React.FC = () => {
  return (
    <PaymentSuccessFormWrapper>
      <SuccessMessageBlock>
        <img src={circledCheckIcon} alt='check icon' />
        <SuccessMessage>we recieved your payment</SuccessMessage>
      </SuccessMessageBlock>
      <Select>
        <SelectArrow src={arrowIcon} alt='arrow icon' />
        <InputBlock placeholder='Your Platform Type' />
      </Select>
      <InputBlock placeholder='Your Platform ID' />
      <InputBlock placeholder='Email of Player #2' type='email' hasError error="We will send an invitation to player #2" />
      <PaymentSuccessFormButton>Submit</PaymentSuccessFormButton>
    </PaymentSuccessFormWrapper>
  );
}

export default PaymentSuccessForm;
