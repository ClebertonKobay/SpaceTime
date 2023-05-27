import { User } from 'lucide-react'

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
        <a href="" className="flex items-center text-left">
          <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
            <User className='h-5 w-5 text-gray-500'/>
          </div>
          <p>Crie sua conta e salve suas memórias!</p>
        </a>
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
