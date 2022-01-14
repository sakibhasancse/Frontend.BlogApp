import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full border-t bg-white pb-12 pt-12">
            <div className="w-full container mx-auto flex flex-col items-center">
                <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                    <a href="#" className="uppercase px-3">About Us</a>
                    <a href="#" className="uppercase px-3">Privacy Policy</a>
                    <a href="#" className="uppercase px-3">Terms & Conditions</a>
                    <a href="#" className="uppercase px-3">Contact Us</a>
                </div>
                <div class="uppercase pb-6">&copy; myblog.com</div>
            </div>
        </footer >
    )
}
