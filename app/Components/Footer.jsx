import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/sarayoutest", title:"githup", icon: <FaGithub className="text-gray-400" /> },
    { href: "https://www.linkedin.com/in/sara-yo-b9295b25b", title:"linked in", icon: <FaLinkedinIn className="text-blue-400" /> },
    { href: "https://wa.me/963931852209", title:"whats app", icon: <IoLogoWhatsapp className="text-green-400" /> },
  ];

  return (
    <>
    <footer className="px-[5%] w-full lg:px-[10%] flex flex-col sm:flex-row justify-between py-[4%] sm:py-[1%] bg-gray-100 dark:bg-black text-left">
      <small className="dark:text-[#FFFFFF]/40 text-[#999999] flex items-center">
        <Image src="/logome6-removebg-preview.webp" alt="Logo" width={30} height={30} priority={true} />
        &copy;2025 {" "}
         <span className="text-black dark:text-white text-base font-bold">
          Sara Youssef <span className="dark:text-[#FFFFFF]/40 text-[#999999]">. Front-End Developer</span>
        </span>
      </small>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 mt-2 sm:mt-0">
        <small className="text-black dark:text-white text-base font-bold">
          <span className="dark:text-[#FFFFFF]/40 text-[#999999] font-normal">Designed & Developed by </span>
          Sara Youssef
        </small>
        <div className=" flex sm:hidden lg:flex gap-4 text-2xl sm:mt-0 mt-3 sm:mx-0 mx-auto">
          {socialLinks.map((item, index) => (
            <a
              aria-label={item.title}
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-150 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
    <div className=" sm:flex bg-gray-100 dark:bg-black justify-center text-left hidden lg:hidden gap-4 text-2xl pt-1 pb-3 mx-auto">
          {socialLinks.map((item, index) => (
            <a
              aria-label={item.title}
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-150 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
    </>
  );
};

export default Footer;
