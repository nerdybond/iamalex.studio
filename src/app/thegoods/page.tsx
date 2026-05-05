import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import pic from "../../../public/link-icon.svg";

export default function Goods() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between p-24">
    
 {/*Body Wrapper*/}

 <div className="flex flex-col gap-4 min-w-full justify-start text-center"> 

 <p>The goods</p>
      
   
    
    </div>

  <footer className="flex flex-col justify-end mt-20 text-center">
    
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
