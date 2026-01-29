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
                    <button className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer animate-in fade-in zoom-in">
                        <Gift className="w-4 h-4 animate-bounce" />
                        <span className="font-bold tracking-wide">
                            Mantenha o Projeto Online
                        </span>
                    </button>
                </DonationModal>
            </div>
        </footer>
    );
}
