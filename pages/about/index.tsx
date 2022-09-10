import Router from "../../node_modules/next/router"
import { MainLayout } from "../../components/MainLayout"

export default function About({ title }){

    const linkClickHandler = () => {
        Router.push('/')
    }

    return(
        <MainLayout title="About page">
            <div className="container">
                <h1>{title}</h1><br/><br/>
                <h1>Наши услуги:</h1><br/><br/>
                <button onClick={linkClickHandler}>Проконсультироваться в телеграмме</button><br/><br/>
                <button onClick={() => Router.push('/posts') }>Получить звонок с консультацией</button>
            </div>
        </MainLayout>
    )
}


About.getInitialProps = async() => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json()

    return{
        title: data.title
    }
}