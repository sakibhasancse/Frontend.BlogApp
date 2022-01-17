import React from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

const Artical = (item) => {
    return (
        <artical className="flex flex-col shadow my-4" key={item.id}>
            <a href={`/${item.slug}`} className="hover:opacity-75">
                <img src={item.image ? item.image : 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'} alt={item.title} />
            </a>
            <div className="flex flex-col justify-start p-6">
                <Link to={`/${item.slug}`} className="text-blue-700 text-sm font-bold uppercase pb-4">{item.category}</Link>
                <Link to={`/${item.slug}`} href={`/${item.slug}`} className="text-3xl font-bold hover:text-gray-700 pb-4">{item.title}</Link>
                <p className="text-sm pb-3">
                    By <a href="/">{item.author ? item.author.name : ''}</a>, Published on Aprill 2021
                            </p>
                <span className="pb-6">{item.description || ''}</span>
                <Link to={`/${item.slug}`} className="flex uppercase text-gray-800 hover:text-black">Continue Reading <ArrowRight /></Link>
            </div>
        </artical>

    )
}

export default Artical