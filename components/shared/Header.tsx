"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        {/* Logo trên thanh header */}
        <Link href='/' className="w-36">
          <Image src='/assets/images/logo.svg' alt='Logo' width={128} height={38}/>
        </Link>

        {/*Nav Items hiển thị khi đã đăng nhập  */}
        <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems/>
            </nav>  
        </SignedIn>

        {/* Login button khi chưa đăng nhập và Button người dùng khi đã đăng nhập */}
        <div className="flex w-32 justify-end gap-3">
          {/* Đã đăng nhập */}
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobileNav />
          </SignedIn>

          {/* Chưa đăng nhập */}
          <SignedOut>
            <Button asChild className='rounded-full' size='lg'>
              <Link href='/sign-in'>
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>

      </div>
    </header>
  )
}

export default Header