import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/container';
import Btn from '../components/btn';
import Icon from '../components/icon';
import Img from '../components/img';
import P from '../components/p';
import Section from '../components/section';
import ScrollToSectionButton from '../components/ScrollToSectionButton';

const text = "МЕЖКОМНАТНЫЕ ДВЕРИ В АСТАНЕ";

const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
        },
    }),
};

function Home({ id }) {
    return (
        <>
            <Section className="bg-cover bg-no-repeat bg-home relative">
                <Container className="container mx-auto">
                    <div className='flex items-center flex-col justify-center h-screen text-white'>
                        <motion.svg
                            width="50"
                            height="50"
                            className="my-10"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.3106 13.5231H23.3037V9.67699L19.0723 6.15659L15.3037 3.0212L11.9958 0.269043L8.68786 3.0212L0.687927 9.67699V9.67842V15.1813V15.9616V20.1929H4.91924H19.0723V22.7706H0.687927V27.0019H19.0723H23.3037V22.7706V20.1929V15.9616H19.0723H4.91924V11.6609L11.9958 5.77337L19.0723 11.6609V13.5231H21.3106Z"
                                stroke="#CBA061"
                                strokeWidth="0.5"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0 },
                                    visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
                                }}
                            />
                            <motion.path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.3106 13.5231H23.3037В9.67699Л19.0723 6.15659Л15.3037 3.0212Л11.9958 0.269043Л8.68786 3.0212Л0.687927 9.67699В9.67842В15.1813В15.9616В20.1929H4.91924H19.0723В22.7706H0.687927В27.0019H19.0723H23.3037В22.7706В20.1929В15.9616H19.0723H4.91924В11.6609Л11.9958 5.77337Л19.0723 11.6609В13.5231H21.3106З"
                                fill="#CBA061"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                            />
                        </motion.svg>

                        <div className='lg:text-[42px] text-[24px] uppercase text-center font-bold mb-5'>
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={`${char}-${index}`}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={letterAnimation}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-center"
                        >
                            <P>
                                Нам хочется, чтобы вы смогли создать дом, наполненный радостью.
                                Уверены, что вместе мы подберем напольное<br />
                                покрытие, которое сделает вашу мечту реальностью и прослужит долго.
                            </P>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                            className='mt-5'
                        >
                            <Btn className='bg-secondary px-5 py-3 text-black uppercase font-bold text-[14px] rounded-lg hover:bg-secondary_ligth transition-all' title="Подать заявку" href="/contact" />
                        </motion.div>

                    </div>
                </Container>

                <div className="w-full flex p-8 absolute bottom-0 left-0 border-b border-white border-opacity-20 z-50">
                    <Container className="container mx-auto">
                        <div className="relative">
                            <div className="flex justify-between items-center w-full absolute -top-[55px]">
                                <ScrollToSectionButton targetId="target-section" />
                                <div className="flex border border-white rounded-full border-opacity-20 bg-primary_light p-2 right-0">
                                    <Btn>
                                        <Icon className='mx-2 w-[30px]' src="img/facebook_icon.svg" />
                                    </Btn>
                                    <Btn>
                                        <Icon className='mx-2 w-[30px]' src="img/pinterest_icon.svg" />
                                    </Btn>
                                    <Btn>
                                        <Icon className='mx-2 w-[30px]' src="img/google_icon.svg"  />
                                    </Btn>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Section>

            <section id="target-section" className="py-10">
                <Container className="container mx-auto">
                    <div className="grid lg:grid-cols-2 items-center gap-8">
                        <Img src="img/about1.svg" />
                        <P>
                            <h1 className='text-[18px] font-bold uppercase'>Торговая компания «ELORDA MANAGEMENT GROUP»</h1>
                            <p>
                                Является официальным представителем ведущих российских заводов производителей стальных дверей.
                                За плечами нашей казахстанской команды 10 лет опыта, а опыт наших заводов насчитывает более 25 лет
                                профессиональной деятельности, посвященных любимому делу. Мы работаем для наших покупателей во
                                всех крупных городах страны и по-настоящему гордимся тем, что нашим клиентам нравится наша работа.
                            </p>
                        </P>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Home;
