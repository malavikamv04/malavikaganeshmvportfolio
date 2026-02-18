import { useEffect, useState } from "react";

const roles = [
  "AI-Powered Applications",
  "Modern Web Development",
  "User-Centric Design",
  "Intelligent Interfaces",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    duration: `${6 + Math.random() * 8}s`,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-cream/5 blur-3xl" />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm font-sans-body tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in-up">
          AI · Web Development · UI/UX Design
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 animate-fade-in-up-delay-1">
          <span className="text-gradient">MALAVIKA</span>
          <br />
          <span className="text-foreground">GANESH M V</span>
        </h1>

        {/* Typing effect */}
        <div className="h-8 mb-4 animate-fade-in-up-delay-2">
          <span className="text-lg md:text-xl font-sans-body text-primary font-medium">
            {displayed}
          </span>
          <span className="typing-cursor" />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground font-sans-body max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2 leading-relaxed">
          Building intelligent, user-centric digital experiences — from AI-powered platforms
          to elegant web applications that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans-body font-semibold text-sm tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/Malavika_Ganesh_Resume.pdf"
            download="Malavika_Ganesh_Resume.pdf"
            className="px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-sans-body font-semibold text-sm tracking-wide hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
