import React, { useEffect, useState } from 'react'
import Artical from './artical';
import { SidNavBar, Navbar } from '@/components/Layout';
import { blogList } from './helpers/uiData';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_POSTS } from './graphql/getAllPosts.graphql'
import { AppSpinner } from '@/components/UI';



const Posts = () => {
    const [postLists, setPostLists] = useState([{}]);
    console.log({ postLists })
    const [getPosts, { loading, error }] = useLazyQuery(GET_ALL_POSTS, {
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
                    {blogList ? blogList.map((item) => (<Artical item={item} />)) : <AppSpinner variant="primary" />}
                </section>
                <SidNavBar />
            </div>
        </div>
    )
}

export default Posts;