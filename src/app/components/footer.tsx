import Link from 'next/link'

function Footer() {
  return ( 
    <div className='flex flex-row w-full justify-end items-center h-[4vh] border-t-2 px-5 z-50 bg-black'>
      <p className='mr-1'>Coded by</p>
      <Link target='_blank' className='hover:text-orange-700' href={"https://github.com/LSzpilowski"}>LSzpilowski</Link>
    </div>
  )
}

export default Footer;