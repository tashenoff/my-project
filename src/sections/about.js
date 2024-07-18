// About.js
import P from '../components/p';
import Img from '../components/img';
import Container from '../components/container';


function About({ id, className }) {
    return (
        <>        <section id="target-section" className="py-10">
            <Container className="container mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-8">
                    <Img src="img/about1.svg" />
                    <P>
                        <h1 className='text-[18px] font-bold uppercase'>Торговая компания «ELORDA MANAGEMENT GROUP»</h1>
                        <p>
                            является официальным представителем ведущих российских заводов производителей стальных дверей.
                            За плечами нашей казахстанской команды 10 лет опыта, а опыт наших заводов насчитывает более 25 лет
                            профессиональной деятельности, посвященных любимому делу. Мы работаем для наших покупателей во
                            всех крупных городах страны и по-настоящему гордимся своей работой.
                        </p>
                    </P>
                </div>
            </Container>
        </section >
        </>

    );
}

export default About;
