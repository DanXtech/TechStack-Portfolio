import { Button } from "@mui/material"

import { ShowAllProject } from "../constants/ShowAllProject"

const ListProjectShow = () => {
    return (
        <div className="container py-14 mt-5">
            <div>
                <h1
                    data-aos="fade-up"
                    className="text-3xl font-semibold text-center sm:text-4xl lg:mb-20 sm:mb-10"
                    style={{ marginBottom: "2.5rem" }}
                >
                    MY FRONTEND <span className="text-primary animate-pulse group-hover:scale-105 duration-200">PROJECT</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {ShowAllProject.map(({ id, images, title, description, demoLink }) => {
                        return (
                            <div
                                key={id}
                                className="text-center group space-y-3 mb-6 sm:space-y-6 p-4 sm:py-10 bg-dark  to-secondary hover:shadow-[0_0_40px_#fe9808] text-white hover:text-white cursor-pointer rounded-lg duration-300">
                                <div className="grid place-items-center ">
                                    <img src={images} className="border" alt="" />
                                </div>
                                <h1 className="text-2xl">{title}</h1>
                                <p className="pb-5">{description}</p>


                                <a className="cursor-pointer" href={demoLink}>

                                    <Button variant="contained" color="success">

                                        Show Demo
                                    </Button>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListProjectShow