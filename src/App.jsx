import React from 'react';
import './App.css'
import AllBooks from './components/AllBooks/AllBooks';
import AppStore from './components/AppStore/AppStore';
import Banner from './components/Banner/Banner';
import BestBook from './components/BestBook/BestBook';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from './components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  }, []);
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <BestBook handleOrderPopup={handleOrderPopup} />
        <Banner />
        <AppStore />
        <AllBooks />
        <Testimonial />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      </div>
    </div>
  );
};

export default App;