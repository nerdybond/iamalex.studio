'use client'
import React, {useState, useRef, useEffect} from 'react';
import MenuButton from './Button/menuButton';
import styles from './menu.module.scss';
import {AnimatePresence, motion} from 'framer-motion';
import Nav from './Nav/nav';

const menu = {
        open : {
                width: "300px",
                height: "420px",
                top: "0px",
                right: "0px",
                marginTop: "55px",
                opacity: 1,
                transition: { duration: 0.65, type: "tween", ease: [0.76, 0, 0.24, 1]}
        },
        closed : {
                width: "100px",
                height: "40px",
                top: "0px",
                right: "0px",
                marginTop: "0px",
                opacity: 0,
                transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
}


export default function Menu () {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node))
            {
                setIsActive(isActive);
            }
        };
        window.addEventListener("mouseup", handleOutSideClick);

        return () => {
            window.removeEventListener("mouseup", handleOutSideClick);
        }

    }, [ref]);

        
    return (
            <div className={styles.header} ref={ref}>
                <motion.div className={styles.menu}
                            variants={menu}
                            animate={isActive ? "open" : "closed"}
                            initial = "closed"
                >
                        <AnimatePresence>
                            {isActive && <Nav/>}
                        </AnimatePresence>    
                </motion.div>

                <MenuButton 
                isActive={isActive} 
                toggleMenu={() => {setIsActive(!isActive)}}
                />
            </div>       
            );
};


