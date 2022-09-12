import { MainLayout } from "../components/MainLayout"
import Link from "../node_modules/next/link"

export default function Contacts(){

    return(
        <>
            <MainLayout>
                <div className="container">
                    <h1>Наши контакты</h1>
                    <br/><br/>
                    <p>Телефон: +(38) 0996034010</p><br/>
                    <Link href={'http://t.me/apple_service'}><a>Telegram</a></Link><br/>
                    <Link href={'https://www.instagram.com/apple_service_sumy/'}><a>Instagram</a></Link><br/><br/>
                    <p>Adress: ТРЦ «Лавина» 1 эт</p><br/>
                    <p>Время работы 10:00-20:00</p>
                </div>
            </MainLayout>
        </>
    )
}