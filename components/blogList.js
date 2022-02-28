import React from 'react'
import axios from 'axios'
import ArticleCard from './articleCard'


const BlogList = ({ blogList }) => {

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {
        blogList && blogList.map((content) => {

          return <ArticleCard key={content.id} {...content} />
        })
      }

    </div>
  )
}

export default BlogList