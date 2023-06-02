
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
          <p className="text-center mb-4 text-yellow-600">---What Our Clients Say---</p>
 <h2 className="text-center text-3xl mb-8 border-y-4 w-96 mx-auto p-2">TESTIMONIALS</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                              
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-7xl mb-5 mt-5"></FaQuoteLeft>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;