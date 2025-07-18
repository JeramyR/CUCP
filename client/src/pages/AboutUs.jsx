import { Users, Heart, Scissors, Target, Eye, MapPin, Calendar, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            About Cuttin Up Community Project
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering justice-impacted individuals through culturally grounded barbering, 
            cosmetology training, and holistic community support
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-[#FDF1DC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <Target className="text-blue-600 mr-3 sm:mr-4 flex-shrink-0" size={28} />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Cutting Up Community Project exists to empower justice-impacted individuals through 
                culturally grounded barbering and cosmetology training, entrepreneurship, and holistic 
                support. We create pathways to economic mobility, personal dignity, and community 
                restoration—one fresh start at a time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <Eye className="text-purple-600 mr-3 sm:mr-4 flex-shrink-0" size={28} />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We envision a world where every person returning home has access to opportunity, 
                self-expression, and community care—where barbershops become hubs of healing, 
                empowerment, and transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-lg sm:text-xl text-gray-600">Cultivating Fresh Starts & Community Strength</p>
          </div>
          
          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              At Cuttin Up Community Project, we're driven by our mission to empower justice-impacted 
              individuals, creating pathways to dignity and restoration. Our vision sees our barbershops 
              as vibrant hubs of healing and transformation for everyone in the community.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
              More Than a Service: Our Impact in Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4 sm:mb-6">
                <Scissors className="text-blue-600 mr-3 sm:mr-4 flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
                  "Cut with a Cause" Services
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You can book top-notch barbering and cosmetology services with our amazing team! 
                Every haircut, style, or manicure helps directly fund our programs, empowering 
                others to build new lives.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart className="text-green-600 mr-3 sm:mr-4 flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
                  Comprehensive Community Support
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                We provide free barbering and cosmetology services for those facing homelessness, 
                housing insecurity, and justice involvement (via voucher). Beyond a fresh look, 
                we offer vital support through:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start">
                  <Award className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Apprenticeships & Training: Culturally grounded barbering and cosmetology skills</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Reentry & Holistic Support: Including food access, employment assistance, professional development</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Mobile Services & Events: Bringing our support directly to where it's needed most</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              We're all about cutting through barriers and championing second chances. Ready to dive deeper?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Learn More About Our Programs & Services
            </button>
          </div>
        </div>
      </section>

      {/* How it Started */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">How it Started</h2>
            <p className="text-lg sm:text-xl text-gray-600">Brian's Vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Calendar className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">July 2023</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  In July of 2023, Brian Stepter Sr. walked out of prison with a renewed sense of purpose 
                  and a heart full of determination. After serving his time, he was more focused than ever 
                  on rebuilding his life, not just for himself, but for the community.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  The first thing he set out to do was reopen Cuttin Up Barbershop, a place that had 
                  once been a cornerstone in the neighborhood. It wasn't just a business; it was a movement, 
                  a safe space, and a symbol of second chances.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  But Brian knew his mission went deeper than just cutting hair. So he relaunched the 
                  Cuttin Up Community Project, a nonprofit he founded to serve the homeless, formerly 
                  incarcerated individuals, and anyone needing a hand up.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 flex items-center justify-center">
                <div className="text-center">
                  <Users size={48} className="text-gray-400 mx-auto mb-4 sm:mb-4" />
                  <p className="text-gray-500 font-medium text-sm sm:text-base">Photo of Brian</p>
                  <p className="text-gray-400 text-xs sm:text-sm">(Placeholder - Add headshot)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-50 to-blue-50 p-6 sm:p-8 rounded-2xl">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              In the months that followed, Brian began collaborating with local and national organizations 
              who shared his vision. Among the most impactful partnerships he formed were with The Bambi Fund, 
              Tiger Mountain Foundation, and Arizona Village, powerful advocates for social justice reform 
              and families impacted by incarceration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              Together, they began building bridges, offering support, mentorship, and real opportunities 
              for people trying to get back on their feet.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              From barbershop chairs to community outreach events, Brian has stayed committed to the belief 
              that everyone deserves a second chance. Reentry isn't just about surviving; it's about thriving. 
              Today, Cuttin Up stands as living proof that redemption is real, and that purpose can grow 
              even from the most broken places.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
            <p className="text-base sm:text-lg text-gray-600">The amazing people making it all happen</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Founder */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-blue-500">
              <div className="bg-blue-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Brian Stepter</h3>
              <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">Founder</p>
              <p className="text-gray-600 text-xs sm:text-sm">Headshot & bio coming soon</p>
            </div>

            {/* Cosmetology Lead */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-purple-500">
              <div className="bg-purple-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Itzel Garcia</h3>
              <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">Cosmetology Lead</p>
              <p className="text-gray-600 text-xs sm:text-sm">Headshot & bio coming soon</p>
            </div>

            {/* Program Manager */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-green-500 sm:col-span-2 lg:col-span-1">
              <div className="bg-green-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Melinda</h3>
              <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">Program + Outreach Manager</p>
              <p className="text-gray-600 text-xs sm:text-sm">Headshot & bio coming soon</p>
            </div>

            {/* Placeholder team members */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-gray-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-gray-400" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Barber 1</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Details coming soon</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-gray-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-gray-400" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Barber 2</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Details coming soon</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border-t-4 border-gray-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-400" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Cosmetology Team</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Details coming soon</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg inline-block">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Board of Directors</h3>
              <p className="text-gray-600 text-sm sm:text-base">Information coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;