import React, { useState, useEffect } from "react";

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("barber");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamic offset calculation based on screen size
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 180 : 240; // Reduced mobile offset for better positioning
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to update active section based on scroll position
  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-180px 0px -50% 0px", // Adjusted root margin to match scroll offset
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const services = [
    {
      id: "barber",
      title: "Barber + Cosmetology",
      icon: "✂️",
      description:
        "Professional training and services in barbering and cosmetology",
      features: [
        "Professional Training Programs",
        "Certification Prep",
        "Hands-on Experience",
        "Client Services",
      ],
      cta: "Book a Service",
      ctaLink: "https://cuttinupphx.setmore.com",
      image: "../assets/join-the-cause.jpg",
    },
    {
      id: "space",
      title: "Rent Our Space",
      icon: "🏢",
      description: "Community space rental for events and gatherings",
      features: [
        "Event Space",
        "Meeting Rooms",
        "Community Gatherings",
        "Flexible Booking",
      ],
      cta: "Reserve Space",
      ctaLink: "/rent-space",
      image: "../assets/space.jpg",
    },
    {
      id: "nutrition",
      title: "Food + Nutrition Assistance",
      icon: "🍎",
      description: "Nutritional support and food assistance programs",
      features: [
        "SNAP Benefits Support",
        "Food Pantry Access",
        "Nutrition Education",
        "Meal Planning",
      ],
      cta: "Get Support",
      ctaLink:
        "https://cuttinupphx.setmore.com/services/e029d77e-8f69-41b9-881e-3a5274a13e2b",
      image: "../assets/food.jpg",
    },
    {
      id: "reentry",
      title: "Reentry Support",
      icon: "🤝",
      description: "Comprehensive support for individuals returning home",
      features: [
        "Case Management",
        "Life Skills Training",
        "Mentorship Programs",
        "Resource Navigation",
      ],
      cta: "Get Help",
      ctaLink:
        "https://cuttinupphx.setmore.com/services/1c3d5909-4b8e-4b48-887c-435bfc717ef4",
      image: "../assets/reentry.jpg",
    },
    {
      id: "employment",
      title: "Employment + Professional Development",
      icon: "💼",
      description: "Career development and job placement services",
      features: [
        "Resume Building",
        "Interview Prep",
        "Job Placement",
        "Professional Skills",
      ],
      cta: "Start Today",
      ctaLink:
        "https://cuttinupphx.setmore.com/services/21c2e694-e1f0-4d9a-a752-ff0af669fe2c",
      image: "../assets/employment.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-125 pt-24 pb-16 bg-gradient-to-b from-[#2B2B2B] from-5% via-[#861C1C] via-80% via-[#A52A2A] via-15% to-[#FDF1DC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Programs + Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Empowering our community through comprehensive programs designed
              to build skills, provide support, and create opportunities for
              everyone to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-4 md:py-8 bg-[#FDF1DC] sticky top-25 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`cursor-pointer px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                  activeSection === service.id
                    ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                <span className="hidden md:inline">{service.icon} </span>
                <span className="md:hidden">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="py-8 md:py-16">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-12 md:py-16 bg-[#FDF1DC]"
            style={{ scrollMarginTop: "180px" }} // Reduced CSS scroll-margin-top
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="text-4xl md:text-6xl mb-4 md:mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Image for Mobile - shows here on mobile only */}
                  <div className="lg:hidden mb-6 md:mb-8">
                    <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <div className="w-full rounded-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <span className="text-lg font-medium">
                            <img
                              className="w-200 h-48 object-cover rounded-2xl"
                              src={
                                new URL(`${service.image}`, import.meta.url)
                                  .href
                              }
                              alt={service.title}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <a
                      href={service.ctaLink}
                      className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center text-sm md:text-base"
                    >
                      {service.cta}
                    </a>
                    <button className="cursor-pointer inline-block border-2 border-orange-400 text-orange-400 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm md:text-base">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image/Visual for Desktop - hidden on mobile */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } hidden lg:block`}
                >
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <div className="w-full rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <span className="text-lg font-medium">
                          <img
                            className="w-200 h-85 object-cover rounded-2xl"
                            src={
                              new URL(`${service.image}`, import.meta.url).href
                            }
                            alt={service.title}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FDF1DC] via-[#861C1C] via-15% to-[#2B2B2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-orange-400">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our programs or want to learn more about how
              we can help? We're here to support you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+1-555-0123"
                className="border-2 border-orange-400 text-orange-400 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm md:text-base"
              >
                Call (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
