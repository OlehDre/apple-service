import { MainLayout } from "../components/MainLayout"

export default function Index(){
    return(
        <MainLayout title="Home page"> 
            <div className="imgScreen">
                <h1 className="battleRoar">Apple Service - гарантия качества и вашего спокойствия</h1>
            </div>

            <div className="container">
                <p>Apple Service - сервис ремонта ваших девайсов</p><br/>
                <p>Профессиональное восстановление дисплеев iPhone, Apple Watch, iPad, а также восстановление дисплеев Аndroid смартфонов.Ремонт телефонов любой сложности.Поклейка защитных стёкл."</p>
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
                    
                </div>
            </div>


            <style jsx>{`
                .imgScreen{
                    width: 100%;
                    height: 707px;
                    background: url("/firstScreen.jpg") center;
                    background-size: cover;
                    text-align: center;
                    padding-top: 600px;
                }

                .battleRoar{
                    color: #fff;
                    font-size: 3em;
                    text-shadow: 1px 0px 20px #000;
                }
            `}</style>
        </MainLayout>   
    )
}

