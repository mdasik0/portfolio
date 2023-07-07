import { BiLogoGmail } from "react-icons/bi";
import Title from "../Shared/Title";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";
import StartToastifyInstance from "toastify-js";
const Contact = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnvytcc",
        "template_l7pimwm",
        form.current,
        "-Ue2K8Gy7YigE31Qh"
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result.text){
            console.log('hello ')
            StartToastifyInstance({
              text: "Mail sent",
              className: "info",
              style: {
                background: "linear-gradient(to right, #fe6601, #ff6605)",
              }
            }).showToast();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };
  return (
    <section
      id="contact"
      className="lg:h-screen h-full mx-4 lg:max-w-[1300px] lg:mx-auto py-8"
    >
      <Title titleName={"Contact"}></Title>
      {/* contact info */}
      <div className="flex flex-col lg:mt-10 mt-5 lg:flex-row lg:gap-20 gap-6 items-center justify-center">
        {/* diract action */}
        <div className="flex lg:w-[max-content] w-full flex-col lg:gap-6 gap-3">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="border-2 bg-[#1b1b1b] hover:bg-transparent duration-300 w-full px-8 py-6 "
          >
            <div className="mb-3 text-xl">
              <BiLogoGmail />
            </div>
            <h3 className="mb-1 text-xl">Email</h3>
            <h3 className="text-sm text-slate-400 mb-2">
              asikthe1st@gmail.com
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline duration-300 text-blue-500 cursor-pointer"
              href="mailto:asikthe1st@gmail.com"
            >
              Send a Message
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="border-2 bg-[#1b1b1b] hover:bg-transparent duration-300 w-full px-10 py-6 "
          >
            <div className="mb-3 text-xl">
              <BsMessenger />
            </div>
            <h3 className="mb-1 text-xl">Messanger</h3>
            <h3 className="text-sm text-slate-400 mb-2">Atisuto Asik</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline duration-300 text-blue-500 cursor-pointer"
              href="https://m.me/itsasikhan"
            >
              Send a Message
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="border-2 bg-[#1b1b1b] hover:bg-transparent duration-300 w-full px-10 py-6 "
          >
            <div className="mb-3 text-xl">
              <BsWhatsapp />
            </div>
            <h3 className="mb-1 text-xl">Whatsapp</h3>
            <h3 className="text-sm text-slate-400 mb-2">+8801640499035</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline duration-300 text-blue-500 cursor-pointer"
              href="https://api.whatsapp.com/send?phone=+8801640499035"
            >
              Send a Message
            </a>
          </div>
        </div>
        {/* send email from portfolio  */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full lg:w-[500px] gap-[1.2rem]"
        >
          <div className="border-l-4 pl-3 lg:mb-10 mb-3 border-[#fe6601]">
            <p className="text-slate-500 mb-2">Get in touch & send me an</p>
            <h3 className="text-3xl font-bold">Email</h3>
          </div>

          <input
            ref={name}
            required
            type="text"
            placeholder="Your FullName here"
            name="name"
            className="h-9 focus:border-separate w-full
                    border-none bg-slate-700 rounded-sm px-4 "
          />

          <input
            ref={email}
            required
            type="email"
            placeholder="Your Email here"
            name="email"
            className="h-9 focus:border-separate w-full
                    border-none bg-slate-800 rounded-sm px-4 "
          />

          <textarea
            ref={message}
            required
            placeholder="Write your message"
            className="px-4 pt-4 w-full bg-slate-700"
            name="message"
            id=""
            rows="6"
          ></textarea>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
