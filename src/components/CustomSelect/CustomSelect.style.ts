import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
`;

export const SelectTitle = styled.div`
    cursor: pointer;
`;

export const SelectMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
    max-height: 150px;
    overflow-y: auto;
    width: 100%;
    z-index: 10;
    background-color: #000;
`;

export const SelectItem = styled.div`
    font-size: 16px;
    margin-bottom: 6px;
    padding: 4px 0;
    outline: none;
    border: none;
    text-align: center;
    color: #fff;
    opacity: .7;
    cursor: pointer;

    &:hover {
        opacity: .9;
    }
`;