import * as React from 'react';
import styled from 'styled-components';
import { CtaButton, Paragraph } from '../../styles/mixins';
import { ITableRow } from '../Tournament/types';
import gameModeIcon from '../../images/game-mode.svg';
import { IStatus } from '../Tournament/types';
import australiaFlag from '../../images/australia-flag-square.svg';
import trophyFlag from '../../images/trophy-transparent.svg';
import rectangular from '../../images/rectangular.svg';

const TournamentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 27px;
  background: #181818;
  border: 1px solid #383838;
`;

const TournamentCell = styled.div`
  color: #817A84;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;

const TournamentCellGameMode = styled(TournamentCell)`
  flex-basis: 15%;

  img {
    max-width: 107px;
  }
`;

const TournamentCellInfo = styled(TournamentCell)`
  flex-basis: 35%;
`;

const TournamentCellPrize = styled(TournamentCell)`
  flex-basis: 11%;
`;

const TournamentCellTeamSize = styled(TournamentCell)<{ teamSize: number | null }>`
  flex-basis: 12%;

  &::after {
    content: ${({ teamSize }) => teamSize ? `url(${rectangular})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
`;

const TournamentCellStatus = styled(TournamentCell)`
  flex-basis: 27%;
  display: flex;
  align-items: center;
`;

const TournamentName = styled(Paragraph)`
  color: #E9DBF0;
  font-weight: 800;
  margin: 0 0 6px;
  font-family: 'Source Sans Pro', sans-serif;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TournamentDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #817A84;
  margin: 0;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  background: #343434;
  color: #E9DBF0;
  border-radius: 100px;
  font-weight: 800;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  margin-right: 7px;
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
  background-color: ${({ status }) => status === 'closed' || status === 'completed' ? '#232323' : status === 'live' ? '#C18A23' : '#8D1C1C'};
  color: ${({ status, showIcons }) => showIcons ? '#fff' : status === 'closed' || status === 'completed' ? '#656565' : '#fff'};

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
  font-family: 'Source Sans Pro', sans-serif;
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
        <TournamentName>{name}</TournamentName>
        <StatusWrapper>
          <StatusBadge><StatusIndicator status={tournamentStatus} />{tournamentStatus === 'live' ? 'live' : label}</StatusBadge>
          <TournamentDate>{date}</TournamentDate>
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
