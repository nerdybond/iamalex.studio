'use client'
import React from 'react';
import {FC} from 'react';
import LightDarkSwitch from "./lightDarkSwitch/lightDarkSwitch";
import Menu from './menuButton/menu';
import { LightDarkSwitchCombinations } from './lightDarkSwitch/lightDarkData';

interface NavBarProps {
        applyStyles : (styles: LightDarkSwitchCombinations ) => void;
        lightDarkSwitchCombinations: LightDarkSwitchCombinations[];
}

const NavBar: FC<NavBarProps> = ({ applyStyles, lightDarkSwitchCombinations }) => {

        return (
                <div 
                className="flex flex-row self-center fixed top-0
                                items-center justify-between 
                                bg-inherit border-inherit border rounded-full
                                p-2 mt-2 z-50  text-inherit
                                h-[60px] w-[90dvw] sm:w-[60dvw] lg:w-[60dvw] max-w-[700px]
                                drop-shadow-md
                                ">    
                        <p className='text-md font-secondary sm:text-lg mt-2 ml-2'>i am alex.</p>
                        <LightDarkSwitch applyStyles={applyStyles} combinations={lightDarkSwitchCombinations} />
                        <Menu/>
                </div>
            )
};

export default NavBar;

