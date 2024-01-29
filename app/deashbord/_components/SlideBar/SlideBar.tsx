"use client"

import React from 'react'
import { Logo } from '../../../../components/logo'
import { HomeIcon, FolderClosedIcon, CircleDollarSignIcon, CreditCardIcon } from 'lucide-react'
import { ButtonMenu } from './Button'
import { User } from './User'

interface itensMenu {
  page: string
  icon: React.ElementType
  href: string
}

const menuDeashbord: itensMenu[] = [
  {
    page: 'Meus Arquivos',
    href: '/deashbord/teste/arquivos',
    icon: FolderClosedIcon
  },
  {
    page: 'Cobrança',
    href: '/deashbord/teste/cobranca',
    icon: CreditCardIcon
  },
  {
    page: 'Financeiro',
    href: '/deashbord/teste/financeiro',
    icon: CircleDollarSignIcon
  }
]

export const SlideBar = () => {


  return (
    <> 
      <div className='flex flex-col h-full justify-between'>
        
        <div id='menu' className='flex flex-col'>
          <div className='px-4'>
            <Logo link="deashbord" />
          </div>

          <ButtonMenu icon={HomeIcon} page='Home' href='/deashbord' className='mt-6 border-y border-y-black/5' />

          <div className='mt-6 gap-0 flex flex-col'>
            {menuDeashbord.map(({ href, page, icon }, index) => {
              return (
                <ButtonMenu key={index} icon={icon} page={page} href={href} /> 
              ) 
            })}
          </div>
        </div>

        <div id='semNome' className='px-4'>
          <User />
        </div>
      </div>
    </>
  )
}

