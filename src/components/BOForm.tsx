import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Copy,
  Shield,
  FileText,
  Users,
  AlertTriangle,
  Scale,
  Package,
  CheckCircle2,
  Search,
  Gavel,
  Siren,
  Wand2
} from "lucide-react";
import { toast } from "sonner";
import { codigoPenal, categoriasPenais } from "@/data/codigoPenal";
import { naturezaOcorrencias, gruposNatureza, type NaturezaItem } from "@/data/naturezaOcorrencia";
import { Footer } from "./Footer";

interface Suspeito {
  nome: string;
  rg: string;
  caracteristicas: string;
}

interface FormData {
  unidade: string;
  prefixo: string;
  data: string;
  localOcorrencia: string;
  encarregado: string;
  motorista: string;
  terceiroHomem: string;
  quartoHomem: string;
  quintoHomem: string;
  suspeitos: Suspeito[];
  naturezaFatos: string[];
  artigosDelitos: string[];
  apreensao: string;
  ocorrencia: string;
}

const BOForm = () => {
  const [formData, setFormData] = useState<FormData>({
    unidade: "",
    prefixo: "",
    data: new Date().toLocaleDateString("pt-BR"),
    localOcorrencia: "",
    encarregado: "",
    motorista: "",
    terceiroHomem: "",
    quartoHomem: "",
    quintoHomem: "",
    suspeitos: [{ nome: "", rg: "", caracteristicas: "" }],
    naturezaFatos: [],
    artigosDelitos: [],
    apreensao: "",
    ocorrencia: "",
  });

  const [naturezaSearch, setNaturezaSearch] = useState("");
  const [artigoSearch, setArtigoSearch] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState<string>("all");
  const [selectedGrupo, setSelectedGrupo] = useState<string>("all");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Filtrar naturezas
  const filteredNaturezas = useMemo(() => {
    return naturezaOcorrencias.filter((n) => {
      const matchSearch =
        n.codigo.toLowerCase().includes(naturezaSearch.toLowerCase()) ||
        n.descricao.toLowerCase().includes(naturezaSearch.toLowerCase());
      const matchGrupo = selectedGrupo === "all" || n.grupo === selectedGrupo;
      return matchSearch && matchGrupo;
    });
  }, [naturezaSearch, selectedGrupo]);

  // Filtrar artigos
  const filteredArtigos = useMemo(() => {
    return codigoPenal.filter((a) => {
      const matchSearch =
        a.artigo.toLowerCase().includes(artigoSearch.toLowerCase()) ||
        a.tipificacao.toLowerCase().includes(artigoSearch.toLowerCase());
      const matchCategoria = selectedCategoria === "all" || a.categoria === selectedCategoria;
      return matchSearch && matchCategoria;
    });
  }, [artigoSearch, selectedCategoria]);

  // Calcular totais
  const totais = useMemo(() => {
    let penaTotal = 0;
    let multaTotal = 0;
    let fiancaTotal = 0;
    let semFianca = false;

    formData.artigosDelitos.forEach((artigoId) => {
      const artigo = codigoPenal.find((a) => a.artigo === artigoId);
      if (artigo) {
        const pena = parseInt(artigo.pena) || 0;
        const multa = parseFloat(artigo.multa.replace(".", "")) || 0;

        penaTotal += pena;
        multaTotal += multa;

        if (artigo.fiancavel) {
          const fianca = parseFloat(artigo.fiancavel.replace(".", "")) || 0;
          fiancaTotal += fianca;
        } else {
          semFianca = true;
        }
      }
    });

    return { penaTotal, multaTotal, fiancaTotal, semFianca };
  }, [formData.artigosDelitos]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSuspeitoChange = (index: number, field: keyof Suspeito, value: string) => {
    setFormData((prev) => {
      const newSuspeitos = [...prev.suspeitos];
      newSuspeitos[index] = { ...newSuspeitos[index], [field]: value };
      return { ...prev, suspeitos: newSuspeitos };
    });
  };

  const addSuspeito = () => {
    setFormData((prev) => ({
      ...prev,
      suspeitos: [...prev.suspeitos, { nome: "", rg: "", caracteristicas: "" }],
    }));
  };

  const removeSuspeito = (index: number) => {
    if (formData.suspeitos.length > 1) {
      setFormData((prev) => ({
        ...prev,
        suspeitos: prev.suspeitos.filter((_, i) => i !== index),
      }));
    }
  };

  const toggleNatureza = (codigo: string) => {
    setFormData((prev) => {
      const isSelected = prev.naturezaFatos.includes(codigo);
      return {
        ...prev,
        naturezaFatos: isSelected
          ? prev.naturezaFatos.filter(n => n !== codigo)
          : [...prev.naturezaFatos, codigo]
      }
    })
  }

  const toggleArtigo = (artigoId: string) => {
    setFormData((prev) => {
      const isSelected = prev.artigosDelitos.includes(artigoId);
      return {
        ...prev,
        artigosDelitos: isSelected
          ? prev.artigosDelitos.filter((a) => a !== artigoId)
          : [...prev.artigosDelitos, artigoId],
      };
    });
  };

  const generateReportAI = async () => {
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

    console.log("--- DEBUG START ---");
    console.log("Webhook URL from .env:", webhookUrl);

    if (!webhookUrl || webhookUrl.includes("replace-me")) {
      console.error("Webhook URL inválida!");
      toast.error("URL do Webhook n8n não configurada no .env");
      return;
    }

    try {
      setIsGenerating(true);
      toast.info("Gerando relatório com IA...");

      const payload = {
        ...formData,
        naturezaDetalhada: formData.naturezaFatos.map(cod => {
          const nat = naturezaOcorrencias.find(n => n.codigo === cod);
          return nat ? `${cod} - ${nat.descricao}` : cod;
        }),
        artigosDetalhados: formData.artigosDelitos.map(art => {
          const a = codigoPenal.find(cp => cp.artigo === art);
          return a ? `Art. ${a.artigo} - ${a.tipificacao}` : art;
        })
      };

      console.log("Payload enviado:", JSON.stringify(payload, null, 2));

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const text = await response.text();
        console.error("Erro na resposta:", text);
        throw new Error("Falha na comunicação com n8n");
      }

      const data = await response.json();
      console.log("Dados recebidos:", data);

      // Assumindo que o n8n retorna { "text": "..." } ou { "output": "..." }
      const generatedText = data.text || data.output || data.message;

      if (generatedText) {
        handleInputChange("ocorrencia", generatedText);
        toast.success("Relatório gerado com sucesso!");
      } else {
        console.error("Texto não encontrado na resposta. Chaves disponíveis:", Object.keys(data));
        throw new Error("Formato de resposta inválido");
      }

    } catch (error) {
      console.error("Erro no catch:", error);
      toast.error("Erro ao gerar relatório");
    } finally {
      setIsGenerating(false);
      console.log("--- DEBUG END ---");
    }
  }

  const formatNumber = (num: number): string => {
    return num.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  const generateBO = (): string => {
    const nomes = formData.suspeitos.map((s) => s.nome || "N/A").join(", ");
    const rgs = formData.suspeitos.map((s) => s.rg || "N/A").join(", ");
    const caracteristicas = formData.suspeitos
      .map((s) => s.caracteristicas)
      .filter(Boolean)
      .join(" | ") || "N/A";

    const artigosNumeros = formData.artigosDelitos
      .map((a) => {
        const match = a.match(/\d+/);
        return match ? match[0] : a;
      })
      .join(", ");

    const naturezaString = formData.naturezaFatos.length > 0
      ? formData.naturezaFatos.join(", ")
      : "N/A";

    const bo = `BO PM/ (${formData.unidade || "UNIDADE"} - ${formData.prefixo || "PREFIXO"}) ${formData.data}

ENCARREGADO: ${formData.encarregado || "N/A"}
MOTORISTA: ${formData.motorista || "N/A"}
TERCEIRO HOMEM: ${formData.terceiroHomem || "N/A"}
QUARTO HOMEM: ${formData.quartoHomem || "N/A"}
QUINTO HOMEM: ${formData.quintoHomem || "N/A"}

-

INFORMAÇÕES DO SUSPEITO: ${caracteristicas}
NOME DOS SUSPEITO(S): ${nomes}
RG(S): ${rgs}
-
NATUREZA DOS FATOS: ${naturezaString}
ARTIGOS/DELITOS: ${artigosNumeros || "N/A"}

-

APREENSÃO: ${formData.apreensao || "N/A"}

-

OCORRÊNCIA: ${formData.ocorrencia || "N/A"}

---
RESUMO PENAL:
TEMPO TOTAL DE PENA: ${totais.penaTotal} MESES
MULTA TOTAL: R$ ${formatNumber(totais.multaTotal)}
FIANÇA SUGERIDA: ${totais.semFianca ? "CRIME INFIANÇÁVEL" : `R$ ${formatNumber(totais.fiancaTotal)}`}`;

    return bo;
  };

  const copyToClipboard = async () => {
    const bo = generateBO();
    try {
      await navigator.clipboard.writeText(bo);
      setCopied(true);
      toast.success("BO copiado com sucesso!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar");
    }
  };

  const getNaturezaInfo = (codigo: string): NaturezaItem | undefined => {
    return naturezaOcorrencias.find((n) => n.codigo === codigo);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Top Decoration Line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700" />

      {/* Header */}
      <header className="bg-card border-b border-border/40 py-6 mb-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Shield className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <img
              src="/pmesp-logo.png"
              alt="Brasão PMESP"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
                Calculadora Penal
              </h1>
              <p className="text-sm md:text-base text-muted-foreground font-medium border-l-2 border-primary pl-2 uppercase tracking-widest">
                Polícia Militar do Estado de São Paulo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-secondary/50 px-4 py-2 rounded-full border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sistema Integrado e Online</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-8">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN - FORM DATA (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* 1. Identification Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Siren className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold uppercase tracking-wide">Dados da Ocorrência</h2>
              </div>

              <Card className="glass-panel border-l-4 border-l-primary/60">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-muted-foreground uppercase">Unidade</Label>
                    <Input
                      value={formData.unidade}
                      onChange={(e) => handleInputChange("unidade", e.target.value)}
                      placeholder="Ex: COE, ROCAM"
                      className="input-pro font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-muted-foreground uppercase">Prefixo Viatura</Label>
                    <Input
                      value={formData.prefixo}
                      onChange={(e) => handleInputChange("prefixo", e.target.value)}
                      placeholder="Ex: 94100"
                      className="input-pro font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-muted-foreground uppercase">Data</Label>
                    <Input
                      value={formData.data}
                      onChange={(e) => handleInputChange("data", e.target.value)}
                      className="input-pro text-center"
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-3">
                    <Label className="text-xs font-bold text-muted-foreground uppercase">Local da Ocorrência</Label>
                    <Input
                      value={formData.localOcorrencia}
                      onChange={(e) => handleInputChange("localOcorrencia", e.target.value)}
                      placeholder="Endereço completo"
                      className="input-pro"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" /> Guarnição Policial
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Encarregado</Label>
                    <Input
                      value={formData.encarregado}
                      onChange={(e) => handleInputChange("encarregado", e.target.value)}
                      placeholder="Nome e Patente"
                      className="input-pro"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Motorista</Label>
                    <Input
                      value={formData.motorista}
                      onChange={(e) => handleInputChange("motorista", e.target.value)}
                      className="input-pro"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">3º Homem</Label>
                    <Input
                      value={formData.terceiroHomem}
                      onChange={(e) => handleInputChange("terceiroHomem", e.target.value)}
                      className="input-pro"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">4º Homem</Label>
                    <Input
                      value={formData.quartoHomem}
                      onChange={(e) => handleInputChange("quartoHomem", e.target.value)}
                      className="input-pro"
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <Label className="text-xs text-muted-foreground">5º Homem (Opcional)</Label>
                    <Input
                      value={formData.quintoHomem}
                      onChange={(e) => handleInputChange("quintoHomem", e.target.value)}
                      className="input-pro"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 2. Suspects Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-wide">Envolvidos</h2>
                </div>
                <Button variant="outline" size="sm" onClick={addSuspeito} className="h-8 border-dashed border-muted-foreground/40 hover:border-primary hover:text-primary">
                  + Adicionar Suspeito
                </Button>
              </div>

              <div className="space-y-4">
                {formData.suspeitos.map((suspeito, index) => (
                  <Card key={index} className="glass-panel relative overflow-hidden group">
                    {/* Remove Button Absolute */}
                    {formData.suspeitos.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSuspeito(index)}
                        className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      >
                        <span className="sr-only">Remover</span>
                        ×
                      </Button>
                    )}

                    <CardContent className="p-6 grid gap-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Suspeito #{index + 1}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold text-muted-foreground">Nome Completo</Label>
                          <Input
                            value={suspeito.nome}
                            onChange={(e) => handleSuspeitoChange(index, "nome", e.target.value)}
                            placeholder="NOME SOBRENOME"
                            className="input-pro uppercase"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold text-muted-foreground">RG</Label>
                          <Input
                            value={suspeito.rg}
                            onChange={(e) => handleSuspeitoChange(index, "rg", e.target.value)}
                            className="input-pro uppercase"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-muted-foreground">Características Físicas / Vestimentas</Label>
                        <Input
                          value={suspeito.caracteristicas}
                          onChange={(e) => handleSuspeitoChange(index, "caracteristicas", e.target.value)}
                          placeholder="Homem, branco, cabelo azul, tatuagens..."
                          className="input-pro uppercase"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 3. Text Areas */}
            <section className="space-y-4">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-bold uppercase text-muted-foreground">Apreensão</h3>
                  </div>
                  <Textarea
                    value={formData.apreensao}
                    onChange={(e) => handleInputChange("apreensao", e.target.value)}
                    placeholder="Ex: 1x FIVESEVEN / 200x MUNIÇÕES..."
                    className="input-pro min-h-[100px] resize-none uppercase"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <h3 className="text-sm font-bold uppercase text-muted-foreground">Histórico da Ocorrência</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={generateReportAI}
                      disabled={isGenerating}
                      className="h-6 text-xs text-primary hover:text-primary/80"
                    >
                      <Wand2 className={`w-3 h-3 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                      {isGenerating ? "Gerando..." : "Gerar Modelo IA"}
                    </Button>
                  </div>
                  <Textarea
                    value={formData.ocorrencia}
                    onChange={(e) => handleInputChange("ocorrencia", e.target.value)}
                    placeholder="Descreva detalhadamente o ocorrido..."
                    className="input-pro min-h-[200px] resize-none"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN - PENAL CALCULATOR (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* STICKY CALCULATOR SUMMARY */}
            <div className="sticky top-6 z-20 space-y-6">
              <Card className="glass-panel border-primary/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b border-primary/10 pb-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-primary">
                    <Gavel className="w-5 h-5" /> Calculadora Penal
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-muted-foreground uppercase">Tempo de Pena</span>
                      <div className="text-3xl font-black text-foreground">{totais.penaTotal} <span className="text-sm font-medium text-muted-foreground">meses</span></div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-muted-foreground uppercase">Multa Total</span>
                      <div className="text-2xl font-bold text-foreground">R$ {formatNumber(totais.multaTotal)}</div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-md border ${totais.semFianca ? 'bg-destructive/10 border-destructive/20' : 'bg-secondary/50 border-border'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold uppercase text-muted-foreground">Fiança</span>
                      {totais.semFianca ? (
                        <Badge variant="destructive" className="font-bold">INFIANÇÁVEL</Badge>
                      ) : (
                        <span className="text-xl font-bold text-foreground">R$ {formatNumber(totais.fiancaTotal)}</span>
                      )}
                    </div>
                  </div>

                  <Separator className="bg-border/50" />

                  <Button
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <span className="flex items-center gap-2 animate-in fade-in zoom-in"><CheckCircle2 className="w-5 h-5" /> COPIADO</span>
                    ) : (
                      <span className="flex items-center gap-2"><Copy className="w-5 h-5" /> COPIAR RELATÓRIO</span>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* SEARCH AND SELECT */}
              <Card className="glass-panel max-h-[700px] flex flex-col">
                <div className="p-4 border-b border-border/40 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground">NATUREZA DA OCORRÊNCIA</Label>

                    <Select value={selectedGrupo} onValueChange={setSelectedGrupo}>
                      <SelectTrigger className="w-full input-pro mb-2">
                        <SelectValue placeholder="Filtrar por grupo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os grupos</SelectItem>
                        {gruposNatureza.map((grupo) => (
                          <SelectItem key={grupo} value={grupo}>
                            {grupo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        className="pl-9 input-pro"
                        placeholder="Pesquisar natureza..."
                        value={naturezaSearch}
                        onChange={(e) => setNaturezaSearch(e.target.value)}
                      />
                    </div>
                    {/* Selected Badges */}
                    {formData.naturezaFatos.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {formData.naturezaFatos.map(codigo => {
                          const natureza = naturezaOcorrencias.find(n => n.codigo === codigo);
                          return (
                            <Badge
                              key={codigo}
                              variant="secondary"
                              className="cursor-pointer hover:bg-destructive hover:text-white transition-colors"
                              onClick={() => toggleNatureza(codigo)}
                            >
                              {codigo} ✕
                            </Badge>
                          )
                        })}
                      </div>
                    )}
                    <ScrollArea className="h-[120px] rounded-md border border-input/50 bg-secondary/20 p-2">
                      <div className="space-y-1">
                        {filteredNaturezas.map((nat) => {
                          const isSelected = formData.naturezaFatos.includes(nat.codigo);
                          return (
                            <div
                              key={nat.codigo}
                              className={`text-sm p-2 rounded cursor-pointer flex items-center justify-between ${isSelected ? 'bg-primary/20 text-primary' : 'hover:bg-secondary/50'}`}
                              onClick={() => toggleNatureza(nat.codigo)}
                            >
                              <span>{nat.descricao}</span>
                              <span className="font-mono text-xs opacity-70">{nat.codigo}</span>
                            </div>
                          )
                        })}
                      </div>
                    </ScrollArea>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-muted-foreground">ARTIGOS / DELITOS</Label>

                    <Select value={selectedCategoria} onValueChange={setSelectedCategoria}>
                      <SelectTrigger className="w-full input-pro mb-2">
                        <SelectValue placeholder="Filtrar por categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as categorias</SelectItem>
                        {categoriasPenais.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        className="pl-9 input-pro"
                        placeholder="Pesquisar crime (ex: Homicídio)..."
                        value={artigoSearch}
                        onChange={(e) => setArtigoSearch(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-2">
                  <div className="space-y-1">
                    {filteredArtigos.map((artigo) => {
                      const isSelected = formData.artigosDelitos.includes(artigo.artigo);
                      return (
                        <div
                          key={artigo.artigo}
                          onClick={() => toggleArtigo(artigo.artigo)}
                          className={`p-3 rounded-md cursor-pointer border transition-all duration-200 group ${isSelected
                            ? "bg-primary/10 border-primary text-foreground"
                            : "bg-transparent border-transparent hover:bg-secondary/80 hover:border-border"
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox checked={isSelected} className={`mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary`} />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{artigo.tipificacao}</span>
                                <Badge variant="outline" className="font-mono text-[10px] h-5 opacity-70">{artigo.artigo}</Badge>
                              </div>
                              <div className="flex gap-3 mt-1.5 text-xs text-muted-foreground font-medium">
                                <span className="text-red-400">{artigo.pena} meses</span>
                                <span className="text-emerald-400">R$ {artigo.multa}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ScrollArea>
              </Card>
            </div>
          </div>

        </div>

        <Footer />
      </main>
    </div>
  );
};

export default BOForm;
