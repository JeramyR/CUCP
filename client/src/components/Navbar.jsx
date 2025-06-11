import { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const handleClick = () => setClick(!click);

  const content = (
    <>
      {/* Mobile View Navigation */}
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#861C1C] transition ">
        <ul className="text-center text-xl p-20">
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              setClick(false);
            }}
          >
            <li className="my-4 py-4 border-b border-[#2B2B2B] hover:bg-[#FDF1DC] hover:rounded cursor-pointer">
              Home
            </li>
          </Link>
          <Link
            to="/about-us"
            onClick={() => {
              scrollToTop();
              setClick(false);
            }}
          >
            <li className="my-4 py-4 border-b border-[#2B2B2B] hover:bg-[#FDF1DC] hover:rounded cursor-pointer">
              About Us
            </li>
          </Link>
          <Link
            to="/services"
            onClick={() => {
              scrollToTop();
              setClick(false);
            }}
          >
            <li className="my-4 py-4 border-b border-[#2B2B2B] hover:bg-[#FDF1DC] hover:rounded cursor-pointer">
              Services
            </li>
          </Link>
          <Link
            to="/get-involved"
            onClick={() => {
              scrollToTop();
              setClick(false);
            }}
          >
            <li className="my-4 py-4 border-b border-[#2B2B2B] hover:bg-[#FDF1DC] hover:rounded cursor-pointer">
              Get Involved
            </li>
          </Link>
          <Link
            to="/news"
            onClick={() => {
              scrollToTop();
              setClick(false);
            }}
          >
            <li className="my-4 py-4 border-b border-[#2B2B2B] hover:bg-[#FDF1DC] hover:rounded cursor-pointer">
              News
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {/* Full Size Navigation */}
      <nav className="archivo-black-regular">
        <div className="h-10vh flex justify-between z-50 text-[#2B2B2B] lg:py-5 px-20 py-4 bg-[#861C1C]">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">
              <img
                className="h-10"
                src={new URL("../assets/large-logo.png", import.meta.url).href}
              />
            </span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="/">
                  <li
                    className={` ${
                      location.pathname === "/"
                        ? "text-[#FDF1DC] border-[#FDF1DC]"
                        : ""
                    } 
              hover:text-[#FDF1DC] transition border-b-2 border-[#2B2B2B] hover:border-[#FDF1DC] cursor-pointer`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about-us">
                  <li
                    className={` ${
                      location.pathname === "/about-us"
                        ? "text-[#FDF1DC] border-[#FDF1DC]"
                        : ""
                    } 
              hover:text-[#FDF1DC] transition border-b-2 border-[#2B2B2B] hover:border-[#FDF1DC] cursor-pointer`}
                  >
                    About Us
                  </li>
                </Link>
                <Link to="/services">
                  <li
                    className={` ${
                      location.pathname === "/services"
                        ? "text-[#FDF1DC] border-[#FDF1DC]"
                        : ""
                    } 
              hover:text-[#FDF1DC] transition border-b-2 border-[#2B2B2B] hover:border-[#FDF1DC] cursor-pointer`}
                  >
                    Services
                  </li>
                </Link>
                <Link to="/get-involved">
                  <li
                    className={` ${
                      location.pathname === "/get-involved"
                        ? "text-[#FDF1DC] border-[#FDF1DC]"
                        : ""
                    } 
              hover:text-[#FDF1DC] transition border-b-2 border-[#2B2B2B] hover:border-[#FDF1DC] cursor-pointer`}
                  >
                    Get Involved
                  </li>
                </Link>
                <Link to="/news">
                  <li
                    className={` ${
                      location.pathname === "/news"
                        ? "text-[#FDF1DC] border-[#FDF1DC]"
                        : ""
                    } 
              hover:text-[#FDF1DC] transition border-b-2 border-[#2B2B2B] hover:border-[#FDF1DC] cursor-pointer`}
                  >
                    News
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>
          <button
            className="block sm:hidden transition cursor-pointer"
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
