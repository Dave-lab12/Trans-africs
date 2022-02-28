import React from 'react'
import Parser from 'html-react-parser'
import Link from 'next/link'
import moment from 'moment'
const ArticleCard = ({ id, author, authorImg, title, content, image, createdAt }) => {

  let text = content.slice(0, 500)
  const slug = title.replace(" ", '-')

  console.log(id, image, content);
  return (
    <Link href={{
      pathname: `blog/${slug}`, query: {
        id: id
      }
    }} passHref>
      <div className="rounded overflow-hidden shadow-lg ">
        <img className="w-full h-96 object-fit" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base" >
            {Parser(text)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span> */}
          <p>written by {author} {moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard