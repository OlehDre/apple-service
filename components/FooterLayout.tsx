import Link from "../node_modules/next/link"

export function Footer(){

    return(
        <>
            <footer>
                <nav>
                    <h2 className="logo">Apple Service</h2>
                    <Link href={'/'}><a>Home</a></Link>
                    <Link href={'/about'}><a>About</a></Link>
                    <Link href={'/posts'}><a>Posts</a></Link>
                </nav>
            </footer>

            <style jsx>{`
                footer{
                    padding: 50px;
                    height: 60px;
                    background: #111;
                }
                nav{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .logo{
                    color: #fff;
                }

                nav a{
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}