import styled from 'styled-components';
import { device } from './constants';
import { ButtonWithBorder, HeadingH1, Paragraph } from "./mixins";

export const LoginRegistrationPageLinks = styled(Paragraph)`
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

export const ButtonWrapper = styled.div`
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

export const LoginRegisterButton = styled(ButtonWithBorder)`
  max-width: 306px;
  margin: 0 auto;
  width: 100%;
`;