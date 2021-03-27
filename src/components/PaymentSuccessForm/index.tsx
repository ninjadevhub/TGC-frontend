import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import InputBlock from '../InputBlock';
import { Paragraph, SimpleButton } from '../../styles/mixins';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import circledCheckIcon from '../../images/circled-check.svg';
import arrowIcon from '../../images/arrow.svg';
import { device } from '../../styles/constants';
import { IIviteTeamMate, IPaymentSuccessFormData } from './types';
import { Select, SelectArrow } from '../../styles/mixins';
import { useAuth } from '../../hooks/useAuth';
import { inviteTeammates } from '../../services/inviteTeammates';
import { getAuthToken } from '../../utils/helpers';
import SnackbarComponent from '../SnackBar';

const PaymentSuccessFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px 20px 49px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: 650px;
    border-radius: 8px;
    padding: 30px 118px 49px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
  
`;

const InviteButton = styled(LoginRegisterButton)`
  margin-top: 73px;
`;

const SuccessMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessMessage = styled(Paragraph)`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InviteTeammateBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

const InviteTeammateInputBlock = styled.div`
  flex: 1;
`;

const InviteTeammateButton = styled(SimpleButton)`
  margin-left: 10px;
`;


const PaymentSuccessForm: React.FC = () => {
  const [snackbarOpened, setSnackbarOpened] = useState(false);
  const [isError, setIsError] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { userData } = useAuth();
  const [usersToInvite, setUsersToInvite] = useState<string[]>([]);
  const location = useLocation<any>();
  const history = useHistory();

  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    setSnackbarOpened(false);
  };


  useEffect(() => {
    if(userData) {
      setValue('platform', userData.platformType)
      setValue('platformId', userData.platformId)
    }
  }, [userData]);


  const onSubmit = async (data: IPaymentSuccessFormData) => {
    const token = getAuthToken();
    setSnackbarOpened(false);
    
    const params: IIviteTeamMate = {
      creationToken: location.state, 
      receivers: [...usersToInvite], 
      teamName: data.teamName,
      platformId: data.platformId, 
      platformType: data.platform,
      token: token
    };


    if(usersToInvite.length > 0 && usersToInvite.length < 3) {
      const teammate = getValues('teammate');
      if(teammate) {
        params.receivers?.push(teammate)
      }
    }

    if(usersToInvite.length === 0) {
      const teammate = getValues('teammate');
      if(teammate) {
        params.receivers?.push(teammate)
      } else {
        delete params.receivers;
      }
    }

    
    try {
      const response = await inviteTeammates(params);
      setIsError(false);
      setSnackbarOpened(true);
      setSnackbarText(response.data.body.message);

      if(response.data.statusCode === 201) {
        setTimeout(() => history.push('/tournament'), 3000);
      } 

    } catch (err: any) {
      console.log(err)
      setSnackbarOpened(true);
      setIsError(true);
      setSnackbarText(err?.response?.data?.body?.message);
    }
  }; 

  const handleAddTeammate = () => {
    const value = getValues('teammate');
    if(value.length > 3) {
      setUsersToInvite(state => [...state, value]);
      setValue('teammate', '')
    }
  };

  const handleRemoveTeammate = (emailToRemove: string) => {
    setUsersToInvite(state => state.filter(em => em !== emailToRemove))
  };

  
  return (
    <PaymentSuccessFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SnackbarComponent 
        open={snackbarOpened} 
        text={snackbarText} 
        error={isError} 
        handleClose={handleCloseSnackbar}
      />
      <SuccessMessageBlock>
        <img src={circledCheckIcon} alt='check icon' />
        <SuccessMessage>we recieved your payment</SuccessMessage>
      </SuccessMessageBlock>
      <Select>
        <SelectArrow src={arrowIcon} alt='arrow icon' />
        <InputBlock 
          name='platform' 
          placeholder='Your Platform Type' 
          register={register} 
          errors={errors} 
        />
      </Select>
      <InputBlock   
        name='platformId' 
        placeholder='Your Platform ID' 
        register={register} 
        errors={errors} 
      />

      {
        usersToInvite.length > 0 &&
        usersToInvite.map((email, i) => (
          <InviteTeammateBlock key={`user-email-${i}`}>
            <InviteTeammateInputBlock>
              <InputBlock 
                name={`addedTeammate`} 
                type='text' 
                register={register} 
                errors={errors} 
                value={email}
                readOnly
              />
            </InviteTeammateInputBlock>
            <InviteTeammateButton 
              type={'button'}
              onClick={() => handleRemoveTeammate(email)}
            >
              Remove
            </InviteTeammateButton>
          </InviteTeammateBlock>
        ))
      }


      {
        usersToInvite.length < 3 &&
        <InviteTeammateBlock>
          <InviteTeammateInputBlock>
            <InputBlock 
              name='teammate' 
              placeholder={`Email of Player #${usersToInvite.length + 2}`} 
              type='email' 
              register={register} 
              errors={errors} 
            />
          </InviteTeammateInputBlock>
          <InviteTeammateButton 
            type={'button'}
            onClick={handleAddTeammate}
          >
            Add
          </InviteTeammateButton>
        </InviteTeammateBlock>
      }
      
      <InputBlock 
        name='teamName' 
        placeholder='Your Team Name' 
        register={register} 
        errors={errors} 
      />
      <InviteButton onClick={() => handleSubmit(onSubmit)}>Submit</InviteButton>
    </PaymentSuccessFormWrapper>
  );
}

export default PaymentSuccessForm;
