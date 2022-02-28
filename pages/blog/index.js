import React from 'react'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BlogList from "../../components/blogList";
import { publicRequest } from '../../utils/api'
const Blog = ({ data }) => {

  return (
    <div>
      <Navbar />
      <BlogList blogList={data} />
      <Footer />
    </div>
  )
}
export async function getServerSideProps(context) {
  const { data } = await publicRequest.get(`/blog`)

  return {
    props: {
      data
    }
  }


}

export default Blog