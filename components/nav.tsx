'use client'

import Link from "next/link"

const navItems = [
    {
        name: "About",
        href: "/"
    },
    {
        name: "Activity",
        href: "/activity"
    },
    {
        name: "Blog",
        href: "/blog"
    }
]

export default function Nav({children}) {
    return(
        <div className="w-full flex flex-col min-h-screen bg-stone-100 items-center justify-start">
            <div className="w-full my-12 max-w-4xl flex items-center justify-start gap-x-6">
                {navItems.map(item => (
                    <Link href={item.href} key={item.name} className="text-gray-900 text-xl hover:text-gray-700">
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="w-full max-w-4xl">
                {children}
            </div>
        </div>
    )
}