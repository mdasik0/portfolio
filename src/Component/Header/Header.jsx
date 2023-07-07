import { FaArrowRight, FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import MyImage from "../../assets/portfolio-header.svg";
import MyResume from "/md_asik_resume.pdf";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { MdSettingsSuggest } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiFolderUserLine } from "react-icons/ri";
import { useEffect } from "react";

// TODO:Add socials link

const Header = () => {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let NavLinks = document.querySelectorAll("nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          NavLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
    };
  }, []);
  return (
    <header>
      <section
        id="home"
        className="flex h-[90vh] mb-20 relative lg:max-w-[1300px] mx-auto lg:flex-row flex-col items-center lg:justify-between justify-start "
      >
        <div className="header_info_container lg:my-0 my-10 mx-5 spaceing text-left lg:order-1 order-2">
          <h4 className="text-2xl font-semibold flex items-baseline gap-3 text-slate-400 mb-3">
            Hi, I am <div className="h-[2px] w-24 bg-white"></div>
          </h4>
          <h1 className="text-6xl font-bold mb-3">
            Md <span className="text-[#fe6601]">Asik</span>
          </h1>
          <h3 className=" mb-2 lg:text-xl text-slate-400 text-xl gap-2 flex items-center">
            <FaLaptopCode />
            junior Front-end Devloper
          </h3>
          <p className="text-sm text-slate-400 lg:w-1/2 w-full">
            Hi, I&apos;m a Junior Front-end Devloper, I am passionate about creating visually appealing and user-friendly websites, constantly honing my skills for professional growth.
          </p>
          <div className=" flex gap-3">
            <a href={MyResume} download>
              <button className="px-4 mt-6 py-1 border-2 border-[#fe6601] uppercase flex items-center gap-2 resume">
                {" "}
                <FiDownload /> Resume
              </button>
            </a>
            <a href='#contact'>
              <button className="px-4 mt-6 py-1 border-2 border-[#fe6601] uppercase flex items-center gap-2 resume">
                Let&apos;s Talk
              </button>
            </a>
          </div>
        </div>
        <div className="header_img_container lg:order-2 order-1">
          <img
            className="lg:h-[500px] h-[300px] w-[300px] lg:w-[500px] object-contain"
            src={MyImage}
            alt=""
          />
        </div>
        <div className=" flex-col lg:flex hidden items-center gap-[0.8rem] absolute left-0 -bottom-8">
          <a className="hover:text-[#fe6601] duration-500" href="">
            {" "}
            <BsLinkedin />{" "}
          </a>
          <a className="hover:text-[#fe6601] duration-500" href="">
            {" "}
            <FaGithub />{" "}
          </a>
          <a className="hover:text-[#fe6601] duration-500" href="">
            {" "}
            <FaFacebookSquare />{" "}
          </a>
          <div className="bg-white w-[1px] h-16"></div>
        </div>
        <div className=" flex-col lg:flex hidden items-center gap-[0.8rem] absolute right-0 -bottom-6">
          <a
            className="hover:text-[#fe6601] text-sm mb-10 duration-500 flex items-center gap-3 rotate-90"
            href="#contact"
          >
            {" "}
            Scroll down <FaArrowRight />
          </a>
        </div>
      </section>

      {/* navbar section */}

      <div className="fixed lg:bottom-10 bottom-5 z-50 w-full ">


        <nav className="w-fit flex mx-auto rounded-full lg:py-[0.6rem] py-[0.5rem] lg:px-[0.7rem] px-[0.7rem] backdrop-blur-sm navigation lg:gap-10 gap-4 items-center justify-center">



          <a data-tip='home' href="#home" className="hover:text-orange-400 hover:bg-[rgba(0,0,0,0.4)] duration-500 tooltip before:-translate-y-3 before:-translate-x-7 before:bg-orange-500 before:text-white before:duration-500  active p-[0.7rem] lg:p-[0.9rem] rounded-full">
            {" "}
            <AiOutlineHome />{" "}
          </a>
          <a data-tip='about' href="#about" className="hover:text-orange-400 hover:bg-[rgba(0,0,0,0.4)] duration-500 before:-translate-y-3 before:-translate-x-7 before:bg-orange-500 before:text-white tooltip  p-[0.7rem] lg:p-[0.9rem] rounded-full">
            {" "}
            <AiOutlineUser></AiOutlineUser>
          </a>
          <a data-tip='skills' href="#skills" className="hover:text-orange-400 hover:bg-[rgba(0,0,0,0.4)] duration-500 before:-translate-y-3 before:-translate-x-7 before:bg-orange-500 before:text-white tooltip  p-[0.7rem] lg:p-[0.9rem] rounded-full">
            <MdSettingsSuggest />
          </a>
          <a data-tip='projects' href="#projects" className="hover:text-orange-400 hover:bg-[rgba(0,0,0,0.4)] duration-500 before:-translate-y-3 before:-translate-x-7 before:bg-orange-500 before:text-white tooltip p-[0.7rem] lg:p-[0.9rem] rounded-full">
            <RiFolderUserLine />
          </a>
          <a data-tip='contact' href="#contact" className="hover:text-orange-400 hover:bg-[rgba(0,0,0,0.4)] duration-500 before:-translate-y-3 before:-translate-x-7 before:bg-orange-500 before:text-white tooltip p-[0.7rem] lg:p-[0.9rem] rounded-full">
            <BiMessageSquareDetail />
          </a>

        </nav>

      </div>
    </header>
  );
};

export default Header;
