import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import cupIcon from '../../images/cup-icon.svg';

const TotalPaymentWrapper = styled.div`
  width: 697px;
  max-height: 174px;
  background-color: #B2212B;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
  transform: translateY(-70px);
`;

const TotalPaymentImage = styled.img`
  width: 251px;
  margin: 0 74px 0 -15px;
`;

const TotalPaymentText = styled.div`
  color: #fff;
  text-align: center;
`;

const TotalPaymentTitle = styled(Paragraph)`
  margin: 0;
`;

const TotalPaymentSum = styled.p`
  font-size: 70px;
  line-height: 90px;
  font-family: 'Lalezar', cursive;
  margin: 0;
`;

const TotalPayment: React.FC = () => {
  return (
    <TotalPaymentWrapper>
      <TotalPaymentImage src={cupIcon} alt="warzone logo" />
      <TotalPaymentText>
        <TotalPaymentTitle>TGC has paid our to gamers</TotalPaymentTitle>
        <TotalPaymentSum>$ 57,127</TotalPaymentSum>
      </TotalPaymentText>
    </TotalPaymentWrapper>
  );
}

export default TotalPayment;
