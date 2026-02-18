import { Mail, Linkedin, Phone, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className={`max-w-2xl mx-auto text-center reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground font-sans-body mb-3 reveal-child">
          Open to internships, research roles, and collaboration opportunities.
        </p>
        <p className="text-muted-foreground/60 font-sans-body text-sm mb-12 reveal-child">
          I'd love to hear about interesting projects and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:malavikamvmalu2004@gmail.com"
            className="reveal-child flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-sans-body font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/malavika-ganesh-m-v"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-child flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-sans-body font-semibold text-sm hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="/Malavika_Ganesh_Resume.pdf"
            download="Malavika_Ganesh_Resume.pdf"
            className="reveal-child flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-sans-body font-semibold text-sm hover:border-primary/40 hover:text-primary hover:scale-105 transition-all duration-300"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/50 font-sans-body reveal-child">
          <Phone size={14} />
          <span>+91 96866 30069</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
