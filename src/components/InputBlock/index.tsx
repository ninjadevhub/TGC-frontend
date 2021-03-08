import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import { IInputBlock } from './types';
import { formRestrictions } from '../../utils/formRestrictions';

const StyledInputBlock = styled.div`
    font-family: 'San Francisco', Arial, sans-serif;
    position: relative;
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

const InputBlock = ({
    id, type = 'text', label, name, placeholder, register, errors, pattern: inputPattern
                    }: IInputBlock) => {
    const { restrictions, errorMessage: { required: requiredAttr, minLength, maxLength, pattern, min, max } } = formRestrictions[name] || {};
    console.log(errors,'errors');
    return (
        <StyledInputBlock>
            <Input name={name} placeholder={placeholder} ref={register(restrictions)} type={type} pattern={inputPattern} />
            {label && <label htmlFor={id}>
                {label}
            </label>}
            {errors[name]?.type === 'required' && <InputBlockError>{requiredAttr}</InputBlockError>}
            {errors[name]?.type === 'minLength' && <InputBlockError>{minLength}</InputBlockError>}
            {errors[name]?.type === 'maxLength' && <InputBlockError>{maxLength}</InputBlockError>}
            {errors[name]?.type === 'pattern' && <InputBlockError>{pattern}</InputBlockError>}
            {errors[name]?.type === 'min' && <InputBlockError>{min}</InputBlockError>}
            {errors[name]?.type === 'max' && <InputBlockError>{max}</InputBlockError>}
        </StyledInputBlock>
    );
};

export default InputBlock;
