const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-sans-body text-muted-foreground/50">
          © {new Date().getFullYear()} Malavika Ganesh M V. Crafted with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
