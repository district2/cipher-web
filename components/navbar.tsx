'use client'

import Image from "next/image"
import logo from "@/public/icons/logo.svg"
import menu from "@/public/icons/menu.svg"
import x from "@/public/icons/x.svg"
import NavItem from "./nav-item"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [isShown, setShown] = useState(false)
    const pathName = usePathname();

    const items = [
        <NavItem name="Home" link="/" active={pathName == "/"} key={"home"} />,
        <NavItem name="Devices" link="/devices" active={pathName == "/devices"} key={"devices"} />,
        <NavItem name="Blog" link="/blog" active={pathName == "/blog"} key={"blog"} />
    ]

    return (
        <nav className="p-12" onClick={() => isShown ? setShown(!isShown) : ""}>
            <div className="flex justify-between items-center w-full">
                <Link className="flex items-center" href={"/"}>
                    <Image
                        src={logo}
                        alt='CipherOS logo'
                        width={80}
                        height={80}
                    ></Image>
                    <h1 className="hidden text-xl md:block">
                        <span className="font-bold">Cipher</span><span className="font-medium">OS</span>
                    </h1>
                </Link>
                <div className='hidden gap-x-4 lg:flex'>
                    {items}
                </div>
                <div className="lg:hidden">
                    <Image src={isShown ? x : menu} alt="menu icon" className="cursor-pointer" onClick={() => setShown(!isShown)}></Image>
                </div>
            </div>

            {
                isShown ?
                    <div className="flex flex-col items-center p-3 w-full rounded-lg bg-neutral-900 lg:hidden">
                        {items}
                    </div>
                    :
                    ""
            }
        </nav>
    )
}