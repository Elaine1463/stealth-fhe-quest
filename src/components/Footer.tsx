export const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-4 glow-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © 2024 FHE Strategy Quest. All moves encrypted.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Docs
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Discord
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
