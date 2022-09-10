import {useState, useEffect} from 'react'
import Link from '../../node_modules/next/link'
import { MainLayout } from "../../components/MainLayout"
import { useRouter } from '../../node_modules/next/router'
import { NextPageContext } from '../../node_modules/next/dist/shared/lib/utils'
import { MyPost } from '../../interfaces/post'

interface PostPageProps {
    post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps){
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if(!serverPost) {
            load()
        }
    }, [])

    if(!post) {
        return(
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return(
        <MainLayout>
            <div className="container">
                <h1 className='postTitle'>{post.title}</h1>
                
                <ul>
                    <li>
                        Модель телефона: ...
                    </li>
                    <li>
                        Наличие: ...
                    </li>
                    <li>
                        Производитель: ...
                    </li>
                    <li>
                        Тип экрана: ...
                    </li>
                </ul>

                <span>50.000,50UA</span>

                <p className='postBody'>{post.body}</p>
                <Link href={'/posts'}><a>Back to all posts</a></Link><br/>
                <button>Связаться с продавцом</button>
            </div>
            <style jsx>{`
                .postTitle{
                    margin-bottom: 50px;
                }

                .postBody{
                    padding: 50px;
                }

                a{
                    text-decoration: none;
                    color: #000;
                    font-size: 1.2em;
                }

                button{
                    width: 30%;
                    height: 50px;
                    background: #32a852;
                    cursor: pointer;
                    border: none;
                    padding: 5px;
                    margin-top: 50px;
                    border-radius: 10px;
                    font-size: 1.2em;
                    box-shadow: 3px 2px 15px #555;
                    transition: all .2s ease-out;
                }

                button:hover{
                    box-shadow: 1px 0px 15px #32a852;
                }
            `}</style>
        </MainLayout>
    )
}


interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}


Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if(!req) {
        return {post: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: MyPost = await response.json()
    return{
        post
    }
}

// export async function getServerSideProps({ query, req }) {
//     if(!req) {
//         return {post: null}
//     }
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//     return {props:{post}}
// }