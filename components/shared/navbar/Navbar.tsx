import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from '../../ui/Button'
import { NavContainer } from '../../ui/Containers'
const Navbar = () => {
  return (
    <NavContainer>
        <Link href="/" className=" flex items-center gap-2">
            <Image
                src="/assets/icons/icon.jpg"
                alt="logo"
                width={100}
                height={20}
                className=""/>
        </Link>
        <ul className="gap-7 text-center text-[15px] font-light hidden lg:flex">
            <li>About us</li>
            <li>Contact us</li>
            <li>Features</li>
            <li>Socials</li>
        </ul>
        <Link href="/app">
        <PrimaryButton className="rounded-full px-4">Launch App</PrimaryButton>
      </Link>
    </NavContainer>
  )
}

export default Navbar
