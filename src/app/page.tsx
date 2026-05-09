"use client" 
 import { Suspense, useState, useRef, useEffect } from "react";
 import Image from "next/image";
 import { useScroll } from "motion/react";
 import Link from "next/link";
 
 import downArrow from "../../public/down-arrow.svg";
 import sideArrow from "../../public/side-arrow.svg";
 import profileImage from "../../public/home-page/team-together.png";
 import speedyIcon from "../../public/home-page/values-icons/speedy-icon.svg";
 import openIcon from "../../public/home-page/values-icons/open-icon.svg";
 import pivotingIcon from "../../public/home-page/values-icons/pivoting-icon.svg";
 import holisticIcon from "../../public/home-page/values-icons/holistic-icon.svg";
 import antenna from "../../public/home-page/antenna.webp";

 import Loading from "../components/loadingScreen/loading";
 import ScrollRevealSVG from "@/components/homePage/scrollSVGReveal/scrollRevealSVG";
 
 import StickyFooter from "@/components/footer/stickyFooter"
 import TextMask from "@/components/homePage/textMask/textMask";
 import HeroTextCarousel from "@/components/homePage/heroTextCarousel/heroTextCarousel";
 import NavBar from "@/components/navBar/navBar";
 import { LightDarkSwitchCombinations } from '@/components/navBar/lightDarkSwitch/lightDarkData';
 import { ProjectModal } from "@/components/projectModal/projectModal";
 import ScrollingText from "@/components/homePage/scrollingText/scrollingText";
 import SlidingText from "@/components/homePage/slidingText";
 import SlidingSubtitleText from "@/components/homePage/slidingSubTitleText";
 import { FreeSpaceModal } from "@/components/homePage/freeSpaceModal/freeSpaceModal";
 import {FreeSpaceModalData} from "@/components/homePage/freeSpaceModal/freeSpaceData"
 import {ProjectModalData} from "@/components/projectModal/projectData"


export default function Home() {
  
  const container = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const [pageStyles, setPageStyles] = useState(LightDarkSwitchCombinations[0]);
  console.log('Page Styles:', pageStyles);

  
  return (      
    
    <div style={{ backgroundColor: pageStyles.backgroundColor, color: pageStyles.textColor}}
          className="flex flex-col w-screen items-center justify-center">

          <NavBar applyStyles={setPageStyles} lightDarkSwitchCombinations={LightDarkSwitchCombinations} />
            <div className='flex flex-col font-primary font-medium text-4xl sm:text-6xl w-full
                            max-[450px]:mt-[12dvh] sm:mt-[10dvh] md:mt-[6dvh] lg:mt-[15dvh] xl:mt-[15dvh]
                            max-[450px]:mb-[-3dvh] sm:mb-[-4dvh]'> 
              <div className="mb-2 max-[450px]:self-end max-[450px]:mr-[10dvw] -rotate-6 self-center">Designer</div>
              <div className="max-[450px]:ml-2 sm:ml-8 mb-2 self-start">Web Developer </div>
              <div className="max-[450px]:mr-2 sm:mr-8 rotate-6 self-end">Photographer</div>
            </div>
          
            {/* <p className="text-4xl  font-secondary">HEY THERE!</p>
            <Image
              src={'/wave.svg'}
              width={40}
              height={40}
              alt="wave"
              className='animate-waving-hand'
            /> */}
          
          {/* <HeroTextCarousel heroWords={pageStyles.heroText} heroCarouselWords={pageStyles.heroCarouselWords}/>            */}
              <TextMask maskImage={pageStyles.maskImage} maskPosition={pageStyles.maskPosition} />

            

      {/* Desktop Design - VERTICAL ARROW DOWN */}
         {/* <Image
           src={downArrow}
           width={35}
           height={100}
           alt="down arrow"
           className="hidden sm:flex mb-[0dvh]
           mt-[0dvh] sm:mt-[6dvh] md:mt-[6dvh] lg:mt-[4dvh]"
         /> */}

          {/* Mobile Design - VERTICAL ARROW DOWN */}
          {/* <Image
           src={downArrow}
           width={26}
           height={50}
           alt="down arrow"
           className="flex sm:hidden mb-[0dvh]
           mt-[6dvh] min-[450px]:mt-[6dvh] sm:mt-[0dvh]"
         /> */}



  {/* FREE SPACE */}

  {/* <div style={{ backgroundColor: pageStyles.backgroundColor}}
      className="flex flex-col items-center
                      px-4 rounded-2xl w-[95%] z-10">



        <div className="flex flex-row w-screen justify-center overflow-hidden">
        <ScrollRevealSVG svgURL={"/swirly-left.svg"}/>
        <ScrollRevealSVG svgURL={"/swirly-right.svg"}/>
        </div> 




      FREE SPACE TEXT AND BOX
      <div className="flex flex-col items-center z-10 
      -mt-[65%] min-[450px]:-mt-[35%] sm:-mt-[45%] xl:-mt-[20%]
      mb-[25%]">
      
      <div ref={container}
        className="flex justify-end w-screen -mt-[10%] pr-[50%] sm:pr-[70%] overflow-x-hidden overflow-y-visible
        -mb-[100%] min-[400px]:-mb-[70%] sm:-mb-[36%] md:-mb-[30%] lg:-mb-[28%] xl:-mb-[22%]
         font-semibold mix-blend-difference text-[#f1e5dc] text-start z-10 uppercase text-[40px] sm:text-[80px]">
          {isMounted  && (
          <SlidingText 
                direction="right" 
                progress={scrollYProgress} 
                left="550px" 
                freeSpaceText={pageStyles.freeSpaceText}
            />)}
          
        </div>

        FREE SPACE BOX AND HORIZONTAL SCROLL - FREE SPACE COMPONENT
          <Image
              src={antenna}
              width={300}
              height={350}
              alt="antenna"
              className="mt-6 ml-[50px] sm:ml-[150px] md:ml-[350px] lg:ml-[550px]"
            />
          <div className="flex flex-col border-[#eddfd6]  border-2
                        max-w-[800px] bg-white p-8 bg-cover bg-center drop-shadow-[0_5px_2px_rgba(246,239,234,0.2)]
                        
                        w-[100dvw] min-[400px]:w-[90dvw] sm:w-[90dvw] md:w-[90dvw] lg:w-[90dvw] xl:w-[90dvw]

                        rounded-[4%] sm:rounded-[18%] md:rounded-[12%] lg:rounded-[12%] xl:rounded-[12%]

                        h-[100dvh] min-[400px]:h-[90dvh] sm:h-[90dvh] md:h-[90dvh] lg:h-[90dvh] xl:h-[90dvh]
                        
                        mb-[10dvh] min-[400px]:mb-[10dvh] sm:mb-[10dvh] md:mb-[10dvh] lg:mb-[10dvh] xl:mb-[10dvh]
                        "
              style={{backgroundImage: 'url(/home-page/free-space-bg-edit.png)'}}>
          
      
            FREE SPACE HORIZONTAL SCROLL
                <div className= "flex justify-center sm:justify-start sm:items-center scrollbar bg-opacity-30 rounded-2xl sm:px-20 sm:py-4">
                  
                  <div className="grid grid-flow-row grid-cols-1 overflow-x-none overflow-y-scroll 
                  
                                sm:grid-flow-col sm:grid-rows-2 sm:overflow-y-none sm:overflow-x-scroll
                                
                                h-[50dvh] min-[400px]:h-[60dvh] sm:h-[60dvh] md:h-[60dvh] lg:h-[60dvh] xl:h-[60dvh] 

                                mb-[4dvh] min-[400px]:mb-[10dvh] sm:mb-[10dvh] md:mb-[10dvh] lg:mb-[10dvh] xl:mb-[10dvh] 
                                
                                rounded-[7%] gap-4 mx-2 my-6
                                
                                justify-items-center 
                                
                                sm:justify-evenly sm:items-center 
                                ">

                  {FreeSpaceModalData.map((modal, index) => (
                          <FreeSpaceModal
                            key={index}
                            title={modal.title}
                            description={modal.description}
                            linkURL={modal.linkURL}
                            linkText={modal.linkText}
                            mainPic={modal.mainPic}
                            modalPic={modal.modalPic}
                          />
                    ))}

                  </div>
                            
                </div>
                
                <div className="flex flex-row items-center rounded-xl sm:rounded-sm gap-8 w-fit
                mx-2 sm:mx-10 
                mb-[2dvh] min-[400px]:mb-[4dvh] sm:mb-[10dvh] md:mb-[10dvh] lg:mb-[10dvh] xl:mb-[10dvh]
                -mt-4
                px-4 py-2
                self-center bg-white bg-opacity-20">
                <p className="text-xs min-[450px]:text-sm sm:text-md self-center text-start">Scroll to discover our collection of free designs
                </p>
                
                <Image
                  src={downArrow}
                  width={8}
                  height={10}
                  alt="side arrow"
                  className="sm:-rotate-90 fill-black mr-4"
                />
                </div>
                
                <button className="flex cursor-pointer border border-inherit rounded-full bg-[#ffd6d7] 
                                      py-4 px-8 ml-0 mb-14
                                      md:ml-10 
                                      font-bold drop-shadow-md uppercase
                                      self-center sm:self-start
                                      active:border-2 active:bg-[#fcc9ca] 
                                      hover:bg-[#fae1e2] transition-transform duration-300">
                                    Click Here for More
                </button>
              </div>



        FREE SPACE TINDER UI MOCKUP - Replaces original Free Space Section








        FREE SPACE SMALL TEXT AND DESCRIPTION
        <div ref={container}
        className="flex justify-end w-screen  text-[30px] overflow-x-hidden overflow-y-visible
        -mt-[14%]
        uppercase font-bold mix-blend-screen text-[#c7916f]">
          {isMounted  && (
          <SlidingText 
                direction="right" 
                progress={scrollYProgress} 
                left="-50px" 
                freeSpaceText={pageStyles.freeSpaceText}
            />
            )}
          
        </div>


      </div>

      FREE SPACE SUBTITLE
      <div ref={container}
        className="flex w-screen h-fit overflow-x-hidden overflow-y-visible uppercase pb-14 pl-14
        -mt-[12%] sm:-mt-[12%] md:-mt-[12%] lg:-mt-[12%] xl:-mt-[12%]
        ">
          {isMounted  && (
          <SlidingSubtitleText progress={scrollYProgress} />
          )}
      </div>


      </div> */}

      <div className="max-sm:mt-[40vh] md:mt-[30vh] lg:mt-[30vh]"></div>
        {/* SCROLLING TEXT COMPONENT */}
        <ScrollingText offset="-40%" carouselWords={pageStyles.skillCarouselWords}/>        
        
        {/* WHAT I CAN DO */}
        <div className="flex flex-row justify-center bg-gray-200 w-full py-2">
          <div className="flex flex-row text-black items-center gap-4 uppercase">
            <p className="font-bold ml-2 text-[18px]">what can I do?</p>
            <p className="text-[14px]">Select a project below</p>
          </div>
            <Image
              src={sideArrow}
              width={100}
              height={150}
              alt="side arrow"
              className="mt-4 ml-4 mr-2"
            />
        </div>

        
        {/* PROJECT SECTION */}
        <div className="flex flex-col h-full w-screen overflow-hidden items-center justify-center">
        <div className="grid overflow-hidden grid-cols-1 sm:grid-cols-3 my-4">
                
              {ProjectModalData.map((modal, index) => (
                <ProjectModal
                  key={index}
                  categories={modal.categories}
                  title={modal.title}
                  description={modal.description}
                  mainPic={modal.mainPic}
                  modalPic={modal.modalPic}
                  modalLink={modal.modalLink}
                />
              ))}
        </div>

        <button className="flex flex-row justify-center gap-10 items-center border border-black rounded-full py-4 px-8 mb-10
        active:border-4 active:mb-8 active:bg-gray-200 active:scale-90 hover:bg-gray-100 transition-transform duration-300">
          <p className="uppercase">See all our work</p>
          <Image
              src={downArrow}
              width={10}
              height={10}
              alt="side arrow"
              className="-rotate-90 mr-4"
            />
          </button>
          </div>
        {/* SCROLLING TEXT COMPONENT */}
        <ScrollingText offset="-30%" carouselWords={pageStyles.skillCarouselWords}/>        


        {/* ABOUT US SECTION */}
        
        <div className="flex flex-row gap-6 my-4 justify-around">
            <Image
              src={'/me-1.png'}
              width={200}
              height={200}
              alt="profile image"
              className="p-1 inline mt-14 sm:mt-10 border border-[#b88a28] object-cover aspect-square rounded-full"
            />
            <Image
              src={'/me-2.png'}
              width={200}
              height={200}
              alt="profile image"
              className="p-1 inline  mt-14 sm:mt-10 border border-[#b88a28] object-cover aspect-square rounded-full"
            />
            <Image
              src={'/me-3.png'}
              width={200}
              height={200}
              alt="profile image"
              className="p-1 inline  mt-14 sm:mt-10 border border-[#b88a28] object-cover aspect-square rounded-full"
            />
            <Image
              src={'/me-4.png'}
              width={200}
              height={200}
              alt="profile image"
              className="p-1 inline mt-14 sm:mt-10 border border-[#b88a28] object-cover aspect-square rounded-full"
            />

          </div>
          <div className="flex flex-row w-[90dvw] sm:w-[60%] pl-4">
            <p className="uppercase inline text-[22px] text-pretty w-[80%] font-bold">{pageStyles.aboutUsTitle}</p>
          <div className="flex flex-col sm:w-[50%] gap-8 mb-10">
            <p className="flex whitespace-pre-line">{pageStyles.aboutUsText}</p>
            {/* <div className="border-t font-bold text-center border-inherit pt-4">For legal reasons, Some Peeps Studio is a meme account.</div> */}
          </div>

        </div>



{/* VALUES SECTION */}

    <div className="flex flex-col bg-[#F8D791] items-center w-screen max-w-[900px] rounded-3xl p-10 mb-28">
      
      {/* TITLE AND DESCRIPTION */}
      <div className="flex flex-row text-black justify-between gap-4 mb-6">
        <p className="text-2xl text-black font-bold uppercase -mt-2">Values</p>
        <p className="text-sm text-black text-right w-[80%]">I am committed to helping brands and businesses achieve their goals. With over half a decade of experience, I provide personalised advice and support to ensure the right solution.</p>
      </div>

      {/* VALUES */}

      <div className="flex flex-col sm:flex-row gap-4 -mb-20">
          {/* VALUE 1 */}
          <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
            <div className="flex flex-row items-center justify-between mr-[6%] 
                          sm:flex-col sm:justify-center sm:mr-0">
            <Image
              src={openIcon}
              width={60}
              height={60}
              alt="profile image"
              className="bg-[#F8D791] p-1 m-4 object-fill aspect-square rounded-full"
          />
            <p className="text-xl sm:text-start uppercase mb-4">Openness</p>
            </div>
            <p className="text-[14px] px-2">Welcoming new ideas, perspectives, and feedback while fostering transparency, inclusivity, collaboration, and trust across teams, stakeholders, and evolving project environments.</p>
          </div>
        
           {/* VALUE 2 */}
           <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
           <div className="flex flex-row items-center justify-between mr-[6%] 
                          sm:flex-col sm:justify-center sm:mr-0">
          <Image
            src={speedyIcon}
            width={60}
            height={60}
            alt="profile image"
            className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
        />

          <p className="text-xl uppercase mb-4">Speedy</p>
          </div>
          <p className="text-[14px] px-2">Working efficiently with focus and urgency, delivering results quickly while maintaining quality, adapting rapidly to changes, and meeting tight deadlines consistently.</p>
            </div>
        
           {/* VALUE 3 */}
           <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
           <div className="flex flex-row items-center justify-between mr-[6%] 
                          sm:flex-col sm:justify-center sm:mr-0">
          <Image
            src={holisticIcon}
            width={60}
            height={60}
            alt="profile image"
            className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
        />

          <p className="text-xl uppercase mb-4">Holistic</p>
          </div>
          <p className="text-[14px] px-2">Considering the full picture by connecting user needs, business goals, technology, and design to create balanced, thoughtful, and effective end-to-end solutions.</p>
            </div>
        
           {/* VALUE 4 */}
           <div className="flex flex-col bg-[#182F28] p-2 rounded-xl text-white">
           <div className="flex flex-row items-center justify-between mr-[6%] 
                          sm:flex-col sm:justify-center sm:mr-0">
          <Image
            src={pivotingIcon}
            width={60}
            height={60}
            alt="profile image"
            className="bg-[#F8D791] p-2 m-4 object-contain aspect-square rounded-full"
        />

          <p className="text-xl uppercase mb-4">Pivoting</p>
          </div>
          <p className="text-[14px] px-2">Adapting direction quickly in response to feedback, data, or challenges, while staying focused on goals and maintaining momentum through change and uncertainty.</p>
            </div>
      
      </div>

    </div>

<div>
  I Am Alex © 2026

</div>

        {/* <StickyFooter /> */}


  </div>

  );
}