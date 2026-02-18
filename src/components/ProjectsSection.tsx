const projects = [
  {
    title: "FlashChat — AI Research Paper Summarization",
    impact: "Transforms dense academic papers into digestible flashcards with AI-powered chat.",
    description:
      "An AI-powered learning platform built with Next.js, Express, and TypeScript. Users upload documents, generate smart flashcards, and interact with an AI assistant. Features Supabase-authenticated secure storage and real-time chat-based learning.",
    tech: ["Next.js", "Express", "TypeScript", "Supabase", "AI/NLP"],
    highlight: true,
  },
  {
    title: "Online Flashcard for Learning",
    impact: "Boosts retention through spaced repetition and personalized study paths.",
    description:
      "An interactive online flashcard platform designed to enhance learning, retention, and recall. Features customizable flashcards, spaced repetition algorithms, multimedia support, and progress tracking for a personalized study experience.",
    tech: ["JavaScript", "HTML/CSS", "UI/UX Design"],
    highlight: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground font-sans-body mb-14 max-w-xl mx-auto">
          A selection of projects showcasing my work in AI, web development, and user experience design.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glow-card rounded-xl p-8 border ${
                project.highlight
                  ? "border-primary/30 bg-card"
                  : "border-border bg-card"
              }`}
            >
              {project.highlight && (
                <span className="inline-block text-xs font-sans-body font-semibold tracking-wider uppercase text-primary mb-4">
                  ★ AI Project
                </span>
              )}
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-primary/80 font-sans-body text-sm font-medium mb-4 italic">
                {project.impact}
              </p>
              <p className="text-muted-foreground font-sans-body text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">
                    {t}
                  </span>
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

export default ProjectsSection;
