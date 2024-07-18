import React from 'react';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleScrollToTop}>
      <img className='w-5' src="img/arrow-footer.svg" alt="" />
    </button>
  );
};

export default ScrollToTopButton;
