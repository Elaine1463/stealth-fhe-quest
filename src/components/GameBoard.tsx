import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

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
  const [encryptedMoves, setEncryptedMoves] = useState(0);

  const handleTileClick = (id: number) => {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.id === id
          ? { ...tile, state: tile.state === "active" ? "hidden" : "active" }
          : tile
      )
    );
    setEncryptedMoves((prev) => prev + 1);
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
                <span className="text-foreground">{encryptedMoves} Encrypted Moves</span>
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
            <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Submit Encrypted Move
            </button>
            <button className="px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all">
              Reset Moves
            </button>
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
