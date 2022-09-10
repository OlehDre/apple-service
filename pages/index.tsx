import { MainLayout } from "../components/MainLayout"

export default function Index(){
    return(
        <MainLayout title="Home page"> 
            <div className="imgScreen">
                <h1 className="battleRoar">Желаете отремонтировать дисплей?</h1>
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
                    
                </div>
            </div>


            <style jsx>{`
                .imgScreen{
                    width: 100%;
                    height: 300px;
                    background: url("/firstScreen.jpg") center;
                    background-size: cover;
                    text-align: center;
                    padding-top: 200px;
                }

                .battleRoar{
                    color: #fff;
                    font-size: 3em;
                    text-shadow: 2px 2px 15px #000;
                }
            `}</style>
        </MainLayout>   
    )
}

