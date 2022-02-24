import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const WriteBlog = () => {
    const [editorState, setEditorState] = useState('');
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    console.log(log());
    return (
        <div>
            <h1 className='text-5xl text-center'>Write Your Blog</h1>
            <main className='flex items-center justify-center gap-3 my-12'>
                <h1>Title</h1>
                <input type="text" id="title" placeholder="Blog title" className="shadow-sm appearance-none border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                <h1>Featured image</h1>
                <input type="file" id="title" className="shadow-sm appearance-none border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />

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
            <button onClick={log} className="bg-indigo-600 text-white p-3 px-5 flex justify-center m-auto my-5 rounded-xl">Publish</button>
        </div>
    )
}

export default WriteBlog