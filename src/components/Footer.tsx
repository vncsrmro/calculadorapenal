import { Heart, Gift } from "lucide-react";
import { DonationModal } from "./DonationModal";

export function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <span>Desenvolvido com</span>
                    <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                    <span>pela</span>
                    <a
                        href="https://inovasys.digital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                        InovaSys
                    </a>
                </div>

                <DonationModal>
                    <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <Gift className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold group-hover:opacity-80 transition-opacity">
                            Mantenha o Projeto Online
                        </span>
                    </button>
                </DonationModal>
            </div>
        </footer>
    );
}
