import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"

const activityItems = [
    {
        title: "LaunchPal",
        type: "commercial",
        imageSrc: '/launchpal-site.png',
        description: "LaunchPal is leveraging AI to productize the digital marketing agency model to provide agencies and consultants the opportunity to service their clients better and in less time so they can scale, and SMBs with the opportunity to do their marketing themselves as an alternative to an agency.",
        href: "https://launchpal.ai",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    },
    {
        title: "Space Shooter",
        type: "personal",
        imageSrc: '/space-shooter.png',
        description: "This project is a web-based space shooter game designed to provide a simple and engaging multiplayer experience for users. Players can create game instances and invite a friend to play against head-to-head.",
        href: "https://github.com/RGuzzy96/space-shooter",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    },
    {
        title: "Tiny BASIC Compiler",
        type: "personal",
        imageSrc: "/tinyb.png",
        description: "This project is a compiler written in Go that translates Tiny BASIC programs into JavaScript so that they may be run in the browser.",
        href: "https://github.com/RGuzzy96/tiny-basic-compiler",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    }
]

const readingItems = [
    {
        title: "Building Microservices",
        type: "book",
        imageSrc: '/building_microservices.png',
        author: "Sam Newman",
        description: "This is a fantastic book covering the fundamentals of microservices, breaking the monolith, and actually implementing a microservices architecture. One thing I particularly like is that the author doesn't just praise microservices as the silver-bullet solution, but rather explains the pros and cons, and actually explicitly recommends against them as the architecture choice for certain situations.",
        href: "https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029?&_encoding=UTF8&tag=the360enginee-20&linkCode=ur2&linkId=c79d3d29f605a5a61eca4067cc11573a&camp=1789&creative=9325",
        created: "February 10, 2024",
        last_updated: "February 10, 2024"
    },
]

export default function ActivityComponent() {

    return (
        <div className="flex flex-col gap-y-6 text-gray-900 dark:text-stone-300 pb-24">

            <h1 className="text-3xl font-semibold">my activity</h1>

            {/* Projects section */}
            <h1 className="text-xl font-semibold">recent projects</h1>
            <div className="text-xl">
                This is a list of some of the projects I have been working on lately, both commercial and personal for-fun projects. I have included <span className="border mx-1 bg-white dark:bg-black items-center py-0.5 px-2 rounded-md shadow-sm inline-flex max-w-max"><a href="https://github.com/RGuzzy96" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1"><BsGithub className="h-4 w-4"/>Github</a></span> links for my personal projects, and website links for any commercial projects.
            </div>

            <div className="flex flex-col gap-4 text-lg">
                {activityItems.map(item => (
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" key={item.title} className="group flex flex-col sm:flex-row gap-4 p-4 border shadow-sm bg-white dark:bg-stone-900">
                        {item.imageSrc && 
                        <div className="flex-1 min-w-[144px]">
                            <img src={item.imageSrc} className="border rounded-md shadow-sm h-36 object-cover w-full"/>
                        </div>
                        }
                        <div className="flex flex-col gap-y-2">
                            <div className="flex gap-x-3 items-center">
                                <h1 className="font-semibold">{item.title}</h1>
                                {item.type === 'personal' && <span className="scale-95 text-xs bg-stone-50 dark:bg-black border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Personal</span>}
                                {item.type === 'commercial' && <span className="scale-95 text-xs bg-stone-50 dark:bg-black border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Commercial</span>}
                            </div>
                            <p>{item.description}</p>
                        </div>
                        <ArrowUpRightIcon className="h-6 w-6 min-w-max text-gray-300 group-hover:text-gray-900 dark:text-gray-900 dark:group-hover:text-gray-300 self-end md:self-auto"/>
                    </Link>
                ))}
            </div>

            {/* Reading section */}
            <h1 className="text-xl font-semibold">what I{"'"}m reading</h1>
            <div className="text-xl">
                This is a list of some of the books, articles, blogs, etc. that I have been reading lately, or find interesting and want to read.
            </div>

            <div className="flex flex-col gap-4 text-lg">
                {readingItems.map(item => (
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" key={item.title} className="group flex flex-col sm:flex-row gap-4 p-4 border shadow-sm bg-white dark:bg-stone-900">
                        {item.imageSrc && 
                        <div className="flex-1 min-w-[144px]">
                            <img src={item.imageSrc} className="border rounded-md shadow-sm h-36 object-cover w-full"/>
                        </div>
                        }
                        <div className="flex flex-col gap-y-2">
                            <div className="flex gap-x-3 items-center">
                                <h1 className="font-semibold">{item.title}</h1>
                                {item.type === 'book' && <span className="scale-95 text-xs bg-stone-50 dark:bg-black border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Book</span>}
                                {item.type === 'article' && <span className="scale-95 text-xs bg-stone-50 dark:bg-black border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Article</span>}
                                {item.type === 'blog' && <span className="scale-95 text-xs bg-stone-50 dark:bg-black border border-stone-400 text-stone-500 h-fit py-0.5 rounded-full inline-flex items-center px-2">Blog Post</span>}
                            </div>
                            {item.author && <p>by {item.author}</p>}
                            <p>{item.description}</p>
                        </div>
                        <ArrowUpRightIcon className="h-6 w-6 min-w-max text-gray-300 group-hover:text-gray-900 dark:text-gray-900 dark:group-hover:text-gray-300 self-end md:self-auto"/>
                    </Link>
                ))}
            </div>
        </div>
    )
}