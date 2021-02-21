import * as React from 'react';
import styled from 'styled-components';
import { IPlace, IWinner } from './types';

interface IWinnerCardWrapper { multipleWinners: number }

const WinnerCardWrapper = styled.div<IWinnerCardWrapper>`
  min-width: 196px;
  background: #1A1717;
  border: 1px solid #515151;
  border-radius: 8px;
  padding: ${(props) => props.multipleWinners ? '24px 40px 30px' : '24px 20px 30px'};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinnerCardImage = styled.img`
  width: 60px;
  margin: 23px auto 12px;
`;

const WinnerCardSeparator = styled.span`
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 50.52%, rgba(255, 255, 255, 0) 100%);
`;

const WinnerCardWinners = styled.div`
  display: flex;
`;

const WinnerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 45px;
  }
`;

const WinnerCardTitle = styled.p<{ winners: number }>`
  margin: 0 auto 12px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ winners }) => winners > 1 ? '#DBC349' : '#F0404C'};
`;

const WinnerCardName = styled.h2`
  margin: 0 auto;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-weight: normal;
`;

const WinnerCard = ({ place, winners }: IPlace) => {
  return (
    <WinnerCardWrapper multipleWinners={winners.length}>
      <WinnerCardTitle winners={winners.length}>{place}</WinnerCardTitle>
      <WinnerCardSeparator />
      <WinnerCardWinners>
        {winners.map(({ id, name, countryLogo }: IWinner) => {
          return (
            <WinnerItem key={id}>
              <WinnerCardImage src={countryLogo} alt="warzone logo" />
              <WinnerCardName>{name}</WinnerCardName>
            </WinnerItem>
          )
        })}
      </WinnerCardWinners>
    </WinnerCardWrapper>
  );
}

export default WinnerCard;
