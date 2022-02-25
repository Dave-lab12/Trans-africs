import React from 'react'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BlogList from "../../components/blogList";
import axios from 'axios'
export async function getServerSideProps(context) {
  const getBlogs = await fetch('http://localhost:3000/api/blog')
  const getBlogsjson = await getBlogs.json()
return {
    props: { 
      getBlogsjson
    } }


}
const Blog = ({getBlogsjson}) => {

  return (
    <div>
    <Navbar/>
    <BlogList blogList={getBlogsjson}/>
    <Footer/>
    </div>
  )
}

export default Blog