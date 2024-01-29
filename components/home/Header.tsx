
import { Logo } from "../logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus2Icon, LogInIcon } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { User } from "@/components/home/User"

export const Header = () => {

  return (
    <>
      <div className="flex items-center w-full justify-center border-b">
        <div className="flex sm:w-[calc(100%-10rem)] max-sm:flex-col justify-between h-20 items-center ">
          <Logo link="home" />
          <div className="flex max-sm:grid max-sm:grid-cols-2 items-center justify-center gap-2">
            
            <User />
          </div>
        </div>
      </div>
    </>
  )
}