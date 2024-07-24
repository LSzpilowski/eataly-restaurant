import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-row w-full justify-end items-center h-10 border-t-2 px-5'>
      <p className='mr-1'>Coded by</p>
      <Link target='_blank' className='hover:text-orange-700' href={"https://github.com/LSzpilowski"}>LSzpilowski</Link>
    </div>
  )
}
