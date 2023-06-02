import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import  './Category.css'

const Category = () => {
  return (
<div>

 <p className="text-center mb-4 text-yellow-600">---From 11:00am to 10:00pm---</p>
 <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">ORDER ONLINE</h2>
 
<Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper text-center mb-24 "
      
    >
               
      <SwiperSlide>
               <img src={slider1} alt="" />
               
               <h3 className="text-4xl uppercase text-centertext-black -mt-16">Salad</h3>
               </SwiperSlide>
      <SwiperSlide><img src={slider2} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-16 text-black">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slider3} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-16 text-black">Soups</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slider4} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-16 text-black">Dessert</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slider5} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-16 text-black">Salads</h3>
      </SwiperSlide>
     
    </Swiper>
</div>
  );
};

export default Category;
