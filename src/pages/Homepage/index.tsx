import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import FeaturesBanner from '../../components/FeaturesBanner';
import MainBanner from '../../components/MainBanner'; 
import RecentWinners from '../../components/RecentWinners';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Description from '../../components/Description';
import TournamentTable from '../../components/TournamentTable';
import PlayersCarousel from '../../components/PlayersCarousel';
import { getTournaments } from '../../services/getTournaments';
import { tableHead, URL } from '../../utils/constants';



const TournamentTableWrapper = styled.div`
  padding: 70px 0;
  background: #000;
`;

const Homepage: React.FC = () => {
    const [allTournaments, setAllTournaments] = useState([]);
    const tournamentsRef = useRef<HTMLDivElement>(null);


    const handleScrollToTournamentTable = useCallback(() => {
      if(tournamentsRef && tournamentsRef.current) {
        tournamentsRef.current.scrollIntoView()
      }
    }, []);

    useEffect(() => { 
      getTournaments(URL.GET_ALL_TOURNAMENTS, '')
          .then(({ data: { body: { tournaments } } }) => {
              setAllTournaments(tournaments);
          })
          .catch(err => console.log(err));
    }, []);

  return (
    <main>  
     <MainBanner onViewAllEventsClick={handleScrollToTournamentTable} /> 
     <RecentWinners />
     {/* <FeaturesBanner textRight banner={banner1} title='Top 4 Games'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <FeaturesBanner banner={banner2} title='Payment in 24h'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     /> */}
     <TournamentTableWrapper ref={tournamentsRef}>
         {/*TODO: return this after fetching a real data*/} 
        <TournamentTable data={allTournaments} tableHead={tableHead} title='Tournament List' />
     </TournamentTableWrapper>
     <Description />
     <PlayersCarousel />
    </main>
  );
}

export default Homepage;
