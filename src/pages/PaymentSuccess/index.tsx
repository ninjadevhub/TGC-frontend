import React from 'react';
import styled from 'styled-components';
import PaymentSuccessForm from '../../components/PaymentSuccessForm';
import { HeadingH1, LayoutWrapper, Paragraph, PageHeaderBgImage, MenuList, MenuItem } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';
import { device } from '../../styles/constants';
import AuthHeader from '../../components/AuthHeader';
import { useHistory } from 'react-router';

const StyledRegistrationPage = styled.div`
  min-height: 1100px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;
`;

const RegistrationPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const PaymentPageHeader = styled(HeadingH1)`
  margin: 72px 0 0;
  z-index: 1;
  font-weight: normal;
`;

const PaymentPageTextWrapper = styled.div`
  margin: 0 auto 53px;
  z-index: 1;
`;

const PaymentPageText = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  text-align: center;
`;

const PaymentSuccessInnerWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > img {
    top: 55px;

    @media ${device.tablet} {
      top: 65px;
    }
  }
`;

const PaymentSuccess: React.FC = () => {

  const history = useHistory();

  return ( 
    <StyledRegistrationPage>
      <RegistrationPageWrapper removeMobilePaddings={true}>
        <AuthHeader />
        <MenuList>
          <MenuItem onClick={() => history.push('/tournament')}>All Tournaments</MenuItem>
          <MenuItem onClick={() => history.push('/tournament')}>My Tournaments</MenuItem>
        </MenuList>
        <PaymentSuccessInnerWrapper>
          <PageHeaderBgImage src={tgcClub} alt='tgc club background' />
          <PaymentPageHeader>Duos #21Y2</PaymentPageHeader>
          <PaymentPageTextWrapper>
            <PaymentPageText>Feb 15, 2021 @ 6pm PT</PaymentPageText>
            <PaymentPageText>20 teams per division</PaymentPageText>
          </PaymentPageTextWrapper> 
          <PaymentSuccessForm />  
        </PaymentSuccessInnerWrapper>
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default PaymentSuccess;
