import styled from 'styled-components';

// export const CtaButton = styled.h1<ICtaButton>`
export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SimpleButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 19px;
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

export const RegisterButton = styled(CtaButton)`
  font-size: 20px;
  line-height: 24px;
  padding: 12px 83px;
  background: linear-gradient(0deg, rgba(190, 12, 12, 0.3), rgba(190, 12, 12, 0.3));
  border: 2px solid #DB4C4C;
  border-radius: 4px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 13px 0;
`;

export const HeadingH1 = styled.h1`
  font-size: 60px;
  line-height: 72px;
  color: #E9DBF0;
  text-align: center;
`;

export const HeadingH2 = styled.h2`
  margin: 0;
  color: #fff;
  font-weight: normal;
  text-align: center;
`;