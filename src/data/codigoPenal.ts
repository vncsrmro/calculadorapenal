export interface Artigo {
  artigo: string;
  tipificacao: string;
  pena: string;
  multa: string;
  fiancavel: string;
  observacoes: string;
  categoria: string;
}

export const codigoPenal: Artigo[] = [
  // CRIMES CONTRA A VIDA
  { artigo: "ART. 14 § II", tipificacao: "TENTATIVA DE HOMICÍDIO", pena: "25", multa: "20.000", fiancavel: "", observacoes: "", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 121 § I", tipificacao: "HOMICÍDIO DOLOSO", pena: "60", multa: "40.000", fiancavel: "", observacoes: "QUANDO ALGUÉM MATA OUTRA PESSOA DE PROPÓSITO, COM A INTENÇÃO DE COMETER O CRIME.", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 121 § II", tipificacao: "HOMICÍDIO QUALIFICADO", pena: "50", multa: "30.000", fiancavel: "", observacoes: "MATAR PESSOA POR MOTIVOS FÚTEIS, TORPES OU ATRAVÉS DE MEIOS CRUEIS", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 121 § III", tipificacao: "HOMICÍDIO CULPOSO", pena: "40", multa: "20.000", fiancavel: "100.000", observacoes: "É QUANDO ALGUÉM CAUSA A MORTE DE OUTRA PESSOA POR ACIDENTE, SEM INTENÇÃO DE MATAR.", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 121 § IIII", tipificacao: "HOMICÍDIO CONTRA FUNCIONÁRIO PÚBLICO", pena: "80", multa: "100.000", fiancavel: "", observacoes: "", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 122", tipificacao: "INDUZIR AO SUICÍDIO", pena: "60", multa: "500.000", fiancavel: "", observacoes: "INDUZIR PESSOA OU ESTIMULAR PESSOA A SUICIDAR-SE.", categoria: "CRIMES CONTRA A VIDA" },
  
  // CRIMES CONTRA A PESSOA
  { artigo: "ART. 129", tipificacao: "LESÃO CORPORAL", pena: "8", multa: "8.000", fiancavel: "40.000", observacoes: "", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 129 § III", tipificacao: "LESÃO CORPORAL SEGUIDA DE MORTE", pena: "20", multa: "70.000", fiancavel: "", observacoes: "SE DA LESÃO RESULTAR MORTE", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 129 § IX", tipificacao: "LEI MARIA DA PENHA", pena: "10", multa: "30.000", fiancavel: "", observacoes: "LEI 11.340 - MARIA DA PENHA", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 135", tipificacao: "OMISSÃO DE SOCORRO", pena: "15", multa: "45.000", fiancavel: "60.000", observacoes: "OMITIR-SE EM PRESTAR APOIO OU AUXÍLIO QUANDO O TEM POR DEVER LEGAL", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 137", tipificacao: "RIXA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "BRIGA GENERALIZADA", categoria: "CRIMES CONTRA A PESSOA" },
  
  // CRIMES CONTRA A HONRA
  { artigo: "ART. 138", tipificacao: "CALÚNIA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "IMPUTAR A ALGUÉM FATO CRIMINOSO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 139", tipificacao: "DIFAMAÇÃO", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "IMPUTAR A ALGUÉM FATO OFENSIVO À REPUTAÇÃO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 140", tipificacao: "INJÚRIA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "QUALQUER XINGAMENTO OU ADJETIVO PEJORATIVO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 147", tipificacao: "AMEAÇA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "ATRAVÉS DE ATOS, GESTOS E PALAVRAS", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 148", tipificacao: "SEQUESTRO OU CÁRCERE PRIVADO", pena: "30", multa: "30.000", fiancavel: "", observacoes: "PRIVAR ALGUÉM DE SUA LIBERDADE MEDIANTE VIOLÊNCIA OU GRAVE AMEAÇA", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 150", tipificacao: "VIOLAÇÃO DE DOMICÍLIO", pena: "15", multa: "20.000", fiancavel: "35.000", observacoes: "ADENTRAR RESIDÊNCIA ALHEIA SEM AUTORIZAÇÃO", categoria: "CRIMES CONTRA A HONRA" },
  
  // CRIMES CONTRA O PATRIMÔNIO
  { artigo: "ART. 155", tipificacao: "FURTO", pena: "15", multa: "10.000", fiancavel: "35.000", observacoes: "SEM O EMPREGO DE FORÇA OU GRAVE AMEAÇA À PESSOA.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157", tipificacao: "ROUBO", pena: "30", multa: "10.000", fiancavel: "60.000", observacoes: "DE PERTENCES, VEÍCULOS, CAIXAS REGISTRADORAS E COMÉRCIO EM GERAL", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § II", tipificacao: "ROUBO QUALIFICADO", pena: "40", multa: "10.000", fiancavel: "75.000", observacoes: "DE BANCOS, TRANSPORTE DE VALORES, ELETRÔNICOS, MINÉRIOS E JÓIAS.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § III", tipificacao: "LATROCÍNIO", pena: "50", multa: "10.000", fiancavel: "", observacoes: "ROUBO SEGUIDO MORTE", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § IIII", tipificacao: "SUBTRAÇÃO DE VIATURA", pena: "100", multa: "200.000", fiancavel: "", observacoes: "", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 163", tipificacao: "DANO A PATRIMÔNIO PARTICULAR", pena: "10", multa: "20.000", fiancavel: "30.000", observacoes: "DESTRUIR OU DANIFICAR QUALQUER PATRIMÔNIO PARTICULAR OU PRIVADO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 163 § II", tipificacao: "DANO A PATRIMÔNIO PÚBLICO", pena: "10", multa: "20.000", fiancavel: "30.000", observacoes: "DESTRUIR OU DANIFICAR QUALQUER PATRIMÔNIO PÚBLICO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 168", tipificacao: "APROPRIAÇÃO INDÉBITA", pena: "20", multa: "30.000", fiancavel: "60.000", observacoes: "APROPRIAR-SE DE COISA ALHEIA MÓVEL, DE QUE TEM POSSE OU DETENÇÃO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 171", tipificacao: "ESTELIONATO", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "OBTER VANTAGEM INDEVIDA MEDIANTE FRAUDE.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 180", tipificacao: "RECEPTAÇÃO", pena: "15", multa: "30.000", fiancavel: "45.000", observacoes: "COMPRAR, TRANSPORTAR, OCULTAR E RECEBER OBJETO QUE SABE SER PRODUTO DE CRIME.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 184", tipificacao: "VIOLAÇÃO DE DIREITO AUTORAL", pena: "10", multa: "15.000", fiancavel: "25.000", observacoes: "USAR DE MANEIRA INDEVIDA PROPRIEDADE AUTORAL DE OUTRA PESSOA.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  
  // CRIMES CONTRA A LIBERDADE SEXUAL
  { artigo: "ART. 213", tipificacao: "ESTUPRO", pena: "BAN", multa: "", fiancavel: "", observacoes: "CONSTRANGER ALGUÉM MEDIANTE VIOLÊNCIA OU GRAVE AMEAÇA A CONJUNÇÃO CARNAL", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 217-A", tipificacao: "ESTUPRO DE VULNERÁVEL", pena: "BAN", multa: "", fiancavel: "", observacoes: "VÍTIMA MENOR DE 14 ANOS, DEFICIENTES MENTAIS OU EM ALTO ESTADO DE EMBRIAGUEZ", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 216", tipificacao: "ASSÉDIO SEXUAL", pena: "60", multa: "200.000", fiancavel: "", observacoes: "CONSTRANGER ALGUÉM À FAZER ALGO MEDIANTE FAVOR SEXUAL", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 233", tipificacao: "ATO OBSCENO", pena: "15", multa: "30.000", fiancavel: "50.000", observacoes: "ATRAVÉS DE IMAGENS, GESTOS, NUDES, ATOS, PALAVRAS, FAZER NECESSIDADES FISIOLÓGICAS EM LOCAL PÚBLICO", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  
  // CRIMES CONTRA A PAZ PÚBLICA
  { artigo: "ART. 287", tipificacao: "APOLOGIA AO CRIME", pena: "20", multa: "20.000", fiancavel: "40.000", observacoes: "ATRAVÉS DE SÍMBOLOS, IMAGENS, MÚSICAS, PALAVRAS, EXPRESSÕES E VESTIMENTAS", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 287 § II", tipificacao: "UTILIZAÇÃO DE MATERIAIS BÉLICOS OU ACESSÓRIOS", pena: "20", multa: "20.000", fiancavel: "80.000", observacoes: "SIMULACROS, COLETES BALÍSTICOS, ACESSÓRIOS POLICIAIS, ITENS MILITARES", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 288", tipificacao: "FORMAÇÃO DE QUADRILHA", pena: "35", multa: "40.000", fiancavel: "", observacoes: "TRÊS OU MAIS PESSOAS (CONFIGURA EM UM ÚNICO CRIME)", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 307", tipificacao: "FALSA IDENTIDADE", pena: "15", multa: "15.000", fiancavel: "30.000", observacoes: "SE APRESENTAR COMO PESSOA, DIVERSA DA QUE É.", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "LEI 3.688", tipificacao: "PERTURBAÇÃO DO SOSSEGO", pena: "10", multa: "10.000", fiancavel: "20.000", observacoes: "PERTURBAR O TRABALHO OU O SOSSEGO ALHEIO", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  
  // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA
  { artigo: "ART. 312", tipificacao: "PECULATO", pena: "30", multa: "40.000", fiancavel: "", observacoes: "FURTO PRATICADO POR FUNCIONÁRIO PÚBLICO NO EXERCÍCIO EM RAZÃO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 316", tipificacao: "CONCUSSÃO", pena: "30", multa: "40.000", fiancavel: "", observacoes: "EXIGIR OU SOLICITAR VANTAGEM INDEVIDA NO EXERCÍCIO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 317", tipificacao: "CORRUPÇÃO", pena: "60", multa: "120.000", fiancavel: "", observacoes: "OFERECER A FUNCIONÁRIO PÚBLICO VANTAGEM INDEVIDA", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 319", tipificacao: "PREVARICAÇÃO", pena: "20", multa: "40.000", fiancavel: "60.000", observacoes: "TER CIÊNCIA DO FATO E NÃO TOMAR PROVIDÊNCIAS PARA BENEFÍCIOS PRÓPRIOS", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 324", tipificacao: "EXERCÍCIO FUNCIONAL ILEGAL", pena: "20", multa: "40.000", fiancavel: "60.000", observacoes: "SE APRESENTAR COMO FUNCIONÁRIO PÚBLICO SEM O SER", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 329", tipificacao: "RESISTÊNCIA", pena: "10", multa: "10.000", fiancavel: "50.000", observacoes: "OPOR-SE A EXECUÇÃO DE ATO LEGAL MEDIANTE VIOLÊNCIA OU AMEAÇA", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 330", tipificacao: "DESOBEDIÊNCIA", pena: "10", multa: "10.000", fiancavel: "40.000", observacoes: "DESOBEDECER ORDEM LEGAL DO FUNCIONÁRIO PÚBLICO COMPETENTE", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 331", tipificacao: "DESACATO", pena: "10", multa: "10.000", fiancavel: "60.000", observacoes: "DESACATAR FUNCIONÁRIO PÚBLICO NO EXERCÍCIO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  
  // LEI DE DROGAS
  { artigo: "ART. 28", tipificacao: "PORTE DE DROGAS PARA USO PESSOAL", pena: "VERBAL", multa: "", fiancavel: "", observacoes: "ATÉ TRÊS UNIDADES SEM A POSSE DE DINHEIRO ILÍCITO", categoria: "LEI DE DROGAS" },
  { artigo: "ART. 33", tipificacao: "TRÁFICO DE DROGAS", pena: "15", multa: "10.000", fiancavel: "", observacoes: "ACIMA DE QUATRO UNIDADES.", categoria: "LEI DE DROGAS" },
  { artigo: "ART. 35", tipificacao: "ASSOCIAÇÃO AO TRÁFICO", pena: "15", multa: "5.000", fiancavel: "", observacoes: "DUAS OU MAIS PESSOAS NA PRÁTICA DE TRÁFICO DE DROGAS", categoria: "LEI DE DROGAS" },
  
  // LEI DE ARMAS
  { artigo: "ART. 14", tipificacao: "PORTE ILEGAL DE ARMAS", pena: "30", multa: "10.000", fiancavel: "70.000", observacoes: "PORTAR ARMAS OU EXPLOSIVOS SEM REGISTRO OU PERMISSÃO", categoria: "LEI DE ARMAS" },
  { artigo: "ART. 17", tipificacao: "TRÁFICO DE ARMAS", pena: "50", multa: "30.000", fiancavel: "", observacoes: "ESTAR NA POSSE DE DUAS OU MAIS ARMAS E EXPLOSIVOS", categoria: "LEI DE ARMAS" },
  
  // ORGANIZAÇÕES CRIMINOSAS
  { artigo: "ART. 1", tipificacao: "ORGANIZAÇÃO CRIMINOSA", pena: "60", multa: "80.000", fiancavel: "250.000", observacoes: "ORGANIZAÇÃO ESTRUTURADA DE QUATRO OU MAIS PESSOAS", categoria: "ORGANIZAÇÕES CRIMINOSAS" },
  { artigo: "LEI 12.850", tipificacao: "INFILTRAÇÃO POLICIAL SEM AUTORIZAÇÃO", pena: "30", multa: "50.000", fiancavel: "80.000", observacoes: "SEM AUTORIZAÇÃO EXPRESSA DE JUIZ OU PESSOA COMPETENTE", categoria: "ORGANIZAÇÕES CRIMINOSAS" },
  
  // LAVAGEM DE CAPITAIS
  { artigo: "LEI 9.613", tipificacao: "LAVAGEM DE DINHEIRO", pena: "40", multa: "40.000", fiancavel: "", observacoes: "OCULTAR OU DISSIMULAR NATUREZA OU ORIGEM DE VALORES PROVENIENTES DE ILICITUDES", categoria: "LAVAGEM DE CAPITAIS" },
  { artigo: "ART. 289 LEI 9.613", tipificacao: "POSSE DE DINHEIRO ILÍCITO", pena: "10", multa: "10.000", fiancavel: "40.000", observacoes: "ACIMA DO VALOR DE MIL REAIS", categoria: "LAVAGEM DE CAPITAIS" },
  
  // CRIMES CONTRA A HUMANIDADE
  { artigo: "LEI 9.455", tipificacao: "TORTURA", pena: "40", multa: "60.000", fiancavel: "", observacoes: "VIOLÊNCIA FÍSICA OU GRAVE AMEAÇA MEDIANTE FUNÇÃO OU CARGO PÚBLICO", categoria: "CRIMES CONTRA A HUMANIDADE" },
  { artigo: "LEI 13.260", tipificacao: "TERRORISMO", pena: "50", multa: "70.000", fiancavel: "", observacoes: "PRÁTICA DE ATO VISANDO O CAOS SOCIAL ATRAVÉS DO MEDO", categoria: "CRIMES CONTRA A HUMANIDADE" },
  { artigo: "LEI 13.869", tipificacao: "ABUSO DE AUTORIDADE", pena: "15", multa: "30.000", fiancavel: "60.000", observacoes: "AGIR O SERVIDOR PÚBLICO ALÉM DA COMPETÊNCIA DO CARGO QUE OCUPA", categoria: "CRIMES CONTRA A HUMANIDADE" },
];

export const categoriasPenais = [
  "CRIMES CONTRA A VIDA",
  "CRIMES CONTRA A PESSOA",
  "CRIMES CONTRA A HONRA",
  "CRIMES CONTRA O PATRIMÔNIO",
  "CRIMES CONTRA A LIBERDADE SEXUAL",
  "CRIMES CONTRA A PAZ PÚBLICA",
  "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA",
  "LEI DE DROGAS",
  "LEI DE ARMAS",
  "ORGANIZAÇÕES CRIMINOSAS",
  "LAVAGEM DE CAPITAIS",
  "CRIMES CONTRA A HUMANIDADE",
];
