import P from '../components/p';

import Btn from '../components/btn';

import Container from '../components/container';
import Section from '../components/section';


function Banner({ className, title, desc }) {
    return (

        <Section className={className}>
            <Container className="container mx-auto">
                <div className="text-white items-center flex flex-col">

                    <div className='flex flex-col w-full items-center justify-center my-5'>
                        <div className='bg-white h-[1px] bg-opacity-20 w-full absolute'>
                        </div>
                        <div className='w-12 h-12 flex items-center justify-center rotate-45 backdrop-blur-md backdrop-filter border-opacity-20   border-white border'>
                            <img className="w-7 h-7 -rotate-45" src="img/question_icon.svg" />
                        </div>
                    </div>


                    <h1 className="font-bold lg:text-[48px] text-[24px] uppercase pt-[62px] pb-[30px]">
                        {title}
                    </h1>
                    <P className="lg:text-[24px] lg:w-1/2">
                        {desc}
                    </P>
                    <Btn className='bg-secondary px-5 py-3 mt-5 text-black uppercase font-bold text-[14px] rounded-lg hover:bg-secondary_ligth transition-all' title="Бесплатная консультация" href="/contact" />
                </div>
            </Container>
        </Section>


    );
}
export default Banner;
