import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import ProfileHero from "../assets/profile-view.png"
import { NotebookIcon } from "lucide-react";

import { useTypewriter } from "react-simple-typewriter"
const Hero = () => {

    const [typewriter] = useTypewriter({
        words: ['Frontend Developer', 'Graphics Designer', 'UI/UX Designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    return (
        <div className="py-14 dark:bg-black duration-300" id="/">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-[30px] place-items-center " >
                    <div className="space-y-5 sm:p-7 pb-6">
                        {/* <span className="mb-5 border">My Portfilo</span> */}
                        <h1
                            data-aos="fade-up"
                            className="text-3xl lg:text-5xl font-bold">Hi, It`s <span className="text-main-color">Daniel Kehinde</span></h1>
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="leading-8 tracking-wide text-2xl lg:text-3xl ">
                            I`m a
                            <span style={{ fontWeight: 'bold', color: 'green', marginLeft: '5px' }}>{typewriter}</span>

                        </h2>

                        <div className="flex space-x-6 mt-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <a href="#" className="flex items-center justify-center w-12 h-12 bg-primary  border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer  hover:bg-main-color transform hover:scale-125">
                                <WhatsApp />
                            </a>
                            <a href="#" className="flex items-center justify-center w-12 h-12 bg-primary border-2 border-main-color rounded-full  lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                                <LinkedIn />
                            </a>
                            <a href="#" className="flex items-center justify-center w-12 h-12 bg-primary border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                                <GitHub />
                            </a>
                            <a href="#" className="flex items-center justify-center w-12 h-12 bg-primary border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                                <Instagram />
                            </a>
                        </div>

                        <div className="flex space-x-3">
                            <a href="#contact"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className=" button-outline border py-1 px-4 rounded-2xl text-main-color transition duration-300 
                                hover:text-text-color hover:bg-white hover:text-black">Hire</a>
                            <a href="/"

                                data-aos="fade-up"
                                data-aos-delay="700"
                                className=" button-outline border py-1 px-4  rounded-2xl bg-primary  
                                text-main-color transition duration-300 hover:text-text-color hover:bg-transparent flex items-center gap-2">
                                DownLoad CV
                                <NotebookIcon className="w-[20px] h-[20px]" />
                            </a>
                        </div>

                    </div>
                    <div>
                        <img
                            data-aos="fade-up"
                            data-aos-offset="0"
                            className="border element p-10 rounded-full"
                            // className="animate-pulse group-hover:scale-105 duration-200"
                            width={350}
                            height={350}
                            src={ProfileHero} alt="" />
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Hero;
