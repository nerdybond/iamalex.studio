"use client"
import { useState, ReactNode, useEffect } from "react";
import Cursor from "@/components/Cursor"
import { AnimatePresence, motion } from "framer-motion";

interface BackgroundChangeProps {
    children: ReactNode;
  }


const images = [
    '../home-page-bg/1.webp',
    '../home-page-bg/2.webp',
    '../home-page-bg/3.webp',
    '../home-page-bg/4.webp',
    '../home-page-bg/5.webp',
    '../home-page-bg/6.webp',
    '../home-page-bg/7.webp',
    '../home-page-bg/8.webp',
]
//https://semaphoreci.com/blog/react-framer-motion-gsap
// https://www.framer.com/motion/animate-presence/
// https://dev.to/joserfelix/page-transitions-in-react-1c8g

const BackgroundChange = ({ children }: BackgroundChangeProps) => {
    // const [currentImage, setCurrentImage] = useState(images[6]);
    // // const [prevImage, setPrevImage] = useState<string>('');


    // useEffect(() => {
    //     // changeBackground();
    //   }, []);
      
      // const changeBackground = () => {
      //   let randomIndex;
      //   do {
      //     randomIndex = Math.floor(Math.random() * images.length);
      //      } 
      //   while (images[randomIndex] === currentImage); // Ensure the same image isn't chosen twice in a row
    
      //   // setPrevImage(currentImage);
      //   setCurrentImage(images[randomIndex]);
      // };
    

    return (
  // <AnimatePresence>
  //   <motion.div exit={{ opacity: 0 }}>
    
    <div className="flex flex-col
                items-center justify-center 
                w-screen overflow-y-auto
                bg-cover bg-center bg-white "
      // style={{backgroundImage: `url(${currentImage})` }} 
      >
      {children}
    </div>
    // </motion.div>



// {/* Stuff I deleted from the main page - keeping here, just in case I want to reuse code again. The only thing remaining under it, is the </AnimatePresence> tag */}
//  {/* <Cursor isActive={isActive}/> */}
        
//         {/* navbar  */}
//     {/* <div className="absolute top-4 right-4 justify-between">
//       <Button className="p-2">==</Button>
//     </div> */}

//       {/* <motion.div
//       animate={{ rotate: [-5, 10, -5], opacity: [0.5,1,0.5], }}
//       transition={{ ease: "easeInOut", repeat: Infinity, duration: 7, repeatDelay: 0 }}>
//       <Image src={logo} className="" alt="some peeps studio" height={600} width={600}/>
//       </motion.div> */}

//       {/* <p className="flex mb-6 rotate-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] -mt-16 text-2xl"><Link className="underline hover:underline-offset-8 mr-1" href="/thepeeps">Some peeps</Link> that like to make <Link className="underline hover:underline-offset-8 ml-1" href="/thegoods">some good shit.</Link> </p> */}

//       {/* <div className="flex flex-row gap-4"
//          onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}
//       > */}
//        {/* Some Peeps Button */}
       

//         {/* <Button className="bg-[#fbb26dd7] text-lg font-extrabold rounded-br-lg rounded-tr-none rounded-bl-none text-[#4d0000b2] border-b-2 border-r-2 border-[#4d000050] px-8 py-6 w-fit
//                                     hover:bg-[#ffd7b2] hover:text-[#bd722b] hover:shadow-[#00000000] hover:shadow-md hover:border-t-2 hover:border-l-2 hover:border-b-0 hover:border-r-0 hover:rounded-tl-lg"
//                                     >
//                                     <Link href="/thepeeps">The peeps</Link>
//                                     </Button>
//         <Button className="bg-[#b8b8b807] text-lg font-extrabold rounded-br-lg rounded-tr-none rounded-bl-none text-[#4d0000b2] border-b-2 border-r-2 border-[#4d000050] px-8 py-6 w-fit
//                                     hover:bg-[#4d000021] hover:shadow-[#00000010] hover:shadow-md hover:border-t-2 hover:border-l-2 hover:border-b-0 hover:border-r-0 hover:rounded-tl-lg"
//                                     >
//                                     <Link href="/thegoods">The goods</Link>
//                                     </Button> */}


//       {/* </div> */}


//       {/* </div> */}

// {/* 
// "SOCIALS" - links page
// <div className="flex flex-row gap-3">

// <Link href="">
//   <Image src={insta} className="" alt="instagram icon" height={30} width={30}/>
// </Link>

// <Link href="">
//    <Image src={spotify} alt="spotify icon" height={30} width={30} />
// </Link>

// <Link href="mailto:somepeeps@somepeeps.studio">
//   <Image className="pt-0.5" src={mail} alt="mail icon" height={32} width={32}/></Link>

// <Link href="">
//   <Image src={linkedIn} alt="linkedIn icon" height={25} width={25}/>
// </Link>

// </div>
//      */}




//   {/* <footer className="flex flex-row w-screen bg-white justify-between pt-2">

//   <div className="pr-4 flex flex-col mb-2 ml-2 bg-white font-semibold text-left text-sm">
//   <Link href="/">
//       Privacy <br/> and T&Cs.
//   </Link>
 
//   </div>

//   </footer> */}

//    {/*Wrapper - Horizontal Scroll*/}



//     // </AnimatePresence>
  );
};

export default BackgroundChange;