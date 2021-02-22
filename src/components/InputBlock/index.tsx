import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import { IInputBlock } from './types';

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
    input, id, type = 'text', label, placeholder, required = true, hasError = false, error = ''
}: IInputBlock) => {
    return (
        <StyledInputBlock>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                {...input}
            />
            {label && <label htmlFor={id}>
                    {label}
                </label>}
            {hasError && <InputBlockError>{error}</InputBlockError>}
            <InputBlockError>{error}</InputBlockError>
        </StyledInputBlock>
    );
};

export default InputBlock;
