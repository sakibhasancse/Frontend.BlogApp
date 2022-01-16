import React, { useEffect, useState } from 'react'
import { Footer } from '@/components/UI/Footer';
import Artical from './artical';
import { SidNavBar } from '@/components/UI/SidNavBar';
import Navbar from '@/components/UI/Navbar';
import { blogList } from './helpers/uiData';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_POSTS } from './graphql/getAllPosts.graphql'



const Posts = () => {
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
        <div>
            <Navbar />
            <div className="container mx-auto flex flex-wrap py-6 pb-20">
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    {blogList && blogList.map((item, index) => (<Artical item={item} />))}
                </section>
                <SidNavBar />
            </div>
        </div>
    )
}

export default Posts;