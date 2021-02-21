import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegistrationForm from '../../components/RegistrationForm';
import { CtaButton, HeadingH1, LayoutWrapper, Paragraph } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';

const StyledRegistrationPage = styled.div`
  min-height: 1625px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;
`;

const RegistrationPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const RegistrationPageHeader = styled(HeadingH1)`
  margin: 72px 0;
  z-index: 1;
  font-weight: normal;
`;

const RegistrationPageLinks = styled(Paragraph)`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin: 0 0 15px;
  color: #fff;

  a {
    color: #ab5453;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 22px 0 0;
`;

const RegistrationPageBgImage = styled.img`
  position: absolute;
  top: 136px;
`;

const RegistrationPage: React.FC = () => {
  return (
    <StyledRegistrationPage>
      <RegistrationPageWrapper>
        <ButtonWrapper>
          <Link to='/login'><CtaButton>Sign In</CtaButton></Link>
        </ButtonWrapper>
        <RegistrationPageBgImage src={tgcClub} alt="tgc club background" />
        <RegistrationPageHeader>Join TGC Club</RegistrationPageHeader>
        <RegistrationPageLinks>Have an account? <Link to='login'>Sign in now</Link></RegistrationPageLinks>
        <RegistrationForm />
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default RegistrationPage;
