import React, { ReactElement, useState } from "react"
import TabTitle from "../TabTitle"
import styled from "styled-components";

type Props = {
    children: ReactElement[]
}

const TabsList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
`;

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div>
            <TabsList>
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                        selectedTab={selectedTab}
                    />
                ))}
            </TabsList>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs