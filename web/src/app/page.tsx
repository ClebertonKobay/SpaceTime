import { User } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/nlw-logo.svg' 

export default function Home() {
  return (
    <>
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden  border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 
        translate-x-1/2 rounded-full blur-full"/>
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />


        {/* sign In */}
        <a href="" className="flex items-center text-left gap-3 hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
            <User className='h-5 w-5 text-gray-500'/>
          </div>
          <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
        </a>  
         {/* Center */}
          <div className='space-y-5'>
            <Image src={logo} alt="Logo" />
            <div className='max-w-[420px] space-y-4'>
              <h1 className='mt-5 text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
              <p>
                Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo! 
              </p>
            </div>
            <a href="" className='inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-700 transition-colors'>
              Cadastrar Lembrança
            </a>
          </div>

          {/** Footer */}
          <footer className='text-sm leading-relaxed text-gray-200'>
            Feito por   <a 
                          rel='noreferrer'
                          href="https://github.com/ClebertonKobay" 
                          className='underline hover:text-gray-100'
                          target='_blank'
                          >Cleberton Kobay dos Santos
                        </a>
          </footer>
      </div>
      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança,
          começe a <a href="" className="underline hover:text-gray-50">criar agora</a>!</p>
        </div>
      </div> 
    </main>
    </>
  );
}
