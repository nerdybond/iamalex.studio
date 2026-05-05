"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image";
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"

// import { sendEmail } from '../app/api/emailBuilder'
import { useState, useEffect } from "react"


const formSchema = z.object({
  name: z.string().min(1, { }),
  email: z.string().email().min(1, { }),
  message: z.string().min(1, { }),
  
})

export default function ContactForm() {
  const [formData, setFormData] = useState({});


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
     
}


  


return (
  <Form {...form}>
  <div className="flex flex-col mt-4 self-center">
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    
        {/* Name and Email */}
        
        <div className="flex flex-row gap-2">
        {/* Name */}
                  <FormField
                        control={form.control}
                        name="name"
                        render={({ field } : { field:any }) => (
                          <FormItem className= "text-left w-full">
                            <FormLabel className="flex w-full flex-row uppercase text-white gap-1"><p>Full Name</p><p className="text-[#FF0000]">*</p></FormLabel>
                            <FormControl className="bg-opacity-50 bg-white border w-full border-white">
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}/>

                        {/* Email */}
                  <FormField
                      control={form.control}
                      name="email"
                      render={({ field } : { field:any }) => (
                        <FormItem className= "text-left w-full">
                          <FormLabel className="flex flex-row uppercase text-white gap-1"><p>Email</p><p className="text-[#FF0000]">*</p></FormLabel>
                          <FormControl className="bg-opacity-50 bg-white border border-white">
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}/>

        </div>
           {/* Message */}
                    <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem className="w-full">
                              <FormLabel className="flex uppercase text-white gap-1"><p>Message</p><p className="text-[#FF0000]">*</p></FormLabel>
                              <FormControl className="bg-opacity-50 bg-white border border-white">
                                  <Textarea
                                    placeholder="What would you like to say?"
                                    className=""
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          /> 
     


    {/* -- [SUBMIT] Button -- */}
            <Button type="submit" 
              className="bg-white uppercase rounded-full text-black text-md font-bold transition-opacity hover:opacity-70 hover:bg-gray-200 w-[120px] self-center py-6 px-8 mt-4">
              Submit
            </Button>
    </form>
    </div>
  </Form>
  )}