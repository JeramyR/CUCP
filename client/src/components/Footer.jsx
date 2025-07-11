import { Link } from "react-router";
import "../style/Footer.css";

const Footer = () => {
  return (
  
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Cuttin Up <br />
            Community <br />
            Project
          </h2>
          <p className="text-sm mb-8">
            Fresh Cuts.
            <br /> Fresh Starts.
            <br />
            Stronger Communities.
          </p>
          
          <div className="text-xs space-y-1">
            <a href="#" className="hover:underline block">
              PRIVACY POLICY
            </a>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET IN TOUCH</h3>
          <p className="text-xs mb-4">
            MON–FRIDAY
            <br />
            10AM–4PM EST
          </p>
          <ul className="text-xs space-y-2">
            <li>
              <a
                href="https://www.instagram.com/cuttinupcommunityproject/"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/cuttinupcommunityphx/"
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@CuttinUpCommunityProject" target="_blank" className="hover:underline">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/cuttinupphx" target="_blank" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <h3 className="text-sm font-semibold mb-4">JOIN OUR MAILING LIST</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="bg-transparent border-b border-white text-sm p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-transparent border-b border-white text-sm p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full border border-white p-4 w-max text-sm hover:bg-white hover:text-black transition cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold mb-4">EXPLORE</h3>
          <ul className="text-xs space-y-2 mb-6">
            <li>
              <Link to="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                PROGRAMS + SERVICES
              </Link>
            </li>

            <li>
              <Link to="/get-involved" className="hover:underline">
                GET INVOLVED
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline">
                NEWS
              </Link>
            </li>
          </ul>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
