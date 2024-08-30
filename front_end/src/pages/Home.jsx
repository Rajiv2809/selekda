import React from 'react';
import '../assets/home.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Galery from '../components/Galery'
import About from '../components/About'
import Service from '../components/Service'
import Portofolio from '../components/Portofolio'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import { useStateContext } from '../contexts/Context';
export default function Home() {
  
  
  return (
    <>
      <Nav/>
      <Banner/>
      <Galery/>
      <About/>
      <Service/>
      <Portofolio/>
      <section class="search">
        <input type="text"/>
        <button>SEARCH</button>
      </section>
      <Testimonial/>
      <Footer/>
    </>
  );
}
