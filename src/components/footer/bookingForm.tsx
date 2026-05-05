"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import back from '../../public/left-chevron.svg'
import checkmark from '../../public/checkmark.svg'


// import { sendEmail } from '../app/api/emailBuilder'
import { useState, useEffect } from "react"


const formSchema = z.object({
  firstName: z.string().min(1, { }),
  lastName: z.string().min(1, { }),
  email: z.string().email().min(1, { }),
  contactNumber: z.string().min(1, { }),
  artistName: z.string().min(1, { }),
  projectName: z.string().min(1, { }),
  terms: z.boolean().default(false),

  numberOfSongs:  z.string().min(1, { }),
  deadline: z.date({ }),
  songList: z.string().min(1, { }),
  additionalInfo: z.string().min(1, { }),
  downloadLink: z.string().min(1, { }),
  mixEngineer: z.string().min(1, { }),
  bitRate: z.string().min(1, { }),
  wavSample: z.string().min(1, { }),
  addMixes: z.string().min(1, { }),
  addFormats: z.string().min(1, { }),
})

export default function BookingForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  
  const nextStep = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
  const prevStep = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  
  const isLastPage = currentPage === 4; // Last page of form.


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      artistName: "",
      projectName: "",
      terms: false,
      numberOfSongs: "",
      // deadline: "",
      songList: "",
      additionalInfo: "",
      downloadLink: "",
      mixEngineer: "",
      bitRate: "",
      wavSample: "",
      addMixes: "",
      addFormats: "",
    },
  })


  const updateFormData = () => {
    setFormData(form.getValues());
  };

  useEffect(() => {
    // Save form data whenever it changes
    updateFormData();
  }, [form]);




  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
      
      console.log('--------------- NOICE -------------------'),
      // console.log(JSON.stringify(values));
      console.log(values);

      // sendEmail();
      nextStep();
}


  


return (
  <Form {...form}>
  <div className="flex flex-col w-[80%] self-center">
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    
        {/*BOOKING FORM - PAGE 1*/}
          {currentPage === 1 && (

          <div className="flex flex-col m-4 gap-4">
              
           {/* -- [Next] Button -- */}
            <Button type="button" 
              className="bg-white text-black text-md font-bold transition-opacity hover:opacity-70 hover:bg-gray-200 w-[120px] self-center py-6 px-8 mt-4"
              onClick={nextStep}>
              Next
            </Button>
          {/* -- Page Indicators -- */}
          <div className="flex flex-row pt-8 gap-2 self-center text-center text-white justify-evenly">

            {/* Page 1 */}
            <div className="flex flex-col">
            <p className="rounded-full bg-[#153049] border-2 border-white aspect-square text-center self-center p-2 mb-2 font-bold">1</p>
            <p className="-mt-1">1</p>
            </div>

            <hr className="flex h-4 w-10 border-t-2 -ml-2 -mx-4 mt-5" />

            {/* Page 2 */}
            <div className="flex flex-col">
            <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">2</p>
            <div className="flex flex-col">
              <p>2</p>
            </div>
            </div>

            <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />

            {/* Page 3 */}
            <div className="flex flex-col">
            <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">3</p>
            <div className="flex flex-col">
              <p>3</p>
            </div>
            </div>

            <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />

            {/* Page 4 */}
            <div className="flex flex-col ">
            <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">4</p>
            <p>4</p>
            </div>

          </div>
        </div>

          )}

        {/*BOOKING FORM - PAGE 2*/}
          {currentPage === 2 && (
            <div className="flex flex-col my-4 w-full self-center">

                
                  {/* -- [Next] Button -- */}
                  <Button type="button" 
                  className="bg-white text-black text-md font-bold transition-opacity hover:opacity-70 hover:bg-gray-200 w-[120px] self-center py-6 px-8 mt-4"
                  onClick={nextStep}>
                        Next
                  </Button>

                  {/* -- Page Indicators -- */}
                  <div className="flex flex-row pt-8 gap-2 self-center text-center text-white justify-evenly">

                      {/* Page 1 */}
                    <div className="flex flex-col ">
                      <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">1</p>
                      <p>1</p>
                    </div>
                    
                    <hr className="flex h-4 w-10 border-t-2 -ml-2 -mx-4 mt-5" />

                    {/* Page 2 */}
                    <div className="flex flex-col text-white">
                    <p className="rounded-full bg-[#153049] border-2 border-white aspect-square text-center self-center p-2 mb-2 font-bold">2</p>
                      <div className="flex flex-col -mt-1">
                        <p>2</p>
                      </div>
                    </div>
                    <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />
                    
                    {/* Page 3 */}
                    <div className="flex flex-col">
                    <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">3</p>
                    <div className="flex flex-col">
                        <p>3</p>
                      </div>
                    </div>
                    
                    <hr className="flex h-4 w-10 border-t-2 -mr- -mx-4 mt-5" />
                    
                    {/* Page 4 */}
                    <div className="flex flex-col">
                    <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">4</p>
                      <p>Confirm</p>
                    </div>4

                  </div>
                </div>

                 )}
        
                {/*BOOKING FORM - PAGE 3*/}
                {currentPage === 3 && (
                    <div className="flex flex-col my-4 w-full self-center">

                        <Button className="bg-transparent hover:bg-transparent absolute left-3 top-3 " onClick={prevStep}> 
                          <Image src={back} alt="back chevron" height={20} width={20}/>
                        </Button>

                         

                  {/* -- [Next] Button -- */}
                  <Button type="button" 
                  className="bg-white text-black text-md font-bold transition-opacity hover:opacity-70 hover:bg-gray-200 w-[120px] self-center py-6 px-8 mt-4"
                  onClick={nextStep}>
                        Next
                  </Button>
                          {/* -- Page Indicators -- */}
                          <div className="flex flex-row pt-8 gap-2 self-center text-center text-white justify-evenly">

                              {/* Page 1 */}
                            <div className="flex flex-col ">
                              <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">1</p>
                              <p>1</p>
                            </div>
                            
                            <hr className="flex h-4 w-10 border-t-2 -ml-2 -mx-4 mt-5" />
                            
                            {/* Page 2 */}
                            <div className="flex flex-col">
                            <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">2</p>
                            <div className="flex flex-col">
                                <p>2</p>
                              </div>
                            </div>

                            <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />
                            
                            
                            {/* Page 3 */}
                            <div className="flex flex-col text-white">
                            <p className="rounded-full bg-[#153049] border-2 border-white aspect-square text-center self-center p-2 mb-2 font-bold">3</p>
                              <div className="flex flex-col -mt-1">
                                <p>3</p>
                              </div>
                            </div>
                            <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />
                            
                            
                            <hr className="flex h-4 w-10 border-t-2 -mr- -mx-4 mt-5" />
                            
                            {/* Page 4 */}
                            <div className="flex flex-col">
                            <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">4</p>
                              <p>4</p>
                            </div>

                          </div>
                        </div>

        )}

        {/*BOOKING FORM - PAGE 4*/}
        {currentPage === 4 && (
          <div className="flex my-4 flex-col text-white">
            
            {/* -- Page Indicators -- */}
            <div className="flex flex-row pt-8 gap-2 self-center text-center text-white justify-evenly">

              {/* Page 1 */}
              <div className="flex flex-col ">
                <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">1</p>
                <p>1</p>
              </div>

              <hr className="flex h-4 w-10 border-t-2 -ml-2 -mx-4 mt-5" />

              {/* Page 2 */}
              <div className="flex flex-col">
                <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">2</p>
                <div className="flex flex-col">
                  <p>2</p>
                </div>
              </div>

              <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />



              {/* Page 3 */}
              <div className="flex flex-col">
                <p className="rounded-full bg-[#0E0D0D] opacity-75 aspect-square text-center self-center p-2 mb-2 font-bold">3</p>
                <div className="flex flex-col">
                  <p>3</p>
                </div>
              </div>

              <hr className="flex h-4 w-10 border-t-2 -mx-4 mt-5" />

              {/* Page 4 */}
              <div className="flex flex-col">
                <p className="rounded-full bg-[#153049] border-2 border-white aspect-square text-center self-center p-2 mb-2 font-bold">4</p>
                <p className="-mt-1">4</p>
              </div>

            </div>
          </div>
        )}
    </form>
    </div>
  </Form>
  )}