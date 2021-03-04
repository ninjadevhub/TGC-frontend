import styled from 'styled-components';
import { device } from './constants';

export const LayoutWrapper = styled.div<{ removeMobilePaddings?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1260px;
  margin: 0 auto;
  padding: ${({ removeMobilePaddings }) => removeMobilePaddings ? 0 : '0 20px'};

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

export const SimpleButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    cursor: pointer;
  }
`;

export const CtaButton = styled.button`
  padding: 11px 36px;
  background: #B2212B;
  color: #fff;
  border: none;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWithBorder = styled(CtaButton)`
  font-size: 20px;
  line-height: 24px;
  padding: 12px 83px;
  background: linear-gradient(0deg, rgba(190, 12, 12, 0.3), rgba(190, 12, 12, 0.3));
  border: 2px solid #DB4C4C;
  border-radius: 4px;
`;


export const LoginRegisterButton = styled(ButtonWithBorder)`
  max-width: 306px;
  margin: 0 auto;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 13px 0;
  color: #fff;
`;

export const HeadingH1 = styled.h1`
  font-size: 40px;
  line-height: 48px;
  color: #E9DBF0;
  text-align: center;

  @media ${device.tablet} {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const HeadingH2 = styled.h2`
  margin: 0;
  color: #fff;
  font-weight: normal;
  text-align: center;
`;

export const ShowOnDesktop = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const ShowOnMobile = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;