import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";

const testimonials = [
  {
    text: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque.",
    author: "Jason Munoz",
  },
  {
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    author: "Daniel George",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna.",
    author: "Jessica Thompson",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="overlay"></div>

      <div className="testimonial-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-content">
                <h2>Reviews from clients</h2>

                <div className="separator"></div>

                <p>{item.text}</p>

                <h4>{item.author}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;