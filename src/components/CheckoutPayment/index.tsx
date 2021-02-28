import * as React from 'react';
import styled from 'styled-components';
import { Paragraph, HeadingH2 } from '../../styles/mixins';
import payPalLogo from '../../images/paypal-logo.svg';
import applePayLogo from '../../images/apple-pay-logo.svg';
import visaLogo from '../../images/visa.svg';
import mastercardLogo from '../../images/mastercard.svg';
import amexLogo from '../../images/amex.svg';
import discoverLogo from '../../images/discover.svg';

const StyledCheckoutPayment = styled.div`
  width: 100%;
  margin-top: 19px;
  padding: 21px 0 40px;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`;

const CheckoutPaymentTitle = styled(HeadingH2)`
  text-align: center;
  margin: 0 0 17px;
`;

const CheckoutPaymentSum = styled.div`
  font-size: 30px;
  line-height: 36px;
  background-color: #B2212B;
  color: #fff;
  text-align: center;
  padding: 11px 0;
`;

const CheckoutPaymentButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutPaymentButton = styled.button<{ paymentType: string }>`
  height: 41px;
  width: 132px;
  border-radius: 20px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ paymentType }) => paymentType === 'payPal' ? payPalLogo : applePayLogo});
  background-color: ${({ paymentType }) => paymentType === 'payPal' ? '#ffc439' :'#fff'};

  &:first-child {
    margin-right: 21px;
  }
  
  &:hover {
    cursor: pointer;
  }
`;

const PaymentLabel = styled(Paragraph)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  margin: 20px auto 25px;
  color: #fff;
  font-family: 'San Francisco', Arial, sans-serif;
  text-align: center;
`;

const CheckoutPaymentMethod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;

  img:not(:last-child) {
    margin-right: 10px;
  }
`;

const CheckoutPayment: React.FC = () => {
  return (
    <StyledCheckoutPayment>
        <CheckoutPaymentTitle>CHECKOUT</CheckoutPaymentTitle>
        <CheckoutPaymentSum>$50</CheckoutPaymentSum>
        <PaymentLabel>Duos #21Y2: $25/person for 2 players</PaymentLabel>
        <CheckoutPaymentButtonWrapper>
          <CheckoutPaymentButton paymentType="applePay"/>
          <CheckoutPaymentButton paymentType="payPal"/>
        </CheckoutPaymentButtonWrapper>
        <CheckoutPaymentMethod>
          <img src={mastercardLogo} alt="mastercard logo" />
          <img src={visaLogo} alt="visa logo" />
          <img src={discoverLogo} alt="discover logo" />
          <img src={amexLogo} alt="amex logo" />
        </CheckoutPaymentMethod>
    </StyledCheckoutPayment>
  );
}

export default CheckoutPayment;
