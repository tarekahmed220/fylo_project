import { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
function Footer() {
  const [links] = useState(["About", "Jobs", "Press", "Blog"]);
  const [contact] = useState(["Contact Us", "Terms", "Privacy"]);
  return (
    <section className="py-[250px] px-[30px] md:px-[100px] bg-[#0c1524] text-white max-w-full">
      <div className="  w-[360px] pb-[30px] max-w-full">
        <a href="">
          <img className=" w-[230px] " src="/images/logo.svg" alt="logo-img" />
        </a>
      </div>
      <div className="flex justify-between items-start gap-5 max-w-full flex-col md:flex-row">
        <div className="relative flex justify-center items-start gap-[30px] md:w-[600px] w-[100%] ">
          <div>
            <img
              className="w-[15px] absolute top-[6px] left-0"
              src="/images/icon-location.svg"
              alt="location-img"
            />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        {/* ========div one====== */}

        {/* div two */}
        {/* FIXME: */}
        <div className="flex justify-center items-start flex-col gap-5 md:w-[200px] w-[100%]">
          <div className="flex justify-start items-center  gap-5 md-w-[100%] w-[200px]">
            <div>
              <img
                className=" min-w-[20px]"
                src="/images/icon-phone.svg"
                alt="phone-img"
              />
            </div>
            <h2>+1-543-123-4567</h2>
          </div>
          <div className="flex justify-start items-center gap-5 md-w-[100%] w-[200px]">
            <div>
              <img
                className="w-[20px]"
                src="/images/icon-email.svg"
                alt="email-img"
              />
            </div>
            <h2>example@fylo.com</h2>
          </div>
        </div>
        {/* ==========div two======= */}
        {/* div three */}
        <div>
          <ul className="flex justify-start items-start flex-col gap-3 ">
            {links.map((link) => {
              return (
                <li key={link} className="cursor-pointer hover:text-[#56cfd9]">
                  {link}
                </li>
              );
            })}
            {/* <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li> */}
          </ul>
        </div>
        {/* ========div three====== */}
        {/* div four */}

        <div>
          <ul className="flex justify-start items-start flex-col gap-3 hover:text-[btnColor]">
            {contact.map((link) => {
              return (
                <li key={link} className="cursor-pointer hover:text-[#56cfd9]">
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        {/* ========div four====== */}
        {/* div five */}

        <div className="flex justify-center items-start gap-4  flex-row">
          <div className=" text-[15px] hover:text-btnColor border-[1px]  border-solid border-white p-[10px] rounded-[50%] hover:border-btnColor cursor-pointer ">
            <FaFacebookF />
          </div>
          <div className=" text-[15px] hover:text-btnColor border-[1px]  border-solid border-white p-[10px] rounded-[50%] hover:border-btnColor cursor-pointer ">
            <FaTwitter />
          </div>
          <div className=" text-[15px] hover:text-btnColor border-[1px]  border-solid border-white p-[10px] rounded-[50%] hover:border-btnColor cursor-pointer ">
            <FaInstagram />
          </div>
        </div>
        {/* ========div fivd====== */}
      </div>
    </section>
  );
}

export default Footer;
