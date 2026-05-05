"use client"
import React from "react"
import { motion } from "framer-motion"
import {links, footerLinks} from "./data"
import {perspective, slideIn} from "./anim"
import styles from './nav.module.scss';
import Image from "next/image";

export default function Nav () {
    console.log('Links:', links);
    console.log('Footer Links:', footerLinks);
    
    return (
        <div className={styles.nav}>
            <div className={styles.hero}>
            
                <div className={styles.body}>
                {
                    links.map((link, i) => {
                        const {title, href} = link;
                        
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit">
                                    <a href={href}>{title}</a>
                                </motion.div>
                            </div>
                        )
                    })

                }
                </div>
            </div>
            <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { icon, href } = link;
                    return (
                        <motion.a 
                            href={href}
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                        <Image
                            src={icon}
                            width={35}
                            height={20}
                            alt="icon"
                        />    
                        </motion.a>
                    )
                })
            }
       </motion.div>

        </div>
    )
}