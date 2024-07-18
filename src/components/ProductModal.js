import React from 'react';
import { motion } from 'framer-motion';

const ModalWrapper = ({ showModal, closeModal, children }) => {
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {showModal && (
                <motion.div
                    className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleModalClick}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg max-w-[700px] relative"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

const CloseButton = ({ closeModal }) => (
    <div className='w-full flex justify-end mb-5'>
        <button
            className="top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeModal}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ rotate: 90 }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
        </button>
    </div>
);

const ProductDetails = ({ product }) => (
    <div className='grid grid-cols-3 gap-4 '>
        <div className='relative'>
            {product.sale && <p className="text-sm rounded-r-full text-white bg-red-500 py-3 px-5 w-1/2 absolute bottom-20 uppercase font-bold left-0">Акция!</p>}
            <img src={product.image} className="w-full object-cover mb-2 rounded-lg" />
            <p className="text-sm uppercase font-bold absolute bottom-5 bg-black/80 py-3 px-5 rounded-r-full text-white ">Цена: {product.price} тг</p>
            
        </div>
        <div className='col-span-2'>
            <div className='border-b border-gray-300 my-5'>
                <h2 className="text-[14px] w-1/2 font-bold text-gray-900 my-4">{product.title}</h2>
            </div>

            
            <p className="text-sm mb-5 text-gray-600">{product.description}</p>

            <a
                href={product.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white rounded-md bg-green-700 mt-10 px-5 py-2"
            >
                Купить в WhatsApp
            </a>
        </div>
    </div>
);

const ProductModal = ({ product, showModal, closeModal }) => {
    return (
        <ModalWrapper showModal={showModal} closeModal={closeModal}>
            <CloseButton closeModal={closeModal} />
            <ProductDetails product={product} />
        </ModalWrapper>
    );
};

export default ProductModal;
