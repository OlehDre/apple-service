import Link from '../node_modules/next/link'
import {useState, useEffect} from 'react'
import { MainLayout } from "../components/MainLayout"
import {MyPost} from '../interfaces/post'
import { NextPageContext } from '../node_modules/next/dist/shared/lib/utils'


interface PostsPageProps{
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps){
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load(){
           const response = await fetch('https://my-json-server.typicode.com/OlehDre/apple-service/posts')
           const json = await response.json()
           console.log(json)
           setPosts(json)
        }

        if(!serverPosts) {
            load()
        }

    }, [])

        if(!posts) {
            return(
                <MainLayout>
                    <p>Loading...</p>
                </MainLayout>
            )
        }

    // return(
    //     <MainLayout title="Posts page">
    //         <h1>Posts page</h1>
    //         <ul>
    //             {posts.map(post => (
    //                 <li key={post.id}>
    //                     <Link href={`/post/[id]`} as={`/post/${post.id}`}>
    //                         <a>{post.title}</a>
    //                     </Link>
    //                 </li>
    //             ))}
    //         </ul>
    //     </MainLayout>
    // )

    return(
        <MainLayout title="Posts page">
            <div className="container">
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                                <a>{post.title}<br/>
                                <span className='spanModel'>Модель: Samsung M321J Pro</span><br/>
                                <span className='spanPrecent'>Есть в наличии</span><br/>
                                <span className='spanPrice'>10.000</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                li{
                    list-style-type: none;
                }
                li a{
                    text-decoration: none;
                    color: #000;
                    font-size: 1.2em;
                    display: block;
                    background: #f0f0f0;
                    margin: 30px;
                    padding: 30px;
                    transition: all .3s ease;
                    border-radius: 3px;
                }
                li a:hover{
                    background: #aaa;
                }
                a span{
                    display: block;
                    margin: 3px 15px;
                }
                .spanModel{
                    padding-top: 20px;
                    font-size: 0.9em;
                }
                .spanPrecent{
                    color: green;
                    font-size: 0.9em;
                }
            `}</style>
        </MainLayout>
    )
}



Posts.getInitialProps = async({ req }: NextPageContext) => {
    if(!req) {
        return {posts: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()

    return {
        posts
    }
}