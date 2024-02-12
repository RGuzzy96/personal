import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ThemeToggle() {
    const [ darkMode, setDarkMode ] = useState(false);

    const toggleTheme = () => {        
        if(darkMode){
            document.documentElement.classList.remove('dark');
        }else{
            document.documentElement.classList.add('dark')
        }
        setDarkMode(!darkMode);
    }

    return (
        <Switch
            checked={darkMode}
            onChange={toggleTheme}
            className={`${darkMode ? 'bg-stone-400' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2`}
        >
            <span
                className={`${darkMode ? 'translate-x-5' : 'translate-x-0'} pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            >
                <span
                className={`${darkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
                aria-hidden="true"
                >
                <SunIcon className="h-3 w-3 text-gray-700"/>
                </span>
                <span
                className={`${darkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
                aria-hidden="true"
                >
                <MoonIcon className="h-3 w-3 text-gray-700"/>
                </span>
            </span>
        </Switch>
    )
}