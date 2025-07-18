import React, { useState, useEffect } from "react";

const GetInvolved = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('volunteer');

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
    }
  };

  const volunteerOpportunities = [
    {
      title: "Barbering & Cosmetology Mentors",
      description: "Share your skills and guide our participants through hands-on training. Help them master techniques while building confidence.",
      commitment: "4-8 hours/week",
      skills: "Licensed barber/cosmetologist preferred"
    },
    {
      title: "Life Skills Coaches",
      description: "Support participants with financial literacy, job interview prep, resume building, and navigating daily challenges.",
      commitment: "2-4 hours/week",
      skills: "Professional experience, patience, empathy"
    },
    {
      title: "Community Outreach",
      description: "Help us connect with community members who could benefit from our services. Spread the word and build relationships.",
      commitment: "Flexible",
      skills: "Communication skills, community connections"
    },
    {
      title: "Administrative Support",
      description: "Assist with scheduling, data entry, social media, and other behind-the-scenes tasks that keep us running smoothly.",
      commitment: "2-6 hours/week",
      skills: "Basic computer skills, attention to detail"
    }
  ];

  const partnershipTypes = [
    {
      title: "Local Businesses",
      description: "Partner with us to provide job placement opportunities, apprenticeships, or sponsor training programs.",
      benefits: "Community impact, potential tax benefits, skilled workforce pipeline"
    },
    {
      title: "Educational Institutions",
      description: "Collaborate on curriculum development, student volunteer programs, or research opportunities.",
      benefits: "Real-world learning experiences, community engagement"
    },
    {
      title: "Healthcare Organizations",
      description: "Provide mental health support, substance abuse counseling, or general wellness services for our participants.",
      benefits: "Expanded community reach, holistic care approach"
    },
    {
      title: "Faith Communities",
      description: "Offer spiritual support, meeting spaces, or volunteer coordination through your congregation.",
      benefits: "Living out faith through service, community connection"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Join the 
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Movement
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Every person deserves a fresh start. Be part of the transformation—volunteer your time, 
              share your skills, or partner with us to create lasting change in our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('volunteer')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Volunteering
              </button>
              <button 
                onClick={() => scrollToSection('partner')}
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have 2 hours or 20 hours to give, there's a perfect way for you to contribute to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-400 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">Share your skills and time to directly impact lives through mentorship and training.</p>
              <button 
                onClick={() => scrollToSection('volunteer')}
                className="text-orange-400 font-semibold hover:text-orange-600 transition-colors"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-400 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-600 mb-6">Join us as an organizational partner to expand our reach and impact together.</p>
              <button 
                onClick={() => scrollToSection('partner')}
                className="text-purple-400 font-semibold hover:text-purple-600 transition-colors"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-400 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">Provide financial support for equipment, supplies, and program expansion.</p>
              <button className="text-green-400 font-semibold hover:text-green-600 transition-colors">
                Donate Now →
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">Help us reach more people by sharing our mission with your network.</p>
              <button className="text-blue-400 font-semibold hover:text-blue-600 transition-colors">
                Share Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect way to share your unique skills and passion with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {opportunity.commitment}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {opportunity.skills}
                  </span>
                </div>

                <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-8 rounded-3xl text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">
                Join our volunteer orientation to learn more about our programs and find your perfect fit.
              </p>
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Sign Up for Orientation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we can create more opportunities and greater impact for justice-impacted individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partnership.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{partnership.description}</p>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-2xl mb-6">
                  <h4 className="font-semibold text-purple-700 mb-2">Partnership Benefits:</h4>
                  <p className="text-purple-600 text-sm">{partnership.benefits}</p>
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Explore Partnership
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-3xl text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Custom Partnership Solutions</h3>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Don't see your organization type listed? We're always open to creative partnerships that align with our mission. 
                Let's explore how we can work together to create meaningful change.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Contact Us About Partnerships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Impact in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your involvement creates real, lasting change in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lives Transformed</h3>
              <p className="text-gray-600">Individuals who have completed our programs and found stable employment or started their own businesses.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">100+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Hours</h3>
              <p className="text-gray-600">Hours of dedicated service from our amazing volunteer community each month.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Partners</h3>
              <p className="text-gray-600">Local organizations working with us to create comprehensive support systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join us in creating a community where everyone has the opportunity to thrive. 
            Your involvement—no matter how big or small—creates ripples of positive change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </button>
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

export default GetInvolved;