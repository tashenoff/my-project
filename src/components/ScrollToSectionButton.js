import React from 'react';
import { Link } from 'react-scroll';

const ScrollToSectionButton = ({ targetId }) => {
    return (
        <Link to={targetId} smooth={true} duration={500} className="focus:outline-none">
            <img className="w-8 h-8 rounded-full bg-primary_light border border-white border-opacity-20 p-2" src="/img/arrow_btn.svg" alt="Scroll Button" />
        </Link>
    );
};

export default ScrollToSectionButton;