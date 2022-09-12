import Link from "../node_modules/next/link"
import Head from "../node_modules/next/head"
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

            <header>
                <Link href={'/'}><a className="logo">Apple Service</a></Link>
                <nav>
                    <Link href={'/'}><a>Главная</a></Link>
                    <Link href={'/posts'}><a>Каталог</a></Link>
                    <Link href={'/about'}><a>Услуги</a></Link>
                    <Link href={'/contacts'}><a>Контакты</a></Link>
                </nav>
            </header>
            
            <main>
                {children}
            </main>

            <Footer></Footer>            

            <style jsx>{`
                header{
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: #000;
                    align-items: center;
                    display: flex;
                    justify-content: space-around;
                }
                nav{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a{
                    color: #fff;
                    text-decoration: none;
                    margin: 0 50px;
                    transition: all .3s ease-out;
                }

                nav a:hover{
                    color: #47ecff;
                }

                main{
                    margin-top: 60px;
                    min-height: 1100px;
                }

                .logo{
                    font-size: 1.6em;
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}