 'use client'
//  import Image from "next/image";
//  import { Suspense, useState, useRef } from "react";

//  import downArrow from "../../../public/down-arrow.svg";
//  import sideArrow from "../../../public/arrow-icon.svg";
//  import profileImage from "../../../public/profile.png";
//  import speedyIcon from "../../../public/home-page/values-icons/speedy-icon.svg";
//  import openIcon from "../../../public/home-page/values-icons/open-icon.svg";
//  import pivotingIcon from "../../../public/home-page/values-icons/pivoting-icon.svg";
//  import holisticIcon from "../../../public/home-page/values-icons/holistic-icon.svg";
//  import { useScroll } from "framer-motion";

//  import ScrollRevealSVG from "@/components/homePage/scrollSVGReveal/scrollRevealSVG";
//  import ScrollingText from "@/components/homePage/scrollingText";
//  import { ProjectModal } from "@/components/projectModal/projectModal";
//  import Loading from "../../components/loadingScreen/loading"
//  import StickyFooter from "@/components/footer/stickyFooter";
//  import TextMask from "@/components/homePage/textMask/textMask";
//  import HeroTextCarousel from "@/components/homePage/heroTextCarousel";
//  import NavBar from "@/components/navBar/navBar";
//  import type { LightDarkSwitchCombinations } from '@/components/navBar/lightDarkSwitch/lightDarkSwitch';

//  // Animated Hamburger Menu
// // https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/


// // Text SVG above StickyFooter - https://blog.olivierlarose.com/tutorials/text-along-path
// // Text Parallax - https://blog.olivierlarose.com/tutorials/text-parallax


// //TO - DO!!!!!!!

// // Good website for text - https://www.heights.agency/
// // TO-DO: Create loading animation - Like https://today.design/



// const LightDarkSwitchCombinations = [
//   {
//     backgroundColor: '#ffffff',
//     textColor: '#000000',
//     maskImage: 'url(/svg-mask/some-peeps.svg)',
//     maskPosition: '49.05% 56%',
//     heroCarouselWords: ['Design', 'Development', 'Product Design'],
//     skillCarouselWords: [ 'Prototypes', 'Web Design', 'Research and Strategy', 'Visual Identity', 'Channel Strategy', 'Web Development', 'Product Design', 'Brand Development', 'Visual Identity', 'Print Design', 'App Development', 'Brand Strategy'],

//     heroText: 'A group of web designers and devs who',
//     textMaskURL: './somepeeps.svg',
//     freeSpaceText: 'Free Space',
//     aboutUsTitle: 'Content is ever changing. So should we.',
//     aboutUsText: 'Some Peeps Studio is a collaborative studio that champions emerging and edifying designers, developers, and creators. Driven by passion, research, education, and advocacy; we publish digital media and products that work towards a more accessible, empathetic and equitable future.',
//   },
//   {
//     backgroundColor: '#FF0000',
//     textColor: '#ffffff',
//     maskImage: 'url(/svg-mask/capitalism.svg)',
//     maskPosition: '49.05% 56%',
//     heroCarouselWords: ['Design', 'Development', 'Product Design'],
//     skillCarouselWords: [ 'Prototypes', 'Web Design', 'Research and Strategy', 'Visual Identity', 'Channel Strategy', 'Web Development', 'Product Design', 'Brand Development', 'Visual Identity', 'Print Design', 'App Development', 'Brand Strategy'],

//     heroText: 'A bunch of nerds',
//     textMaskURL: './capitalism.svg',
//     freeSpaceText: 'Free Shit',
//     aboutUsTitle: 'Never stop never stopping.',
//     aboutUsText: 'We are nerds who missed MySpace and thought we were all natural-born comedians. We love to make art, memes, websites, and expand our horizons into new tech and improving our collaborations with our clients, and finding new ways to reach new connections with customers. We do try to be respectful and well-meaning when creating content and products, so we do apologise if anything does cross the line.' 
//   },
// ];

export default function News() {

//   const container = useRef(null);
//   const {scrollYProgress} = useScroll({
//     target: container,
//     offset: ['start end', 'end start']
//   })

//   const [pageStyles, setPageStyles] = useState<LightDarkSwitchCombinations>(LightDarkSwitchCombinations[0]);

//   const applyStyles = (styles: LightDarkSwitchCombinations) => {    
//     setPageStyles(styles);
//     document.body.style.backgroundColor = styles.backgroundColor;
//     document.body.style.color = styles.textColor;
//     document.body.style.borderColor = styles.textColor;
//   }
  

//   return (      
//   <div style={{ backgroundColor: pageStyles.backgroundColor, color: pageStyles.textColor}}
//   className="flex flex-col w-screen items-center justify-center">
//       <Suspense fallback={<Loading/>}>
//       <NavBar applyStyles={applyStyles} />

//     {/* MAIN BODY */}
//     <div className="flex flex-col mt-[40vh] items-center justify-center">

//       <p className="text-lg font-bold">HEY THERE!</p>
//       <p className="flex text-2xl gap-1 mt-4">We are <strong>some peeps.</strong></p>
//     </div>
//     {/* SUBTITLE AND CAROUSEL */}
//       <div className="flex text-xl font-light flex-col">
//         <HeroTextCarousel heroWords = {pageStyles.heroText} heroCarouselWords={pageStyles.heroCarouselWords} />
//       </div>

//     {/* VERTICAL ARROW DOWN */}
//       <span className="flex h-[2dvh] mt-[10vh] border-l-[4px] border-black"></span>
//       <Image
//            src={downArrow}
//            width={30}
//            height={100}
//            alt="down arrow"
//            style={{fill: pageStyles.textColor}}
//       />
//             <TextMask maskImage={pageStyles.maskImage} maskPosition={pageStyles.maskPosition} />



//     {/* FREE SPACE */}

//       <div style={{ backgroundColor: pageStyles.backgroundColor}}
//       className="flex flex-col items-center
//                       px-4 rounded-2xl w-[95%] z-3">

//         <div className="flex flex-col items-start
//                         text-left uppercase gap-4 pl-[10px]">
//           <p className="flex mt-[20px] text-[14px] w-[30%]">Jump into the free collection of designs, stickers, and many more!</p>
//         </div>

//         <div className="flex flex-row">
//         <ScrollRevealSVG svgURL={"/swirly-left.svg"}/>
//         <ScrollRevealSVG svgURL={"/swirly-right.svg"}/>
//         </div>
//       {/* FREE SPACE TEXT AND BOX */}
      
//       <div className="flex flex-col items-center z-10 -mt-[85%] mb-[25%]">
//         <p className="flex text-extrabold text-start uppercase -mb-[6%] text-[80px]">{pageStyles.freeSpaceText}</p>

//       {/* HORIZONTAL SCROLL - FREE SPACE COMPONENT */}
       
//           <div className="flex flex-col justify-end border-black rounded-[10%] border
//                         w-[70%] md:w-[90%] h-full bg-pink-200 p-8">
//           <div className= "p-2 mt-10 bg-pink-100 rounded-xl">
//             <div className="grid text-black grid-rows-2 grid-flow-col overflow-y-none overflow-x-scroll gap-4 p-4">
        
//             <div className="flex flex-col">
//               <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//               <p>Project 1</p>
//             </div>
            
//             <div className="flex flex-col">
//             <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//             <p>Project 2</p>
//             </div>
            
//             <div className="flex flex-col">
//             <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//             <p>Project 3</p>
//             </div>
            
//             <div className="flex flex-col">
//             <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//             <p>Project 4</p>
//             </div>
            
//             <div className="flex flex-col">
//             <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//             <p>Project 5</p>
//             </div>
            
//             <div className="flex flex-col">
//             <div className="bg-gray-400 rounded-lg py-20 px-24"></div>
//             <p>Project 6</p>
//             </div>
    
//             </div>
//           </div>

//             <button className="rounded-full border-black bg-[#F8CCCD]
//                               font-bold drop-shadow-md border self-start 
//                               m-8 px-4 py-2 uppercase text-black">Click Here for More</button>
//         </div>
//         <p className="flex ml-[70%] -mt-[15%] text-[30px]
//                       uppercase font-bold">{pageStyles.freeSpaceText}</p>
//       </div>

//       </div>


//  {/* WHAT WE DO HERE */}
//     <div className="flex flex-row justify-center bg-gray-200 w-full py-2">

//       <div className="flex flex-row text-black items-center gap-4 uppercase">
//         <p className="font-bold text-[20px]">What we do here.</p>
//         <p className="text-[14px]">Select a project below</p>        
//       </div>
    
//       <Image
//            src={sideArrow}
//            width={100}
//            height={150}
//            alt="down arrow"
//            className="mt-4 ml-4"
//        />
//     </div>


//  {/* SCROLLING TEXT COMPONENT */}
    
//       <ScrollingText offset="-40%" carouselWords={pageStyles.skillCarouselWords}/>        


// {/* PROJECT SECTION */}

//         <div className="grid grid-cols-2 gap-4 my-4">
                
//                 <ProjectModal title={"Project 1"}
//                   categories={["Development", "Design", "Teaching"]}
//                   description={ "Our journey began with an in-depth consultation to truly understand the unique vibe and target audience of the café. We crafted a bespoke website design that beautifully reflects its cozy atmosphere and artisanal offerings. The result was a visually appealing and highly functional site that seamlessly integrates their menu, online ordering, and customer reviews. Our design approach combined a modern aesthetic with intuitive navigation, enhancing user experience and boosting engagement. We also implemented SEO strategies to ensure the café stands out in local searches. Since the launch, the café has reported a significant uptick in foot traffic and online orders, validating the effectiveness of our work. It has been rewarding to see our design not only resonate with the client but also drive tangible business growth."}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />

//                 <ProjectModal title={"Project 2"}
//                   categories={["Development", "Design"]}
//                   description={"Project Anything"}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />

//                 <ProjectModal title={"Project 3"}
//                   categories={["Development", "Design"]}
//                   description={"Project Anything"}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />

//                 <ProjectModal title={"Project 4"}
//                   categories={["Development", "Design"]}
//                   description={"Project Anything"}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />
                
//                 <ProjectModal title={"Project 5"}
//                   categories={["Development", "Design"]}
//                   description={"Project Anything"}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />

//                 <ProjectModal title={"Project 6"}
//                   categories={["Development", "Design"]}
//                   description={"Project Anything"}
//                   mainPic={"/album.jpg"}
//                   modalPic={"/album.jpg"}
//                 />
//         </div>

//      {/* SCROLLING TEXT COMPONENT */}    
//      <ScrollingText offset="-40%" carouselWords={pageStyles.skillCarouselWords}/>        


// {/* ABOUT US SECTION */}
//     <div className="flex flex-row gap-6 mt-10">
//         <div className="flex flex-col w-[70%] pl-4">
//             <p className="uppercase text-[20px] w-[50%] font-bold">{pageStyles.aboutUsTitle}</p>
            
//             <Image
//             src={profileImage}
//             width={200}
//             height={200}
//             alt="profile image"
//             className="p-1 -mt-4 self-end rotate-12 border border-[#b88a28] object-cover aspect-square rounded-full"
//             />
//       </div>

//       <div className="flex flex-col w-[50%] gap-4 mb-10">
//         <p>{pageStyles.aboutUsText}</p>
//         <div className="border-t font-bold text-center border-inherit mt-4">For legal reasons, Some Peeps Studio is a meme studio.
//         </div>

//       </div>

//     </div>

// {/* VALUES SECTION */}

//     <div className="flex flex-col bg-[#F8D791] items-center w-screen rounded-3xl p-10 mb-28">
      
//       {/* TITLE AND DESCRIPTION */}
//       <div className="flex flex-row text-black justify-between gap-4 mb-6">
//         <p className="text-2xl text-black font-bold uppercase -mt-2">Values</p>
//         <p className="text-sm text-black text-right w-[70%]">We are committed to helping brands and businesses achieve their goals. With decades of experience between the team, we provide personalised advice and support to ensure the right solution.</p>
//       </div>

//       {/* VALUES */}

//       <div className="flex flex-row gap-4 -mb-20">
//           {/* VALUE 1 */}
//           <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
//             <Image
//               src={openIcon}
//               width={60}
//               height={60}
//               alt="profile image"
//               className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
//           />

//             <p className="text-xl uppercase mb-4">Openness</p>
//             <p className="text-[14px] px-2 uppercase">One of the foundational elements of some peeps.</p>
//           </div>
        
//            {/* VALUE 2 */}
//            <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
//           <Image
//             src={speedyIcon}
//             width={60}
//             height={60}
//             alt="profile image"
//             className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
//         />

//           <p className="text-xl uppercase mb-4">Speedy</p>
//           <p className="text-[14px] px-2 uppercase">One of the foundational elements of some peeps.</p>
//             </div>
        
//            {/* VALUE 3 */}
//            <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
//           <Image
//             src={holisticIcon}
//             width={60}
//             height={60}
//             alt="profile image"
//             className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
//         />

//           <p className="text-xl uppercase mb-4">Holistic</p>
//           <p className="text-[14px] px-2 uppercase">One of the foundational elements of some peeps.</p>
//             </div>
        
//            {/* VALUE 4 */}
//            <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
//           <Image
//             src={pivotingIcon}
//             width={60}
//             height={60}
//             alt="profile image"
//             className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
//         />

//           <p className="text-xl uppercase mb-4">Pivoting</p>
//           <p className="text-[14px] px-2 uppercase">One of the foundational elements of some peeps.</p>
//             </div>
      
//       </div>

//     </div>


//     <StickyFooter/>
//     </Suspense>
//   </div>

//   );
}