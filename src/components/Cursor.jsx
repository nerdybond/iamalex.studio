'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


export default function BlurryCursor ({isActive}) {
    const mouse = useRef ({x: 0, y: 0});
    const circle = useRef ();
    const delayedMouse = useRef({x: -500, y: -500});
    const rafId = useRef(null);
    const size = isActive ? 600 : 200;
    
    const lerp = (x, y, a) => x * (0.85 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const animate = () => {
        const { x , y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.09),
            y: lerp(y, mouse.current.y, 0.09)
            }
        
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);

        rafId.current = window.requestAnimationFrame(animate)
        }

        const moveCircle = (x, y) => {
            gsap.set(circle.current, {x , y, xPercent: -15, yPercent: -15})
            }

        useEffect (() => {
            animate();
            window.addEventListener("mousemove", manageMouseMove);
            return () => {
                window.removeEventListener("mousemove", manageMouseMove)
                window.cancelAnimationFrame(rafId.current)
                }

            },
            [isActive]);

        return (
            <div className='absolute text-lg text-[#fcff3e] w-fit h-fit'>
                <div
                    ref = {circle}
                    style = {{
                                backgroundColor: "rgba(158, 19, 135, 0.2)",
                                width: size,
                                height: size,
                                filter: `blur(${isActive ? 45 : 25} px)`,
                                transition: `height 1.7s ease-out, width 1.7s ease-out, filter 1.7s ease-out`
                            }}
                    className='flex flex-col rounded-full
                                overflow-hidden items-center justify-center
                                mix-blend-difference pointer-events-none'
                    >
                    <p className='flex text-center font-bold items-center'>click to see</p>
                    <p className='flex text-center font-bold items-center'>some things</p>

                </div>

            </div>
        )
}

