import React from 'react';
import styled from 'styled-components';
import { LayoutWrapper, UserContentWrapper } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import arrowIcon from '../../images/arrow-down.svg';
import TabsSwitcher from '../../components/TabsSwitcher';
import TournamentTable from '../../components/TournamentTable';
import { allTournamentsData } from '../../mockedData/allTournaments';
import { myTournamentsData } from '../../mockedData/myTournaments';
import { device } from '../../styles/constants';

const StyledPaymentPage = styled.div`
  min-height: 1460px;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1360px;
  }
`;

const PaymentPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
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

const TournamentPage: React.FC = () => {
  return (
    <StyledPaymentPage>
      <PaymentPageWrapper removeMobilePaddings={true}>
        <UserContentWrapper>
          <UserAccount>Francis Green</UserAccount>
        </UserContentWrapper>
          <TabsSwitcher titles={['All Tournaments', 'My Tournaments']}>
              <TournamentTable data={allTournamentsData} styledHeader hasFooter footerButton='See my current tournaments' />
              <TournamentTable data={myTournamentsData} styledHeader hasFooter footerButton='Check out all tournaments' />
          </TabsSwitcher>
      </PaymentPageWrapper>
    </StyledPaymentPage>
  );
}

export default TournamentPage;
