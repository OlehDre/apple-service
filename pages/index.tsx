import { MainLayout } from "../components/MainLayout"
import Link from "../node_modules/next/link"

export default function Index(){
    return(
        <MainLayout title="Home page"> 
            <div className="imgScreen">
                <h1 className="battleRoar">Желаете отремонтировать дисплей?</h1>
                <Link href={'https://t.me/+vo44J-tEGkZmOWYy'}><button className="imgScreenBtn">Связаться с продавцом</button></Link>
            </div>

            <div className="container">
                <h2>Apple Service - сервис ремонта ваших девайсов</h2><br/>
                <h3>Профессиональное восстановление дисплеев iPhone, Apple Watch, iPad, а также восстановление дисплеев Аndroid смартфонов.Ремонт телефонов любой сложности.Поклейка защитных стёкл."</h3><br/>
                <ul>
                    <li>
                        Качественный ремонт вашей техники
                    </li>
                    <li>
                        Большой ассортимент дисплеев
                    </li>
                    <li>
                        Аксессуары для смартфона
                    </li>
                    <li>быстро</li>
                    <li>качественно</li>
                    <li>с гарантией</li>
                </ul>

                <div>
                    <Link href={'https://docs.google.com/spreadsheets/d/1QYt6ruATG9LLRYhRdYTFfNlDRjcN6CdsJ5rQjwrMMcg/edit?usp=sharing'}><button className="imgScreenBtn">Связаться с продавцом</button></Link>
                </div>
            </div>


            <style jsx>{`
                .imgScreen{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 300px;
                    background: #e3e3e3;
                    justify-content: center;
                    align-items: center;
                }

                .imgScreenBtn{
                    
                }

                .battleRoar{
                    color: #000;
                    font-size: 3em;
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

