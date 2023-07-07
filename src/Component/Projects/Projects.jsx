import { BiLinkExternal } from "react-icons/bi";
import Title from "../Shared/Title";

const Projects = () => {
    return (
        <section id="projects" className="lg:h-screen h-full mx-4 lg:max-w-[1300px] lg:mx-auto py-8">
            <Title titleName={'Projects'}></Title>
            {/* grid all projects */}
            <div className="flex lg:flex-row my-4 flex-col gap-6 lg:gap-x-14">
                {/* card  */}
                <div data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000" className="border-[#fe6601] border-2 relative  duration-500 rounded bg-[#1a1919] h-[550px] lg:mt-10 w-full lg:w-[400px]">
                    {/* project img  */}
                    <div className="bg-yellow-300 rounded-t  h-[250px] box w-full projectOne">
                        
                    </div>
                    {/* project description */}
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-[#fe6601]">Inkwell Academy</h3>
                        <h4>Inkwell Academy is a website for students who are interested in learning how to draw. It has similarities with a summer arts camp.</h4><br />
                        <h4><span className="font-bold text-[#fe6601]">Technologies :</span> React, React Router Dom,Tailwind Css, MongoDB, Firebase, Stripe, Freamer Motion, Data Aos</h4> <br />
                        <div className="flex absolute bottom-3 justify-around gap-2  lg:gap-9">
                            <a target="_blank" rel="noopener noreferrer" href="https://assignment-12-910f3.web.app/" data-tip='Live site' className="rounded-sm tooltip before:bg-[#fe6601] before:text-black before:font-bold px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 cursor-pointer" >Live
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer"  data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/Inkwell-academy-project-client">Client
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer" data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/Inkwell-academy-project-server">Server
                            <BiLinkExternal /> 
                            </a>
                        </div>
                    </div>
                </div>
                {/* card end */}
                {/* card  */}
                <div data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000" className="border-[#fe6601] relative  border-2 duration-500 rounded bg-[#1a1919] h-[550px] lg:mt-10 w-full lg:w-[400px]">
                    {/* project img  */}
                    <div className="bg-yellow-300 rounded-t  h-[250px] box w-full projectTwo">
                        
                    </div>
                    {/* project description */}
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-[#fe6601]">Toy Smash</h3>
                        <h4>Toy Smash is a website for Toys and Action figure&apos;s For those Every age.</h4><br />
                        <h4><span className="font-bold text-[#fe6601]">Technologies :</span> React, React Router Dom,Tailwind Css, MongoDB, Firebase, Data Aos,Swiper js</h4> <br />
                        <div className="flex absolute bottom-3 justify-around gap-2 lg:gap-9">
                            <a target="_blank" rel="noopener noreferrer" href="https://assignment-12-910f3.web.app/" data-tip='Live site' className="rounded-sm tooltip before:bg-[#fe6601] before:text-black before:font-bold px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 cursor-pointer" >live
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer"  data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/toy-smash-action-toy-store-client">Client
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer" data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/toy-smash-action-toy-store-server">Server
                            <BiLinkExternal /> 
                            </a>
                        </div>
                    </div>
                </div>
                {/* card end */}
                {/* card  */}
                <div data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000" className="border-[#fe6601] relative  border-2 duration-500 rounded bg-[#1a1919] h-[550px] lg:mt-10 w-full lg:w-[400px]">
                    {/* project img  */}
                    <div className="bg-yellow-300 rounded-t  h-[250px] box w-full projectThree">
                        
                    </div>
                    {/* project description */}
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-[#fe6601]">Kitchen Italia</h3>
                        <h4>Kitchen Italia is a culinary website for Italian food enthusiasts, offering a wide range of mouthwatering dishes to satiate your hunger.</h4><br />
                        <h4><span className="font-bold text-[#fe6601]">Technologies :</span> React, React Router Dom, Tailwind Css, MongoDB, Firebase</h4> <br />
                        <div className="flex absolute bottom-3 justify-around gap-2 lg:gap-9">
                            <a target="_blank" rel="noopener noreferrer" href="https://assignment-10-c7d66.web.app/" data-tip='Live site' className="rounded-sm tooltip before:bg-[#fe6601] before:text-black before:font-bold px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 cursor-pointer" >live
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer"  data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/Kitchen-italia-project-client">Client
                            <BiLinkExternal /> 
                            </a>
                            <a target="_blank" rel="noopener noreferrer" data-tip='Github' className="rounded-sm px-4 border-2 border-[#fe6601] text-[#fe6601] hover:bg-white hover:border-white duration-300 hover:text-black font-semibold lg:py-2 flex items-center gap-1 tooltip before:bg-[#fe6601] before:text-black before:font-bold cursor-pointer" href="https://github.com/mdasik0/Kitchen-italia-project-server">Server
                            <BiLinkExternal /> 
                            </a>
                        </div>
                    </div>
                </div>
                {/* card end */}
            </div>
        </section>
    );
};

export default Projects;