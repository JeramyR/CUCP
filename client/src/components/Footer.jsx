import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#861C1C] text-[#2B2B2B] py-6 mt-8">
      <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-8 md:items-start mb-4 md:mb-0">
          <div>
            <span className="text-xl">
              &copy; {new Date().getFullYear()} CUTTIN UP COMMUNITY PROJECT.
            </span>
          </div>
          <div>
            <p> Fresh Cuts. Fresh Starts. Stronger Communities.</p>
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <p> PRIVACY POLICY</p>
               <a href="https://givebutter.com/ywmoe5" target="_blank">
              <button className="mt-2 bg-[#861C1C] text-[#2B2B2B] border p-4 rounded-full hover:bg-[#861C1C] hover:text-white transition-colors cursor-pointer">
                Donate
              </button>
            </a>
          </div>
          <div>
         
          </div>
        </div>
        <div className="items-start flex flex-col gap-5 mb-4 md:mb-0">
          <div>
            <div>
              <p>GET IN TOUCH</p>
            </div>
          </div>
          <div className="text-sm">
            <div className="items-start flex flex-col gap-2">
              <p>Monday-Friday</p>
              <p>10am-4pm MST</p>
              <p>1641 E McDowell Rd, #B-5</p>
              <p> Phoenix, AZ 85006, US</p>
            </div>
          </div>
          <div className="text-sm">
            <div className="items-start flex flex-col">
              <a
                href="https://www.instagram.com/cuttinupcommunityproject/"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/cuttinupcommunityphx/"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@CuttinUpCommunityProject"
                target="_blank"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/cuttinupphx"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="items-start flex flex-col gap-11">
          <div>
            <div>
              <p>JOIN OUR MAILING LIST</p>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex flex-col items-start">
              <label>First Name</label>
              <input
                type="email"
                placeholder="Enter your first name"
                className="p-2 rounded-md border-b-2 border-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#FDF1DC] transition-colors"
              />
            </div>{" "}
            <div className="flex flex-col items-start">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border-b-2 border-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#FDF1DC] transition-colors "
              />
            </div>
            <div className="flex flex-col items-start">
              <button className="mt-2 bg-[#861C1C] text-[#2B2B2B] border p-4 rounded-full hover:bg-[#861C1C] hover:text-white transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="items-start flex flex-col gap-12 ">
          <div>
            <div>
              <p>EXPLORE</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start text-sm">
            <div>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </div>
            <div>
              <a
                href="/about-us"
                className="hover:text-white transition-colors"
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="/services"
                className="hover:text-white transition-colors"
              >
                Programs + Services
              </a>
            </div>
            <div>
              <a
                href="/get-involved"
                className="hover:text-white transition-colors"
              >
                Get Involved
              </a>
            </div>
            <div>
              <a href="/news" className="hover:text-white transition-colors">
                News
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
