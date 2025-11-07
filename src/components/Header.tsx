import { Button } from "@/components/ui/button";
import logo from "@/assets/fhe-logo.png";

export const Header = () => {
  const handleConnectWallet = () => {
    // Rainbow Wallet connection logic will go here
    console.log("Connecting Rainbow Wallet...");
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FHE Strategy Quest" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">FHE Strategy Quest</h1>
              <p className="text-xs text-muted-foreground">Outsmart Without Revealing</p>
            </div>
          </div>
          
          <Button 
            onClick={handleConnectWallet}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            Connect Rainbow Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};
