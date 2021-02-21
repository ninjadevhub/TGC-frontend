import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper, HeadingH2 } from '../../styles/mixins';
import TotalPayment from '../TotalPayment';
import WinnerCard from '../WinnerCard';
import { mockedWinners } from './mockedData';
import { IPlace } from '../WinnerCard/types';

const StyledRecentWinners = styled.div`
  padding: 0 0 100px;
  background-color: #000;
`;

const RecentWinnersWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const WinnersBlock = styled.div``;

const WinnersTitle = styled(HeadingH2)`
  margin-bottom: 31px;
`;

const WinnersList = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin-right: 24px;
  }
`;

const RecentWinners: React.FC = () => {
  return (
    <StyledRecentWinners>
      <RecentWinnersWrapper>
          <TotalPayment />
          <WinnersBlock>
            <WinnersTitle>Recent Winners</WinnersTitle>
            <WinnersList>
              {mockedWinners.map(({ id, place, winners }: IPlace) => <WinnerCard key={id} place={place} winners={winners} />)}
            </WinnersList>
          </WinnersBlock>
      </RecentWinnersWrapper>
    </StyledRecentWinners>
  );
}

export default RecentWinners;
