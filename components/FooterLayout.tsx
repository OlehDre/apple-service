import Link from "../node_modules/next/link"

export function Footer(){

    return(
        <>
            <footer>
                <Link href={'/'}><a className="logo">Apple Service</a></Link>
                <nav>
                    <Link href={'/'}><a>Главная</a></Link>
                    <Link href={'/posts'}><a>Каталог</a></Link>
                    <Link href={'/about'}><a>Услуги</a></Link>
                    <Link href={'/contacts'}><a>Контакты</a></Link>
                </nav>
                <div className="socialLinks">
                    <Link href={'http://t.me/apple_service'}><a>Telegram</a></Link>
                    <Link href={'https://www.instagram.com/apple_service_sumy/'}><a>Inst</a></Link>
                    <Link href={'https://www.instagram.com/apple_service_sumy/'}><a>Facebook</a></Link>
                </div>
            </footer>

            <style jsx>{`
                footer{
                    background: #000;
                    width: 100%;
                    align-items: center;
                    height: 150px;
                    display: flex;
                    justify-content: space-around;
                }
                .logo{
                    font-size: 1.6em;
                    color: #fff;
                    text-decoration: none;
                }

                nav a{
                    color: #fff;
                    text-decoration: none;
                    margin: 0 20px;
                    transition: all .3s ease-out;
                }
                nav a:hover{
                    color: #42b9f5;
                }

                .socialLinks a{
                    color: #fff;
                    text-decoration: none;
                    margin: 0 20px;
                    transition: all .3s ease-out;
                }
                .socialLinks a:hover{
                    color: #42b9f5;
                }
            `}</style>
        </>
    )
}