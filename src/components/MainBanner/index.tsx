import * as React from 'react';
import styled from 'styled-components';
import { CtaButton, LayoutWrapper, SimpleButton, RegisterButton } from '../../styles/mixins';
import warzoneLogo from '../../images/warzone-logo.png';
import tournaments from '../../images/tournaments.png';
import city from '../../images/city.png';
import bannerBackground from '../../images/banner-bg.jpg';
import { Link } from 'react-router-dom';

const StyledMainBanner = styled.div`
  min-height: 1150px;
  padding-top: 22px;
  background: url(${city}) bottom, url(${bannerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 37px;

  a {
    line-height: 52px;
  }
`;

const JoinTCGButton = styled(CtaButton)`
  margin-right: 31px;
`;

const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Announcement = styled.p`
  margin: 120px 0 9px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #B2212B;
`;

const AnnouncementDate = styled.p`
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 20px;
`;

const ViewAllEvents = styled(SimpleButton)`
  margin-top: 9px;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;

const MainBanner: React.FC = () => {
  return (
    <StyledMainBanner>
      <MainBannerWrapper>
          <ButtonWrapper>
            <Link to='/registration'><JoinTCGButton>Join TGC Club</JoinTCGButton></Link>
            <Link to='/login'><SimpleButton>Sign In</SimpleButton></Link>
          </ButtonWrapper>
          <BannerTextWrapper>
            <img src={warzoneLogo} alt="warzone logo" />
            <img src={tournaments} alt="tournaments" />
            <Announcement>Next Tournaments</Announcement>
            <AnnouncementDate>February 3, 2021</AnnouncementDate>
            <RegisterButton>Register Now</RegisterButton>
            <ViewAllEvents>View all events</ViewAllEvents>
          </BannerTextWrapper>
      </MainBannerWrapper>
    </StyledMainBanner>
  );
}

export default MainBanner;
