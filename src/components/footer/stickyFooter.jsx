"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";

import instagramIcon from "/public/social-icons/light/instagram-icon.svg";
import mailIcon from "/public/social-icons/light/mail-icon.svg";
import tikTokIcon from "/public/social-icons/light/tiktok-icon.svg";
import ContactForm from "@/components/footer/contactForm";


// StickyFooter - https://blog.olivierlarose.com/tutorials/sticky-footer

export default function StickyFooter () {

    return (
   
        <div className='relative h-[calc(100vh+800px)] bottom-0 w-screen bg-black'>
            <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
                {/* FOOTER SECTION */}
                <div className="flex flex-col md:flex-row text-white justify-between gap-6 mt-40 p-8 w-full">
                    
                        {/* LEFT SECTION */}
                    <div className="flex flex-col justify-between w-full pb-10 sm:pb-0 sm:w-[35%]">
                    
                    <div className="flex flex-col items-center gap-2 ml-2">
                        <p className="text-[140px] text-center pb-4 font-bold underline underline-offset-4 uppercase">Say Hey</p>
                        
                        <div className="flex flex-row items-center gap-2 pb-10 sm:pb-0">
                        <Link href="https://www.instagram.com">
                            <Image
                                src={instagramIcon}
                                width={45}
                                height={45}
                                alt="instagram icon"
                                className=""/>
                        </Link>
                        <Link href="mailto:hello@somepeeps.studio">
                            <Image
                                src={mailIcon}
                                width={50}
                                height={50}
                                alt="mail icon"
                                className=""/>
                        </Link>
                            
                        <Link href="https://www.tiktok.com">
                            <Image
                                src={tikTokIcon}
                                width={40}
                                height={40}
                                alt="tiktok icon"
                                className=""/>
                        </Link>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mb-14">
                        <p className="text-xs text-center font-thin">If you want to collab, have any questions, or would like to contact us for a free quote. 
                        <br/><br/>Please shoot us a DM on our socials,  or send us an email at: hello@somepeeps.studio</p>

                        <p className="text-xs font-bold">We seek to listen, stand up, and confront these ongoing injustices.</p>
                    </div>
                    </div>
                        
                        {/* RIGHT SECTION - CONTACT US */}
                    <div className="flex flex-col w-full sm:w-[50%] gap-4">
                        <p>If you have any questions, or would like to contact us for a free quote.</p>
                        <p>Please shoot us a DM on our socials, send us a message below, or email us at: <Link href="mailto:hello@somepeeps.studio">hello@somepeeps.studio</Link></p>
                    
                        {/* <ContactForm/> */}

                        {/* MADE BY SOME PEEPS SECTION */}
                        <Link className="border-t-2 border-white self-end text-right pl-4 mt-10"
                                href={'/news'}>
                            <p>made by</p>
                            <p>some peeps.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

);

}