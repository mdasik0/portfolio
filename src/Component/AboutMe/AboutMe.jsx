import Title from "../Shared/Title";
import MyImg from "../../assets/portfolio-about.svg"

const AboutMe = () => {
    return (
        <section id="about" className="lg:h-screen h-full mx-4 lg:max-w-[1300px] lg:mx-auto pt-8 ">
            <Title titleName='About Me'></Title>

            <div className="lg:py-20 py-3 flex lg:flex-row flex-col items-start lg:gap-20 gap-3 justify-center">
                <div data-aos="zoom-in" data-aos-duration="700" className="lg:w-[220px] w-full lg:h-[400px] h-[300px] object-cover">
                    <img src={MyImg} alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-1/2 w-full overflow-hidden lg:text-[16px] text-sm ">
                    <div data-aos="fade-right" data-aos-duration="1000" className="border-l-4 pl-3 lg:mb-10 mb-3 border-[#fe6601]">
                    <p className="text-slate-500">Want to Know More?</p>
                    <h3 className="text-3xl font-bold">About me</h3></div> 
                    <p data-aos="fade-right" data-aos-duration="1000">
                    Hi, I am Md Asik. I am a junior front-end developer. I love solving different problems and bringing designs to reality. I am passionate about my work and have been working as a developer for 6 months, gaining valuable personal experience in this field. I completed a course on this topic and now I am constantly working hard to expand my knowledge. I would love to gain more professional experience in this field.
                    </p>
                    <br />
                    <p data-aos="fade-right" data-aos-duration="1000">
                        <span className="font-semibold">Residence</span> : I am currently living in bangladesh.
                    </p><br />
                    <p data-aos="fade-right" data-aos-duration="1000">
                        <span className="font-semibold">Experience</span> : I have 8 month+ personal Experience.  
                    </p><br />
                    <p data-aos="fade-right" data-aos-duration="1000">
                        <span className="font-semibold">Achievements</span> : Recently I completed a Programming Hero course and got a Certificate.  
                    </p><br />
                    <p data-aos="fade-right" data-aos-duration="1000">
                        <span className="font-semibold">Hobby</span> : I love to maintain my time. I also enjoy solving coding problems. Beside this, i like learn about new facts and techknowlodgies. I also have a little hobby of Drawing things i see.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;