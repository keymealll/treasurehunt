import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "../Home/Home.css";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";

import Footer from '../../Components/Footer/Footer.js'
import Navbar from '../../Components/Navigation/navbar.js'
import Hero from '../../Components/Hero/Hero.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../../Components/Cards/ProductCard';
import NewsPromotionCard from '../../Components/Cards/NewsPromotionCard';

import Ipoh from '../../SVG/Ipoh.png';
import GoldElement from '../../SVG/GoldElement.png';
import HuntLogo from '../../SVG/HuntLogo.png';
import AppDemo from '../../SVG/AppDemo.png';
import One from '../../SVG/1.png';
import Two from '../../SVG/2.png';
import Three from '../../SVG/3.png';

SwiperCore.use([Navigation]);

export const Home = () => {
  return (
    <body className='homebody'>
      <Navbar />
      <section className='firstsection '>
        <div className='firstsectioncontainerone'>
          <h3 className='firstsectioncontaineroneHeader'>Malaysia First <br />Treasure Hunt Event</h3>
          <br />

          <h3 className='firstsectioncontainertwoHeader'>Existing Rewards Worth <br /></h3>
          <h3 className='firstsectioncontainerthreeHeader'>$123,456,789</h3>
          <img className='firstsectioncontainerfourImgOne' src={GoldElement} />
          <br />
          <img className='firstsectioncontainerfourImgTwo' src={HuntLogo} />
        </div>
        <div className='firstsectioncontainerfive'>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak1', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak2', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak3', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className='secondsection'>
        <div className='secondcontainerone'>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist?How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist?How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className='thirdsection'>
        <img className='thirdsection-AppDemo' src={AppDemo} />
        <div className='thirdsection-description'>
          <img className='thirdsection-HuntLogo' src={HuntLogo} />
          <h3 className='thirdsection-h'>Download it Now! <br /> Start Your Hunt!</h3>
          <p className='thirdsection-p'>Shopping spress are now so much easier, with the world's top brands at your fingertips. Simply click and go to discover the best finds in fashion, electronics, homeware, and more! </p>
          <button>Get it on Google Play</button>
          <button>Get it on App Store</button>
        </div>
      </section>
      <Footer />
    </body>
  );
};