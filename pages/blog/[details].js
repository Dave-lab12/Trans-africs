import React from 'react'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {useRouter} from 'next/router'
const ReadMore = () => {
    const router = useRouter()
    console.log(router);
  return (
    <div>
    <Navbar/>

    <Footer/>
    </div>
  )
}


export default ReadMore

export async function getStaticProps(context) {
  console.log(context.params); // return { title: 'Mortal Kombat' }
  return {
    props: {}, // will be passed to the page component as props
  }
}