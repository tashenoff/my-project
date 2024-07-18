
import Container from '../components/container';

import footerImage from '../assets/img/service.jpg';
import Logo_mini from '../assets/img/logo_mini.svg';

import Product from '../components/product';


const servivestyle = {
    backgroundImage: `url(${footerImage})`,
    backgroundSize: 'cover', // Масштабирует изображение так, чтобы оно покрывало весь элемент
    backgroundPosition: 'center', // Центрирует изображение
    backgroundRepeat: 'no-repeat', // Избегает повторения изображения
};



function Service() {
    return (
        <section id="target-second" className="h-screen mb-10">
            <div className='relative'>
                <div style={servivestyle} className='absolute top-0 left-0 bg-primary h-[400px] w-full'>
                    <div className='top-20 w-full h-[200px] flex items-center justify-center flex-col'>
                        <div className='flex flex-col w-full items-center justify-center my-5'>
                            <div className='bg-white h-[1px] bg-opacity-20 w-full absolute'>
                            </div>
                            <div className='w-12 h-12 flex items-center justify-center rotate-45 backdrop-blur-md backdrop-filter border-opacity-20   border-white border'>
                                <img src={Logo_mini} className="w-5 h-5 -rotate-45" alt="logo" />
                            </div>
                        </div>
                        <h1 className='text-white  lg:text-[40px] text-[20px] font-bold uppercase'>наш ассортимент</h1>
                    </div>

                    <Container className="container mx-auto">
                        <Product className='' />
                    </Container>
                </div>
            </div>




        </section>

    );
}
export default Service;

