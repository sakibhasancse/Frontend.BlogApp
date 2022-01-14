import React from 'react'
import { Header } from './Header'
import { TopNavBar } from './TopNavBar'

const Navbar = () => {
    return (
        <div>
            <TopNavBar />
            <Header />
            <nav className="w-full py-4 border-t border-b bg-gray-100">
                <div className="block sm:hidden">
                    <a href="#" className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center">Topics </a>
                </div>
                <div className="open ? 'block': 'hidden'" className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                    <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
                        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar