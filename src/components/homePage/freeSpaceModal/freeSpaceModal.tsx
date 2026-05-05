"use client"

import Image from "next/image";
import Link from "next/link";
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


interface FreeSpaceModalProps {
  title: string;
  description: string;
  linkURL: string;
  linkText: string;
  mainPic: string;
  modalPic: string;
}

export function FreeSpaceModal({title, description, linkURL, linkText, mainPic, modalPic}: FreeSpaceModalProps) {
  
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
        <Button variant="secondary" className="flex flex-col w-max h-max aspect-square bg-transparent items-center justify-between rounded-xl 
        hover:animate-pulse hover:-mb-4 hover:scale-105 hover:border-b-2 hover:border-black hover:-rotate-2">      
          <Image  className="object-cover h-full aspect-square rounded-xl"
                  src={mainPic}
                  alt="project image"
                  width={200}
                  height={200}/>
          <p className="-mt-[25%] rounded-b-xl py-4 w-full bg-opacity-40 text-white bg-black uppercase">{title}</p>
        </Button>
      </DialogTrigger>


      <DialogContent className="sm:max-w-lg max-h-[90vh] text-overflow text-white bg-[#191b21] border-black border-b-2 
                                drop-shadow-3xl bg-opacity-90 overflow-scroll max-w-sm">
        <DialogHeader className="flex-col justify-between">
          
          <DialogClose asChild></DialogClose>
          
          <DialogTitle className="text-center border-b-2 border-white p-2 self-start ml-4 mb-2 font-bold text-2xl">{title}</DialogTitle>
          <Image  className="object-cover w-full h-full aspect-video rounded-xl"
                  src={modalPic}
                  alt="modal image"
                  width={250}
                  height={250}/>
        </DialogHeader>

        <div className="flex flex-col ml-2 gap-4">
            
            <div className="flex items-center font-thin space-x-2">
              {description}  
            </div>
            <Link href={linkURL}>{linkText}</Link>
        </div>


        </DialogContent>
    </Dialog>
  )
}
