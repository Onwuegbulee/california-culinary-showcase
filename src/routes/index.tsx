import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Moon, Sun, Star, MapPin, Clock, Phone, Mail, MessageCircle,
  Instagram, Facebook, ChevronRight, X, Utensils, Calendar, Users, Award,
} from "lucide-react";

import logoAsset from "@/assets/logo.png.asset.json";
import exteriorNightA from "@/assets/photos/exterior-night.jpg.asset.json";
import mixedGrillA from "@/assets/photos/mixed-grill.jpg.asset.json";
import gardenTerraceA from "@/assets/photos/garden-terrace.jpg.asset.json";
import dessertsBuffetA from "@/assets/photos/desserts-buffet.jpg.asset.json";
import diningHall1A from "@/assets/photos/dining-hall-1.jpg.asset.json";
import diningHall2A from "@/assets/photos/dining-hall-2.jpg.asset.json";
import diningHall3A from "@/assets/photos/dining-hall-3.jpg.asset.json";
import diningHall4A from "@/assets/photos/dining-hall-4.jpg.asset.json";

const logo = logoAsset.url;
const exteriorNight = exteriorNightA.url;
const mixedGrill = mixedGrillA.url;
const gardenTerrace = gardenTerraceA.url;
const dessertsBuffet = dessertsBuffetA.url;
const diningHall1 = diningHall1A.url;
const diningHall2 = diningHall2A.url;
const diningHall3 = diningHall3A.url;
const diningHall4 = diningHall4A.url;

// Aliases — map real photos onto the existing variable names used throughout the page
const heroDish = mixedGrill;
const interior = diningHall1;
const chef = gardenTerrace;
const dishScallops = mixedGrill;
const dishLamb = mixedGrill;
const dishPasta = mixedGrill;
const dishDessert = dessertsBuffet;
const dishBurger = mixedGrill;
const dishCocktail = dessertsBuffet;
const dishTartare = mixedGrill;
const gallery1 = exteriorNight;
const gallery2 = diningHall2;
const gallery3 = diningHall4;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurant California — A Taste Worth Remembering" },
      { name: "description", content: "Fine dining, signature dishes & unforgettable ambiance. Reserve your table at Restaurant California today." },
      { property: "og:title", content: "Restaurant California" },
      { property: "og:description", content: "A Taste Worth Remembering." },
      { property: "og:image", content: heroDish },
    ],
    links: [
      { rel: "preload", as: "image", href: heroDish, fetchpriority: "high" } as any,
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reservations", href: "#reserve" },
  { label: "Contact", href: "#contact" },
];

const DISHES = [
  { name: "California Mixed Grill", desc: "Tenderloin, lamb chops, kebab & potatoes on sizzling iron.", img: mixedGrill, badge: "Signature" },
  { name: "Lamb Chops", desc: "Char-grilled with rosemary, garlic & mushroom sauce.", img: mixedGrill, badge: "Chef's Pick" },
  { name: "Beef Tenderloin", desc: "Aged tenderloin, peppercorn jus, roasted vegetables.", img: mixedGrill },
  { name: "Sweet Selection", desc: "House-made mousses, puddings & seasonal fruit.", img: dessertsBuffet, badge: "Loved" },
];

const MENU = {
  Starters: [
    { name: "Wagyu Tartare", desc: "Capers, quail yolk, sourdough crisp.", price: "$24", img: dishTartare, rec: true },
    { name: "Burrata di Puglia", desc: "Heirloom tomato, basil oil, sea salt.", price: "$18" },
    { name: "Tuna Crudo", desc: "Yuzu, avocado, micro shiso.", price: "$22" },
  ],
  "Main Courses": [
    { name: "Truffle Ribeye", desc: "12oz aged ribeye, black truffle.", price: "$58", img: heroDish, rec: true },
    { name: "Rack of Lamb", desc: "Rosemary jus, seasonal vegetables.", price: "$46", img: dishLamb },
    { name: "Duck Confit", desc: "Cherry gastrique, pommes purée.", price: "$38" },
  ],
  Seafood: [
    { name: "Seared Scallops", desc: "Citrus beurre blanc, edible flowers.", price: "$36", img: dishScallops },
    { name: "Whole Sea Bream", desc: "Lemon, capers, brown butter.", price: "$42" },
    { name: "Atlantic Lobster", desc: "Drawn butter, herb risotto.", price: "$64", rec: true },
  ],
  Pasta: [
    { name: "Seafood Linguine", desc: "Prawns, clams, white wine garlic.", price: "$32", img: dishPasta },
    { name: "Black Truffle Tagliolini", desc: "Fresh egg pasta, parmigiano.", price: "$34", rec: true },
  ],
  Desserts: [
    { name: "Molten Lava Cake", desc: "Vanilla bean ice cream, gold leaf.", price: "$14", img: dishDessert, rec: true },
    { name: "Crème Brûlée", desc: "Madagascar vanilla, fresh berries.", price: "$12" },
  ],
  Drinks: [
    { name: "Smoked Negroni", desc: "Mezcal, Campari, applewood smoke.", price: "$18", img: dishCocktail, rec: true },
    { name: "California Old Fashioned", desc: "Bourbon, orange bitters, cherry.", price: "$16" },
  ],
};

const REVIEWS = [
  { name: "Sophia Martinez", rating: 5, date: "2 weeks ago", text: "Absolutely magical evening. The truffle ribeye was the best dish I've had this year. Service felt personal and unhurried." },
  { name: "James Anderson", rating: 5, date: "1 month ago", text: "Restaurant California has become our anniversary spot. The room glows, the wine list is deep, and every plate is composed like art." },
  { name: "Olivia Bennett", rating: 5, date: "3 weeks ago", text: "From the smoked negroni to the lava cake — every course was unforgettable. The chef even came by to say hello." },
  { name: "Daniel Chen", rating: 5, date: "5 days ago", text: "Stunning interior, flawless plating, warm staff. The seared scallops melted in my mouth. Already booking again." },
];

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const t = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(t);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function HomePage() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="home" className="relative min-h-dvh bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-lux flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 font-display text-xl font-bold tracking-tight">
            <img src={logo} alt="Restaurant California" className="h-11 w-11 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Restaurant</span>
              <span className="text-lg mt-0.5">California</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/80 hover:text-accent transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#reserve" className="hidden md:inline-flex btn-gold">Reserve</a>
            <button
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
            >
              <div className="space-y-1.5">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-display text-xl">Menu</span>
            <button onClick={() => setNavOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full border border-border">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-6 flex-1 text-2xl font-display">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setNavOpen(false)} className="hover:text-accent transition">
                {n.label}
              </a>
            ))}
            <a href="#reserve" onClick={() => setNavOpen(false)} className="btn-gold mt-4 text-base">Reserve a Table</a>
          </nav>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-dvh flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroDish}
            alt="Signature truffle ribeye"
            className="h-full w-full object-cover kenburns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </div>

        <div className="container-lux relative z-10 pt-32 pb-20">
          <div className="max-w-2xl fade-up">
            <span className="eyebrow">Fine Dining · Est. 2008</span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
              Restaurant<br />
              <span className="text-accent italic font-medium">California</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/85 font-display italic">
              A Taste Worth Remembering.
            </p>
            <p className="mt-4 max-w-xl text-foreground/70 leading-relaxed">
              Experience exceptional dining, unforgettable flavors, and a warm atmosphere
              crafted for every occasion.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#menu" className="btn-gold">Explore Menu <ChevronRight className="h-4 w-4" /></a>
              <a href="#reserve" className="btn-ghost-lux">Reserve a Table</a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
              <div>
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-2 text-sm font-semibold">4.9 Google</p>
                <p className="text-xs text-muted-foreground">2,400+ reviews</p>
              </div>
              <div>
                <MapPin className="h-4 w-4 text-accent" />
                <p className="mt-2 text-sm font-semibold">Los Angeles</p>
                <p className="text-xs text-muted-foreground">Beverly Blvd</p>
              </div>
              <div>
                <Clock className="h-4 w-4 text-accent" />
                <p className="mt-2 text-sm font-semibold">Open Today</p>
                <p className="text-xs text-muted-foreground">12pm – 11pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          <span>Scroll</span>
          <span className="h-10 w-px bg-foreground/30" />
        </div>
      </section>

      {/* VISUAL STORY */}
      <section id="about" className="py-24 md:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative">
            <img src={interior} alt="Restaurant interior" loading="lazy" width={1600} height={1200}
              className="w-full rounded-sm object-cover aspect-[4/5] shadow-[var(--shadow-lux)]" />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 max-w-[220px] rounded-sm">
              <Award className="h-6 w-6" />
              <p className="mt-3 font-display text-2xl leading-tight">15 Years of Excellence</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              More Than<br />Just A <span className="italic text-accent">Meal</span>.
            </h2>
            <span className="gold-divider mt-8" />
            <p className="mt-8 text-lg leading-relaxed text-foreground/75">
              At Restaurant California, every dish tells a story. Our chefs combine fresh ingredients,
              creativity, and passion to create unforgettable dining experiences.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              From the slow flicker of candlelight to the last bite of dessert — we craft moments
              that linger long after the plates are cleared.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "15+", l: "Years" },
                { n: "120", l: "Signature Dishes" },
                { n: "4.9★", l: "Rated" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl md:text-4xl text-accent font-bold">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow">Signature Dishes</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Crafted to be <span className="italic text-accent">remembered</span>.
              </h2>
            </div>
            <a href="#menu" className="text-accent text-sm uppercase tracking-widest hover:underline">View Full Menu →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DISHES.map((d) => (
              <article key={d.name} className="group relative overflow-hidden rounded-sm bg-card border border-border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" width={800} height={1000}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
                {d.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
                    {d.badge}
                  </span>
                )}
                <div className="p-5">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GallerySection />

      {/* MENU */}
      <MenuSection />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 bg-muted">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Trusted By Our Customers</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              Loved by <span className="italic text-accent">thousands</span>.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">· Based on 2,400+ Google reviews</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card border border-border p-7 rounded-sm flex flex-col">
                <div className="flex text-accent mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="text-sm leading-relaxed text-foreground/85 flex-1">"{r.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://www.google.com/search?q=Restaurant+California" target="_blank" rel="noreferrer" className="btn-ghost-lux">
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reserve" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={interior} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container-lux relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow">Reservations</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              Reserve Your <span className="italic text-accent">Table</span>.
            </h2>
            <p className="mt-6 text-foreground/75">
              Secure your seat and enjoy an unforgettable dining experience.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll confirm your reservation shortly."); }}
            className="max-w-3xl mx-auto bg-card/90 backdrop-blur-xl border border-border p-6 md:p-10 rounded-sm grid gap-5 md:grid-cols-2 shadow-[var(--shadow-lux)]"
          >
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Guests" name="guests" type="number" min={1} max={20} defaultValue={2} required />
            <Field label="Date" name="date" type="date" required />
            <Field label="Time" name="time" type="time" required />
            <button type="submit" className="btn-gold md:col-span-2 mt-2 w-full">
              <Calendar className="h-4 w-4" /> Reserve Now
            </button>
          </form>
        </div>
      </section>

      {/* CHEF / EXPERIENCE BAND */}
      <section className="py-24 md:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="eyebrow">From The Kitchen</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              Where every plate is <span className="italic text-accent">composed</span>.
            </h2>
            <p className="mt-8 text-foreground/75 leading-relaxed">
              Our chefs source from local farms and waters daily. Menus shift with the seasons —
              what arrives at your table tonight may not be there tomorrow.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { i: Award, t: "Award Winning", s: "Michelin recommended" },
                { i: Users, t: "Expert Chefs", s: "Decades of craft" },
                { i: Utensils, t: "Seasonal Menu", s: "Farm to table" },
                { i: Star, t: "Top Rated", s: "4.9 / 5 stars" },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-5 bg-muted rounded-sm border border-border">
                  <f.i className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{f.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{f.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={chef} alt="Chef plating" loading="lazy" width={1400} height={1600}
              className="w-full rounded-sm object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="contact" className="py-24 md:py-32 bg-muted">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Find Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              Visit <span className="italic text-accent">Restaurant California</span>.
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[
                { i: MapPin, t: "Address", s: "123 Beverly Blvd, Los Angeles, CA 90001" },
                { i: Clock, t: "Opening Hours", s: "Mon – Sun · 12:00 PM – 11:00 PM" },
                { i: Phone, t: "Phone", s: "(213) 555-7890" },
                { i: Mail, t: "Email", s: "hello@restaurantcalifornia.com" },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 p-6 bg-card border border-border rounded-sm">
                  <c.i className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="eyebrow !text-muted-foreground !text-[10px]">{c.t}</p>
                    <p className="mt-1 font-medium">{c.s}</p>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-3">
                <a href="tel:+12135557890" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-sm hover:border-accent transition">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-xs">Call</span>
                </a>
                <a href="https://maps.app.goo.gl/X6M8CTTbLCDctp677" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-sm hover:border-accent transition">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-xs">Directions</span>
                </a>
                <a href="https://wa.me/12135557890" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-sm hover:border-accent transition">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <span className="text-xs">WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-3 rounded-sm overflow-hidden border border-border min-h-[420px]">
              <iframe
                title="Restaurant California location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11722.835886268138!2d21.0809087!3d42.7310502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535f0723d2d34b%3A0xe3149ee5f0f649c3!2sRestaurant%20California!5e0!3m2!1sen!2sng!4v1781279438144!5m2!1sen!2sng"
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <span className="eyebrow">@restaurantcalifornia</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
                Follow our <span className="italic text-accent">feed</span>.
              </h2>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[exteriorNight, mixedGrill, diningHall1, gardenTerrace, dessertsBuffet, diningHall2, diningHall3, diningHall4].map((src, i) => (
              <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden rounded-sm group block">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors grid place-items-center">
                  <Instagram className="h-6 w-6 text-accent opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border pt-20 pb-32 md:pb-12">
        <div className="container-lux grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 font-display text-2xl font-bold">
              <img src={logo} alt="Restaurant California" className="h-12 w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Restaurant</span>
                <span className="text-xl mt-0.5">California</span>
              </span>
            </a>
            <p className="mt-6 max-w-md text-foreground/70 leading-relaxed">
              A taste worth remembering. Fine dining, signature dishes, and a warm atmosphere
              crafted for every occasion.
            </p>
          </div>
          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-accent">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/75">
              <li>123 Beverly Blvd<br />Los Angeles, CA 90001</li>
              <li>(213) 555-7890</li>
              <li>hello@restaurantcalifornia.com</li>
            </ul>
          </div>
        </div>
        <div className="container-lux mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Restaurant California. All rights reserved.</p>
          <p>Crafted with passion in Los Angeles.</p>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-card/95 backdrop-blur-xl border-t border-border grid grid-cols-4">
        {[
          { i: Phone, l: "Call", h: "tel:+12135557890" },
          { i: MapPin, l: "Directions", h: "https://maps.app.goo.gl/X6M8CTTbLCDctp677" },
          { i: MessageCircle, l: "WhatsApp", h: "https://wa.me/12135557890" },
          { i: Calendar, l: "Reserve", h: "#reserve" },
        ].map((a) => (
          <a key={a.l} href={a.h} className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-widest hover:text-accent">
            <a.i className="h-5 w-5 text-accent" />
            {a.l}
          </a>
        ))}
      </div>
    </main>
  );
}

function Field({ label, name, type = "text", ...rest }: {
  label: string; name: string; type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input
        name={name}
        type={type}
        {...rest}
        className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 rounded-sm text-sm transition-colors"
      />
    </label>
  );
}

function GallerySection() {
  const images = [
    { src: gallery1, span: "md:row-span-2" },
    { src: interior, span: "" },
    { src: dishLamb, span: "" },
    { src: gallery2, span: "" },
    { src: dishCocktail, span: "md:row-span-2" },
    { src: chef, span: "md:row-span-2" },
    { src: gallery3, span: "" },
    { src: dishDessert, span: "" },
    { src: dishScallops, span: "" },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              An immersive <span className="italic text-accent">experience</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Food, faces, flavor, and atmosphere — captured nightly inside our dining room.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img.src)}
              className={`relative overflow-hidden rounded-sm group ${img.span}`}
            >
              <img src={img.src} alt="" loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl grid place-items-center p-6 cursor-zoom-out">
          <button aria-label="Close" className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-border bg-card">
            <X className="h-4 w-4" />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-[92vw] object-contain rounded-sm shadow-[var(--shadow-lux)]" />
        </div>
      )}
    </section>
  );
}

function MenuSection() {
  const cats = Object.keys(MENU) as (keyof typeof MENU)[];
  const [active, setActive] = useState<keyof typeof MENU>(cats[0]);
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container-lux">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">The Menu</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Seasonal & <span className="italic text-accent">signature</span>.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all ${
                active === c
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border hover:border-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {MENU[active].map((item: any) => (
            <div key={item.name} className="flex gap-5 p-5 bg-card border border-border rounded-sm hover:border-accent transition group">
              {item.img ? (
                <img src={item.img} alt={item.name} loading="lazy"
                  className="h-24 w-24 shrink-0 object-cover rounded-sm" />
              ) : (
                <div className="h-24 w-24 shrink-0 grid place-items-center rounded-sm bg-muted">
                  <Utensils className="h-6 w-6 text-accent" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl truncate">{item.name}</h3>
                  <span className="flex-1 border-b border-dashed border-border" />
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                {item.rec && (
                  <span className="mt-3 inline-block text-[10px] uppercase tracking-widest text-accent font-semibold">
                    ★ Chef Recommended
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
