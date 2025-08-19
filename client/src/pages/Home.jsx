import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function to handle navigation to About Us page
  const navigateToBrianStory = () => {
    navigate("/about-us#how-it-started");
    setTimeout(() => {
      const element = document.getElementById("how-it-started");
      if (element) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 60; // Adjust 100 to your header height + some padding

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-[#2B2B2B] from-5% via-[#861C1C] via-80% via-[#A52A2A] via-15% to-[#FDF1DC] flex items-center relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Fresh Cuts. Fresh Starts. Stronger Communities
              </h1>

              <div className="text-lg md:text-xl leading-relaxed space-y-4">
                <p>
                  Welcome to the shop! At Cuttin Up Community Project, we
                  believe in{" "}
                  <strong className="text-orange-400">
                    second chances and radical belonging
                  </strong>
                  . We're here to empower justice-impacted, unhoused, and
                  housing-insecure individuals through culturally grounded
                  barbering and cosmetology training, entrepreneurship skills,
                  and heart-centered support.
                </p>

                <p>
                  <strong className="text-orange-400">
                    And guess what? You can get a great haircut, fresh style, or
                    manicure here too!
                  </strong>{" "}
                  Every service you receive is a{" "}
                  <strong className="text-orange-400">Cut with a Cause</strong>,
                  helping us slice through barriers and uplift those rebuilding
                  their lives.
                </p>

                <p>
                  Our space is more than just a salon—it's a vibrant hub of
                  healing, empowerment, and transformation for everyone who
                  walks through our doors.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="w-full rounded-2xl flex items-center justify-center ">
                  <img
                    className="w-200 h-80 object-cover rounded-2xl"
                    src={new URL("../assets/hero.jpg", import.meta.url).href}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-20 bg-[#FDF1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-[#861C1C] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#2B2B2B]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story, Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We exist to empower individuals returning home, helping them
                build economic freedom, reclaim their dignity, and restore their
                place in the community—one fresh start at a time. It's all about
                making real pathways, rooted in culture and understanding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-[#861C1C] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision for a Better Tomorrow
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We dream of a world where every person coming home finds open
                doors to opportunity, feels seen and able to express who they
                truly are, and gets the community care they deserve. Imagine
                barbershops as vibrant centers of healing, empowerment, and
                transformation for all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-[#861C1C] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-400 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Vision Behind the Cut
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our story begins with our founder, Brian Stepter Sr. After
                walking out of prison in 2023, Brian knew firsthand the struggle
                to find stability and dignity. What started as a simple vision
                to offer free haircuts quickly grew. He relaunched Cuttin Up
                Barbershop as a non-profit, a safe space dedicated to providing
                second chances, mentorship, and holistic support. His belief?
                Everyone deserves to thrive.
              </p>
              <button
                onClick={navigateToBrianStory}
                className="cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Read Brian's Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Testimonial Section with Larger Videos */}
      <section className="py-20 bg-[#FDF1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-lg shadow-[#861C1C]">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Voices from Our Community
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Video 1 - Larger */}
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-8 rounded-2xl">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/Cho67bwnOWk"
                    title="YouTube video player 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Video 2 - Larger */}
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-8 rounded-2xl">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/62F2MThkDsA"
                    title="YouTube video player 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Video 3 - Full width for emphasis */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-8 rounded-2xl">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/mafs6NpS_2o"
                    title="YouTube video player 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section
  id="involved"
  className="py-40 bg-gradient-to-b from-[#FDF1DC] via-[#861C1C] via-17% to-[#2B2B2B] text-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
        Ready for Your Fresh Start?
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto">
        "Cut with a Cause": Book a service to empower others. For
        community members in need, access free sessions for food,
        employment, or reentry support.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Your Cut. Our Cause.
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Book a barbering or cosmetology service and directly support our
            programs. If you need help, you can also book sessions for
            workforce development, SNAP benefits, and more.
          </p>
        </div>
        <div className="mt-auto">
          <a
            href="/book-services"
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Join the Crew.
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Stay sharpe! Sign up for our newsletter to get inspiring
            stories, program updates, and see the real impact unfolding in
            our community.
          </p>
        </div>
        <div className="mt-auto">
          <a
            href="/newsletter-signup"
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Join Us
          </a>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Help Us Cut Through Barriers.
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Your donation helps us provide training, mentorship, and vital
            services, giving powerful second chances.
          </p>
        </div>
        <div className="mt-auto">
          <a
            href="/donate"
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Donate Today
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

     

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
