import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import products from '../products';
import ProductModal from './ProductModal';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Импорт хука для отслеживания видимости элемента

const Product = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(-1); // Индекс первого видимого товара (-1 для начального скрытия)

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  // Хук useInView для отслеживания видимости компонента
  const { ref, inView } = useInView({
    triggerOnce: true, // Отслеживать только один раз
    threshold: 0.5 // Порог вхождения: 0.5 значит, когда 50% элемента становится видимым
  });

  // Запускаем поочередное отображение товаров при скролле к компоненту
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          return newIndex < products.length ? newIndex : prevIndex;
        });
      }, 500); // Задержка между показами товаров (здесь 500 мс = 0.5 секунды)

      return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }
  }, [inView]);

  return (
    <div className={className} ref={ref}>
      <Swiper
      spaceBetween={0}
     
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1536: {
          slidesPerView: 5,
        },
      }}
      
    >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            {index <= visibleIndex && ( // Показываем товары с индексом <= текущего visibleIndex
              <motion.div
                className="product-slide group p-4 hover:shadow-md  relative flex items-center justify-center flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }} // Уменьшаем продолжительность анимации до 0.3 секунды
              >
                <div className='relative'>
                  <img src={product.image} className="h-[440px] w-full object-contain mb-2" />
                  <div className='flex flex-col w-full absolute bottom-10 -right-5 items-end'>
                    {product.sale && <p className="text-sm bg-red-500 px-5 rounded-full mb-2   text-white">Хит!</p>}
                    <p className="text-sm bg-primary w-1/2 bg-opacity-60 backdrop-blur-md backdrop-filter  text-white rounded-full p-2 text-center ">Цена:
                      {product.price} ₸</p>

                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>

                <button
                  onClick={() => openModal(product)}
                  className="text-sm text-white transition-all rounded-full  bg-opacity-60 backdrop-blur-md backdrop-filter bg-primary border border-white p-5 opacity-0 absolute z-50 group-hover:opacity-100 hover:underline focus:outline-none "
                >
                  Подробнее
                </button>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <ProductModal
        product={selectedProduct}
        showModal={showModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Product;
