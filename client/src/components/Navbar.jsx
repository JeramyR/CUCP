// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router";

// const menuVariants = {
//   hidden: { x: "100%", opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//       staggerChildren: 0.1,
//     },
//   },
//   exit: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation(); // Get current location from router
//   const currentPath = location.pathname; // Use actual pathname instead of state

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleNavigation = (path) => {
//     // Remove setCurrentPath since we're using location.pathname
//     scrollToTop();
//     setIsOpen(false);
//   };

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/about-us", label: "About Us" },
//     { to: "/services", label: "Programs + Services" },
//     { to: "/get-involved", label: "Get Involved" },
//     { to: "/news", label: "News" },
//   ];

//   // Updated to match the actual navbar height
//   const NAVBAR_HEIGHT = 105;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="archivo-black-regular relative z-50">
//       {/* Top Nav */}
//       <nav
//         className={`fixed top-0 left-0 right-0 text-white px-6 md:px-12 py-4 h-[105px] transition-all duration-300 bg-[#2B2B2B]`}
//       >
//         {/* Desktop Layout: Book Button | Logo | Nav Links */}
//         <div className="hidden lg:flex items-center justify-between w-full">
//           {/* Left: Book Appointment Button */}
//           <div className="flex-1">
//             <div className="hover:scale-105 transition-transform duration-300">
//               <button
//                 onClick={() => handleNavigation("/book-appointment")}
//                 className="relative bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 cursor-pointer"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>

//           {/* Center: Logo */}
//           <div className="flex-1 flex justify-center">
//             <div
//               className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
//               onClick={() => handleNavigation("/")}
//             >
//               <Link to="/">
//                 <img
//                   className="h-18 w-auto rounded-lg "
//                   src={
//                     new URL("../assets/large-logo.png", import.meta.url).href
//                   }
//                   alt="Cuttin Up Community Project Logo"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Right: Nav Links */}
//           <div className="flex-1 flex justify-end">
//             <ul className="flex space-x-8 text-[16px] font-medium">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="relative group list-none cursor-pointer"
//                 >
//                   <button
//                     onClick={() => handleNavigation(link.to)}
//                     className={`
//                       inline-block transition-all duration-300 hover:text-orange-400 hover:-translate-y-1 focus:outline-none cursor-pointer
//                       ${
//                         currentPath === link.to
//                           ? "text-orange-400"
//                           : "text-white"
//                       }
//                     `}
//                   >
//                     {link.label}
//                   </button>

//                   {/* Animated underline */}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300 ${
//                       currentPath === link.to
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Layout: Logo Left | Menu Button Right */}
//         <div className="flex lg:hidden justify-between items-center w-full">
//           {/* Logo */}
//           <div
//             className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             onClick={() => handleNavigation("/")}
//           >
//             <Link to="/">
//               <img
//                 className="h-19 w-auto rounded-lg"
//                 src={new URL("../assets/large-logo.png", import.meta.url).href}
//                 alt="Cuttin Up Community Project Logo"
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="flex flex-col justify-center items-center w-8 h-8 relative z-50 cursor-pointer focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span
//               className={`block w-8 h-0.5 bg-white rounded absolute transform transition-all duration-300 ${
//                 isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
//               }`}
//             />
//             <span
//               className={`block w-8 h-0.5 bg-white rounded absolute transition-all duration-300 ${
//                 isOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`block w-8 h-0.5 bg-white rounded absolute transform transition-all duration-300 ${
//                 isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
//               }`}
//             />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 z-40 transition-opacity duration-300"
//             onClick={() => setIsOpen(false)}
//           />

//           {/* Drawer */}
//           <div
//             className={`fixed left-0 right-0 h-full bg-gradient-to-b from-[#2B2B2B] from-5% via-[#861C1C] via-80% via-[#A52A2A] via-15% to-[#FDF1DC]  z-50 text-white shadow-2xl transform transition-transform duration-300 ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//             style={{ top: `${NAVBAR_HEIGHT}px` }}
//           >
//             <div className="flex flex-col items-center mt-12 space-y-8">
//               {/* Mobile Navigation Links */}
//               <ul className="flex flex-col items-center text-xl space-y-6">
//                 {navLinks.map((link) => (
//                   <Link key={link.to} to={link.to} className="cursor-pointer">
//                     <button
//                       onClick={() => handleNavigation(link.to)}
//                       className={`
//                         relative px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 focus:outline-none
//                         ${
//                           currentPath === link.to
//                             ? "text-orange-400 bg-white/10"
//                             : "text-white hover:text-orange-400"
//                         }
//                       `}
//                     >
//                       {link.label}
//                     </button>
//                   </Link>
//                 ))}
//               </ul>

//               {/* Mobile Book Appointment Button */}
//               <div className="mt-8">
//                 <button
//                   onClick={() => handleNavigation("/book-appointment")}
//                   className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
//                 >
//                   📅 Book Your Appointment
//                 </button>
//               </div>

//               {/* Mobile Contact Info */}
//               <div className="mt-8 text-center text-gray-300">
//                 <p className="text-sm">Ready for a fresh start?</p>
//                 <p className="text-xs mt-1">Call us: (555) 123-4567</p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Spacer to prevent content from hiding behind fixed navbar */}
//       <div className="h-[105px]"></div>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
    },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current location from router
  const currentPath = location.pathname; // Use actual pathname instead of state

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    // Remove setCurrentPath since we're using location.pathname
    scrollToTop();
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Programs + Services" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/news", label: "News" },
  ];

  // Updated to match the actual navbar height
  const NAVBAR_HEIGHT = 105;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="archivo-black-regular relative z-50">
      {/* Top Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 text-white px-6 md:px-12 py-4 h-[105px] transition-all duration-300 bg-[#2B2B2B] z-50`}
      >
        {/* Desktop Layout: Book Button | Logo | Nav Links */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left: Book Appointment Button */}
          <div className="flex-1">
            <div className="hover:scale-105 transition-transform duration-300">
              <a
                href="https://cuttinupphx.setmore.com"
                className="relative bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 cursor-pointer"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <div
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigation("/")}
            >
              <Link to="/">
                <img
                  className="h-18 w-auto rounded-lg "
                  src={
                    new URL("../assets/large-logo.png", import.meta.url).href
                  }
                  alt="Cuttin Up Community Project Logo"
                />
              </Link>
            </div>
          </div>

          {/* Right: Nav Links */}
          <div className="flex-1 flex justify-end">
            <ul className="flex space-x-8 text-[16px] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group list-none cursor-pointer"
                >
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className={`
                      inline-block transition-all duration-300 hover:text-orange-400 hover:-translate-y-1 focus:outline-none cursor-pointer
                      ${
                        currentPath === link.to
                          ? "text-orange-400"
                          : "text-white"
                      }
                    `}
                  >
                    {link.label}
                  </button>

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300 ${
                      currentPath === link.to
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout: Logo Left | Menu Button Right */}
        <div className="flex lg:hidden justify-between items-center w-full">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleNavigation("/")}
          >
            <Link to="/">
              <img
                className="h-19 w-auto rounded-lg"
                src={new URL("../assets/large-logo.png", import.meta.url).href}
                alt="Cuttin Up Community Project Logo"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 relative z-50 cursor-pointer focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-8 h-0.5 bg-white rounded absolute transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-white rounded absolute transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-white rounded absolute transform transition-all duration-300 ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-700 ${
            isOpen ? "opacity-50 bg-black/50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Curtain Dropdown Menu */}
        <div
          className={`fixed left-0 right-0 bg-gradient-to-b from-[#2B2B2B] from-5% via-[#861C1C] via-80% via-[#A52A2A] via-15% to-[#FDF1DC] z-40 text-white shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-0 outline-0`}
          style={{
            top: `${NAVBAR_HEIGHT - 1}px`,
            height: isOpen ? `calc(100vh - ${NAVBAR_HEIGHT - 1}px)` : "0px",
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            border: "none",
            outline: "none",
          }}
        >
          <div
            className={`flex flex-col items-center pt-12 space-y-8 transition-all duration-500 delay-200 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center text-xl space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`cursor-pointer transform transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${300 + index * 100}ms` : "0ms",
                  }}
                >
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className={`
                      relative px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none
                      ${
                        currentPath === link.to
                          ? "text-orange-400 bg-white/10"
                          : "text-white hover:text-orange-400"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
            </ul>

            {/* Mobile Book Appointment Button */}
            <div
              className={`mt-8 transform transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${300 + navLinks.length * 100}ms`
                  : "0ms",
              }}
            >
              <button
                onClick={() => handleNavigation("/book-appointment")}
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              >
                📅 Book Your Appointment
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div
              className={`mt-8 text-center text-gray-300 transform transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${300 + (navLinks.length + 1) * 100}ms`
                  : "0ms",
              }}
            >
              <p className="text-sm">Ready for a fresh start?</p>
              <p className="text-xs mt-1">Call us: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[105px]"></div>
    </header>
  );
};

export default Navbar;
