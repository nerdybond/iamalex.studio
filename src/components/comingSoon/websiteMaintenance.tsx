"use client"

import Link from "next/link";
import Image from "next/image";
import insta from '../../../public/social-icons/white/instagram-icon.svg'
import mail from '../../../public/social-icons/white/mail-icon.svg'
import logo from '../../../public/social-icons/white/somepeeps-logo.svg'
import navbarLogo from '../../../public/some-peeps-logo.svg'


const WebsiteMaintenance = () => {
 

    return (
      <main className="flex flex-col bg-cover h-screen w-screen bg-[url('../../public/bg.jpg')]">
      
        <Image className="absolute top-0 left-0" 
        src={navbarLogo} alt="logo" height={140} width={140}/>
            
      
      <div className="flex h-screen w-screen flex-col items-center justify-center text-center text-white bg-black opacity-50 ">
        
        <Image src={logo} alt="logo" height={450} width={450}/>

        <h6 className="text-lg">Website Maintenance in Progress.</h6>
      

        <hr className="border border-gray-400 my-4 w-[60%]"></hr>

          <div className="flex flex-row items-center gap-6">

            <Link href="https://www.instagram.com/somepeeps.studio">
              <Image className="mt-2"
               src={insta} alt="instagram icon" height={40} width={40}/>
            </Link>
            
            <Link href="mailto:somepeeps@somepeeps.studio">
              <Image className="pt-2" src={mail} alt="mail icon" height={50} width={50}/>
            </Link>
          
          </div>



      </div>


        <footer className="bg-black rounded-t-lg opacity-75 text-center text-white pr-2 border-t border-white">
      

          <Link className="font-bold flex flex-col text-end p-2" href='/'>
          <p className="">made by</p>
          <p className="-mt-2">some peeps.</p>
          </Link>
      
        </footer>
    </main>


  );
};

export default WebsiteMaintenance;