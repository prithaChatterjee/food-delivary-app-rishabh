import React from 'react'
import {IconButton} from '../../../button/index'
import { RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import { StyleTabheader } from './style.tabheader';

export const TabHeader = ({ children, value, onChange, open}) => {
    const handleChange = () => onChange(open === value ? null : value)
    return (
        <StyleTabheader>
            {children}
            <IconButton onClick={handleChange}>
                {
                    open === value ? <RiArrowUpSLine /> : <RiArrowDownSLine />
                }
            </IconButton>
        </StyleTabheader>
    )
}
