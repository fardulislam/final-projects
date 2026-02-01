import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviewcard from "./Reviewcard";

const Review = ({ review }) => {
  console.log(review);
    if (!Array.isArray(review) || review.length === 0) {
    return <p className="text-center">Loading reviews...</p>;
  }
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl font-semibold ">Review</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          tenetur reprehenderit consectetur molestias temporibus? Quia
          reiciendis eum assumenda fugiat totam!
        </p>
      </div>
      <Swiper
      loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
          
          
        }}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        pagination={true}
        
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
       {
        review.map(rev=> <SwiperSlide key={rev.id}>
            <Reviewcard  rev={rev}></Reviewcard>
        </SwiperSlide>)
       }
      </Swiper>
    </div>
  );
};

export default Review;
