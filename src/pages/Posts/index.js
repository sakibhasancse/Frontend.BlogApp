import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import Artical from '@/pages/Posts/posts-component/artical';
import { SidNavBar, Navbar } from '@/components/Layout';
import { blogList } from '@/pages/Posts/helpers/uiData';
import { GET_POSTS } from './graphql/getPosts.gql';
import { AppSpinner } from '@/components/UI';

const Posts = () => {
  const [postLists, setPostLists] = useState([{}]);

  const [getPosts] = useLazyQuery(GET_POSTS, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log({ data });
      if (data && data.getPosts) {
        setPostLists(data.getPosts);
      }
    }
  });

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log({
    postLists
  });
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-wrap py-6 pb-20">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {blogList ? (
            blogList.map((item) => <Artical item={item} />)
          ) : (
            <AppSpinner variant="primary" />
          )}
        </section>
        <SidNavBar />
      </div>
    </div>
  );
};

export default Posts;
