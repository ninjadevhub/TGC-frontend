import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../../styles/mixins';
import mainLogo from '../../images/main-logo.svg';
import codIcon from '../../images/cod-icon.png';
import apexIcon from '../../images/apex-icon.png';
import lolIcon from '../../images/lol-icon.png';
import gameIcon from '../../images/game-icon.png';

const StyledHeader = styled.div`
    background-color: #000;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LayoutWrapper>
          <HeaderWrapper>
            <a href="/"><img src={mainLogo} alt="logo" /></a>
            <img src={codIcon} alt="call of duty icon" />
            <img src={apexIcon} alt="apex icon" />
            <img src={lolIcon} alt="league of legends icon" />
            <img src={gameIcon} alt="game icon" />
          </HeaderWrapper>
      </LayoutWrapper>
    </StyledHeader>
  );
}

export default Header;
