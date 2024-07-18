
import Icon from '../components/icon';

import contactInfo from '../site.json';
import footerImage from '../assets/img/footer.jpg';
import ScrollToTopButton from './ScrollToTopButton';



function Footer() {

    const footerStyle = {
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover', // Масштабирует изображение так, чтобы оно покрывало весь элемент
        backgroundPosition: 'center', // Центрирует изображение
        backgroundRepeat: 'no-repeat', // Избегает повторения изображения
    };


    return (


        <footer style={footerStyle} className="text-white font-bold w-full uppercase  relative z-50">
            <div className="flex w-full items-center justify-center z-50 relative -top-[26px] left-0">
                <div className="bg-gray-300 w-14 h-14 flex items-center justify-center">
                    <ScrollToTopButton />
                </div>
            </div>

            <div className="relative w-full p-5">
                <div className="border border-white absolute top-24 left-0 border-opacity-20 w-full"></div>
              
                    <ul
                        className="p-10 border bg-opacity-20 backdrop-blur-md backdrop-filter border-white border-opacity-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-primary  z-50 relative m-5">
                        <li className="flex items-center w-full">
                            <Icon className='mx-2 w-8 h-8' src="img/gps_icon.svg" alt="" />
                            <a className='text-sm' href="">{contactInfo.address}</a>
                        </li>
                        <li className="flex items-center w-full">
                            <Icon className='mx-2 w-8 h-8' src="img/phone_icon.svg" alt="" />
                            <a className='text-sm' href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                        </li>
                        <li className="flex items-center w-full">
                            <Icon className='mx-2 w-8 h-8' src="img/mail_icon.svg" alt="" />
                            <a className='text-sm' href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </li>
                        <li className="flex items-center w-full">
                            <Icon className='mx-2 w-8 h-8' src="img/time_icon.svg" alt="" />
                            <a className='text-sm' href="">{contactInfo.workingHours}</a>
                        </li>
                    </ul>
            
            </div>

            <div className="bg-black">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
                        <span className='w-full flex lg:justify-start'>design by alex</span>
                        <span className='w-full flex lg:justify-end '>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;
