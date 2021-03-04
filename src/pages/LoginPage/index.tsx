import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';
import { CtaButton, HeadingH1, LayoutWrapper, Paragraph, ShowOnMobile, ShowOnDesktop } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';
import { device } from '../../styles/constants';

const StyledRegistrationPage = styled.div`
  min-height: 800px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1100px;
  }
`;

const RegistrationPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const RegistrationPageHeader = styled(HeadingH1)`
  margin: 81px 0 2px;
  z-index: 1;
  font-weight: normal;
  
  @media ${device.tablet} {
    margin: 72px 0;  
  }
`;

const RegistrationPageLinks = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin: 0 0 44px;
  color: #fff;
  z-index: 1;

  a {
    color: #ab5453;
  }

  @media ${device.tablet} {
    margin-bottom: 15px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 18px;
  right: 20px;

  @media ${device.tablet} {
    position: relative;
    margin-top: 22px;
  }
`;

const RegistrationPageBgImage = styled.img`
  width: 70%;
  position: absolute;
  top: 125px;
  
  @media ${device.tablet} {
    width: auto;
    top: 136px;  
  }
`;

const LoginPage: React.FC = () => {
  return (
    <StyledRegistrationPage>
      <RegistrationPageWrapper removeMobilePaddings={true}>
        <ButtonWrapper>
          <ShowOnMobile><Link to='/registration'><CtaButton>Join</CtaButton></Link></ShowOnMobile>
          <ShowOnDesktop><Link to='/registration'><CtaButton>Join TGC Club</CtaButton></Link></ShowOnDesktop>
        </ButtonWrapper>
        <RegistrationPageBgImage src={tgcClub} alt='tgc club background' />
        <RegistrationPageHeader>Log In</RegistrationPageHeader>
        <RegistrationPageLinks>Need an account? <Link to='/registration'>Sign up now</Link></RegistrationPageLinks>
        <LoginForm />
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default LoginPage;
