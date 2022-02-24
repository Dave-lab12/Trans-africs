import { useSession, getSession } from "next-auth/react"
import React from 'react'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import WriteBlog from "../components/writeBlog";

const Blog = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') return <h1>Loading</h1>
    if (status === 'unauthenticated') {
        return (
            <>
                <Navbar />
                <h1>unauthenticated</h1>
                <Footer />
            </>)
    }
    return (
        <>
            <Navbar />
            <div><WriteBlog /></div>
            <Footer />
        </>
    )
}

export default Blog