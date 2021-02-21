import * as React from 'react';
import styled from 'styled-components';
import { HeadingH2, LayoutWrapper } from '../../styles/mixins';
import { IFeaturesBanner, ITextAlign } from './types';

const StyledFeaturesBanner = styled.div<{ banner: string }>`
  height: 216px;
  background: ${({ banner }) => `url(${banner})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const FeaturesBannerWrapper = styled(LayoutWrapper)<ITextAlign>`
  justify-content: ${({ textRight }) => textRight ? 'flex-end' : 'flex-start'};
`;

const FeaturesBannerTextWrapper = styled.div<ITextAlign>`
  text-align: ${({ textRight }) => textRight ? 'left' : 'right'};
  flex-basis: 40%;
  color: #fff;
  padding: 47px 0;
  
  h2 {
    text-align: ${({ textRight }) => textRight ? 'left' : 'right'};
  }
`;

const FeaturesBannerTitle = styled(HeadingH2)`
  font-size: 32px;
  line-height: 39px;
`;

const FeaturesBannerText = styled.p`
  font-size: 12px;
  line-height: 16px;
  padding: 13px 0;
  font-family: 'Source Sans Pro', sans-serif;
`;

const FeaturesBanner = ({ textRight = false, banner, title, text }: IFeaturesBanner) => {
  return (
    <StyledFeaturesBanner banner={banner}>
      <FeaturesBannerWrapper textRight={textRight}>
          <FeaturesBannerTextWrapper textRight={textRight}>
            <FeaturesBannerTitle>{title}</FeaturesBannerTitle>
            <FeaturesBannerText>{text}</FeaturesBannerText>
          </FeaturesBannerTextWrapper>
      </FeaturesBannerWrapper>
    </StyledFeaturesBanner>
  );
}

export default FeaturesBanner;
