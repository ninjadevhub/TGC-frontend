import styled from 'styled-components';
import { SimpleButton } from '../../styles/mixins';

export const DropdownContainer = styled.div`
    position: relative;
`;

export const DropdownTitle = styled.div`
    cursor: pointer;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
`;

export const DropdownItem = styled(SimpleButton)`
    margin-bottom: 6px;
    padding: 4px 0;
    outline: none;
    border: none;
    text-align: left;
    white-space: nowrap;
`;