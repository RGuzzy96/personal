'use client'

import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import ThemeToggle from "./theme-toggle"

const navItems = [
    {
        name: "about",
        href: "/"
    },
    {
        name: "activity",
        href: "/activity"
    },
    /*{
        name: "work",
        href: "/work"
    },*/
    {
        name: "blog",
        href: "https://the360engineer.substack.com"
    }
]

export default function Nav({children}) {
    return(
        <div className="w-full flex flex-col min-h-screen bg-stone-100 dark:bg-black items-center justify-start px-4">
            <div className="w-full my-12 max-w-4xl flex items-center justify-between gap-x-6">
                <div className="flex gap-x-6 items-center">
                    {navItems.map(item => (
                        <div key={item.name}>
                            {item.name === 'blog' ? 
                            <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-stone-300 dark:hover:text-stone-200 sm:text-2xl hover:text-gray-700">
                                {item.name}
                            </Link>
                            :
                            <Link href={item.href} className="text-gray-900 dark:text-stone-300 dark:hover:text-stone-200 sm:text-2xl hover:text-gray-700">
                                {item.name}
                            </Link>
                            }
                        </div>
                    
                    ))}
                </div>
                <div className="flex gap-x-6 items-center text-gray-700 dark:text-stone-300 dark:hover:text-stone-200 hover:text-gray-600">
                    <Link href='https://www.linkedin.com/in/ryanguzzwell' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="h-6 w-auto  cursor-pointer "/>
                    </Link>
                    <Link href='https://github.com/RGuzzy96' target="_blank" rel="noopener noreferrer">
                        <BsGithub className="h-6 w-auto cursor-pointer"/>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
            <div className="w-full max-w-4xl">
                {children}
            </div>
        </div>
    )
}