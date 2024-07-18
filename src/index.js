import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/footer';
import Home from './sections/home';
// import About from './sections/about';
import Banner from './components/banner';
import Map from './components/map';
import Service from './sections/service';
import Nav from './components/nav';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Nav />
    <Home />
    {/* <About /> */}
    <Service />
    <Banner className='bg-question bg-no-repeat bg-cover py-10'
      title='Остались вопросы?'
      desc='С вами свяжется наш замерщик и приедет в удобное время. Мы составим расчет в течение 24 часов и свяжемся с вами.' />
    <Map />
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
