const AIResearchSection = () => {
  return (
    <section id="ai-research" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
          AI & <span className="text-primary">Research Work</span>
        </h2>
        <p className="text-center text-muted-foreground font-sans-body mb-14 max-w-xl mx-auto">
          My core focus — building intelligent systems that process, analyze, and transform information.
        </p>

        <div className="glow-card rounded-xl border border-primary/30 bg-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-sans-body font-semibold tracking-wider uppercase text-primary">
              Flagship AI Project
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            FlashChat — AI-Powered Document Intelligence
          </h3>

          <p className="text-muted-foreground font-sans-body leading-relaxed mb-8">
            A comprehensive AI learning platform that transforms how users interact with academic content. 
            Built with a modern full-stack architecture, FlashChat enables document upload, intelligent 
            flashcard generation using NLP, and conversational AI assistance — all secured with 
            Supabase authentication and real-time data handling.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-sans-body font-semibold text-primary mb-3 uppercase tracking-wider">
                Technical Architecture
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans-body">
                <li>• Next.js frontend with TypeScript</li>
                <li>• Express.js API server</li>
                <li>• Supabase auth & storage</li>
                <li>• AI/NLP document processing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-sans-body font-semibold text-primary mb-3 uppercase tracking-wider">
                Key Capabilities
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans-body">
                <li>• Intelligent document summarization</li>
                <li>• Automated flashcard generation</li>
                <li>• Chat-based AI learning assistant</li>
                <li>• Secure file management</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "Express", "TypeScript", "Supabase", "AI/NLP", "REST APIs", "Document Processing"].map((t) => (
              <span key={t} className="skill-tag text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider max-w-2xl mx-auto mt-24" />
    </section>
  );
};

export default AIResearchSection;
