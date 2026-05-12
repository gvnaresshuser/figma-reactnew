import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    price: "$1,200",
    duration: "7 days",
    rating: 4.9,
    reviews: 2341,
    category: "Beach",
    tag: "Trending",
    tagColor: "bg-amber-400 text-amber-900",
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    price: "$1,800",
    duration: "10 days",
    rating: 4.8,
    reviews: 1890,
    category: "Culture",
    tag: "Popular",
    tagColor: "bg-rose-400 text-rose-900",
  },
  {
    id: 3,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=600&q=80",
    price: "$2,100",
    duration: "8 days",
    rating: 4.7,
    reviews: 1230,
    category: "Beach",
    tag: "New",
    tagColor: "bg-emerald-400 text-emerald-900",
  },
  {
    id: 4,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
    price: "$2,400",
    duration: "12 days",
    rating: 4.9,
    reviews: 3102,
    category: "Adventure",
    tag: "Trending",
    tagColor: "bg-amber-400 text-amber-900",
  },
  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    price: "$900",
    duration: "9 days",
    rating: 4.6,
    reviews: 4210,
    category: "Beach",
    tag: "Budget Pick",
    tagColor: "bg-sky-400 text-sky-900",
  },
  {
    id: 6,
    name: "Safari Kenya",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    price: "$3,200",
    duration: "14 days",
    rating: 5.0,
    reviews: 876,
    category: "Adventure",
    tag: "Exclusive",
    tagColor: "bg-purple-400 text-purple-900",
  },
];

const categories = ["All", "Beach", "Culture", "Adventure"];

const experiences = [
  { icon: "🏔️", label: "Mountains", count: 48 },
  { icon: "🏖️", label: "Beaches", count: 124 },
  { icon: "🏛️", label: "Heritage", count: 67 },
  { icon: "🌿", label: "Nature", count: 89 },
];

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    location: "Mumbai",
    text: "Booked Santorini through this app — every detail was perfect. The curated itineraries saved us so much planning time!",
    stars: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    avatar: "AA",
    location: "Dubai",
    text: "The Kyoto trip was a dream. The community tips were invaluable — places no tourist guide would ever mention.",
    stars: 5,
  },
  {
    name: "Sofia Mendes",
    avatar: "SM",
    location: "São Paulo",
    text: "Safari Kenya was life-changing. The app's real-time updates and offline maps made it stress-free in remote areas.",
    stars: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function DestinationCard({ dest, saved, onToggleSave }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden h-52 sm:h-48 md:h-52">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${dest.tagColor}`}>
          {dest.tag}
        </span>
        <button
          onClick={() => onToggleSave(dest.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition"
        >
          <svg
            className={`w-4 h-4 ${saved ? "text-rose-500 fill-rose-500" : "text-white"}`}
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-lg font-bold leading-tight">{dest.name}</p>
          <p className="text-xs text-white/80">{dest.country}</p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <StarRating rating={dest.rating} />
            <span className="text-xs text-gray-500">({dest.reviews.toLocaleString()})</span>
          </div>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {dest.duration}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-bold text-gray-900">{dest.price}</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TravelApp() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [saved, setSaved] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = destinations.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleSave = (id) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">Wandr</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition">Destinations</a>
            <a href="#" className="hover:text-indigo-600 transition">Experiences</a>
            <a href="#" className="hover:text-indigo-600 transition">Community</a>
            <a href="#" className="hover:text-indigo-600 transition">About</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Sign in</button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition">
              Get Started
            </button>
          </div>
          {/* Hamburger */}
          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            {["Destinations", "Experiences", "Community", "About"].map((l) => (
              <a key={l} href="#" className="hover:text-indigo-600 transition">{l}</a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <button className="flex-1 text-center border border-gray-300 rounded-xl py-2 hover:bg-gray-50 transition">Sign in</button>
              <button className="flex-1 text-center bg-indigo-600 text-white rounded-xl py-2 hover:bg-indigo-700 transition">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-16 w-96 h-64 rounded-full bg-purple-300 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide">
            ✈️ 200+ curated destinations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5">
            Your next adventure <br className="hidden sm:block" />
            <span className="text-amber-300">starts here</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Discover handpicked journeys crafted by seasoned travellers. Book, plan, and share — all in one place.
          </p>
          {/* Search bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-2 flex flex-col sm:flex-row gap-2">
            <div className="flex items-center gap-2 flex-1 px-3">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search destination or country…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-gray-800 text-sm outline-none placeholder-gray-400 py-2"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition shrink-0">
              Search
            </button>
          </div>
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
            {[["50K+", "Travellers"], ["200+", "Destinations"], ["4.9★", "Avg. Rating"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold">{val}</p>
                <p className="text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience categories */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Experience</h2>
            <p className="text-gray-500 mt-2">Find the trip that matches your mood</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.label}
                className="group cursor-pointer bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-6 flex flex-col items-center gap-3 transition"
              >
                <span className="text-4xl">{exp.icon}</span>
                <p className="font-semibold text-gray-800 group-hover:text-indigo-700 transition">{exp.label}</p>
                <p className="text-xs text-gray-400">{exp.count} trips</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top Destinations</h2>
              <p className="text-gray-500 mt-1">Handpicked places loved by our community</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-5xl mb-4">🌍</p>
              <p className="text-lg">No destinations match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  dest={dest}
                  saved={saved.has(dest.id)}
                  onToggleSave={toggleSave}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to explore the world?</h2>
          <p className="text-white/70 mb-8 text-lg">Join 50,000+ travellers who plan smarter with Wandr.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-indigo-700 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition">
              Start for Free
            </button>
            <button className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Loved by travellers</h2>
            <p className="text-gray-500 mt-2">Real stories from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="text-white font-bold text-base">Wandr</span>
              </div>
              <p className="text-sm leading-relaxed">Travel smarter with community-curated itineraries and real-time insights.</p>
            </div>
            {[
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Product", links: ["Features", "Pricing", "Community", "API"] },
              { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-white font-semibold text-sm mb-4">{col.title}</p>
                <ul className="flex flex-col gap-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>© 2026 Wandr. All rights reserved.</p>
            <p>Made with ❤️ for explorers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
