import Carousel from "react-multi-carousel";

 
const PremiumMango = () => {
    return (
        <div className="container mx-auto">
            <h1 className="border-b-4 border-indigo-500 my-5">Premium QUality Mango</h1>
            <Carousel
        additionalTransfrom={0}
        arrows 
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
        showDots={false}
      >
      {
        [1,2,3,4,5].map((item,index)=>  <div className="p-5 border-2 mx-2" key={index}>
        <div className="relative hover:overflow-hidden">
          <img
            src="/am.jpg"
            className="w-full h-48 hover:scale-125 transition-transform transition-500"
          />
          <span className="rounded-full absolute top-1 left-1 bg-red-700 text-white border-2 py-7 p-2">
            sold out
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1>name {item}</h1>
          <p className="text-green-400 mt-3">prrice 12000-20000</p>
          <button className="my-3 bg-green-700 text-white border-2 rounded-md uppercase px-3 py-2">Select Item</button>
        </div>
      </div>)
      }
      </Carousel>
        </div>
    );
};

export default PremiumMango;