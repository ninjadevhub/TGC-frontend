import * as React from 'react';
import styled from 'styled-components';
import { HeadingH2, LayoutWrapper, Paragraph } from '../../styles/mixins';
import playerImage from '../../images/player.jpg';
import trophyGoldIcon from '../../images/trophy-gold.svg';
import circledArrow from '../../images/circled-arrow.svg';
import carouselBg from '../../images/carousel-bg.png';
import { mockedFeatures } from './mockedData';
import { IPlayerFeature } from './types';

const StyledPlayerCarousel = styled.div`
  padding: 23px 0 184px;
  background-color: #000;
`;

const PlayerCarouselSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const CarouselArrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 7%;
  z-index: 1;
`;

const PlayerCarouselBgImage = styled.img`
  position: absolute;
  left: -62px;
  top: 34px;
`;

const PlayerCarouselBg = styled.div`
  width: 550px;
  height: 340px;
  position: absolute;
  top: 77px;
  left: 27%;
  background-color: #101010;
`;

const PlayerImageBlock = styled.div`
  position: relative;
  margin-right: 57px;
  z-index: 1;
`;

const PlayerInfo = styled.div`
  display: flex;
  position: absolute;
  left: 19px;
  bottom: 19px;
`;

const PlayerPersonalInfo = styled.div`
  margin-left: 9px;
`;

const PlayerName = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin: 3px 0;
`;

const PlayerTitle = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #EDBE00;
  margin: 0;
`;

const PlayerDescription = styled.div`
  flex-basis: 41%;
  color: #fff;
  padding: 47px 0;
  z-index: 1;
`;

const DescriptionTitle = styled(HeadingH2)`
  font-size: 32px;
  line-height: 39px;
  text-align: left;
`;

const DescriptionText = styled(Paragraph)`
  max-width: 84%;
  margin: 25px 0 53px;
  color: #878787;
  font-family: 'Source Sans Pro', sans-serif;
`;

const PlayerFeaturesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 67%;
`;

const PlayerFeaturesItem = styled.div``;
const PlayerFeatureValue = styled.p`
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  text-align: center;
`;

const PlayerFeature = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  color: #878787;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
`;

const PlayersCarousel = () => {
  return (
    <StyledPlayerCarousel>
      <LayoutWrapper>
        <PlayerCarouselSlide>
          <PlayerCarouselBgImage src={carouselBg} alt="carousel background image" />
          <PlayerImageBlock>
            <img src={playerImage} alt="player" />
            <PlayerInfo>
            <img src={trophyGoldIcon} alt="trophy icon" />
            <PlayerPersonalInfo>
                <PlayerName>Travis Blackburn</PlayerName>
                <PlayerTitle>Winner of Tournament #12</PlayerTitle>
            </PlayerPersonalInfo>
            </PlayerInfo>
          </PlayerImageBlock>
          <PlayerDescription>
            <DescriptionTitle>Lorem ipsum consectetur adipiscing elit!</DescriptionTitle>
            <DescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis odio at ipsum, nec habitant vestibulum, urna id natoque. Pharetra habitasse lectus at sed pellentesque proin elementum.</DescriptionText>
            <PlayerFeaturesBlock>
              {mockedFeatures.map(({ id, feature, value }: IPlayerFeature) => {
                return (
                  <PlayerFeaturesItem key={id}>
                    <PlayerFeatureValue>{value}</PlayerFeatureValue>
                    <PlayerFeature>{feature}</PlayerFeature>
                  </PlayerFeaturesItem>
                )
              })}
            </PlayerFeaturesBlock>
          </PlayerDescription>
          <CarouselArrow src={circledArrow} alt="player" />
          <PlayerCarouselBg />
        </PlayerCarouselSlide>
      </LayoutWrapper>
    </StyledPlayerCarousel>
  );
}

export default PlayersCarousel;
