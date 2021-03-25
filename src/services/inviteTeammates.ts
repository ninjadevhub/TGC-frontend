import axios from "axios";
import { URL } from "../utils/constants";
import { IIviteTeamMate } from "../components/PaymentSuccessForm/types";

export const inviteTeammates = ({ 
    creationToken, receivers, teamName, platformId, platformType, token 
}: IIviteTeamMate) => {
    return axios.post(URL.INVITE_TEAMMATE, {
        creationToken,
        receivers,
        teamName,
        platformId,
        platformType
    }, {
        headers: {
            'Authorization': `${token}`
        }
    })
};