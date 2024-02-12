export default function About() {
    return (
        <div className="flex flex-col gap-y-6 text-gray-900 dark:text-stone-300">
            <h1 className="text-3xl font-semibold">about me</h1>

            <p className="text-xl">Hey, my name is Ryan Guzzwell, I{"'"}m a software engineer and entrepreneur based in Halifax, NS, Canada. I am currently finishing my Computer Engineering degree at Dalhousie University while working on various projects, including a start-up called <span className="border mx-1 bg-white dark:bg-black items-center py-0.5 px-2 rounded-md shadow-sm inline-flex max-w-max"><a href="https://launchpal.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1"><img src="/lp-favicon.png" className="h-4 w-4"/>LaunchPal</a></span> that I co-founded.</p>
            <img src="/ryan.jpg" className="max-h-96 w-fit rounded-lg shadow self-center"/>        
            <p></p>
        </div>
    )
}