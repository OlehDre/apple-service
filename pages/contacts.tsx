import { MainLayout } from "../components/MainLayout"
import Link from "../node_modules/next/link"

export default function Contacts(){

    return(
        <>
            <MainLayout>
                <h1>Наши контакты</h1>
                <br/><br/>
                <p>+(38)000-000-00-00</p><br/>
                <p>Telegram</p><br/>
                <p>Instagram</p><br/>
                <p>Adress /../.../..</p>
            </MainLayout>
        </>
    )
}