import React from 'react';
import styled from 'styled-components';
import PaymentSuccessForm from '../../components/PaymentSuccessForm';
import { HeadingH1, LayoutWrapper, Paragraph, UserContentWrapper } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';
import arrowIcon from '../../images/arrow-down.svg';

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
`;

const PaymentPageText = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  text-align: center;
`;

const RegistrationPageBgImage = styled.img`
  position: absolute;
  top: 136px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 33px 0;
`;

const UserAccount = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin: 0;

  &::after {
    content: url(${arrowIcon});
    display: inline-block;
    margin-left: 10px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
`;

const MenuItem = styled.li`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin-right: 50px;
`;

const PaymentSuccess: React.FC = () => {
  return (
    <StyledRegistrationPage>
      <RegistrationPageWrapper>
        <UserContentWrapper>
          <UserAccount>Francis Green</UserAccount>
        </UserContentWrapper>
        <MenuList>
          <MenuItem>All Tournaments</MenuItem>
          <MenuItem>My Tournaments</MenuItem>
        </MenuList>
        <RegistrationPageBgImage src={tgcClub} alt='tgc club background' />
        <PaymentPageHeader>Duos #21Y2</PaymentPageHeader>
        <PaymentPageTextWrapper>
          <PaymentPageText>Feb 15, 2021 @ 6pm PT</PaymentPageText>
          <PaymentPageText>20 teams per division</PaymentPageText>
        </PaymentPageTextWrapper>
        <PaymentSuccessForm />
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default PaymentSuccess;
