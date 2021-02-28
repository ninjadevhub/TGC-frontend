import React from 'react';
import styled from "styled-components";
import FeaturesBanner from '../../components/FeaturesBanner';
import MainBanner from '../../components/MainBanner';
import RecentWinners from '../../components/RecentWinners';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Description from '../../components/Description';
import TournamentTable from '../../components/TournamentTable';
import PlayersCarousel from '../../components/PlayersCarousel';
import {mockedTableData} from "../../mockedData/indexTournaments";

const TournamentTableWrapper = styled.div`
  padding: 70px 0;
  background: #000;
`;

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
     <TournamentTableWrapper>
        <TournamentTable data={mockedTableData} title="Tournament List" />
     </TournamentTableWrapper>
     <Description />
     <PlayersCarousel />
    </main>
  );
}

export default Homepage;
