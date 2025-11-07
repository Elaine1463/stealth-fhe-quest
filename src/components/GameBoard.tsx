import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type TileState = "hidden" | "revealed" | "active";

interface Tile {
  id: number;
  state: TileState;
  value?: string;
}

export const GameBoard = () => {
  const [tiles, setTiles] = useState<Tile[]>(
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      state: "hidden" as TileState,
    }))
  );

  const [currentTurn, setCurrentTurn] = useState(1);
  const { toast } = useToast();

  const activeTiles = tiles.filter(tile => tile.state === "active");

  const handleTileClick = (id: number) => {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.id === id
          ? { ...tile, state: tile.state === "active" ? "hidden" : "active" }
          : tile
      )
    );
  };

  const handleSubmitMove = () => {
    if (activeTiles.length === 0) {
      toast({
        title: "No moves selected",
        description: "Please select at least one tile before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Move encrypted & submitted!",
      description: `${activeTiles.length} tiles encrypted on-chain. Advancing to next turn...`,
    });

    // Simulate move submission and turn advancement
    setTimeout(() => {
      setTiles((prev) =>
        prev.map((tile) =>
          tile.state === "active" ? { ...tile, state: "revealed" } : tile
        )
      );
      setCurrentTurn((prev) => prev + 1);
      
      toast({
        title: "Turn complete",
        description: `Turn ${currentTurn + 1} starting. Plan your next move!`,
      });
    }, 1500);
  };

  const handleResetMoves = () => {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.state === "active" ? { ...tile, state: "hidden" } : tile
      )
    );
    
    toast({
      title: "Moves reset",
      description: "All selected tiles have been cleared.",
    });
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-xl p-6 glow-border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Current Quest</h3>
              <p className="text-muted-foreground">Turn {currentTurn} - Planning Phase</p>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-foreground">{activeTiles.length} Selected Tiles</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeOff className="h-4 w-4 text-accent" />
                <span className="text-foreground">Hidden Mode</span>
              </div>
            </div>
          </div>

          <div className="game-board-grid grid-cols-5 mb-6">
            {tiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile.id)}
                className={`
                  aspect-square rounded-lg flex items-center justify-center
                  transition-all duration-300 hover:scale-105
                  ${
                    tile.state === "hidden"
                      ? "tile-hidden"
                      : tile.state === "active"
                      ? "bg-primary/20 border-2 border-primary shadow-lg shadow-primary/50"
                      : "bg-muted"
                  }
                `}
              >
                {tile.state === "active" && (
                  <Lock className="h-6 w-6 text-primary animate-tile-reveal" />
                )}
                {tile.state === "revealed" && (
                  <Eye className="h-6 w-6 text-muted-foreground" />
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={handleSubmitMove}
              className="flex-1"
              size="lg"
            >
              Submit Encrypted Move
            </Button>
            <Button 
              onClick={handleResetMoves}
              variant="secondary"
              size="lg"
            >
              Reset Moves
            </Button>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <Lock className="inline h-4 w-4 mr-1" />
              Your moves are encrypted on-chain. Opponents can't see your strategy until the reveal phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
