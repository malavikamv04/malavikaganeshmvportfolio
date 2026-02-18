import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  {
    title: "Cultural Secretary",
    org: "Srinivas Institute of Technology",
    description: "Overseeing all cultural events and activities across the institution, coordinating with 500+ students and faculty.",
  },
  {
    title: "President — ACODE",
    org: "Association of Computer Science and Design Engineering, 2024–25",
    description: "Directed and executed event operations for the department, leading a team of 20+ members and organizing 10+ events.",
  },
  {
    title: "Envision Coordinator — ACODE",
    org: "2023–24",
    description: "Organized and managed flagship department events, coordinating logistics for 200+ participants.",
  },
];

const certifications = [
  { name: "AICTE Evaluated 2 Weeks Patent Course", link: null },
  { name: "Celonis — Business Analyst Virtual Internship", link: null },
  { name: "Google — Android Developer Virtual Internship", link: null },
  { name: "UiPath — RPA Developer Foundation", link: null },
  { name: "Global Certificate in Cloud Computing", link: null },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-14 text-center">
          Achievements & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((a) => (
            <div key={a.title} className="reveal-child glow-card rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-serif font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-xs font-sans-body text-primary font-medium mb-3">{a.org}</p>
              <p className="text-sm text-muted-foreground font-sans-body leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">Certifications</h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="reveal-child flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-4 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-sm font-sans-body text-muted-foreground">{c.name}</span>
              <ExternalLink size={14} className="text-primary/50 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider max-w-2xl mx-auto mt-24" />
    </section>
  );
};

export default AchievementsSection;
