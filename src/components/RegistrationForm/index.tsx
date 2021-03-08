import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import InputBlock from '../InputBlock';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import checkIcon from '../../images/check-icon.svg';
import { device } from '../../styles/constants';
import { Paragraph } from '../../styles/mixins';
import SnackbarComponent from '../SnackBar';

const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 82px 20px 76px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 675px;
    border-radius: 8px;
    padding: 82px 107px 95px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 52px;
    }
  }
`;

const DateOfBirthBlock = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: 16px;
  }
`;

const LabeledCheckbox = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;

    input {
      width: auto;
      display: none;
    }

    label {
      position: relative;
      padding-left: 32px;
      color: #fff;
      font-family: 'San Francisco', Arial, sans-serif;
      font-size: 12px;
      line-height: 21px;

      @media ${device.tablet} {
       
      }

      &::before {
        content: '';
        width: 19px;
        height: 19px;
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 12px;
        background-color: inherit;
        border: 1px solid #B2212B;
        vertical-align: middle;
      }
    }

    input:checked + label {
      &::after {
        content: url(${checkIcon});
        position: absolute;
        left: 1px;
        top: 3px;
      }
    }
    
    & > p {
      top: 25px;
    }
  }
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #B2212B;
    background: inherit;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: inherit;
    padding: 10px;
    box-sizing: border-box;

    ::placeholder {
        color: #fff;
    }
`;

const StyledInputBlock = styled.div`
    font-family: 'San Francisco', Arial, sans-serif;
    position: relative;
`;


const InputBlockError = styled(Paragraph)`
    width: 100%;
    position: absolute;
    margin: 3px 0 0;
    font-size: 10px;
    line-height: 12px;
    color: #fff;
    opacity: 0.7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: inherit;
`;

const RegistrationForm: React.FC = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const [snackbarOpened, setSnackbarOpened] = useState(false);
    const [isError, setIsError] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpened(false);
    };

    const onSubmit = (data: any) => {
        const { email, password, confirmPassword, country, fullName, birthDate, birthMonth, birthYear } = data;
        console.log(data);
        const dateOfBirth = `${birthMonth}-${birthDate}-${birthYear}`;

        axios.post('/auth/register', {
            fullName,
            password,
            confirmPassword,
            email,
            dateOfBirth,
            country
        })
        .then(function (response) {
            console.log(response, 'response');
            setSnackbarOpened(true);
            setSnackbarText('Successfully registered');
        })
        .catch(function ({ response: { data } }) {
            const { message } = JSON.parse(data);
            setSnackbarOpened(true);
            setIsError(true);
            setSnackbarText(message);
        });
    };

    const password = useRef({});
    password.current = watch('password', '');

  return (
      <RegistrationFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <InputBlock name='fullName' placeholder='Full Name' register={register} errors={errors} />
          <InputBlock name='email' placeholder='Email' register={register} errors={errors} />
          <InputBlock name='password' type='password' placeholder='Password' register={register} errors={errors} />
          <StyledInputBlock>
              <Input
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                  ref={register({
                      validate: value =>
                          value === password.current || 'The passwords do not match',
                      required: true
                  })}
              />
              {errors.confirmPassword && <InputBlockError>{errors.confirmPassword.message}</InputBlockError>}
              {errors.confirmPassword?.type === 'required' && <InputBlockError>This field is required</InputBlockError>}
          </StyledInputBlock>
          <InputBlock name='country' placeholder='Country' register={register} errors={errors} />
          <DateOfBirthBlock>
            <InputBlock placeholder='Birth Date' name='birthDate' register={register} errors={errors} />
            <InputBlock placeholder='Birth Month' name='birthMonth' register={register} errors={errors} />
            <InputBlock placeholder='Birth Year' name='birthYear' register={register} errors={errors} />
          </DateOfBirthBlock>
          <LabeledCheckbox>
              <StyledInputBlock>
                  <Input type='checkbox' id='checkTerms' name='checkTerms' ref={register({ required: 'This field is required' })}  />
                  <label htmlFor='checkTerms'>
                      I agree to the Terms of Use and I have read and acknowledge the Privacy Policy.
                  </label>
                  {errors.checkTerms && <InputBlockError>{errors.checkTerms.message}</InputBlockError>}
              </StyledInputBlock>
          </LabeledCheckbox>

          <LoginRegisterButton type='submit'>Join Now</LoginRegisterButton>
          <SnackbarComponent open={snackbarOpened} text={snackbarText} error={isError} handleClose={handleCloseSnackbar}/>
      </RegistrationFormWrapper>
  );
}

export default RegistrationForm;
