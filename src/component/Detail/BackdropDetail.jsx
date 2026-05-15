import { useState } from "react";
import { motion } from "motion/react";

const BackdropDetail = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesMovie = images.slice(0, 10)

    const changeSlide = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        changeSlide(
            currentIndex === imagesMovie.length - 1
                ? 0
                : currentIndex + 1
        );
    };

    const prevSlide = () => {
        changeSlide(
            currentIndex === 0
                ? imagesMovie.length - 1
                : currentIndex - 1
        );
    };
    if (!imagesMovie.length) {
        return (
            <section className="video py-4 px-4 md:px-14 bg-gray-900">
                <h2 className="text-white text-2xl font-bold">
                    Backdrop not available
                </h2>
            </section>
        );
    }

    return (
        <section className="video py-4 px-4 md:px-14 bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex flex-col mt-4 gap-4">
                <h2 className="text-white text-2xl font-bold">
                    Backdrops
                </h2>
                <div className="overflow-hidden w-full flex justify-center ">

                    <div
                        className="flex transition-transform duration-500 ease-in-out w-full"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}>
                        {imagesMovie.map((item, index) => (
                            <div
                                key={index}
                                className="w-full shrink-0 flex justify-center "
                            >
                                <div className=" w-full h-full">
                                    <img className=" w-full h-full rounded-xl"
                                        src={`${import.meta.env.VITE_API_IMAGE_BACKDROP}/${item.file_path}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={item?.name}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="indicator flex justify-center gap-2">
                    {imagesMovie.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => changeSlide(i)}
                            className={`h-2 rounded-full transition-all duration-300 ease-in-out
                                ${i === currentIndex ? "w-5 bg-white" : "w-2 bg-gray-500"}`}
                        />
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/20 text-[12px] 4xs:text-[16px] md:text-base h-6 4xs:h-8 md:h-10 w-6 4xs:w-8 md:w-10 flex items-center justify-center text-white rounded-full"
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/20 text-[12px] 4xs:text-[16px] md:text-base h-6 4xs:h-8 md:h-10 w-6 4xs:w-8 md:w-10 flex items-center justify-center text-white rounded-full"
                >
                    ›
                </button>

            </motion.div>
        </section>
    );
}
export default BackdropDetail;