'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useOnClickStore } from '@/store/useOnClick'

const navLinks = [
  {
    id: '1',
    title: 'Home',
    link: '/',
  },
  {
    id: '2',
    title: 'Service',
    link: '/service',
  },
  {
    id: '3',
    title: 'About us',
    link: '/about',
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const setActive = useOnClickStore((state) => state.setIsClick)

  const onClick = () => {
    setActive(false)
  }

  return (
    <div className='sticky z-[99] w-full bg-white py-[1px]'>
      <nav className='navbar container flex flex-row items-center justify-between'>
        <Link onClick={onClick} href={'/'} className='relative'>
          <Image src={'/images/Logo.png'} width={80} height={80} alt='...' />
        </Link>

        <div className='flex-center flex-grow flex-row gap-20'>
          {navLinks.map((nav) => {
            return (
              <Link key={nav.id} href={nav.link}>
                <span className={pathname === nav.link ? 'active' : ''}>
                  {nav.title}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
