import { RiFilmFill } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { PiTelevisionBold } from "react-icons/pi";
import Play from "../../assets/playbutton.svg";
const MovieCarousel = ({ data, updateUI }) => {
  const { user, token } = useAuth();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => {
  //     prevIndex === 0 ? data.length - 1 : prevIndex - 1;
  //   });
  // };
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => {
  //     preveIndex === 0 ? data.length + 1 : prevIndex - 1;
  //   });
  // };

  // const isPrevDisabled = currentIndex === 0;
  // const isNextDisabled = currentIndex === data.length - 1;

  return (
    <div className="relative overflow-x-scroll w-full">
      <div className="flex justify-start items-center gap-8 transition-all duration-1000 ease-in-out md:gap-5">
        {data.slice(5, 15).map((movie) => {
          const { _id, title, year, rated, image, bookmarkedBy, type } = movie;
          const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
            <IoBookmark
              onClick={() => {
                updateUI("remove", _id, token, user?.id);
              }}
            />
          ) : (
            <IoBookmarkOutline
              onClick={() => {
                updateUI("add", _id, token, user?.id);
              }}
            />
          );
          return (
            <div key={_id} className="relative mt-6">
              <div className="w-[240px] h-[140px] overflow-hidden relative sm:w-[470px] sm:h-[230px]">
                <img
                  src={image}
                  className="w-full h-full object-cover rounded-lg filter brightness-[70%]"
                  alt="Movie"
                />

                <div
                  className="absolute inset-0  flex justify-center items-center bg-black/50 
                        rounded-lg opacity-0 hover:opacity-100 transition duration-300 "
                >
                  <button className="flex justify-center items-center gap-2 cursor-pointer bg-white/25 text-[18px] w-[117px] h-[48px] rounded-[28px] ">
                    <img src={Play} alt="" />
                    Play
                  </button>
                </div>
                <div className=" absolute z-10 top-[5px] right-[5px] text-white cursor-pointer rounded-full hover:bg-white/40 w-[50px] h-[50px]  flex items-center justify-center  ">
                  {bookmarkIcon}
                </div>
              </div>

              <div className="absolute bottom-5 left-6 flex flex-col justify-start items-start ">
                <div className="flex justify-start items-center gap-2 text-white text-[15px] font-normal md:gap-1 opacity-70  ">
                  <p className="m-0">{year}</p>
                  <p className="   ">
                    <GoDotFill />
                  </p>
                  <span className=" flex items-center justify-start gap-[3px] sm:gap-[5px] text-white">
                    {type === "movie" ? <RiFilmFill /> : <PiTelevisionBold />}
                    <p className="m-0 tvvvm text-[8px] sm:text-[12px] lg:text-[13px] font-normal">
                      {type === "movie" ? "Movies" : "Tv Series"}
                    </p>
                  </span>
                  <p className="   ">
                    <GoDotFill />
                  </p>
                  <p className="m-0">{rated}</p>
                </div>
                <p className="m-0 text-white md:text-[24px] font-normal ">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className="prev-button absolute top-1/2 -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white border-0 p-2.5 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className="next-button absolute top-1/2 -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white border-0 p-2.5 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button> */}
    </div>
  );
};

export default MovieCarousel;
