import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lock, Eye, Shield, Zap } from "lucide-react";

export const Hero = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const scrollToGame = () => {
    const gameSection = document.querySelector('.game-board-grid')?.closest('section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
            Outsmart Without Revealing
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Every move is encrypted. Strategy meets cryptography in this turn-based on-chain battle of wits.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={scrollToGame}
              size="lg"
              className="shadow-lg hover:shadow-primary/50"
            >
              Start Quest
            </Button>
            <Button 
              onClick={() => setShowHowItWorks(true)}
              variant="outline"
              size="lg"
            >
              How It Works
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={showHowItWorks} onOpenChange={setShowHowItWorks}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">How FHE Strategy Quest Works</DialogTitle>
            <DialogDescription className="text-base">
              Master the art of encrypted strategy
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">1. Plan Your Move</h3>
                <p className="text-muted-foreground">
                  Select tiles on the board to plan your strategy. Your selections are kept private through encryption.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2. Submit Encrypted Move</h3>
                <p className="text-muted-foreground">
                  Your move is encrypted using Fully Homomorphic Encryption (FHE) and submitted on-chain. Opponents cannot see your strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3. Reveal Phase</h3>
                <p className="text-muted-foreground">
                  After all players submit their moves, the reveal phase begins. Moves are decrypted simultaneously to prevent cheating.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">4. Next Turn</h3>
                <p className="text-muted-foreground">
                  Based on the revealed moves, the game state updates and the next turn begins. Adapt your strategy!
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <Lock className="inline h-4 w-4 mr-1" />
                All moves are encrypted on-chain, ensuring fair play and preventing opponents from predicting your strategy.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
