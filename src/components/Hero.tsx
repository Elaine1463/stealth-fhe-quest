export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
          Outsmart Without Revealing
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          Every move is encrypted. Strategy meets cryptography in this turn-based on-chain battle of wits.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/50">
            Start Quest
          </button>
          <button className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all hover:scale-105">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};
