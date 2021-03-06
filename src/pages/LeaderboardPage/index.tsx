import React from 'react';
import styled from 'styled-components';
import TotalPayment from '../../components/TotalPayment';
import Leaderboard from '../../components/Leaderboard';
import { HeadingH1, HeadingH2, LayoutWrapper, Paragraph, UserContentWrapper } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import registration from '../../images/registration.png';
import arrowIcon from '../../images/arrow-down.svg';

const StyledPaymentPage = styled.div`
  min-height: 1360px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;
`;

const PaymentPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const PaymentPageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const PaymentPageHeader = styled(HeadingH1)`
  margin: 72px 0 0;
  z-index: 1;
  font-weight: normal;
`;

const PaymentPageTextWrapper = styled.div`
  margin: 0 auto 15px;
`;

const PaymentPageText = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  text-align: center;
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

const PaymentPageBgImage = styled.img`
  position: absolute;
  top: 190px;
`;

const CheckoutPaymentTitle = styled(HeadingH2)`
  text-align: center;
  margin: 44px 0 17px;
`;

const LeaderboardPage: React.FC = () => {
  return (
    <StyledPaymentPage>
      <PaymentPageWrapper>
        <UserContentWrapper>
          <UserAccount>Francis Green</UserAccount>
        </UserContentWrapper>
        <MenuList>
          <MenuItem>All Tournaments</MenuItem>
          <MenuItem>My Tournaments</MenuItem>
        </MenuList>
        <PaymentPageInnerWrapper>
          <PaymentPageBgImage src={registration} alt='tgc club background' />
          <PaymentPageHeader>Duos #21Y2</PaymentPageHeader>
          <PaymentPageTextWrapper>
            <PaymentPageText>Feb 1, 2021 @ 6pm PT</PaymentPageText>
            <PaymentPageText>20 teams per division</PaymentPageText>
          </PaymentPageTextWrapper>
          <TotalPayment sum="$ 3,000" isBig={false} />
          <CheckoutPaymentTitle>LEADERBOARD</CheckoutPaymentTitle>
          <Leaderboard />
        </PaymentPageInnerWrapper>
      </PaymentPageWrapper>
    </StyledPaymentPage>
  );
}

export default LeaderboardPage;
