import { useState, useEffect } from "react";

const News = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample data - you can replace this with actual data from your CMS/API
  const newsItems = [
    {
      id: 1,
      type: "event",
      title: "Community Cut Day - Free Haircuts for Everyone",
      date: "2025-08-15",
      time: "10:00 AM - 4:00 PM",
      location: "Cuttin Up Community Space",
      excerpt:
        "Join us for our monthly Community Cut Day! Free haircuts and styling for community members in need.",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["community", "free-services", "haircuts"],
    },
    {
      id: 2,
      type: "article",
      title: "Success Story: Marcus Graduates from Barber Program",
      date: "2025-07-20",
      author: "Brian Stepter Sr.",
      excerpt:
        "Read about Marcus's journey from participant to certified barber, now opening his own shop.",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["success-story", "graduation", "barber-training"],
    },
    {
      id: 3,
      type: "event",
      title: "Job Fair & Networking Event",
      date: "2025-08-22",
      time: "2:00 PM - 6:00 PM",
      location: "Community Center",
      excerpt:
        "Connect with local employers and discover new opportunities in beauty, hospitality, and more.",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["employment", "networking", "opportunities"],
    },
    {
      id: 4,
      type: "article",
      title: "New Partnership with Local Food Bank",
      date: "2025-07-18",
      author: "Community Team",
      excerpt:
        "Expanding our food assistance program through a new partnership with the Central Valley Food Bank.",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["partnership", "food-assistance", "community"],
    },
    {
      id: 5,
      type: "event",
      title: "Entrepreneurship Workshop Series",
      date: "2025-08-30",
      time: "6:00 PM - 8:00 PM",
      location: "Cuttin Up Community Space",
      excerpt:
        "Learn the basics of starting your own business in the beauty and wellness industry.",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["entrepreneurship", "workshop", "business"],
    },
    {
      id: 6,
      type: "article",
      title: "Monthly Impact Report: July 2025",
      date: "2025-07-31",
      author: "Operations Team",
      excerpt:
        "See the amazing impact we've made together this month - 150 services provided, 12 job placements, and more!",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["impact", "monthly-report", "statistics"],
    },
  ];

  const filters = [
    { id: "all", label: "All News", icon: "📰" },
    { id: "event", label: "Upcoming Events", icon: "📅" },
    { id: "article", label: "Articles", icon: "📝" },
  ];

  const filteredItems = newsItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredItems = newsItems.filter((item) => item.featured);
  const regularItems = filteredItems.filter((item) => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate > today;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#861c1c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black h-18 mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              News & Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Stay connected with the latest happenings, success stories, and
              upcoming events in our community. Your journey matters, and we're
              here to celebrate it together.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Search and Filter Section */}
      <section className="py-8 bg-[#FDF1DC] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <div className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {filter.icon} {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      {featuredItems.length > 0 && (
        <section className="py-16 bg-[#FDF1DC]" style={{ scrollMarginTop: '240px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ⭐ Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">
                        {item.type === "event" ? "📅" : "📝"}
                      </div>
                      <span className="text-lg font-medium">
                        [Featured Image]
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.type === "event" ? "Event" : "Article"}
                      </span>
                      {item.type === "event" && isUpcoming(item.date) && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                      <div className="text-sm text-gray-500">
                        <div className="font-medium">
                          {formatDate(item.date)}
                        </div>
                        {item.time && <div>{item.time}</div>}
                        {item.location && <div>📍 {item.location}</div>}
                        {item.author && <div>By {item.author}</div>}
                      </div>
                      <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        {item.type === "event" ? "RSVP Now" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-16 bg-[#FDF1DC]" style={{ scrollMarginTop: '240px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">
                      {item.type === "event" ? "📅" : "📝"}
                    </div>
                    <span className="text-sm font-medium">[Image]</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === "event"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.type === "event" ? "Event" : "Article"}
                    </span>
                    {item.type === "event" && isUpcoming(item.date) && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      <div className="font-medium">{formatDate(item.date)}</div>
                      {item.time && <div>{item.time}</div>}
                      {item.author && <div>By {item.author}</div>}
                    </div>
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                      {item.type === "event" ? "RSVP →" : "Read More →"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#861c1c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-orange-400">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't miss out on upcoming events, success stories, and community
              updates. Join our newsletter and be the first to know what's
              happening at Cuttin Up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              />
              <button className="cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;