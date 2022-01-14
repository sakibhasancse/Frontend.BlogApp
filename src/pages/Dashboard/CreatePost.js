
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import CreateAndUpdatePosts from './createAndUpdatePosts';
import UploadImage from './ImageUpload';
import { size } from 'lodash';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from './graphql/createPost.graphql';
import { toastCall, toastConfig } from '@/utils/toastConfig'

const CreatePost = () => {
    toastConfig()
    const [title, setTitle] = useState('');
    const [imageList, setImageList] = useState([]);
    const [description, setDescription] = useState('');

    const [createPost, { loading, error }] = useMutation(CREATE_POST, {
        variables: {
            inputData: {
                title,
                description,
                published: true,
                author: "616178a2a675125d8da6d995",
                // images: imageList
            }
        }
    })

    if (error) {
        console.log('error', error);
        toastCall('error', 'Faild to create post', 'top-right')
    }

    if (loading) {
        console.log('loading...')
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            default:
                break;
        }
    }

    const handleImageChange = (imageList) => {
        setImageList(imageList)
    }

    const handleDescription = (description) => {
        setDescription(description)
    }

    const btnDisable = imageList && description && size(title);

    const handleSubmit = async () => {
        const response = await createPost();
        if (response) {
            if (response.data) toastCall('success', 'Post created successfully', 'top-right')
            else if (response.errors) toastCall('error', 'Faild to create post', 'top-right')
        }
    }

    return (
        <div class="container mx-auto">
            <div class="w-24 min-w-full py-8">
                Create a new post
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="post title">Tilte of the Post</label>
                <input className="placeholder-gray-500 px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" name="title" value={title} onChange={(e) => handleChange(e)} placeholder="Post title ..." />
            </div>

            <div>
                <label className="mb-4 uppercase font-bold text-lg text-grey-darkest" for="post description">Description of the post</label>
                <CreateAndUpdatePosts initialValue="Hello" limit="300" callback={handleDescription} />
            </div>

            <div className="flex flex-col mb-6">
                <label className="mb-4 uppercase font-bold text-lg text-grey-darkest" for="post description">Image of the post</label>
                <UploadImage callback={handleImageChange} />
            </div>

            <button onClick={() => handleSubmit()}
                disabled={btnDisable ? false : true}
                className={`w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none ${btnDisable ? "" : "cursor-not-allowed"}`}>Create</button>
        </div >
    );
}

export default CreatePost;