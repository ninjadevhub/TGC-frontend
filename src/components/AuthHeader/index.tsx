import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
    UserContentWrapper,
    UserAccount,
    SimpleButton,
    ShowOnMobile,
    CtaButton,
    ShowOnDesktop,
} from '../../styles/mixins';
import { CustomDropdown } from '../CustomDropdown';


const JoinTCGButton = styled(CtaButton)`
  margin-right: 31px;
`;

function AuthHeader() {
    let { userToken, userData, signout } = useAuth();
    const { fullName } = userData || {};

    return userToken?.accessToken ? (
        <>
            <UserContentWrapper> 
                <CustomDropdown toggler={() => (
                    <UserAccount>{fullName}</UserAccount>
                )}>
                    <CustomDropdown.Item onClick={() => {}}>
                        Edit profile
                    </CustomDropdown.Item>
                    <CustomDropdown.Item onClick={signout}>
                        Logg out
                    </CustomDropdown.Item>
                </CustomDropdown> 
            </UserContentWrapper>
        </>
    ) : (
        <>
            <ShowOnMobile><Link to='/registration'><CtaButton>Join</CtaButton></Link></ShowOnMobile>
            <ShowOnDesktop><Link to='/registration'><JoinTCGButton>Join TGC Club</JoinTCGButton></Link></ShowOnDesktop>
            <ShowOnDesktop><Link to='/login'><SimpleButton>Sign In</SimpleButton></Link></ShowOnDesktop>
        </>
    );
}

export default AuthHeader;