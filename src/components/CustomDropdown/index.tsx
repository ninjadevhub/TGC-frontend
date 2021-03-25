import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import {
    DropdownContainer,
    DropdownTitle,
    DropdownMenu,
    DropdownItem
} from './CustomDropdown.style'


interface CustomDropdownProps {
    toggler: () => React.ReactNode,
    children: JSX.Element | JSX.Element[]
}


export const CustomDropdown = ({toggler, children}: CustomDropdownProps) => {
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
        <DropdownContainer ref={ref}>
            <DropdownTitle 
                onClick={() => setOpen(!open)}
            >
                {toggler()}
            </DropdownTitle>

            {open &&
                <DropdownMenu>
                    {renderChildren()}
                </DropdownMenu>
            }
        </DropdownContainer>
    )
};

CustomDropdown.Item = DropdownItem;