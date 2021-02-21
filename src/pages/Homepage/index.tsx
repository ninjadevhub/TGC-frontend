import React from 'react';
import FeaturesBanner from '../../components/FeaturesBanner';
import MainBanner from '../../components/MainBanner';
import RecentWinners from '../../components/RecentWinners';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Description from '../../components/Description';
import Tournament from '../../components/Tournament';
import PlayersCarousel from '../../components/PlayersCarousel';

const Homepage: React.FC = () => {
  return (
    <main>
     <MainBanner />
     <RecentWinners />
     <FeaturesBanner textRight banner={banner1} title='Top 4 Games'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <FeaturesBanner banner={banner2} title='Payment in 24h'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <Tournament />
     <Description />
     <PlayersCarousel />
    </main>
  );
}

export default Homepage;
