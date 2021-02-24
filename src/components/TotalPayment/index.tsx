import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import cupIcon from '../../images/cup-icon.svg';
import { ITotalPayment } from './types';

interface IProp {
  isBig?: boolean;
}

const TotalPaymentWrapper = styled.div<IProp>`
  width: ${({ isBig }) => isBig ? '697px' : '284px'};
  max-height: ${({ isBig }) => isBig ? '174px' : '87px'};
  background-color: #B2212B;
  border-radius: ${({ isBig }) => isBig ? '40px' : '20px'};
  display: flex;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
`;

const TotalPaymentImage = styled.img<IProp>`
  width: ${({ isBig }) => isBig ? '251px' : '64px'};
  margin: 0 74px 0 -15px;
  margin-right: ${({ isBig }) => isBig ? '74px' : '23px'}
`;

const TotalPaymentText = styled.div<{ sumFirst: boolean }>`
  display: flex;
  flex-direction: ${({ sumFirst }) => sumFirst ? 'column': 'column-reverse'};
  color: #fff;
  text-align: center;
`;

const TotalPaymentTitle = styled(Paragraph)<IProp>`
  font-size: ${({ isBig }) => isBig ? '14px' : '12px'};
  line-height: ${({ isBig }) => isBig ? '17px' : '15px'};
  margin: 0;
`;

const TotalPaymentSum = styled.p<IProp>`
  font-size: ${({ isBig }) => isBig ? '70px' : '44px'};
  line-height: ${({ isBig }) => isBig ? '90px' : '50px'};
  font-family: 'Lalezar', cursive;
  margin: 0;
  white-space: nowrap;
`;

const TotalPayment = ({ title, sum, sumFirst = true, isBig = true }: ITotalPayment) => {
  return (
    <TotalPaymentWrapper isBig={isBig}>
      <TotalPaymentImage src={cupIcon} alt="warzone logo" isBig={isBig} />
      <TotalPaymentText sumFirst={sumFirst}>
        <TotalPaymentTitle isBig={isBig}>{title}</TotalPaymentTitle>
        <TotalPaymentSum isBig={isBig}>{sum}</TotalPaymentSum>
      </TotalPaymentText>
    </TotalPaymentWrapper>
  );
}

export default TotalPayment;
