import { useEffect, useRef, useState } from "react";

function Header() {
  const [links, setLinkd] = useState(["Features", "Team", "Signin"]);
  let headerRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "#1b212f";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  return (
    <header
      className=" fixed top-0 left-0 pt-[60px] w-full transition-all duration-[0.3s]"
      ref={headerRef}
    >
      <div className="flex justify-between items-center container px-[30px]  flex-col sm:flex-row  mx-auto">
        <a href="/">
          <div className="mb-[15px] sm:mb-0">
            <img src="/images/logo.svg" alt="logo" />
          </div>
        </a>
        <ul className="flex gap-[30px] ">
          {links.map((link) => {
            console.log(link.toLowerCase());
            return (
              <li
                key={link}
                className="text-[#a3aab4] opacity-[0.9] hover:opacity-[1] hover:underline hover:text-white transition-all duration-[0.2s]"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
