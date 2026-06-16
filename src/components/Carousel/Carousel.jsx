import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
{
        title: "Devoted to Justice",
        description:
        "Do the right things the right way.",
        image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
    },
{
        title: "Led by the Truth",
        description:
        "Find the support you need.",
        image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
},
    {
        title: "Inspired by Rights",
        description:
        "Everyone deserves equal rights.",
        image:
        "./images/slide-3.jpg"
    }
];

export default function HeroSlider() {
  return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
            <div
                className="h-screen bg-cover bg-center relative"
                style={{
                backgroundImage: `url(${slide.image})`,
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-20">
                <div className="text-white max-w-xl">
                    <h1 className="text-6xl font-bold mb-6">
                    {slide.title}
                    </h1>

                    <p className="mb-6 text-lg">
                    {slide.description}
                    </p>

                    <button className="bg-white text-black px-6 py-3 rounded">
                    Contact Us
                    </button>
                </div>
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
    }