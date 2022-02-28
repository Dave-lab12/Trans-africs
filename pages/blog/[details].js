import React from 'react'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { publicRequest } from '../../utils/api'
import Parser from 'html-react-parser';

const ReadMore = ({ BlogData }) => {
  console.log(BlogData);
  let d = ` <h1>d</h1>`
  return (
    <div>
      <Navbar />
      <h1>{BlogData.title}</h1>
      <p>{Parser(`${BlogData.content}`)}</p>
      <img src={BlogData.image} />
      <Footer />
    </div>
  )
}


export default ReadMore

export async function getServerSideProps({ query }) {


  const { data } = await publicRequest.get(`/blog?id=${query.id}`)


  return {
    props: {
      BlogData: data
    },
  }
}