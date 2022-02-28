import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useSession, signOut } from 'next-auth/react'
import { notification } from 'antd'



const WriteBlog = () => {
    const { data: session } = useSession()
    const [content, setContent] = useState({});
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            return editorRef.current.getContent()
        }
    };
    const openNotification = () => {
        notification.open({
            message: 'New Article published',
            description:
                `${content.title} has been successfully published`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const handleChange = (e) => {
        e.persist();
        setContent(content => ({ ...content, [e.target.name]: e.target.value }));
    }

    const handleSubmit = () => {
        axios.post('api/blog', {
            authorId: session.id,
            title: content.title,
            image: content.image,
            author: session.name,
            authorImg: session.image,
            content: log()
        }).then((res) => {
            openNotification()
            setContent({ title: '', image: '' })
            editorRef.current = ''
        }).catch(err => {

        })
    }
    return (
        <div>
            <h1 className='text-5xl text-center'>Write Your Blog</h1>
            <main className='flex items-center justify-center gap-3 my-12'>
                <h1>Title</h1>
                <input type="text" id="title" placeholder="Blog title" name='title' onChange={e => handleChange(e)} className="shadow-sm appearance-none border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                <h1>Featured image</h1>
                <input type="text" id="image" name='image' onChange={e => handleChange(e)} className="shadow-sm appearance-none border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />

            </main>
            <section className="shadow  w-10/12 m-auto ">
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>Write something here.</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </section>
            <button onClick={handleSubmit} className="bg-indigo-600 text-white p-3 px-5 flex justify-center m-auto my-5 rounded-xl">Publish</button>
        </div>
    )
}

export default WriteBlog