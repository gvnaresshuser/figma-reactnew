import { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const featured = [
  {
    id: 1,
    name: "Raja Ampat",
    location: "West Papua, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    price: 320,
    rating: 4.9,
    reviews: 1204,
    duration: "5 Days",
    category: "Beach",
    desc: "Pristine waters and a biodiversity hotspot unlike anywhere on earth. Dive into coral gardens, drift through limestone karsts, and wake up to absolute silence.",
    highlights: ["Snorkelling", "Kayaking", "Island Hopping", "Sunrise Trek"],
    weather: "28°C · Sunny",
  },
  {
    id: 2,
    name: "Zhangjiajie",
    location: "Hunan, China",
    image: "https://images.unsplash.com/photo-1537531996-bdd6e3ef8585?w=800&q=80",
    price: 410,
    rating: 4.8,
    reviews: 876,
    duration: "4 Days",
    category: "Mountain",
    desc: "Float among the Avatar mountains. Soaring sandstone pillars draped in mist create a landscape that feels entirely other-worldly.",
    highlights: ["Glass Bridge", "Cable Car", "Hiking", "Photography"],
    weather: "22°C · Misty",
  },
  {
    id: 3,
    name: "Cappadocia",
    location: "Anatolia, Turkey",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
    price: 290,
    rating: 4.7,
    reviews: 2310,
    duration: "3 Days",
    category: "Heritage",
    desc: "Drift over fairy chimneys in a hot air balloon at golden hour. Underground cities, cave hotels, and ancient rock churches complete the picture.",
    highlights: ["Balloon Ride", "Cave Hotel", "Underground City", "Pottery"],
    weather: "18°C · Clear",
  },
];

const popular = [
  {
    id: 4,
    name: "Faroe Islands",
    location: "North Atlantic",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80",
    price: 580,
    rating: 4.9,
    category: "Nature",
  },
  {
    id: 5,
    name: "Colosseum",
    location: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80",
    price: 140,
    rating: 4.6,
    category: "Heritage",
  },
  {
    id: 6,
    name: "Namib Desert",
    location: "Namibia",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80",
    price: 490,
    rating: 4.8,
    category: "Adventure",
  },
  {
    id: 7,
    name: "Plitvice Lakes",
    location: "Croatia",
    image: "https://images.unsplash.com/photo-1585211969224-3e992986159d?w=400&q=80",
    price: 210,
    rating: 4.7,
    category: "Nature",
  },
];

const categories = ["All", "Beach", "Mountain", "Heritage", "Nature", "Adventure"];

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: "search",
    label: "Explore",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "saved",
    label: "Saved",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    ),
  },
];

// ── SCREENS ───────────────────────────────────────────────────────────────────

function OnboardingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
      title: "Discover Hidden Gems",
      sub: "Curated destinations chosen by expert local guides",
    },
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      title: "Plan Effortlessly",
      sub: "Smart itineraries tailored to your travel style",
    },
    {
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
      title: "Travel Together",
      sub: "Connect with fellow adventurers around the globe",
    },
  ];
  const s = slides[step];
  return (
    <div className="relative flex flex-col h-full bg-gray-950 overflow-hidden">
      <img
        src={s.image}
        alt={s.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

      {/* Skip */}
      <div className="relative flex justify-end px-6 pt-12">
        <button
          onClick={onDone}
          className="text-white/60 text-sm font-medium hover:text-white transition"
        >
          Skip
        </button>
      </div>

      <div className="relative mt-auto px-6 pb-14">
        {/* Dots */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? "w-8 bg-emerald-400" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <h1
          className="text-4xl font-black text-white leading-tight mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {s.title}
        </h1>
        <p className="text-white/60 text-base mb-10 leading-relaxed">{s.sub}</p>

        {step < slides.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold py-4 rounded-2xl text-base transition"
          >
            Next
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              onClick={onDone}
              className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold py-4 rounded-2xl text-base transition"
            >
              Get Started
            </button>
            <button
              onClick={onDone}
              className="w-full border border-white/20 text-white/70 font-semibold py-4 rounded-2xl text-base hover:bg-white/5 transition"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function HomeScreen({ onOpenDetail, savedIds, onToggleSave }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPopular =
    activeCategory === "All"
      ? popular
      : popular.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Good Morning</p>
            <h2 className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Priya ✈️
            </h2>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              PS
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-4 flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-gray-400 text-sm">Search destinations…</span>
        </div>
      </div>

      {/* Featured carousel */}
      <div className="px-5 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-gray-900">Featured Trips</h3>
          <button className="text-xs text-emerald-600 font-semibold">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {featured.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenDetail(dest)}
              className="shrink-0 w-52 rounded-3xl overflow-hidden relative cursor-pointer active:scale-95 transition-transform"
              style={{ height: 290 }}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleSave(dest.id); }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <svg
                    className={`w-4 h-4 ${savedIds.has(dest.id) ? "text-rose-400 fill-rose-400" : "text-white"}`}
                    fill={savedIds.has(dest.id) ? "currentColor" : "none"}
                    stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1 block">
                  {dest.category}
                </span>
                <p className="text-white font-bold text-base leading-tight">{dest.name}</p>
                <p className="text-white/60 text-xs mt-0.5">{dest.location}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white text-xs font-semibold">{dest.rating}</span>
                  </div>
                  <span className="text-white font-bold text-sm">${dest.price}<span className="text-white/50 text-xs font-normal">/pp</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category chips */}
      <div className="mt-6 px-5">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gray-500 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Popular grid */}
      <div className="px-5 mt-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-gray-900">Popular Now</h3>
          <button className="text-xs text-emerald-600 font-semibold">See all</button>
        </div>
        <div className="flex flex-col gap-3">
          {filteredPopular.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenDetail({ ...dest, price: dest.price, duration: "3 Days", desc: "An unforgettable journey awaits.", highlights: ["Sightseeing", "Local Food", "Photography", "Culture"], weather: "25°C · Sunny", reviews: 900 })}
              className="flex items-center gap-4 bg-white rounded-2xl p-3 cursor-pointer active:scale-98 transition shadow-sm"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm truncate">{dest.name}</p>
                <p className="text-gray-400 text-xs mt-0.5 truncate">{dest.location}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <svg className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-semibold">{dest.rating}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-xs text-gray-400">{dest.category}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-emerald-600 font-bold text-sm">${dest.price}</p>
                <p className="text-gray-400 text-[10px]">per person</p>
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleSave(dest.id); }}
                  className="mt-2 w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center mx-auto"
                >
                  <svg
                    className={`w-3.5 h-3.5 ${savedIds.has(dest.id) ? "text-rose-400 fill-rose-400" : "text-gray-400"}`}
                    fill={savedIds.has(dest.id) ? "currentColor" : "none"}
                    stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailScreen({ dest, onBack, saved, onToggleSave }) {
  const [tab, setTab] = useState("overview");
  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto">
      {/* Hero image */}
      <div className="relative h-72 shrink-0">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-12 left-5 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => onToggleSave(dest.id)}
          className="absolute top-12 right-5 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <svg
            className={`w-5 h-5 ${saved ? "text-rose-400 fill-rose-400" : "text-white"}`}
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">{dest.category}</span>
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Georgia', serif" }}>{dest.name}</h2>
          <p className="text-white/70 text-xs">{dest.location}</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex divide-x divide-gray-100 border-b border-gray-100 px-5">
        {[
          { label: "Rating", val: `${dest.rating}★` },
          { label: "Reviews", val: dest.reviews?.toLocaleString() },
          { label: "Duration", val: dest.duration },
          { label: "Weather", val: dest.weather?.split("·")[0].trim() },
        ].map((s) => (
          <div key={s.label} className="flex-1 py-3 text-center">
            <p className="text-sm font-bold text-gray-900">{s.val}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-0 px-5 pt-4 border-b border-gray-100">
        {["overview", "highlights", "reviews"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 pb-3 text-xs font-bold capitalize transition border-b-2 ${
              tab === t
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-gray-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 px-5 py-5">
        {tab === "overview" && (
          <div>
            <p className="text-gray-600 text-sm leading-relaxed">{dest.desc}</p>
            <div className="mt-5 bg-gray-50 rounded-2xl p-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">What's Included</p>
              <div className="grid grid-cols-2 gap-2">
                {["Accommodation", "Airport Transfer", "Guided Tours", "Breakfast"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {tab === "highlights" && (
          <div className="grid grid-cols-2 gap-3">
            {dest.highlights?.map((h, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <span className="text-lg">
                    {["🤿", "🎈", "🥾", "📸", "🚣", "🏛️", "🌄", "🏕️"][i % 8]}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800">{h}</p>
              </div>
            ))}
          </div>
        )}
        {tab === "reviews" && (
          <div className="flex flex-col gap-4">
            {[
              { name: "James K.", avatar: "JK", text: "Absolutely magical. Every detail was taken care of — best trip of my life.", stars: 5 },
              { name: "Ananya S.", avatar: "AS", text: "The local guide was brilliant. Took us to spots no tourist guide would mention.", stars: 5 },
              { name: "Oliver T.", avatar: "OT", text: "Great value for money. Would definitely book again through this app!", stars: 4 },
            ].map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{r.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(r.stars)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book CTA */}
      <div className="px-5 pb-8 pt-3 bg-white border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-400">Total price</p>
            <p className="text-2xl font-black text-gray-900">${dest.price}<span className="text-sm font-normal text-gray-400"> /person</span></p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Free cancellation
          </div>
        </div>
        <button className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold py-4 rounded-2xl text-base transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

function SavedScreen({ savedIds, onOpenDetail }) {
  const allDests = [...featured, ...popular.map(p => ({ ...p, duration: "3 Days", desc: "An unforgettable journey awaits.", highlights: ["Sightseeing", "Local Food", "Photography", "Culture"], weather: "25°C · Sunny", reviews: 900 }))];
  const savedDests = allDests.filter((d) => savedIds.has(d.id));
  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
          Saved Trips
        </h2>
        <p className="text-gray-400 text-sm mt-1">{savedDests.length} destinations saved</p>
      </div>
      {savedDests.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4">
          <span className="text-6xl">🗺️</span>
          <p className="text-gray-900 font-bold text-lg">Nothing saved yet</p>
          <p className="text-gray-400 text-sm">Tap the heart on any destination to save it here.</p>
        </div>
      ) : (
        <div className="px-5 py-5 flex flex-col gap-4">
          {savedDests.map((d) => (
            <div
              key={d.id}
              onClick={() => onOpenDetail(d)}
              className="relative rounded-3xl overflow-hidden cursor-pointer active:scale-95 transition h-40"
            >
              <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-base">{d.name}</p>
                <p className="text-white/60 text-xs">{d.location}</p>
              </div>
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-xl px-2.5 py-1">
                <p className="text-white font-bold text-sm">${d.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProfileScreen() {
  const stats = [{ label: "Trips", val: 12 }, { label: "Countries", val: 8 }, { label: "Reviews", val: 24 }];
  const settings = ["Notifications", "Privacy & Security", "Payment Methods", "Help Center", "Sign Out"];
  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-black text-xl">
            PS
          </div>
          <div>
            <h2 className="text-xl font-black text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Priya Sharma
            </h2>
            <p className="text-gray-400 text-sm">priya.sharma@email.com</p>
            <span className="inline-block mt-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Premium Member
            </span>
          </div>
        </div>
        <div className="flex mt-5 divide-x divide-gray-100 bg-gray-50 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 py-3 text-center">
              <p className="text-xl font-black text-gray-900">{s.val}</p>
              <p className="text-[10px] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-5 flex flex-col gap-2">
        {settings.map((s) => (
          <button
            key={s}
            className={`flex items-center justify-between bg-white rounded-2xl px-4 py-3.5 ${
              s === "Sign Out" ? "text-rose-500" : "text-gray-800"
            }`}
          >
            <span className="text-sm font-semibold">{s}</span>
            {s !== "Sign Out" && (
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── SHELL ─────────────────────────────────────────────────────────────────────
export default function TravelAppFlutter() {
  const [onboarded, setOnboarded] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [detailDest, setDetailDest] = useState(null);
  const [savedIds, setSavedIds] = useState(new Set());

  const toggleSave = (id) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const openDetail = (dest) => setDetailDest(dest);
  const closeDetail = () => setDetailDest(null);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 md:p-8">
      {/* Phone frame */}
      <div
        className="relative bg-gray-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
        style={{ width: 390, height: 844, maxWidth: "100%", maxHeight: "95vh" }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-8 py-3 bg-gray-950 shrink-0 z-10">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-3 text-white" viewBox="0 0 20 14" fill="currentColor">
              <rect x="0" y="6" width="3" height="8" rx="1" opacity=".4" />
              <rect x="4.5" y="4" width="3" height="10" rx="1" opacity=".6" />
              <rect x="9" y="2" width="3" height="12" rx="1" opacity=".8" />
              <rect x="13.5" y="0" width="3" height="14" rx="1" />
            </svg>
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="w-6 h-3 text-white" viewBox="0 0 24 12" fill="currentColor">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity=".5" />
              <rect x="1.5" y="2.5" width="15" height="7" rx="1" />
              <path d="M21 4v4a2 2 0 000-4z" />
            </svg>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-hidden relative">
          {!onboarded ? (
            <OnboardingScreen onDone={() => setOnboarded(true)} />
          ) : detailDest ? (
            <DetailScreen dest={detailDest} onBack={closeDetail} saved={savedIds.has(detailDest.id)} onToggleSave={toggleSave} />
          ) : activeNav === "home" ? (
            <HomeScreen onOpenDetail={openDetail} savedIds={savedIds} onToggleSave={toggleSave} />
          ) : activeNav === "saved" ? (
            <SavedScreen savedIds={savedIds} onOpenDetail={openDetail} />
          ) : activeNav === "profile" ? (
            <ProfileScreen />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 h-full">
              <div className="text-center">
                <p className="text-5xl mb-3">🔍</p>
                <p className="font-semibold">Explore coming soon</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom nav */}
        {onboarded && !detailDest && (
          <div className="bg-white border-t border-gray-100 flex items-center justify-around px-2 pt-2 pb-5 shrink-0">
            {navItems.map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveNav(nav.id)}
                className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl transition ${
                  activeNav === nav.id ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                {nav.icon}
                <span className="text-[10px] font-semibold">{nav.label}</span>
                {activeNav === nav.id && (
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Home indicator */}
        <div className="flex justify-center pb-2 bg-white shrink-0">
          <div className="w-32 h-1 bg-gray-900 rounded-full" />
        </div>
      </div>

      {/* Hint text outside phone */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-xs hidden md:block">
        Interactive mobile app preview · Tap cards to explore
      </div>
    </div>
  );
}
