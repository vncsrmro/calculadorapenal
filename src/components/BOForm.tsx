import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
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
  Search
} from "lucide-react";
import { toast } from "sonner";
import { codigoPenal, categoriasPenais, type Artigo } from "@/data/codigoPenal";
import { naturezaOcorrencias, gruposNatureza, type NaturezaItem } from "@/data/naturezaOcorrencia";

interface Suspeito {
  nome: string;
  rg: string;
  caracteristicas: string;
}

interface FormData {
  unidade: string;
  prefixo: string;
  data: string;
  encarregado: string;
  motorista: string;
  terceiroHomem: string;
  quartoHomem: string;
  quintoHomem: string;
  suspeitos: Suspeito[];
  naturezaFatos: string;
  artigosDelitos: string[];
  apreensao: string;
  ocorrencia: string;
}

const BOForm = () => {
  const [formData, setFormData] = useState<FormData>({
    unidade: "",
    prefixo: "",
    data: new Date().toLocaleDateString("pt-BR"),
    encarregado: "",
    motorista: "",
    terceiroHomem: "",
    quartoHomem: "",
    quintoHomem: "",
    suspeitos: [{ nome: "", rg: "", caracteristicas: "" }],
    naturezaFatos: "",
    artigosDelitos: [],
    apreensao: "",
    ocorrencia: "",
  });

  const [naturezaSearch, setNaturezaSearch] = useState("");
  const [artigoSearch, setArtigoSearch] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState<string>("all");
  const [selectedGrupo, setSelectedGrupo] = useState<string>("all");
  const [copied, setCopied] = useState(false);

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

    formData.artigosDelitos.forEach((artigoId) => {
      const artigo = codigoPenal.find((a) => a.artigo === artigoId);
      if (artigo) {
        const pena = parseInt(artigo.pena) || 0;
        const multa = parseFloat(artigo.multa.replace(".", "")) || 0;
        penaTotal += pena;
        multaTotal += multa;
      }
    });

    return { penaTotal, multaTotal };
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

  const formatNumber = (num: number): string => {
    return num.toLocaleString("pt-BR");
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
NATUREZA DOS FATOS: ${formData.naturezaFatos || "N/A"}
ARTIGOS/DELITOS: ${artigosNumeros || "N/A"}

-
 
APREENSÃO: ${formData.apreensao || "N/A"}

-

OCORRÊNCIA: ${formData.ocorrencia || "N/A"}

---
RESUMO PENAL:
TEMPO TOTAL DE PENA: ${totais.penaTotal} MESES
MULTA TOTAL: R$ ${formatNumber(totais.multaTotal)}`;

    return bo;
  };

  const copyToClipboard = async () => {
    const bo = generateBO();
    try {
      await navigator.clipboard.writeText(bo);
      setCopied(true);
      toast.success("BO copiado para a área de transferência!", {
        description: "Cole no tablet do jogo para registrar a ocorrência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar", {
        description: "Tente novamente ou copie manualmente.",
      });
    }
  };

  const getNaturezaInfo = (codigo: string): NaturezaItem | undefined => {
    return naturezaOcorrencias.find((n) => n.codigo === codigo);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-background">
      {/* PM-SP Header Stripe */}
      <div className="pm-stripe w-full fixed top-0 left-0 z-50" />
      
      <div className="max-w-7xl mx-auto space-y-6 pt-4">
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-in">
          <div className="inline-flex items-center gap-3 pm-badge px-6 py-3 rounded-lg">
            <Shield className="w-8 h-8 text-primary-foreground" />
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground tracking-wide">
              BOLETIM DE OCORRÊNCIA PM
            </h1>
          </div>
          <p className="text-muted-foreground font-medium">
            SAMPA Roleplay • Sistema de Registro de Ocorrências
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Identificação da Viatura */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">IDENTIFICAÇÃO</h2>
              </div>
              <Separator className="bg-border/50" />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">UNIDADE</Label>
                  <Input
                    value={formData.unidade}
                    onChange={(e) => handleInputChange("unidade", e.target.value)}
                    placeholder="COE"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">PREFIXO</Label>
                  <Input
                    value={formData.prefixo}
                    onChange={(e) => handleInputChange("prefixo", e.target.value)}
                    placeholder="94100"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">DATA</Label>
                  <Input
                    value={formData.data}
                    onChange={(e) => handleInputChange("data", e.target.value)}
                    placeholder="00/00/2025"
                    className="input-police"
                  />
                </div>
              </div>
            </Card>

            {/* Guarnição */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">GUARNIÇÃO</h2>
              </div>
              <Separator className="bg-border/50" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">ENCARREGADO</Label>
                  <Input
                    value={formData.encarregado}
                    onChange={(e) => handleInputChange("encarregado", e.target.value)}
                    placeholder="MAJ. NOME SOBRENOME"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">MOTORISTA</Label>
                  <Input
                    value={formData.motorista}
                    onChange={(e) => handleInputChange("motorista", e.target.value)}
                    placeholder="SUB-TEN. NOME SOBRENOME"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">TERCEIRO HOMEM</Label>
                  <Input
                    value={formData.terceiroHomem}
                    onChange={(e) => handleInputChange("terceiroHomem", e.target.value)}
                    placeholder="1ºTEN. NOME SOBRENOME"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">QUARTO HOMEM</Label>
                  <Input
                    value={formData.quartoHomem}
                    onChange={(e) => handleInputChange("quartoHomem", e.target.value)}
                    placeholder="2º SGT. NOME SOBRENOME"
                    className="input-police"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-muted-foreground text-sm">QUINTO HOMEM</Label>
                  <Input
                    value={formData.quintoHomem}
                    onChange={(e) => handleInputChange("quintoHomem", e.target.value)}
                    placeholder="N/A ou PATENTE + NOME"
                    className="input-police"
                  />
                </div>
              </div>
            </Card>

            {/* Suspeitos */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                  <h2 className="text-lg font-display font-semibold">SUSPEITO(S)</h2>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addSuspeito}
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  + Adicionar
                </Button>
              </div>
              <Separator className="bg-border/50" />
              
              <div className="space-y-4">
                {formData.suspeitos.map((suspeito, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="badge-military">Suspeito {index + 1}</span>
                      {formData.suspeitos.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSuspeito(index)}
                          className="text-destructive hover:text-destructive/80 h-8"
                        >
                          Remover
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground text-xs">NOME</Label>
                        <Input
                          value={suspeito.nome}
                          onChange={(e) => handleSuspeitoChange(index, "nome", e.target.value)}
                          placeholder="Nome completo"
                          className="input-police"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground text-xs">RG</Label>
                        <Input
                          value={suspeito.rg}
                          onChange={(e) => handleSuspeitoChange(index, "rg", e.target.value)}
                          placeholder="1234"
                          className="input-police"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground text-xs">CARACTERÍSTICAS</Label>
                      <Input
                        value={suspeito.caracteristicas}
                        onChange={(e) => handleSuspeitoChange(index, "caracteristicas", e.target.value)}
                        placeholder="Homem, branco, cabelo azul, tatuagens..."
                        className="input-police"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Apreensão e Ocorrência */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Package className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">APREENSÃO</h2>
              </div>
              <Separator className="bg-border/50" />
              
              <div className="space-y-2">
                <Label className="text-muted-foreground text-sm">ITENS APREENDIDOS</Label>
                <Textarea
                  value={formData.apreensao}
                  onChange={(e) => handleInputChange("apreensao", e.target.value)}
                  placeholder="1x FIVESEVEN / 200x MUNIÇÕES FIVESEVEN / 234.442x DINHEIRO SUJO"
                  className="input-police min-h-[80px]"
                />
              </div>
            </Card>

            {/* Descrição da Ocorrência */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">OCORRÊNCIA</h2>
              </div>
              <Separator className="bg-border/50" />
              
              <div className="space-y-2">
                <Label className="text-muted-foreground text-sm">DESCRIÇÃO DOS FATOS</Label>
                <Textarea
                  value={formData.ocorrencia}
                  onChange={(e) => handleInputChange("ocorrencia", e.target.value)}
                  placeholder="No dia XX/XX, por volta das XX:XX horas, a equipe policial em serviço foi acionada..."
                  className="input-police min-h-[200px]"
                />
              </div>
            </Card>
          </div>

          {/* Right Column - Natureza e Artigos */}
          <div className="space-y-6">
            {/* Natureza dos Fatos */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Scale className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">NATUREZA DOS FATOS</h2>
              </div>
              <Separator className="bg-border/50" />
              
              {formData.naturezaFatos && (
                <div className="p-3 rounded-lg bg-success/10 border border-success/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-success font-semibold">{formData.naturezaFatos}</span>
                      <span className="text-muted-foreground text-sm">
                        - {getNaturezaInfo(formData.naturezaFatos)?.descricao}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleInputChange("naturezaFatos", "")}
                      className="text-destructive hover:text-destructive/80 hover:bg-destructive/10 h-7 px-2"
                    >
                      ✕ Remover
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Select value={selectedGrupo} onValueChange={setSelectedGrupo}>
                  <SelectTrigger className="input-police">
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
                    value={naturezaSearch}
                    onChange={(e) => setNaturezaSearch(e.target.value)}
                    placeholder="Buscar código ou descrição..."
                    className="input-police pl-10"
                  />
                </div>
              </div>

              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-1">
                  {filteredNaturezas.map((natureza) => (
                    <div
                      key={natureza.codigo}
                      onClick={() => handleInputChange("naturezaFatos", natureza.codigo)}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        formData.naturezaFatos === natureza.codigo
                          ? "bg-primary/20 border border-primary/50"
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {natureza.codigo}
                        </Badge>
                        <span className="text-sm">{natureza.descricao}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>

            {/* Artigos/Delitos */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <Scale className="w-5 h-5" />
                  <h2 className="text-lg font-display font-semibold">ARTIGOS / DELITOS</h2>
                </div>
                {formData.artigosDelitos.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, artigosDelitos: [] }))}
                    className="text-destructive hover:text-destructive/80 hover:bg-destructive/10 h-7 px-2"
                  >
                    Limpar todos
                  </Button>
                )}
              </div>
              <Separator className="bg-border/50" />

              {/* Selecionados */}
              {formData.artigosDelitos.length > 0 && (
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Clique para remover:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.artigosDelitos.map((artigoId) => {
                      const artigo = codigoPenal.find((a) => a.artigo === artigoId);
                      return (
                        <Badge
                          key={artigoId}
                          className="bg-primary text-primary-foreground cursor-pointer hover:bg-destructive transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArtigo(artigoId);
                          }}
                        >
                          {artigoId} ✕
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Select value={selectedCategoria} onValueChange={setSelectedCategoria}>
                  <SelectTrigger className="input-police">
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
                    value={artigoSearch}
                    onChange={(e) => setArtigoSearch(e.target.value)}
                    placeholder="Buscar artigo ou tipificação..."
                    className="input-police pl-10"
                  />
                </div>
              </div>

              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-1">
                  {filteredArtigos.map((artigo) => (
                    <div
                      key={artigo.artigo}
                      className={`p-3 rounded cursor-pointer transition-colors ${
                        formData.artigosDelitos.includes(artigo.artigo)
                          ? "bg-primary/20 border border-primary/50"
                          : "hover:bg-secondary/50"
                      }`}
                      onClick={() => toggleArtigo(artigo.artigo)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.artigosDelitos.includes(artigo.artigo)}
                          className="mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="font-mono text-xs shrink-0">
                              {artigo.artigo}
                            </Badge>
                            <span className="text-sm font-medium">{artigo.tipificacao}</span>
                          </div>
                          <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                            <span>Pena: <span className="text-warning">{artigo.pena} meses</span></span>
                            <span>Multa: <span className="text-success">R$ {artigo.multa}</span></span>
                            {artigo.fiancavel && (
                              <span>Fiança: R$ {artigo.fiancavel}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>

            {/* Totais e Copiar */}
            <Card className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Scale className="w-5 h-5" />
                <h2 className="text-lg font-display font-semibold">RESUMO PENAL</h2>
              </div>
              <Separator className="bg-border/50" />

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/30 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Pena Total</p>
                  <p className="text-2xl font-display font-bold text-warning">
                    {totais.penaTotal} <span className="text-sm">meses</span>
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-success/10 border border-success/30 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Multa Total</p>
                  <p className="text-2xl font-display font-bold text-success">
                    R$ {formatNumber(totais.multaTotal)}
                  </p>
                </div>
              </div>

              <Button
                onClick={copyToClipboard}
                className="w-full btn-pm h-12 text-lg font-display tracking-wide"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    COPIADO!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    COPIAR BOLETIM
                  </>
                )}
              </Button>
            </Card>
          </div>
        </div>

        {/* Preview */}
        <Card className="dark-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-display font-semibold">PRÉ-VISUALIZAÇÃO DO BO</h2>
            </div>
            <Button
              onClick={copyToClipboard}
              className="btn-pm"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  COPIADO!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  COPIAR TUDO
                </>
              )}
            </Button>
          </div>
          <Separator className="bg-border/20" />
          
          <pre className="p-4 rounded-lg bg-black/50 text-sm whitespace-pre-wrap font-mono text-gray-200 overflow-x-auto border border-white/10">
            {generateBO()}
          </pre>
        </Card>

        {/* Footer */}
        <div className="sampa-footer rounded-lg p-4 text-center">
          <p className="text-white/80 text-sm font-medium">
            SAMPA ROLEPLAY • Polícia Militar do Estado de São Paulo
          </p>
        </div>
      </div>
    </div>
  );
};

export default BOForm;
