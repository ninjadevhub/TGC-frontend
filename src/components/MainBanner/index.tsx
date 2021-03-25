import * as React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import {
    LayoutWrapper,
    SimpleButton,
    ButtonWrapper,
    MenuList,
    MenuItem
} from '../../styles/mixins';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import warzoneLogo from '../../images/warzone-logo.png';
import tournaments from '../../images/tournaments.png';
import city from '../../images/city.png';
import bannerBackground from '../../images/banner-bg.jpg';
import { device } from '../../styles/constants';
import AuthHeader from '../AuthHeader';
import { useAuth } from '../../hooks/useAuth';


const StyledMainBanner = styled.div`
  min-height: 645px;
  padding-top: 22px;
  background: url(${city}) bottom, url(${bannerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1150px;
  }
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const HomepageButtonWrapper = styled(ButtonWrapper)`
  margin-bottom: 37px;
`;

const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 132px;
  
  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const Announcement = styled.p`
  margin: 40px 0 9px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #B2212B;

  @media ${device.tablet} {
    margin-top: 120px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const AnnouncementDate = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 20px;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
`;

const ViewAllEvents = styled(SimpleButton)`
  margin-top: 20px;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  @media ${device.tablet} {
    margin-top: 9px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const WarzoneLogo = styled.img`
  width: calc(100% - 80px);

  @media ${device.tablet} {
    width: auto;
  }
`;

const TournamentImage = styled.img`
  width: calc(100% - 40px);

  @media ${device.tablet} {
    width: auto;
  }
`;

interface MainBannerProps {
  onViewAllEventsClick: () => void;
}

const MainBanner: React.FC<MainBannerProps> = ({ onViewAllEventsClick }) => {
  let { userData } = useAuth();
  const history = useHistory();

  return (
    <StyledMainBanner>
      <MainBannerWrapper>
          <HomepageButtonWrapper>
            {
              userData &&
              <MenuList>
                <MenuItem onClick={() => history.push('/tournament')}>All Tournaments</MenuItem>
                <MenuItem>My Tournaments</MenuItem>
              </MenuList>
            }
            <AuthHeader />
          </HomepageButtonWrapper>
         
          <BannerTextWrapper>
            <WarzoneLogo src={warzoneLogo} alt='warzone logo' />
            <TournamentImage src={tournaments} alt='tournaments' />
            <Announcement>Next Tournaments</Announcement>
            <AnnouncementDate>February 3, 2021</AnnouncementDate>
            {/* TODO: add real id in homepage integration task */}
            <Link 
              to={{ 
                  pathname: '/registration', 
                  state: { tournamentId: '1', from: window.location.pathname } 
              }}>
                <LoginRegisterButton>Register Now</LoginRegisterButton>
            </Link>
            <ViewAllEvents onClick={onViewAllEventsClick}>
              View all events
            </ViewAllEvents> 
          </BannerTextWrapper>
      </MainBannerWrapper>
    </StyledMainBanner>
  );
}

export default MainBanner;
