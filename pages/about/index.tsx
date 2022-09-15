import Router from "../../node_modules/next/router"
import { MainLayout } from "../../components/MainLayout"
import Link from "../../node_modules/next/link"

export default function About(){

    const linkClickHandler = () => {
        Router.push('/')
    }

    return(
        <MainLayout>
            <div className="container">
                <div>
                    <h2>Ремонт iPhone, iPad, MacBook и Apple Watch</h2><br/>
                    <ul>
                        <li>замена динамика, микрофона</li>
                        <li>замена разъемов зарядки и гарнитуры</li>
                        <li>замена дисплейного модуля (экрана)</li>
                        <li>замена сенсорного экрана (тачскрина)</li>
                        <li>замена микросхем и модулей</li>
                        <li>замена корпуса или отдельных его панелей</li>
                        <li>прошивка, снятие паролей</li>
                        <li>ремонт после попадания жидкости</li>
                        <li>замена системной платы</li>
                    </ul><br/><br/>

                    <h2>Восстановление ноутбуков Apple MacBook:</h2><br/>
                    <ul>
                        <li>замена экрана ноутбука</li>
                        <li>замена аккумуляторной батареи</li>
                        <li>замена клавиатуры</li>
                        <li>замена блока сенсорного управления (трекпада)</li>
                        <li>установление или восстановление операционной системы, программного обеспечения</li>
                        <li>замена жесткого диска</li>
                        <li>восстановление после контакта с жидкостью</li>
                    </ul><br/><br/>

                    <h2>Также мы предоставляем услуги по ремонту Apple Watch любой сложности, среди которых:</h2><br/>
                    <ul>
                        <li>замена стекла</li>
                        <li>замена дисплея</li>
                        <li>замена аккумулятора</li>
                        <li>чистка после попадания жидкости</li>
                    </ul><br/><br/>

                    <p>
                        После выполнения диагностики Вы получаете полную информации об устройстве - причину, характер поломки, а также стоимость ремонта.
                         Мы понимаем, что для Вас очень важно как можно быстрее восстановить работоспособность устройства, поэтому, 
                         главной задачей для нас является максимально быстрое обнаружение и исправление любых неполадок. 
                         Этому способствует высокий уровень профессионализма наших сотрудников, а также собственная база запчастей. 
                         Мы отвечаем за качество выполненных работ, поэтому предоставляем гарантию на все устанавливаемые комплектующие!
                    </p>
                </div>
                <button onClick={linkClickHandler}>На главную</button><br/><br/>
                <Link href={'https://t.me/+vo44J-tEGkZmOWYy'}><button onClick={() => Router.push('/posts') }>Получить звонок с консультацией</button></Link>
            </div>

            <style jsx>{`
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
                    box-shadow: 3px 3px 10px #777;
                    transition: all .2s ease-out;
                }

                button:hover{
                    box-shadow: 1px 0px 15px #32a852;
                }
            `}</style>
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