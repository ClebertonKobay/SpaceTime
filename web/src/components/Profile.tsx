import { getUser } from "@/lib/auth";
import Image from "next/image";

export function Profile(){
    const {name,avatar} = getUser()
    return(
       <>
            <div className="flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
                    <Image src={avatar} alt="Profile photo" width={40} height={40} className="h-10 w-10 rounded-full"/>
                </div>
                <p className='text-sm leading-snug max-w-[140px]'>
                    {name}
                    <a href="#" className="block text-red-400 hover:text-red-300">Quero sair!</a>
                </p>
            </div>
        </>
    )
}