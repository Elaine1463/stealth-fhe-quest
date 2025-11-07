import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/fhe-logo.png";
import { Wallet } from "lucide-react";

export const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const { toast } = useToast();

  const handleConnectWallet = () => {
    // Simulate wallet connection
    toast({
      title: "Connecting to Rainbow Wallet...",
      description: "Please approve the connection in your wallet",
    });

    setTimeout(() => {
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 10);
      setWalletAddress(mockAddress);
      setIsConnected(true);
      
      toast({
        title: "Wallet Connected!",
        description: `Connected to ${mockAddress}`,
      });
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    toast({
      title: "Wallet Disconnected",
      description: "You have been disconnected from Rainbow Wallet",
    });
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
          
          {isConnected ? (
            <Button 
              onClick={handleDisconnect}
              variant="outline"
              className="gap-2"
            >
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
              <span className="sm:hidden">Connected</span>
            </Button>
          ) : (
            <Button 
              onClick={handleConnectWallet}
              className="gap-2"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
