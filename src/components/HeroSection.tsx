const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-cream/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm font-sans-body tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in-up">
          AI · Web Development · UI/UX Design
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 animate-fade-in-up-delay-1">
          <span className="text-gradient">MALAVIKA</span>
          <br />
          <span className="text-foreground">GANESH M V</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-sans-body max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2 leading-relaxed">
          Building intelligent, user-centric digital experiences — from AI-powered platforms 
          to elegant web applications that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/Malavika_Ganesh_Resume.pdf"
            download
            className="px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-sans-body font-semibold text-sm tracking-wide hover:bg-primary/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
