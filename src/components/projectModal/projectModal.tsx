"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ProjectModalProps {
  title: string;
  categories: string[];
  description: string;
  mainPic: string;
  modalPic: string;
  modalLink?: string;
}

export function ProjectModal({title, categories, description, mainPic, modalPic, modalLink}: ProjectModalProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  return (
    
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex flex-col w-fit h-fit bg-transparent items-center justify-between rounded-xl overflow-hidden 
        hover:animate-pulse hover:border-b-4 hover:border-black">      
          <Image  className="object-cover w-full aspect-square h-full hover:scale-110 rounded-xl"
                  src={mainPic}
                  alt="project image"
                  width={250}
                  height={250}/>

          <p className="-mt-[20%] rounded-b-xl py-4 w-full bg-opacity-40 text-white bg-black uppercase">{title}</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg max-h-[90vh] text-overflow text-white bg-[#191b21] border-black border-b-2 
                                drop-shadow-3xl bg-opacity-90 overflow-scroll max-w-sm">
        <DialogHeader className="flex-col justify-between">
          
          <DialogClose className=""
           asChild>          

          </DialogClose>
          
          <DialogTitle className="text-center border-b-2 border-white p-2 self-start ml-4 mb-2 font-bold text-2xl">{title}</DialogTitle>
          <Image  className="object-cover w-full h-full aspect-auto rounded-xl"
                  src={modalPic}
                  alt="modal image"
                  width={350}
                  height={450}/>
        </DialogHeader>

        <div className="flex flex-col ml-2 gap-4">
            
            <div className="flex flex-row -mt-1">
            {categories.map((category, index) => (
              <span key={index} className="mr-2 bg-[#2c3442] text-sm border-black border-b text-white px-2 bg-opacity-80 py-2 rounded-md">{category}</span>
            ))}
            </div>

            <div className="flex items-center font-thin space-x-2 whitespace-pre-line">
              {description}  
            </div>
            {modalLink && (
            <a href={modalLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 w-fit">
                See More
              </Button>
  </a>
)}

        </div>


        </DialogContent>
    </Dialog>
  )
}
