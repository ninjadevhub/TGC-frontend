import * as React from 'react';
import styled from 'styled-components';
import { CtaButton, Paragraph, ShowOnMobile, ShowOnDesktop } from '../../styles/mixins';
import { ITableRow } from '../TournamentTable/types';
import gameModeIcon from '../../images/game-mode.svg';
import { IStatus } from '../TournamentTable/types';
import australiaFlag from '../../images/australia-flag-square.svg';
import trophyFlag from '../../images/trophy-transparent.svg';
import rectangular from '../../images/rectangular.svg';
import { device } from '../../styles/constants';

const TournamentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 14px 14px 9px;
  background: #181818;
  border: 1px solid #383838;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 14px 27px;
    align-items: center;
  }
`;

const TournamentCell = styled.div`
  color: #817A84;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;

const TournamentCellGameMode = styled(TournamentCell)`
  display: none;
  flex-basis: 15%;

  @media ${device.tablet} {
    display: block;
  }

  img {
    width: 70%;
    
    @media ${device.laptop} {
      max-width: 107px;
    }
  }
`;

const TournamentCellInfo = styled(TournamentCell)`
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-basis: 35%;
  }
`;

const TournamentCellPrize = styled(TournamentCell)`
  display: none;
  
  @media ${device.tablet} {
    display: block;
    flex-basis: 11%;
  }
`;

const TournamentCellTeamSize = styled(TournamentCell)<{ teamSize: number | null }>`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-basis: 12%;
  }

  &::after {
    content: ${({ teamSize }) => teamSize ? `url(${rectangular})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
`;

const TournamentCellStatus = styled(TournamentCell)`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    flex-basis: 27%;
  }
`;

const TournamentName = styled(Paragraph)`
  display: inline-block;
  color: #E9DBF0;
  font-weight: 800;
  margin: 0;
  font-family: 'San Francisco', Arial, sans-serif;

  @media ${device.tablet} {
    margin-bottom: 6px;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TournamentDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  font-family: 'San Francisco', Arial, sans-serif;
  color: #817A84;
  margin: 8px 29px 0 0;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const StatusBadgeWrapperStyled = styled.div`
  display: inline-block;

  @media ${device.tablet} {
    display: none;
  }
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 2px 6px;
  background: #343434;
  color: #E9DBF0;
  border-radius: 100px;
  font-weight: 800;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  font-family: 'San Francisco', Arial, sans-serif;
  margin-right: 7px;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

const StatusIndicator = styled.span<{status: string}>`
  display: inline-block;
  margin-right: 4px;
  width: 8px;
  height: 8px;
  background: ${({ status }) => status === 'closed' ? '#5A5A5A' : status === 'completed' ? '#FACB27' :  status === 'live' ? '#DB4C4C' : '#249937'};
  border-radius: 50%;
`;

const TournamentTimelineButton = styled(CtaButton)<IStatus>`
  width: 164px;
  display: flex;
  justify-content: center;
  padding: 10px 11px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ status }) => status === 'closed' || status === 'completed' ? '#232323' :
          status === 'live' ? '#C18A23' : status === 'registered' ? '#BABABA' : '#8D1C1C'};
  color: ${({ status, showIcons }) => showIcons ? '#fff' : status === 'closed' || status === 'completed' ? '#656565' :
          status === 'registered' ? '#343434' : '#fff'};
  border-radius: 4px;
  margin: 14px 0 6px;

  @media ${device.tablet} {
    margin: 0;
  }

  &::before {
    content: ${({ showIcons }) => showIcons ? `url(${trophyFlag})` : 'none'};
    display: inline-block;
    margin-right: 6px;
    height: 14px;
  }

  &::after {
    content: ${({ showIcons }) => showIcons ? `url(${australiaFlag})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
`;

const TournamentTimeline = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  margin-left: 11px;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const TournamentDetails = styled.div`
  display: flex;
  margin-top: 8px;
  
  div {
    display: flex;
    
    &:first-child {
      margin-right: 23px;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const TournamentItem = ({
  status: tournamentStatus,
  tournament: { name, label, date },
  prize,
  teamSize,
  registrationInfo: { status, timeline, showIcons  }
}: ITableRow) => {
  return (
    <TournamentRow>
      <TournamentCellGameMode><img src={gameModeIcon} alt="game mode" /></TournamentCellGameMode>
      <TournamentCellInfo>
          <StatusBadgeWrapperStyled>
            <StatusBadgeWrapper tournamentStatus={tournamentStatus} label={label} />
          </StatusBadgeWrapperStyled>
        <TournamentName>{name}</TournamentName>
        <StatusWrapper>
            <ShowOnDesktop>
                <StatusBadgeWrapper tournamentStatus={tournamentStatus} label={label} />
            </ShowOnDesktop>
          <TournamentDate>{date}</TournamentDate>
          <TournamentDetails>
            <TournamentCellPrize>{prize}</TournamentCellPrize>
            <TournamentCellTeamSize teamSize={teamSize}>{teamSize || '-'}</TournamentCellTeamSize>
          </TournamentDetails>
        </StatusWrapper>
      </TournamentCellInfo>
      <TournamentCellPrize>{prize}</TournamentCellPrize>
      <TournamentCellTeamSize teamSize={teamSize}>{teamSize || '-'}</TournamentCellTeamSize>
      <TournamentCellStatus>
        <TournamentTimelineButton status={tournamentStatus} showIcons={showIcons}>{status}</TournamentTimelineButton>
        <TournamentTimeline>{timeline}</TournamentTimeline>
      </TournamentCellStatus>
    </TournamentRow>
  );
}

export default TournamentItem;

interface IStatusBadgeWrapper {
    tournamentStatus: string;
    label: string;
}

const StatusBadgeWrapper = ({ tournamentStatus, label }: IStatusBadgeWrapper) => {
    return (
        <StatusBadge>
            <StatusIndicator status={tournamentStatus} />{tournamentStatus === 'live' ? 'live' : label}
        </StatusBadge>
    )
}
