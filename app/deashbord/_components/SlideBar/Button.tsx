"use client" 

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface propsButtonMenu {
  key?: number
  href: string
  page: string
  className?: string
  children?: React.ReactNode
  icon: React.ElementType // Tipo para o ícone
}

export const ButtonMenu = ({href, key, page, children, className, icon: Icon}: propsButtonMenu) => {
  const pathname = usePathname() || '/'
  return (
    <>
        <Link 
          key={key} 
          className={
            cn(`flex relative group items-center transition-all delay-100 duration-300 justify-start gap-4 text-black px-4 py-3`,
            pathname === `${href}` && 'bg-zinc-100',
            className,
          )}
          rel="stylesheet" 
          href={href}>

        <div className={cn('absolute transition-all delay-100 duration-700 bg-transparent left-0 top-0 w-1 h-1 z-30',
          pathname === `${href}` && 'bg-blue-500 h-full border-y' 
        )} />

        <div className={cn('absolute transition-all delay-0 border-y duration-700 left-0 top-0 w-0 h-full group-hover:w-full group-hover:bg-zinc-100'
        )} />

          <div className='z-20 flex items-center justify-center gap-2'>
            <Icon className='w-5 h-5 ' />
              <p className="">{page}</p>
          </div>
        </Link>
    </>
  )
}