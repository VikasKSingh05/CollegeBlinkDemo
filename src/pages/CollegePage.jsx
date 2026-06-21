import React, { useState } from "react";
import {
  MapPin, CheckCircle2, Star, ChevronDown, Bookmark,
  Scale, ArrowRight, Building2, Users, GraduationCap,
  TreePine, Home, Wifi, UtensilsCrossed, ShieldCheck, Clock
} from "lucide-react";

const C = {
  indigo: "#1F2A5C",
  indigoDeep: "#161E47",
  paper: "#FAF8F3",
  ink: "#1A1A2E",
  inkSoft: "#5C5A6E",
  marigold: "#E8A33D",
  marigoldDeep: "#C97F1E",
  green: "#2F9E63",
  hairline: "#E2DCC8",
  card: "#FFFFFF",
};

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
`;

const courses = [
  { branch: "Computer Science & Engineering", duration: "4 yrs", seats: 120, cutoff: "AIR 1 – 65" },
  { branch: "Electrical Engineering", duration: "4 yrs", seats: 150, cutoff: "AIR 250 – 900" },
  { branch: "Mechanical Engineering", duration: "4 yrs", seats: 130, cutoff: "AIR 800 – 1800" },
  { branch: "Mathematics & Computing", duration: "4 yrs", seats: 60, cutoff: "AIR 300 – 700" },
];

const pgs = [
  { name: "Hauz Khas Student Nest", type: "Co-ed", distance: "0.6 km", price: "₹9,500/mo", rating: 4.4, verified: true },
  { name: "Zolo Aurora", type: "Girls only", distance: "1.1 km", price: "₹11,000/mo", rating: 4.6, verified: true },
  { name: "Campus View PG", type: "Boys only", distance: "0.9 km", price: "₹8,200/mo", rating: 4.1, verified: false },
];

const reviews = [
  { name: "Devansh R.", batch: "CSE, 2025", rating: 5, text: "The campus pushes you to think beyond the syllabus. Placement support in the final year was genuinely solid." },
  { name: "Meher K.", batch: "EE, 2024", rating: 4, text: "Academics are intense but the peer group makes it worth it. Hostel food could be better, everything else delivers." },
];

const faqs = [
  { q: "What is the average package offered?", a: "Branch-dependent, but the median package across the last placement cycle sat comfortably in the ₹18-24L range, with top recruiters going higher." },
  { q: "Is hostel accommodation guaranteed?", a: "Yes, for the full duration of the program, though room sharing varies by year and branch demand." },
  { q: "Does this college accept JEE Advanced score directly?", a: "Yes, admission is through JEE Advanced rank via JoSAA counselling rounds." },
];

function Stat({ label, value, accent }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-2" style={{ minWidth: 76 }}>
      <span
        className="text-lg font-semibold"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: accent || C.ink }}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-wide mt-1 text-center" style={{ color: C.inkSoft }}>
        {label}
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-5">
      <div
        className="text-xs font-semibold uppercase tracking-widest mb-1"
        style={{ color: C.marigoldDeep, fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
        {title}
      </h2>
    </div>
  );
}

export default function CollegePage() {
  const [saved, setSaved] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ background: C.paper, fontFamily: "'IBM Plex Sans', sans-serif", color: C.ink }} className="w-full min-h-screen pb-20 md:pb-0">
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur" style={{ background: "rgba(250,248,243,0.92)", borderBottom: `1px solid ${C.hairline}` }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <img
            src="/image.png"
            alt="CollegeBlink"
            className="h-9"
            style={{ objectFit: "contain" }}
          />
          <button
            onClick={() => setSaved(s => !s)}
            className="hidden md:flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition"
            style={{
              background: saved ? C.green : "transparent",
              color: saved ? "#fff" : C.indigo,
              border: `1px solid ${saved ? C.green : C.indigo}`,
            }}
          >
            <Bookmark size={14} fill={saved ? "#fff" : "none"} />
            {saved ? "Shortlisted" : "Shortlist"}
          </button>
        </div>
      </header>

      <section style={{ background: C.indigo }} className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16 sm:pt-14 sm:pb-24 relative grid md:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium mb-4" style={{ color: "#C9D0EE" }}>
              <span className="px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }}>GOVERNMENT</span>
              <span>·</span>
              <span>Estd. 1961</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-[1.1]" style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}>
              Indian Institute of<br />Technology Delhi
            </h1>
            <div className="flex items-center gap-1.5 mt-4 text-sm" style={{ color: "#C9D0EE" }}>
              <MapPin size={15} />
              Hauz Khas, New Delhi
            </div>
            <p className="mt-5 text-sm sm:text-base leading-relaxed max-w-md" style={{ color: "#C9D0EE" }}>
              One of India's premier engineering institutes, known for rigorous academics,
              strong research output, and consistently high placement outcomes across core and tech roles.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <button
                onClick={() => setSaved(s => !s)}
                className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition"
                style={{ background: C.marigold, color: C.indigoDeep }}
              >
                <Bookmark size={15} fill={saved ? C.indigoDeep : "none"} />
                {saved ? "Shortlisted" : "Add to Shortlist"}
              </button>
              <button className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
                <Scale size={15} />
                Compare
              </button>
            </div>
          </div>

          <div className="relative justify-self-start md:justify-self-end w-full max-w-[280px]">
            <div
              className="relative rounded-2xl p-4 pt-5"
              style={{ background: C.card, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.35)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: C.inkSoft, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Smart Match
                </span>
                <span
                  className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#E6F5EC", color: C.green }}
                >
                  <CheckCircle2 size={11} /> Verified
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace", color: C.indigo }}>94</span>
                <span className="text-lg font-semibold" style={{ color: C.indigo }}>%</span>
                <span className="text-xs ml-1" style={{ color: C.inkSoft }}>match for your profile</span>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-3" style={{ borderTop: `1px dashed ${C.hairline}` }}>
                <Stat label="Placement" value="92%" accent={C.green} />
                <Stat label="Fees/yr" value="₹2.1L" />
                <Stat label="Accept." value="5%" accent={C.marigoldDeep} />
              </div>
            </div>

            <div
              className="h-3 w-full"
              style={{
                backgroundImage: `radial-gradient(circle, ${C.indigo} 3px, transparent 3px)`,
                backgroundSize: "14px 6px",
                backgroundPosition: "top center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="-mt-8 sm:-mt-10 relative z-10 rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-x"
          style={{ background: C.card, border: `1px solid ${C.hairline}`, boxShadow: "0 12px 28px -16px rgba(31,42,92,0.25)" }}
        >
          {[
            { icon: GraduationCap, label: "NIRF Rank", value: "#2" },
            { icon: Users, label: "Students", value: "8,500" },
            { icon: Building2, label: "Faculty Ratio", value: "1:9" },
            { icon: TreePine, label: "Campus", value: "320 ac" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 py-5 px-2" style={{ borderColor: C.hairline }}>
              <f.icon size={18} style={{ color: C.indigo }} />
              <span className="text-sm font-semibold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{f.value}</span>
              <span className="text-[11px]" style={{ color: C.inkSoft }}>{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <SectionHeading eyebrow="Admissions" title="Courses & Cutoffs" />
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.hairline}`, background: C.card }}>
          {courses.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 sm:px-6 py-4 gap-3"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${C.hairline}` }}
            >
              <div>
                <div className="font-medium text-sm sm:text-base">{c.branch}</div>
                <div className="text-xs mt-0.5" style={{ color: C.inkSoft }}>{c.duration} · {c.seats} seats</div>
              </div>
              <div
                className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
                style={{ background: "#EFF1FA", color: C.indigo, fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {c.cutoff}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <SectionHeading eyebrow="New · My First Idea" title="Nearby PGs & Stay" />
        <p className="text-sm -mt-3 mb-6 max-w-lg" style={{ color: C.inkSoft }}>
          Verified PGs and flats within a 2 km radius, so accommodation isn't a last-minute scramble.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {pgs.map((p, i) => (
            <div key={i} className="rounded-2xl p-4 flex flex-col gap-3" style={{ background: C.card, border: `1px solid ${C.hairline}` }}>
              <div className="flex items-start justify-between">
                <Home size={16} style={{ color: C.indigo }} />
                {p.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#E6F5EC", color: C.green }}>
                    <ShieldCheck size={10} /> Verified
                  </span>
                )}
              </div>
              <div>
                <div className="font-medium text-sm">{p.name}</div>
                <div className="text-xs mt-1" style={{ color: C.inkSoft }}>{p.type} · {p.distance} away</div>
              </div>
              <div className="flex items-center justify-between pt-2" style={{ borderTop: `1px dashed ${C.hairline}` }}>
                <span className="text-sm font-semibold" style={{ fontFamily: "'IBM Plex Mono', monospace", color: C.indigo }}>{p.price}</span>
                <span className="flex items-center gap-1 text-xs font-medium">
                  <Star size={12} fill={C.marigold} color={C.marigold} />
                  {p.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <SectionHeading eyebrow="On Campus" title="Campus Life" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Wifi, label: "Wi-Fi Campus" },
            { icon: UtensilsCrossed, label: "12 Mess Halls" },
            { icon: TreePine, label: "Open Greens" },
            { icon: Building2, label: "Modern Labs" },
          ].map((c, i) => (
            <div key={i} className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2" style={{ background: i % 2 === 0 ? C.indigo : C.marigold }}>
              <c.icon size={22} color={i % 2 === 0 ? "#fff" : C.indigoDeep} />
              <span className="text-xs font-medium text-center px-2" style={{ color: i % 2 === 0 ? "#fff" : C.indigoDeep }}>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <SectionHeading eyebrow="From Students" title="Verified Reviews" />
        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: C.card, border: `1px solid ${C.hairline}` }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill={s < r.rating ? C.marigold : "none"} color={C.marigold} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.ink }}>{r.text}</p>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: C.inkSoft }}>
                <span style={{ color: C.ink }}>{r.name}</span>
                <span>·</span>
                <span>{r.batch}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ background: C.indigo }}>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: C.marigold, fontFamily: "'IBM Plex Mono', monospace" }}>
              New · My Second Idea 
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}>
              Track this application in your dashboard
            </h3>
            <p className="text-sm max-w-md" style={{ color: "#C9D0EE" }}>
              Once you apply, see status, deadlines, and documents for every college in one place — no more checking five tabs.
            </p>
            <div className="flex items-center gap-2 mt-5 text-xs font-medium" style={{ color: "#C9D0EE" }}>
              {["Shortlisted", "Applied", "Result"].map((step, i) => (
                <React.Fragment key={step}>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: i === 0 ? C.marigold : "rgba(255,255,255,0.1)", color: i === 0 ? C.indigoDeep : "#C9D0EE" }}>
                    <Clock size={11} />
                    {step}
                  </span>
                  {i < 2 && <ArrowRight size={12} />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap" style={{ background: "#fff", color: C.indigo }}>
            Open Dashboard <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked" />
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.hairline}`, background: C.card }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.hairline}` }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
              >
                <span className="text-sm sm:text-base font-medium pr-4">{f.q}</span>
                <ChevronDown size={16} style={{ color: C.inkSoft, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>
              {openFaq === i && (
                <p className="px-4 sm:px-6 pb-4 text-sm leading-relaxed" style={{ color: C.inkSoft }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex gap-2 p-3" style={{ background: C.card, borderTop: `1px solid ${C.hairline}` }}>
        <button onClick={() => setSaved(s => !s)} className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2.5 rounded-full" style={{ background: saved ? C.green : C.indigo, color: "#fff" }}>
          <Bookmark size={14} fill="#fff" />
          {saved ? "Shortlisted" : "Shortlist"}
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2.5 rounded-full" style={{ border: `1px solid ${C.indigo}`, color: C.indigo }}>
          <Scale size={14} />
          Compare
        </button>
      </div>
    </div>
  );
}
