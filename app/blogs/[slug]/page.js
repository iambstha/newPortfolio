import React from 'react'
import { GraphQLClient } from 'graphql-request'
import Image from 'next/image'
import Link from 'next/link'
const hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API)

const getPost = async (params) => {
    const response = await hygraph.request(
        `query PostPageQuery($slug: String!){
            post(where: {slug : $slug}) {
                id
                title
                subtitle
                slug
                createdAt
                content{
                    html
                }
                author {
                  id
                  name
                  pp {
                    id
                    url
                  }
                }
              }
          }`,
        {
            slug: params.slug
        }
    )
    return response
}

const page = async ({ params }) => {
    const { post } = await getPost(params)
    const readTime = () => {
        const readingSpeed = 500;
        let value = 0
        post.content.map(c => {
            value = value + c.html.length
            return value
        })
        const timeToRead = Math.ceil(value / readingSpeed)
        return timeToRead
    }

    return (
        <div className=' flex w-full justify-center items-center ' >
            <div className=' p-2 px-6 pt-8 flex flex-col w-full md:w-2/3  ' >
                <h2 className=' text-3xl md:text-4xl lg:text-6xl text-slate-950 pt-2 w-full text-center ' >{post.title}</h2>
                <h3 className=' text-base md:text-xl text-orange-400 pt-2 pb-4 text-center w-full ' >{post.subtitle}</h3>
                <div className='flex items-center justify-center' >
                    <span><Image src={post.author.pp.url} width={40} height={40} alt="pp" className=' rounded-3xl mr-2 ' /></span>
                    <p className=' flex gap-4 text-xs md:text-sm ' >
                        <span className=' text-slate-500 ' >By <Link href='' className=' hover:underline hover:text-orange-400 '>{post.author.name}</Link></span>
                        <span className=' text-slate-500 ' >Published on {post.createdAt.slice(0, 10)}</span>
                        <span className=' text-slate-500 ' >{readTime()} min read.</span>
                    </p>
                </div>
                <p>{post.content.map(p => {
                    return <div dangerouslySetInnerHTML={{ __html: p.html }} className='content_blog' ></div>
                })}</p>
            </div>

        </div>
    )
}

export default page