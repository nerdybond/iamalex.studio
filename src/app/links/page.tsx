"use client"
import { SetStateAction, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
// import pic from "../../../public/link-icon.svg";
import StyleButtons from "@/components/linksPage/styledButtons";

interface StyleCombination {
  backgroundColor: string;
  borderRadius: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  buttonFont: string;
}

export default function Links() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState('80px');
  const [buttonBgColor, setButtonBgColor] = useState('#F5D0A3');
  const [buttonBorderColor, setButtonBorderColor] = useState('#D1AA7A');
  const [buttonFont, setButtonFont] = useState('Montserrat');



  const applyStyles = (styles: StyleCombination) => {
    setBgColor(styles.backgroundColor);
    setBorderRadius(styles.borderRadius);
    setButtonBgColor(styles.buttonBackgroundColor);
    setButtonBorderColor(styles.buttonBorderColor);
    setButtonFont(styles.buttonFont);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
    
 {/*Body Wrapper*/}

 <div className="flex flex-col gap-4 min-w-full items-center text-center"> 


        <button
          className="w-fit bg-[#FFECDB] py-2 px-6 rounded-full font-bold overflow-hidden hover:scale-105 hover:text-black border hover:animate-pulse"
        >
          <Link href="/links"
          className="flex flex-row justify-center"><p>@</p><p className="underline underline-offset-4">somepeeps.studio</p></Link>
        </button>

 {/*Links section*/}
 <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px', alignItems: 'center' }}>

      {/* Buttons which change page/button style. Will eventually create a "save" function for future accounts */}
          {/* and a "create your own style" modal component, so users can try out and test their styles */}
      <div className="bg-[#FFECDB] pb-8 mb-6 border border-black rounded">
        <p className="py-2 text-lg font-bold">Tap a button to customise the page!</p>
      
      <StyleButtons applyStyles={applyStyles} />
      </div>

      {/* Main section - This is the main area of the links section. */}
      <div className="flex flex-row items-center gap-4 self-center w-full px-6">
      
      <button
          className={`w-[65%] py-2 font-bold overflow-hidden hover:scale-105 hover:text-black border hover:animate-pulse`}
          style={{ backgroundColor: buttonBgColor, fontFamily: buttonFont, borderRadius: borderRadius, borderColor: buttonBorderColor }}
        >
          <Link href="https://www.google.com">Website</Link>
        </button>
      
      <button
          className={`w-[65%] py-2 font-bold overflow-hidden hover:scale-105 hover:text-black border hover:animate-pulse`}
          style={{ backgroundColor: buttonBgColor, fontFamily: buttonFont, borderRadius: borderRadius, borderColor: buttonBorderColor }}
        >
          <Link href="/links">Instagram</Link>
        </button>
      
      
      </div>
    </div>

    
    </div>

  <footer className="flex flex-col justify-end mt-4 text-center">
    
{/*transform 0.15s cubic-bezier(0, 0.2, 0.5, 3) 0s    64px 16px 32px*/}

      <Button variant={"default"} asChild
            className="min-w-[50%] bg-white border-b hover:bg-gray-200 hover:scale-110 transform-gpu ease-in-out duration-600 text-black px-10 py-6 rounded-full shadow-md">      
       <Link href="/">
        made by some peeps.
      </Link>
    </Button>
  </footer>

    </main>
  );
}
