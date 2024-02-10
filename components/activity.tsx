import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"

const activityItems = [
    {
        title: "LaunchPal",
        type: "commercial",
        imageSrc: '/launchpal-site.png',
        description: "This is a description of the Space Shooter project that I am working on. It provides information on the project, but also why I am doing it (what will I learn? why this project over others?).",
        href: "/activity/launchpal",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    },
    {
        title: "Space Shooter",
        type: "personal",
        imageSrc: '/r.png',
        description: "This is a description of the Space Shooter project that I am working on. It provides information on the project, but also why I am doing it (what will I learn? why this project over others?).",
        href: "/activity/space-shooter-project",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    },
    {
        title: "Tiny BASIC Compiler",
        type: "personal",
        imageSrc: null,
        description: "This is a description of the Space Shooter project that I am working on. It provides information on the project, but also why I am doing it (what will I learn? why this project over others?).",
        href: "/activity/tiny-basic-compiler-project",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    }
]

export default function ActivityComponent() {

    return (
        <div className="flex flex-col gap-y-6 text-gray-900">

            {/* Section overview */}
            <div className="text-lg">
                This is a list of some of the projects I have been working on lately, both commercial and personal for-fun projects. I have included <span className="border bg-white items-center py-0.5 px-2 rounded-md shadow-sm inline-flex max-w-max"><a href="https://github.com/RGuzzy96" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1"><BsGithub className="h-4 w-4"/>Github</a></span> links for my personal projects, and website links for any commercial projects.
            </div>

            {/* Content section */}
            <div className="flex flex-col gap-4">
                {activityItems.map(item => (
                    <Link href={item.href} key={item.title} className="group flex gap-x-4 p-4 border shadow-sm bg-white">
                        {item.imageSrc && 
                        <div className="h-24 w-48">
                            <img src={item.imageSrc} className="border rounded-md shadow-sm h-full object-cover w-full"/>
                        </div>
                        }
                        <div className="flex flex-col gap-y-2">
                            <div className="flex gap-x-3 items-center">
                                <h1 className="font-semibold">{item.title}</h1>
                                {item.type === 'personal' && <span className="scale-95 text-xs bg-stone-50 border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Personal</span>}
                                {item.type === 'commercial' && <span className="scale-95 text-xs bg-stone-50 border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Commercial</span>}
                            </div>
                            <p>{item.description}</p>
                        </div>
                        <ArrowUpRightIcon className="h-6 w-6 min-w-max text-gray-300 group-hover:text-gray-900"/>
                    </Link>
                ))}
            </div>
        </div>
    )
}