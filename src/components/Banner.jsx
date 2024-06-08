import bannerImg from "../assets/banner/shop_banner.jpg"
import bannerImg01 from "../assets/banner/redpajabi.jpg"
import bannerImg02 from "../assets/banner/01.jpg"
import bannerImg03 from "../assets/banner/02.jpg"

const Banner = () => {
    return (
        <div className="hero w-full h-[100vh] lg:h-[70vh] relative overflow-hidden" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="w-full h-full grid grid-cols-5">
                <div className="col-span-2 flex justify-start items-start flex-col">
                    <div className="pl-12 pt-24 flex flex-col gap-5 z-10">
                        <h2 className="text-7xl lg:text-8xl font-bold uppercase text-white">only for <br></br>mens</h2>
                        <p className="text-4xl text-white w-[120%]">Where style meets sophistication for the modern man.</p>
                    </div>
                </div>
                <div className="w-full h-full col-end-7 col-span-4">
                    <div className="flex flex-col w-full h-full relative justify-center items-center">
                        <div className="avatar absolute top-24 left-[145px]">
                            <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={bannerImg01} />
                            </div>
                        </div>
                        <div className="avatar absolute right-[160px] bottom-[250px]">
                            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={bannerImg02} />
                            </div>
                        </div>
                        <div className="avatar absolute left-[230px] bottom-[125px]">
                            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={bannerImg03} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;