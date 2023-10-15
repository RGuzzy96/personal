'use client'

import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    function handleDragStart(event: { dataTransfer?: any; clientX?: any; clientY?: any; }) {
        const { clientX, clientY } = event;
        setStartPosition({ x: clientX, y: clientY });
        event.dataTransfer.setDragImage(new Image(), 0, 0); // hide the default drag preview
    }

    function handleDragOver(event: { preventDefault?: any; clientX?: any; clientY?: any; }) {
        event.preventDefault();
        const { clientX, clientY } = event;
        const diffX = clientX - startPosition.x;
        const diffY = clientY - startPosition.y;
        setPosition({ x: position.x + diffX, y: position.y + diffY });
        setStartPosition({ x: clientX, y: clientY });
    }

    function handleDrop(event: { preventDefault: () => void; }) {
        event.preventDefault();
        document.removeEventListener('dragover', handleDragOver);
        document.removeEventListener('drop', handleDrop);
    }

    useEffect(() => {
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('drop', handleDrop);
        return () => {
            document.removeEventListener('dragover', handleDragOver);
            document.removeEventListener('drop', handleDrop);
        };
    }, [position, startPosition]);

    return (
        <div className='h-screen w-full bg-gray-100 flex flex-col justify-center items-center'>
            <div 
                draggable 
                onDragStart={handleDragStart} 
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                className='mx-4 sm:mx-0 border border-gray-300 rounded-3xl bg-white shadow-xl p-8 flex flex-col justify-center items-center gap-y-8 cursor-grab active:cursor-grabbing'
            >
                <h1 className='text-xl font-semibold text-gray-900 text-center'>Hey, I&apos;m Ryan.</h1>
                <p className='text-lg text-gray-900 text-center'>This is my personal website. Evidently, it&apos;s under construction.</p>
                <p className='text-lg text-gray-900 text-center'>
                  Currently building:<Link href='https://www.launchpal.ai/' className='p-2 font-semibold hover:text-purple-700 cursor-pointer'>LaunchPal AI</Link>
                </p>
                <div className='flex flex-row gap-x-8 mt-4'>
                    <Link href='https://www.linkedin.com/in/ryanguzzwell'>
                        <BsLinkedin className="h-8 w-auto text-gray-700 cursor-pointer hover:text-gray-600"/>
                    </Link>
                    <Link href='https://github.com/RGuzzy96'>
                        <BsGithub className="h-8 w-auto text-gray-700 cursor-pointer hover:text-gray-600"/>
                    </Link>
                    <Link href='https://www.instagram.com/ryanguzzwell/'>
                        <BsInstagram className="h-8 w-auto text-gray-700 cursor-pointer hover:text-gray-600"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
