import { useState } from 'react';
import {IUserData, IUserToken} from '../components/ProvideAuth/types';
import { LS, parsedLSitem } from '../utils/helpers';

export function useProvideAuth() {
    const [userData, setUserData] = useState<IUserData | null>(parsedLSitem('userData'));
    const [userToken, setUserToken] = useState<IUserToken | null>(parsedLSitem('userToken'));

    const setUser = (userData: IUserData) => {
        LS.set('userData', JSON.stringify(userData));
        setUserData(userData);
    }

    const signin = (userToken: IUserToken) => {
        LS.set('userToken', JSON.stringify(userToken));
        setUserToken(userToken);
    };

    const signout = () => {
        LS.remove(['userToken']);
        LS.remove(['userData']);
        setUserData(null);
        setUserToken(null);
    };

    return {
        userData,
        userToken,
        setUser,
        signin,
        signout
    };
}

// const fakeAuth = {
//     isAuthenticated: false,
//     signin(cb: any) {
//         fakeAuth.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb: any) {
//         fakeAuth.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };