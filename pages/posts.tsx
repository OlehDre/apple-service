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
           const response = await fetch('http://localhost:4200/posts')
           const json = await response.json()
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
            <input className='searchField' />
            <h1>Каталог</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                li{
                    list-style-type: none;
                }
                li a{
                    text-decoration: none;
                    color: #000;
                    font-size: 1.2em;
                    display: block;
                    height: 90px;
                    background: #f0f0f0;
                    margin: 30px;
                    padding: 30px;
                    transition: all .3s ease;
                    border-radius: 3px;
                }
                li a:hover{
                    background: #aaa;
                }
                .searchField{
                    height: 25px;
                    width: 200px;
                    padding: 3px;
                    margin: 0 600px;
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