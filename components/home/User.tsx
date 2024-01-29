'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, useUser  } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '../ui/button'
import { LogInIcon, UserPlus2Icon, LayoutPanelLeftIcon } from 'lucide-react'

export function User() {

  const { user, isSignedIn } = useUser()

  return (
    <>
    {
      isSignedIn ? (
        <div className='flex gap-2 items-center justify-start'>
          <Link href='/deashbord' className="">
            <Button className="gap-1 flex text-sm">
              {/* <p className="border-b-2 border-b-transparent">
                Entrar 
              </p> */}
              <LayoutPanelLeftIcon className='w-4 h-4' />
              Deashbord
            </Button>
          </Link>
          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <>
          <Link href='/sign-up'>
            <Button variant='outline' className="gap-2">
              {/* <p className="border-b-2 border-b-transparent">
                Criar conta 
              </p> */}
              Criar conta
              <UserPlus2Icon className='w-5 h-5' />
            </Button>
          </Link>
          <Link href='/sign-in' className="">
            <Button className="gap-1 text-sm">
              {/* <p className="border-b-2 border-b-transparent">
                Entrar 
              </p> */}
              Entrar
              <LogInIcon className='w-5 h-5' />
            </Button>
          </Link>
        </>
      )
    }      
    </>
  )
}
