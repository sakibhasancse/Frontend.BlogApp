import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'react-feather';
import { GET_ALL_POSTS } from './graphql/getAllPosts.graphql'
import { Link } from 'react-router-dom';
let demodata = [{
    _id: '1',
    title: 'Hello title ',
    description: 'Defaults to searching for a default babel.config.json file, but can be passed the path of any JS or JSON5 config file. NOTE: This option does not affect loading ',
    author: 'Sakib Hasan',
    category: 'Tecnical',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1',
    authorId: '232332'
}, {
    _id: '13',
    title: 'Hello title 2 ',
    description: 'Defaults to searching for a default babel.config.json file, but can be passed the path of any JS or JSON5 config file. NOTE: This option does not affect loading ',
    author: 'Sakib Hasan',
    category: ' Computer',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1',
    authorId: '232332'
}, {
    _id: '31',
    title: 'Hello title 3',
    category: 'Laptop',
    description: 'Defaults to searching for a default babel.config.json file, but can be passed the path of any JS or JSON5 config file. NOTE: This option does not affect loading ',
    author: 'Sakib Hasan',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1',
    authorId: '232332'
}]
const Artical = () => {
    const [postLists, setPostLists] = useState([{}]);
    console.log({ postLists })
    const [getPosts] = useLazyQuery(GET_ALL_POSTS, {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            if (data && data.getPosts) {
                console.log({ data })
                setPostLists(data.getPosts)
            }
        }
    })

    useEffect(() => {
        getPosts();
    }, [getPosts])

    console.log({
        postLists
    })
    return (
        <>
            { postLists && postLists.map((item, index) => (
                <artical className="flex flex-col shadow my-4" key={item.id}>
                    <a href={`/${item.slug}`} className="hover:opacity-75">
                        <img src={item.image ? item.image : 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'} alt={item.title} />
                    </a>
                    <div className="flex flex-col justify-start p-6">
                        <Link to={`/${item.slug}`} className="text-blue-700 text-sm font-bold uppercase pb-4">{item.category}</Link>
                        <Link to={`/${item.slug}`} href={`/${item.slug}`} className="text-3xl font-bold hover:text-gray-700 pb-4">{item.title}</Link>
                        <p className="text-sm pb-3">
                            By <a href="/">{item.author && item.author.name || ''}</a>, Published on Aprill 2021
                            </p>
                        <span className="pb-6">{item.description || ''}</span>
                        <Link to={`/${item.slug}`} className="flex uppercase text-gray-800 hover:text-black">Continue Reading <ArrowRight /></Link>
                    </div>
                </artical>
            ))}
        </>
    )
}

export default Artical