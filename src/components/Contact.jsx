

const Contact = () => {


    return (
        <div className="min-h-[400px]">
            <div className="container py-14" id="contact">
                <h1
                    data-aos="fade-up"
                    className="text-3xl lg:text-5xl  font-semibold text-center sm:text-4xl lg:mb-20 sm:mb-10"
                    style={{ marginBottom: "4.5rem" }}
                >
                    Contact <span className="text-primary animate-pulse group-hover:scale-105 duration-200">Me</span>
                </h1>
                <ul className="flex flex-col gap-3">
                    <li className="text-white text-3xl">
                        <span className="pr-2">Email</span>:
                        <span>adetoyedaniel2023@gmail.com</span>
                    </li>
                    <li className="text-white text-3xl">
                        <span className="pr-2">Whatsapp Number</span>: 
                        <span>08125021612</span>
                    </li>      
                </ul>
            </div>

        </div>
    )
}

export default Contact
