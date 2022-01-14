import React from 'react'

export const Header = () => {
    return (
        <header className="w-full container mx-auto">
            <div className="flex  flex-col items-center py-12">
                <a href="/" className="font-bold uppercase text-gray-800 hover:text-gray-700 text-5xl">Demo Blog</a>
                <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
            </div>
        </header>
    )
}
