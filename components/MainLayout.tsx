import Link from "next/link"
import Head from "next/head"
import {Footer} from '../components/FooterLayout'

export function MainLayout( {children, title = 'Next App' } ) {
    return(
        <>
            <Head>
                <meta name="keywords" content="ключевое слово 1, ключевое слово 2, ключевое слово 3" />
                <meta name="description" content="this is my project for Apple Service Sumy" />
                <meta charSet="utf-8" />
                <title>{title} || Apple Service</title>
            </Head>

            <nav>
                <Link href={'/'}><a className="logo">Apple Service</a></Link>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            
            <main>
                {children}
            </main>

            <Footer></Footer>            

            <style jsx>{`
                nav{
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: #718F54;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a{
                    color: #fff;
                    text-decoration: none;
                }

                main{
                    margin-top: 60px;
                    padding: 50px;
                }

                .logo{
                    font-size: 1.6em;
                }
            `}</style>
        </>
    )
}