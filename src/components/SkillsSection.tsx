import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C Programming", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML/CSS", "Next.js", "Express.js", "REST APIs", "Supabase"],
  },
  {
    title: "AI / ML",
    skills: ["NLP", "Document Processing", "AI Assistants", "Data Handling"],
  },
  {
    title: "Tools & Design",
    skills: ["Figma", "Photoshop", "AutoCAD", "Git", "UI/UX Design"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Problem Solving", "Communication", "Collaboration", "Creativity", "Adaptability", "Presentation", "Time Management"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-14 text-center">
          Skills & <span className="text-primary">Technologies</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="space-y-4 reveal-child">
              <h3 className="text-lg font-serif font-semibold text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider max-w-2xl mx-auto mt-24" />
    </section>
  );
};

export default SkillsSection;
