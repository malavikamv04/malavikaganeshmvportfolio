const languages = [
  { name: "English", level: 90 },
  { name: "Malayalam", level: 95 },
  { name: "Kannada", level: 85 },
  { name: "Tamil", level: 60 },
  { name: "Hindi", level: 70 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-5 text-muted-foreground font-sans-body leading-relaxed text-base md:text-lg mb-14">
          <p>
            I'm a Computer Science and Design student at Srinivas Institute of Technology with a deep passion for 
            building technology that genuinely helps people. My journey spans AI-powered applications, modern web 
            development, and thoughtful UI/UX design.
          </p>
          <p>
            From creating AI research paper summarization tools to interactive learning platforms, I thrive at the 
            intersection of intelligent systems and beautiful interfaces. I believe the best products are both 
            technically robust and delightful to use.
          </p>
          <p className="text-primary/90 font-medium">
            Currently seeking internship and research opportunities in AI, frontend development, and product 
            design — where I can contribute to teams building meaningful, impactful products.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif font-semibold mb-6 text-foreground">Language Proficiency</h3>
          <div className="grid gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="text-sm font-sans-body text-muted-foreground w-24">{lang.name}</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/80 transition-all duration-1000"
                    style={{ width: `${lang.level}%` }}
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
