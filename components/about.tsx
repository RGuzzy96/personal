export default function About() {
    return (
        <div className="flex flex-col gap-y-6 text-gray-900 dark:text-stone-300">
            <h1 className="text-3xl font-semibold">about me</h1>

            <p className="text-xl">Hey, my name is Ryan Guzzwell, I{"'"}m a software engineer and entrepreneur based in Halifax, NS, Canada. I am currently finishing my Computer Engineering degree at Dalhousie University while working on various projects, including a start-up called <span className="border mx-1 bg-white dark:bg-black items-center py-0.5 px-2 rounded-md shadow-sm inline-flex max-w-max"><a href="https://launchpal.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1"><img src="/lp-favicon.png" className="h-4 w-4"/>LaunchPal</a></span> that I co-founded.</p>
            <img src="/ryan.jpg" className="max-h-96 w-fit rounded-lg shadow self-center"/>        
            <p className="text-xl">{"On a mission to build cool things, and simply enjoying the journey. Outside of work and building things, I'm obsessed with personal growth and having a great time doing it. I'm always reading books, articles, and I love the gym."}</p>
            <p className="text-xl">I share my thoughts across tech, business, fitness, and life as a whole in my blog, <span className="underline"><a href="https://the360engineer.substack.com" target="_blank" rel="noopener noreferrer">The 360 Engineer</a></span>.</p>
        </div>
    )
}