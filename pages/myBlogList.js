import Footer from '../components/footer'
import ListOfMyBlogs from '../components/listOfMyBlogs'
import React from 'react'
import Navbar from '../components/navbar'
import { publicRequest } from '../utils/api'
import { useSession, signOut } from 'next-auth/react'
const myBlogList = () => {
    return (
        <div>
            <Navbar />
            <ListOfMyBlogs />

            <Footer />
        </div>
    )
}


export default myBlogList

export function getServerSideProps(context) {
    console.log(context);
    console.log();
    // const {data} = publicRequest.get('/')
}
