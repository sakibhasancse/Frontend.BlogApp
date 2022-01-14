import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Pagination } from './Pagination';

export const SidNavBar = () => {
    return (
        <>
            <aside className="w-full md:w-1/3 flex flex-col item-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">About Us</p>
                    <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                </a>
                </div>
            </aside>
            <Pagination />

        </>
    )
}



