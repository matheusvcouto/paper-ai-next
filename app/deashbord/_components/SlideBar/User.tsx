'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, useUser  } from '@clerk/nextjs'

export function User() {

  const { user, isLoaded } = useUser()

  return (
    <>
    {
      isLoaded ? (
        <div className='flex gap-2 items-center justify-start'>
          <UserButton afterSignOutUrl='/' />
          <p className=''>Olá {user?.fullName}</p>
        </div>
      ) : (
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      )
    }      
    </>
  )
}
