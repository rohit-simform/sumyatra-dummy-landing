"use client";
import React from "react";
import "./Platform.scss";
import { Images } from "../../../ThemeConfig/Images";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Platform({ handelNavigation }: any) {
  return (
    <section className="platformWrapper" id="partner">
      {/* <Image src={Images.dotsbg} alt="patentOne"  className="patentOne"/> */}
      <div className="container">
        <h2 className="title">
          Only Partner Success platform built to handle the complexities of
          partnerships.
        </h2>
        <Swiper
          //spaceBetween={24}
          //slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,                // Time between slide transitions
            disableOnInteraction: false, // Whether to disable autoplay after user interactions
            pauseOnMouseEnter: true,    // Pause autoplay on mouse enter
            stopOnLastSlide: false,     // Stop autoplay on the last slide
            reverseDirection: false     // Run autoplay in reverse direction
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // when window width is <= 640px, show 1 slide
            439: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is <= 768px, show 2 slides
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            // when window width is > 768px, show 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="tilescolorOne">
              <Image src={Images.platformOne} alt="featureOne" />
              <h2 className="title">
                Operationalize joint Go-To-Market strategy
              </h2>
              <p className="discription">
                Build joint partner plans, set and track goals, and stay on top
                of all partnership activities.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorTwo">
              <Image src={Images.platformTwo} alt="featureOne" />
              <h2 className="title">
                Collaborate with partners and teams in real-time
              </h2>
              <p className="discription">
                Communicate with partners and all stakeholders instantly. Don&apos;t
                wait for inbox catchup to resolve issues.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorThree">
              <Image src={Images.platformThree} alt="featureOne" />
              <h2 className="title">
                Assess partnership performance in real-time
              </h2>
              <p className="discription">
                Track, measure and visualize partnership progress on-demand.
                Create and manage partner scorecards and team KPIs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorFour">
              <Image src={Images.platformFour} alt="featureOne" />
              <h2 className="title">Achieve Co-Sell engagement</h2>
              <p className="discription">
                Manage opportunity referrals, pipeline and forecast. Build
                co-sell relationship with 100% transparency.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorFive">
              <Image src={Images.platformFive} alt="featureOne" />
              <h2 className="title">Improve partner investment decisions</h2>
              <p className="discription">
                Measure ROI of current investments; predict success of future
                investments.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorSix">
              <Image src={Images.platformSix} alt="featureOne" />
              <h2 className="title">
                Align critical business functions and stakeholders
              </h2>
              <p className="discription">
                Unlock barriers to success by engaging the right functional and
                disciplinary teams. Gain executive alignment.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorOne">
              <Image src={Images.platformSeven} alt="featureOne" />
              <h2 className="title">Improve Partner Program Engagement</h2>
              <p className="discription">
                Gain insights to build valuable programs and retain partner
                confidence.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorTwo">
              <Image src={Images.platformEight} alt="featureOne" />
              <h2 className="title">Integrate with Existing workflows.</h2>
              <p className="discription">
                Gain immediate productivity with easy-to-adopt integration with
                existing CRM systems.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tilescolorThree">
              <Image src={Images.platformNine} alt="featureOne" />
              <h2 className="title">Increase Customer Win Rate</h2>
              <p className="discription">
                Engage the right partner at the right time, always.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="platformBtn">
          <Button onClick={() => handelNavigation()}>Join Wait-List</Button>
        </div>
      </div>
    </section>
  );
}
