import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Heart, Server, Zap } from "lucide-react";

interface DonationModalProps {
    children: React.ReactNode;
}

export function DonationModal({ children }: DonationModalProps) {

    // Configuration
    const GOAL_AMOUNT = 150; // Meta mensal
    const CURRENT_AMOUNT = 0; // Valor arrecadado este mês
    const PERCENTAGE = Math.min((CURRENT_AMOUNT / GOAL_AMOUNT) * 100, 100);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        Apoie o Projeto
                    </DialogTitle>
                    <DialogDescription>
                        Este projeto é gratuito, mas mantê-lo online tem custos. Sua ajuda garante que continuemos ativos!
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4 space-y-6">
                    {/* Sustainability Goal Section */}
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-muted-foreground">Meta de Sustentabilidade (Mensal)</span>
                            <span className="text-primary">{CURRENT_AMOUNT > 0 ? `R$ ${CURRENT_AMOUNT}` : "R$ 0"} / R$ {GOAL_AMOUNT}</span>
                        </div>
                        <div className="relative">
                            <Progress value={PERCENTAGE} className="h-3 bg-secondary" />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            Financia: <Server className="w-3 h-3 inline mx-1" /> Servidor + <Zap className="w-3 h-3 inline mx-1" /> API AI + ☕ Café do Dev
                        </p>
                    </div>

                    {/* Donation Action Section */}
                    <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-4 border border-border/50">
                        <div className="relative group">
                            {/* QR Code */}
                            <div className="w-40 h-40 bg-white p-2 rounded-md shadow-sm">
                                <img
                                    src="/qrcode-pix.png"
                                    alt="QR Code PIX"
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>

                        <div className="w-full text-center space-y-2">
                            <p className="text-sm font-medium text-foreground">
                                Abra seu App do banco e escaneie o QR Code
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded text-xs text-center text-blue-600 dark:text-blue-400">
                    Transparência: Todo valor arrecadado é revertido para melhorias e custos operacionais do projeto.
                </div>
            </DialogContent>
        </Dialog>
    );
}
