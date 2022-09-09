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
            </footer>

            <style jsx>{`
                footer{
                    background: #000;
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
                }
            `}</style>
        </>
    )
}