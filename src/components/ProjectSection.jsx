// import { Button } from "@mui/material"
import { Button } from "@mui/material"
import { ProjectCard } from "../constants/ProjectCard"
import { Link } from "react-router-dom"

const ProjectSection = () => {
    return (
        <div className="container py-14 sm:min-h-[600px] mt-10  relative" id="Portfolio">
            <div>
                <h1
                    data-aos="fade-up"
                    className="text-3xl lg:text-5xl font-semibold text-center lg:mb-20 sm:mb-10"
                    style={{ marginBottom: "4.5rem" }}
                >
                    MY FRONTEND <span className="text-primary animate-pulse group-hover:scale-105 duration-200">PROJECT</span>
                </h1>

                {/* card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 "
                    style={{ marginTop: "3rem" }}
                >
                    {ProjectCard.map(({ id, images, title, description, demoLink }) => {
                        return (
                            <>
                                <div
                                    key={id}
                                    data-aos="fade-up"
                                    data-aos-delay="aosDelay"
                                    className="text-center group space-y-3 mb-6 sm:space-y-6 p-4 sm:py-10 bg-dark  to-secondary hover:shadow-[0_0_40px_#fe9808] text-white hover:text-white cursor-pointer rounded-lg duration-300"
                                >
                                    <div className="grid place-items-center ">
                                        <img src={images} className="border" alt="" />
                                    </div>
                                    <h1 className="text-2xl">{title}</h1>
                                    <p className="pb-5">{description}</p>
                                    {/* <a
                                        href={demoLink}
                                        className=" mt-6 border px-7 rounded-full inline-block text-lg font-semibold py-2 
                                        text-primary group-hover:text-white  duration-300  cursor-pointer "
                                    >
                                        Show Demo
                                    </a> */}


                                    <a className="cursor-pointer" href={demoLink}>

                                        <Button variant="contained" color="success">

                                            Show Demo
                                        </Button>
                                    </a>
                                </div>
                            </>
                        )
                    })}

                    {/* <div className="absolute right-0 bottom-0 mt-10 px-10 py-2  lg:mr-[50px] border rounded-full bg-primary  text-main-color transition duration-300 hover:text-text-color hover:bg-transparent  ">
                        
                        
                    </div> */}

                    <Link to="AllProjectSection" className="absolute right-0 bottom-0  px-10 py-2 ">
                        <Button variant="contained" style={{ marginRight: '10px' }} color="success">
                            See All
                        </Button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default ProjectSection