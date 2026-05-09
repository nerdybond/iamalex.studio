"use client"
import {Switch as LDSwitch} from '@radix-ui/react-switch';
import styles from './lightDarkSwitch.module.css';
import { LightDarkSwitchCombinations } from './lightDarkData'; // Adjust path if necessary
import React, { useState, FC, useCallback  } from 'react';

interface LightDarkSwitchProps {
    applyStyles : (styles: LightDarkSwitchCombinations) => void;
    combinations: LightDarkSwitchCombinations[];
}

const LightDarkSwitch: FC<LightDarkSwitchProps> = React.memo(({ applyStyles, combinations }) => {
    const [checked, setChecked] = useState(false);
    console.log('LightDarkSwitch component rendered');

    const handledCheckedChange = useCallback((checked: boolean) => {
        setChecked(checked);
        const selectedStyle = combinations[checked ? 1 : 0];
        applyStyles(selectedStyle);
    }, [applyStyles, combinations]);

    return (
           
        <LDSwitch
            className={styles.switch} 
            checked = {checked}
            onCheckedChange={handledCheckedChange}
            data-state={checked ? 'checked' : 'unchecked'}
        >
            
            <div
                className={`${styles.switchThumb}
                            ${checked ? styles.switchThumbOn : styles.switchThumbOff}`}
            />
        </LDSwitch>
    );
});
LightDarkSwitch.displayName = 'LightDarkSwitch';

export default LightDarkSwitch;