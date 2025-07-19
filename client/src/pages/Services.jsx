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
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

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
      ctaLink: "/book-barber",
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
      ctaLink: "/food-assistance",
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
      cta: "Learn More",
      ctaLink: "/reentry-support",
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
      ctaLink: "/employment-services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#861c1c] text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
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
      <section className="py-8  bg-[#FDF1DC] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === service.id
                    ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {service.icon} {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="py-16">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16  bg-[#FDF1DC]`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={service.ctaLink}
                      className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      {service.cta}
                    </a>
                    <button className="inline-block border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <div className="w-full h-80 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/30">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <span className="text-lg font-medium">
                          [{service.title} Image]
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
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our programs or want to learn more about how
              we can help? We're here to support you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+1-555-0123"
                className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Call (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="py-12  bg-[#FDF1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <a
                  href={service.ctaLink}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  {service.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
