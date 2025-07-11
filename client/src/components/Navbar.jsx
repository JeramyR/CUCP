import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/news", label: "News" },
  ];

  const NAVBAR_HEIGHT = 80; // adjust if your navbar height changes!

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case component unmounts while open
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
      <nav className="flex justify-between items-center text-[#FDF1DC] px-6 md:px-12 py-4 bg-[#861C1C] h-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-10"
            src={new URL("../assets/large-logo.png", import.meta.url).href}
            alt="Logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[18px]">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <li className="relative group list-none cursor-pointer">
                  <span
                    className={`
            inline-block transition-all duration-300 
            ${
              location.pathname === link.to
                ? "text-[#FDF1DC]"
                : "group-hover:-translate-y-1"
            }
            
          `}
                  >
                    {link.label}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#FDF1DC] transition-all duration-300 ease-in-out
            ${
              location.pathname === link.to
                ? "w-full"
                : "w-0 group-hover:w-full"
            }
          `}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Hamburger/X Toggle */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="block w-8 h-0.5 bg-[#FDF1DC] rounded absolute"
            initial={false}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -6,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.span
            className="block w-8 h-0.5 bg-[#FDF1DC] rounded absolute"
            initial={false}
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-8 h-0.5 bg-[#FDF1DC] rounded absolute"
            initial={false}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 6,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </button>
      </nav>

      {/* Mobile Menu (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Drawer */}
            <motion.div
              className="fixed left-0 right-0 h-full bg-[#861C1C] z-50 text-[#FDF1DC] shadow-xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ top: `${NAVBAR_HEIGHT}px` }} // starts BELOW navbar
            >
              <ul className="flex flex-col items-center mt-10 text-xl space-y-6">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.to}
                    variants={itemVariants}
                    className={`cursor-pointer ${
                      link.donate
                        ? "border border-[#FDF1DC] px-6 py-2 rounded hover:bg-[#FDF1DC] hover:text-[#861C1C] transition"
                        : "hover:text-[#FDF1DC]"
                    }`}
                  >
                    <Link
                      to={link.to}
                      onClick={() => {
                        scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
