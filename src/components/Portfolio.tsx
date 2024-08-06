import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="py-20">
          <div className="text-center text-5xl font-bold pb-6">Portfolio</div>
          <div className="text-center text-xl pb-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse <br />
            et justo. Praesent mattis commodo augue.​
          </div>
          <div className="lg:flex justify-center lg:gap-5 space-y-5 lg:space-y-0">
            <div className="flex justify-center">
              <img src="/portfolio1-400x400.jpg" className="" alt="" />
            </div>
            <div className="flex justify-center">
              <img src="/portfolio2-400x400.jpg" alt="" />
            </div>
            <div className="flex justify-center">
              <img src="/portfolio3-400x400.jpg" alt="" />
            </div>
            <div className="flex justify-center">
              <img src="/portfolio4-1-400x400.jpg" alt="" />
            </div>
          </div>
          <div className="pt-10 flex justify-center">
            <Link href={"/"}>
              <Button className="font-roboto text-white backdrop-blur-lg bg-white/15 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#c305c3] px-6 py-6 font-semibold text-[1.10rem]">
                Explorer More <ArrowRight />
              </Button>
            </Link>
          </div>{" "}
        </div>

        {/* our costomer************************** */}

        <div className="text-center text-5xl font-bold pb-6 font-nunito">
          Our Customers
        </div>
        <div className="text-center text-xl pb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse{" "}
          <br />
          et justo. Praesent mattis commodo augue.​
        </div>

        <div className="bg-gradient-to-tr from-[#01011c] via-[#900090] to-[#680254] rounded-xl py-5 mt-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <img src="/compa1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa3.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa4.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/compa1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa3.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src="/conpa4.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* our costomer************************** */}
      </div>

      {/* amazing design*************************** */}

      <div className="container mx-auto px-6">
        <div className="bg-[url(/bg-6.jpg)] bg-no-repeat bg-cover text-center mt-20 rounded-2xl">
          <div className="backdrop-blur-sm bg-white/5 py-28 rounded-2xl">
            <div className="text-5xl font-bold pb-5 font-nunito">
              "Amazing Designs and Quality Work!"
            </div>
            <div className="">
              Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,{" "}
              tincidunt eget leo.
              <br /> Nullam quis vulputate orci, ac accumsan quam. Morbi
              fringilla congue libero, <br /> ac malesuada vulputate pharetra.
            </div>
            <div className="flex justify-center py-3">
              <img src="/avtar.jpg" className="rounded-full" alt="" />
            </div>
            <div className="">John Doe</div>
            <div className="font-nunito">CEO, ACME INC.</div>
          </div>
        </div>
      </div>
      {/* amazing design*************************** */}
    </>
  );
};

export default Portfolio;
