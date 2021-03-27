import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Tab from '../Tab';
import Tabs from '../Tabs';
 
const StyledTabsSwitcher = styled.div`
  width: 100%;
  max-width: 942px;
`;

type Props = {
    children: ReactElement[],
    titles: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}
 
const TabsSwitcher: React.FC<Props> = ({ children, titles, activeTab, setActiveTab}) => {
  return (
    <StyledTabsSwitcher>
        <Tabs selectedTab={activeTab} setSelectedTab={setActiveTab}> 
            {titles.map((title, index) => <Tab key={index} title={title}>{children[index]}</Tab>)}
        </Tabs>
    </StyledTabsSwitcher>
  );
}

export default TabsSwitcher;
