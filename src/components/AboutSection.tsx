import { useScrollReveal } from "@/hooks/useScrollReveal";

const languages = [
  { name: "English", level: 90 },
  { name: "Malayalam", level: 95 },
  { name: "Kannada", level: 85 },
  { name: "Tamil", level: 70 },
  { name: "Hindi", level: 55 },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-5 text-muted-foreground font-sans-body leading-relaxed text-base md:text-lg mb-14">
          <p className="reveal-child">
            I'm a Computer Science and Design student at Srinivas Institute of Technology with a deep passion for
            building technology that genuinely helps people. My journey spans AI-powered applications, modern web
            development, and thoughtful UI/UX design.
          </p>
          <p className="reveal-child">
            From creating AI research paper summarization tools to interactive learning platforms, I thrive at the
            intersection of intelligent systems and beautiful interfaces. I believe the best products are both
            technically robust and delightful to use.
          </p>
          <p className="text-primary/90 font-medium reveal-child">
            Currently seeking internship and research opportunities in AI, frontend development, and product
            design — where I can contribute to teams building meaningful, impactful products.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif font-semibold mb-6 text-foreground">Language Proficiency</h3>
          <div className="grid gap-4">
            {languages.map((lang, i) => (
              <div key={lang.name} className="flex items-center gap-4 reveal-child">
                <span className="text-sm font-sans-body text-muted-foreground w-24">{lang.name}</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/80 lang-bar"
                    style={{ width: isVisible ? `${lang.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider max-w-2xl mx-auto mt-24" />
    </section>
  );
};

export default AboutSection;
