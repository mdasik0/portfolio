import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-28">
            <div  data-aos="fade-up" value='Submit' data-aos-delay="200" data-aos-duration="1000" className=" flex items-center justify-center pb-3 gap-[0.8rem]">
          <a target="_blank" rel="noopener noreferrer"  className="hover:text-[#fe6601] hover:scale-125 duration-500" href="https://www.linkedin.com/in/mohammad-asik-56a9a3272/">
            {" "}
            <BsLinkedin />{" "}
          </a>
          <a target="_blank" rel="noopener noreferrer"  className="hover:text-[#fe6601] hover:scale-125 duration-500" href="https://github.com/mdasik0">
            {" "}
            <FaGithub />{" "}
          </a>
          <a target="_blank" rel="noopener noreferrer"  className="hover:text-[#fe6601] hover:scale-125 duration-500" href="https://www.facebook.com/itsasikhan/">
            {" "}
            <FaFacebookSquare />{" "}
          </a>
        </div>
            <h2  data-aos="fade-up" value='Submit' data-aos-delay="200" data-aos-duration="1000" className="text-center">Copyright © 2023 - All right reserved </h2>
        </div>
    );
};

export default Footer;