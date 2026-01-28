import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
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
        </footer>
    );
}
