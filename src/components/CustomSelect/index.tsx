import React, { useRef, useState } from 'react';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Select, SelectArrow } from '../../styles/mixins';
import InputBlock from '../InputBlock';

import arrowIcon from '../../images/arrow.svg';
import {
    SelectContainer,
    SelectTitle,
    SelectMenu,
    SelectItem
} from './CustomSelect.style'


interface CustomSelectProps {
    toggler: () => React.ReactNode,
    children: JSX.Element | JSX.Element[]
}
export const CustomSelect = ({toggler, children}: CustomSelectProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useOutsideClick(handleClickOutside);

    const renderChildren: () => React.ReactNode = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, { 
               onClick: () => {
                   child.props.onClick();
                   setOpen(false);
               } 
            });
        });
    };

    return (
        <SelectContainer ref={ref}>
            <SelectTitle onClick={() => setOpen(!open)}>
                {toggler()}
            </SelectTitle>

            {open &&
                <SelectMenu>
                    {renderChildren()}
                </SelectMenu>
            }
        </SelectContainer>
    )
};

CustomSelect.Item = SelectItem;
