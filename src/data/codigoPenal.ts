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
  { artigo: "ART. 121 § III", tipificacao: "HOMICÍDIO CULPOSO", pena: "40", multa: "20.000", fiancavel: "100.000", observacoes: "É QUANDO ALGUÉM CAUSA A MORTE DE OUTRA PESSOA POR ACIDENTE, SEM INTENÇÃO DE MATAR, DEVIDO A NEGLIGÊNCIA, IMPRUDÊNCIA OU FALTA DE CUIDADO.", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 121 § IIII", tipificacao: "HOMICÍDIO CONTRA FUNCIONÁRIO PÚBLICO", pena: "80", multa: "100.000", fiancavel: "", observacoes: "", categoria: "CRIMES CONTRA A VIDA" },
  { artigo: "ART. 122", tipificacao: "INDUZIR AO SUICÍDIO", pena: "60", multa: "500.000", fiancavel: "", observacoes: "INDUZIR PESSOA OU ESTIMULAR PESSOA A SUICIDAR-SE.", categoria: "CRIMES CONTRA A VIDA" },

  // CRIMES CONTRA A PESSOA
  { artigo: "ART. 129", tipificacao: "LESÃO CORPORAL", pena: "8", multa: "8.000", fiancavel: "40.000", observacoes: "", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 129 § III", tipificacao: "LESÃO CORPORAL SEGUIDA DE MORTE", pena: "20", multa: "70.000", fiancavel: "", observacoes: "SE DA LESÃO RESULTAR MORTE", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 129 § IX", tipificacao: "LEI MARIA DA PENHA", pena: "10", multa: "30.000", fiancavel: "", observacoes: "LEI 11.340 - MARIA DA PENHA", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 135", tipificacao: "OMISSÃO DE SOCORRO", pena: "15", multa: "45.000", fiancavel: "60.000", observacoes: "OMITIR-SE EM PRESTAR APOIO OU AUXÍLIO QUANDO O TEM POR DEVER LEGAL OU QUANDO CAUSAR O DANO", categoria: "CRIMES CONTRA A PESSOA" },
  { artigo: "ART. 137", tipificacao: "RIXA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "BRIGA GENERALIZADA", categoria: "CRIMES CONTRA A PESSOA" },

  // CRIMES CONTRA A HONRA
  { artigo: "ART. 138", tipificacao: "CALÚNIA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "IMPUTAR A ALGUÉM FATO CRIMINOSO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 139", tipificacao: "DIFAMAÇÃO", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "IMPUTAR A ALGUÉM FATO OFENSIVO À REPUTAÇÃO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 140", tipificacao: "INJÚRIA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "QUALQUER XINGAMENTO OU ADJETIVO PEJORATIVO", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 147", tipificacao: "AMEAÇA", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "ATRAVÉS DE ATOS, GESTOS E PALAVRAS", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 148", tipificacao: "SEQUESTRO OU CÁRCERE PRIVADO", pena: "30", multa: "30.000", fiancavel: "", observacoes: "PRIVAR ALGUÉM DE SUA LIBERDADE MEDIANTE VIOLÊNCIA OU GRAVE AMEAÇA (USO DE ALGEMAS, CORDAS OU CAPUZ).", categoria: "CRIMES CONTRA A HONRA" },
  { artigo: "ART. 150", tipificacao: "VIOLAÇÃO DE DOMICÍLIO", pena: "15", multa: "20.000", fiancavel: "35.000", observacoes: "ADENTRAR RESIDÊNCIA ALHEIA SEM AUTORIZAÇÃO", categoria: "CRIMES CONTRA A HONRA" },

  // CRIMES CONTRA O PATRIMÔNIO
  { artigo: "ART. 155", tipificacao: "FURTO", pena: "15", multa: "10.000", fiancavel: "35.000", observacoes: "SEM O EMPREGO DE FORÇA OU GRAVE AMEÇA À PESSOA.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157", tipificacao: "ROUBO", pena: "30", multa: "10.000", fiancavel: "60.000", observacoes: "DE PERTENCES, VEÍCULOS, CAIXAS REGISTRADORAS E COMÉRCIO EM GERAL, RESIDÊNCIAS.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § II", tipificacao: "ROUBO QUALIFICADO", pena: "40", multa: "10.000", fiancavel: "75.000", observacoes: "DE BANCOS, TRANSPORTE DE VALORES, ELETRÔNICOS, MINÉRIOS E JÓIAS.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § III", tipificacao: "LATROCÍNIO", pena: "50", multa: "10.000", fiancavel: "", observacoes: "ROUBO SEGUIDO MORTE", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 157 § IIII", tipificacao: "SUBTRAÇÃO DE VIATURA", pena: "100", multa: "200.000", fiancavel: "", observacoes: "", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 163", tipificacao: "DANO A PATRIMONIO PARTICULAR", pena: "10", multa: "20.000", fiancavel: "30.000", observacoes: "DESTRUIR OU DANIFICAR QUALQUER PATRIMÔNIO PARTICULAR OU PRIVADO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 163 § II", tipificacao: "DANO A PATRIMONIO PÚBLICO", pena: "10", multa: "20.000", fiancavel: "30.000", observacoes: "DESTRUIR OU DANIFICAR QUALQUER PATRIMÔNIO PÚBLICO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 168", tipificacao: "APROPRIAÇÃO INDÉBITA", pena: "20", multa: "30.000", fiancavel: "60.000", observacoes: "APROPRIAR-SE DE COISA ALHEIA MÓVEL, DE QUE TEM POSSE OU DETENÇÃO", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 171", tipificacao: "ESTELIONATO", pena: "10", multa: "20.000", fiancavel: "40.000", observacoes: "OBTER VANTAGEM INDEVIDA MEDIANTE FRAUDE.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 180", tipificacao: "RECEPTAÇÃO", pena: "15", multa: "30.000", fiancavel: "45.000", observacoes: "COMPRAR, TRANSPORTAR, OCULTAR E RECEBER OBJETO QUE SABE SER PRODUTO DE CRIME.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },
  { artigo: "ART. 184", tipificacao: "VIOLAÇÃO DE DIREITO AUTORAL", pena: "10", multa: "15.000", fiancavel: "25.000", observacoes: "USAR DE MANEIRA INDEVIDA PROPRIEDADE AUTORAL DE OUTRA PESSOA.", categoria: "CRIMES CONTRA O PATRIMÔNIO" },

  // CRIMES CONTRA A LIBERDADE SEXUAL
  { artigo: "ART. 213", tipificacao: "ESTUPRO", pena: "BAN", multa: "", fiancavel: "", observacoes: "CONSTRANGER ALGUÉM MEDIANTE VIOLÊNCIA OU GRAVE AMEAÇA A CONJUNÇÃO CARNAL OU ATO LIBIDINOSO", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 217 - A", tipificacao: "ESTUPRO DE VUNERÁVEL", pena: "BAN", multa: "", fiancavel: "", observacoes: "VÍTIMA MENOR DE 14 ANOS, DEFICIENTES MENTAIS OU EM ALTO ESTADO DE EMBRIAGUEZ", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 216", tipificacao: "ASSÉDIO SEXUAL", pena: "60", multa: "200.000", fiancavel: "", observacoes: "CONSTRANGER ALGUÉM À FAZER ALGO MEDIANTE FAVOR SEXUAL", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },
  { artigo: "ART. 233", tipificacao: "ATO OBSCENO", pena: "15", multa: "30.000", fiancavel: "50.000", observacoes: "ATRAVÉS DE IMAGENS, GESTOS, NUDES, ATOS, PALAVRAS, FAZER NECESSIDADES FISIOLÓGICAS EM LOCAL PÚBLICO", categoria: "CRIMES CONTRA A LIBERDADE SEXUAL" },

  // CRIMES CONTRA A PAZ PÚBLICA
  { artigo: "ART. 287", tipificacao: "APOLOGIA AO CRIME", pena: "20", multa: "20.000", fiancavel: "40.000", observacoes: "ATRAVÉS DE SÍMBOLOS, IMAGENS, MÚSICAS, PALAVRAS, EXPRESSÕES E VESTIMENTAS", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 287 § II", tipificacao: "UTILIZAÇÃO DE MATERIAIS BÉLICOS OU ACESSÓRIOS", pena: "20", multa: "20.000", fiancavel: "80.000", observacoes: "SIMULACROS, COLETES BALÍSTICOS, ACESSÓRIOS POLICIAIS, ITENS MILITARES, MÁSCARAS E PEÇAS DE FARDAMENTOS.", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 288", tipificacao: "FORMAÇÃO DE QUADRILHA", pena: "35", multa: "40.000", fiancavel: "", observacoes: "TRÊS OU MAIS PESSOAS (CONFIGURA EM UM ÚNICO CRIME)", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "ART. 307", tipificacao: "FALSA IDENTIDADE", pena: "15", multa: "15.000", fiancavel: "30.000", observacoes: "SE APRESENTAR COMO PESSOA, DIVERSA DA QUE É.", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },
  { artigo: "LEI. 3.688", tipificacao: "PERTUBAÇÃO DO SOSSEGO", pena: "10", multa: "10.000", fiancavel: "20.000", observacoes: "PERTUBAR O TRABALHO OU O SOSSEGO ALHEIO", categoria: "CRIMES CONTRA A PAZ PÚBLICA" },

  // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA
  { artigo: "ART. 312", tipificacao: "PECULATO", pena: "30", multa: "40.000", fiancavel: "", observacoes: "FURTO PRATICADO POR FUNCIONÁRIO PÚBLICO NO EXERCÍCIO EM RAZÃO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 316", tipificacao: "CONCUSSÃO", pena: "30", multa: "40.000", fiancavel: "", observacoes: "EXIGIR OU SOLICITAR VANTAGEM INDEVIDA NO EXERCÍCIO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 317", tipificacao: "CORRUPÇÃO", pena: "60", multa: "120.000", fiancavel: "", observacoes: "OFERECER A FUNCIONÁRIO PÚBLICO VANTAGEM INDEVIDA", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 319", tipificacao: "PREVARICAÇÃO", pena: "20", multa: "40.000", fiancavel: "60.000", observacoes: "TER CIÊNCIA DO FATO E NÃO TOMAR PROVIDÊNCIAS PARA BENEFÍCIOS PRÓPRIOS OU PREJUDICAR TERCEIROS", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 324", tipificacao: "EXERCÍCIO FUNCIONAL ILEGAL", pena: "20", multa: "40.000", fiancavel: "60.000", observacoes: "SE APRESENTAR COMO FUNCIONÁRIO PÚBLICO SEM O SER OU ESTAR FORA DO EXERCÍCIO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 329", tipificacao: "RESISTÊNCIA", pena: "10", multa: "10.000", fiancavel: "50.000", observacoes: "OPOR-SE A EXECUÇÃO DE ATO LEGAL MEDIANTE VIOLÊNCIA OU AMEAÇA AO FUNCIONÁRIO PÚBLICO COMPETENTE", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 330", tipificacao: "DESOBEDIÊNCIA", pena: "10", multa: "10.000", fiancavel: "40.000", observacoes: "DESOBEDECER ORDEM LEGAL DO FUNCIONÁRIO PÚBLICO COMPETENTE", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },
  { artigo: "ART. 331", tipificacao: "DESACATO", pena: "10", multa: "10.000", fiancavel: "60.000", observacoes: "DESACATAR FUNCIONÁRIO PÚBLICO NO EXERCÍCIO DA FUNÇÃO", categoria: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA" },

  // LEI DE DROGAS
  { artigo: "ART. 28", tipificacao: "PORTE DE DROGAS PARA USO PESSOAL", pena: "VERBAL", multa: "", fiancavel: "", observacoes: "ATÉ TRÊS UNIDADES SEM A POSSE DE DINHEIRO ILÍCITO", categoria: "LEI DE DROGAS" },
  { artigo: "ART. 33", tipificacao: "TRÁFICO DE DROGAS", pena: "15", multa: "10.000", fiancavel: "", observacoes: "ACIMA DE QUATRO UNIDADES.", categoria: "LEI DE DROGAS" },
  { artigo: "ART. 35", tipificacao: "ASSOCIAÇÃO AO TRÁFICO", pena: "15", multa: "5.000", fiancavel: "", observacoes: "DUAS OU MAIS PESSOAS NA PRÁTICA DE TRÁFICO DE DROGAS. (ACUMULA A PENA DO ART. 33)", categoria: "LEI DE DROGAS" },

  // LEI DE ARMAS
  { artigo: "ART. 14", tipificacao: "PORTE ILEGAL DE ARMAS", pena: "30", multa: "10.000", fiancavel: "70.000", observacoes: "PORTAR ARMAS OU EXPLOSIVOS SEM REGISTRO OU PERMISSÃO", categoria: "LEI DE ARMAS" },
  { artigo: "ART. 17", tipificacao: "TRAFICO DE ARMAS", pena: "50", multa: "30.000", fiancavel: "", observacoes: "ESTAR NA POSSE DE DUAS OU MAIS ARMAS E EXPLOSIVOS (EXCETO EM CASOS DE AÇÃO)", categoria: "LEI DE ARMAS" },

  // ORGANIZAÇÕES
  { artigo: "ART. 1", tipificacao: "ORGANIZAÇÃO CRIMINOSA", pena: "60", multa: "80.000", fiancavel: "250.000", observacoes: "ORGANIZÇÃO ESTRUTURADA DE QUATRO OU MAIS PESSOAS PARA O COMETIMENTO DE CRIMES.", categoria: "ORGANIZAÇÕES" },
  { artigo: "LEI 12.850", tipificacao: "INFILTRAÇÃO POLICIAL SEM AUTORIZAÇÃO", pena: "30", multa: "50.000", fiancavel: "80.000", observacoes: "SEM AUTORIZAÇÃO EXPRESSA DE JUÍZ OU PESSOA COMPETENTE", categoria: "ORGANIZAÇÕES" },

  // LEI DE LAVAGENS DE CAPITAIS
  { artigo: "LEI 9.613", tipificacao: "LAVAGEM DE DINHEIRO", pena: "40", multa: "40.000", fiancavel: "", observacoes: "OCULTAR OU DISSIMULAR NATUREZA OU ORIGEM DE VALORES PROVENIENTES DE ILICITUDES VOLTANDO A CIRCULAÇÃO", categoria: "LEI DE LAVAGENS DE CAPITAIS" },
  { artigo: "ART. 289 LEI 9.613", tipificacao: "POSSE DE DINHEIRO ILÍCITO", pena: "10", multa: "10.000", fiancavel: "40.000", observacoes: "ACIMA DO VALOR DE MIL REAIS", categoria: "LEI DE LAVAGENS DE CAPITAIS" },

  // CRIMES CONTRA A HUMANIDADE
  { artigo: "LEI 9.455", tipificacao: "TORTURA", pena: "40", multa: "60.000", fiancavel: "", observacoes: "VIOLÊNCIA FÍSICA OU GRAVE AMEAÇA MEDIANTE FUNÇÃO OU CARGO PÚBLICO", categoria: "CRIMES CONTRA A HUMANIDADE" },
  { artigo: "LEI 13.260", tipificacao: "TERRORISMO", pena: "50", multa: "70.000", fiancavel: "", observacoes: "PRÁTICA DE ATO VISANDO O CAOS SOCIAL ATRAVÉS DO MEDO", categoria: "CRIMES CONTRA A HUMANIDADE" },
  { artigo: "LEI 13.869", tipificacao: "ABUSO DE AUTORIDADE", pena: "15", multa: "30.000", fiancavel: "60.000", observacoes: "AGIR O SERVIDOR PÚBLICO ALÉM DA COMPETÊNCIA DO CARGO QUE OCUPA", categoria: "CRIMES CONTRA A HUMANIDADE" },

  // DISPOSIÇÕES GERAIS
  { artigo: "INCISO I", tipificacao: "SERÁ EQUIPARADO AO MESMO CRIME O CUMPLICE OU A PARTICIPAÇÃO DE OUTRA PESSOA NO ATO CRIMINOSO.", pena: "0", multa: "0", fiancavel: "", observacoes: "SERÁ EQUIPARADO AO MESMO CRIME O CUMPLICE OU A PARTICIPAÇÃO DE OUTRA PESSOA NO ATO CRIMINOSO.", categoria: "DISPOSIÇÕES GERAIS" },
  { artigo: "INCISO II", tipificacao: "PODERÁ CONSTITUIR DEFESA TODA E QUALQUER PESSOA PRESA OU CONDUZIDA AO DISTRITO POLICIAL.", pena: "0", multa: "0", fiancavel: "", observacoes: "PODERÁ CONSTITUIR DEFESA TODA E QUALQUER PESSOA PRESA OU CONDUZIDA AO DISTRITO POLICIAL.", categoria: "DISPOSIÇÕES GERAIS" },
  { artigo: "INCISO III", tipificacao: "RÉU PRIMÁRIO", pena: "0", multa: "0", fiancavel: "", observacoes: "SERÁ REDUZIDO O TEMPO DE 30% OS PRESOS CONSIDERADOS RÉUS PRIMÁRIOS, OU SEJA AQUELES QUE PRATICARAM O CRIME PELA PRIMEIRA VEZ.", categoria: "DISPOSIÇÕES GERAIS" },
  { artigo: "INCISO IV", tipificacao: "REVISTA FEMININA", pena: "0", multa: "0", fiancavel: "", observacoes: "EM ABORDAGENS A PESSOAS DO SEXO FEMININO, PODERÁ O POLICIAL DO SEXO MASCULINO REALIZAR PROCEDIMENTO DE REVISTA NA AUSÊNCIA DE POLICIAL FEMININA, CONFORME ART. 249 DO CPP.", categoria: "DISPOSIÇÕES GERAIS" },
  { artigo: "INCISO V", tipificacao: "CRIMES COMETIDOS POR POLICIAIS", pena: "0", multa: "0", fiancavel: "", observacoes: "EM CRIMES COMETIDOS POR POLICIAIS DEVERÁ SER ACIONADO O SEU COMANDANTE IMEDIATO PARA QUE ESTE REALIZE OS TRÂMITES INTERNOS CONFORME OS REGIMENTOS PARTICULARES.", categoria: "DISPOSIÇÕES GERAIS" },
  { artigo: "INCISO VI", tipificacao: "CRIMES COMETIDOS POR CRIADORES DE CONTEÚDO", pena: "0", multa: "0", fiancavel: "", observacoes: "EM CRIMES COMETIDOS POR CRIADORES DE CONTEÚDO TODA E QUALQUER PENA DEVERÁ SER REDUZIDA EM 40% DO TEMPO TOTAL.", categoria: "DISPOSIÇÕES GERAIS" },

  // CÓDIGO DE TRÂNSITO
  { artigo: "ART 162 I", tipificacao: "DIRIGIR VEÍCULO SEM POSSUIR CARTEIRA DE HABILITAÇÃO", pena: "0", multa: "3.000", fiancavel: "", observacoes: "DEVERÁ SER LIBERADO O VEÍCULO PARA OUTRA PESSOA HABILITADA, CASO NÃO HAJA DEVERÁ SER APREENDIDO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 165", tipificacao: "DIRIRGIR SOB INFLUÊNCIA DE ALCOOL OU DROGAS", pena: "0", multa: "3.000", fiancavel: "", observacoes: "DEVERÁ SER CONSTATADO ATRAVÉS DO APARELHO ETILÔMETRO OU POR DOIS SINAIS NOTÓRIOS SENDO: FALA ALTERADA, OLHOS AVERMELHADOS, DIFICULDADES AO ANDAR E ODOR ETÍLICO. DEVERÁ SER APREENDIDA A CNH E O VEÍCULO SERÁ ENTREGUE A PESSOA QUE NÃO ESTEJA NAS MESMAS CONDIÇÕES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 165-A", tipificacao: "RECUSAR-SE A SER SUBMETIDO AO TESTE DO ETILÔMTERO", pena: "0", multa: "3.000", fiancavel: "", observacoes: "CASO FOR CONSTATADO OS SINAIS NOTÓRIOS, MESMO RECUSANDO O CONDUTOR A FAZER O TESTE, DEVERÁ APLICAR O ARTIGO 165 DO CT. REALIZANDO TODOS OS PROCEDIEMENTOS DESCRITOS ANTERIORMENTE.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 167", tipificacao: "DEIXAR DE UTILIZAR O CINTO DE SEGURANÇA", pena: "0", multa: "2.000", fiancavel: "", observacoes: "SOMENTE LIBERAR APÓS SOLUCIONAR A INFRAÇÃO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 169", tipificacao: "DIRIGIR SEM ATENÇÃO OU CUIDADOS A SEGURANÇA", pena: "0", multa: "2.000", fiancavel: "", observacoes: "CONDUTOR QUE COLOQUE EM RISCO A SEGURANÇA VIÁRIA OU PREJUDIQUE A SEGURANÇA NO TRÂNSITO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 172", tipificacao: "ATIRAR DO VEÍCULO OU ABANDONAR NA VIA OBEJTOS", pena: "0", multa: "2.000", fiancavel: "", observacoes: "EQUIPARA-SE SUBSTÂNCIAS OU QUALQUER OUTRO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 173", tipificacao: "DISPUTAR CORRIDA", pena: "0", multa: "10.000", fiancavel: "", observacoes: "DOIS OU MAIS VEÍCULOS DISPUTANDO CORRIDA POR DECISÃO DOS SEUS CONDUTORES, DEVERÁ RECOLHER O DOCUMENTO DE HABILITAÇÃO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 175", tipificacao: "UTILIAR O VEÍCULO PARA EXIBIR MANOBRA PERIGOSA", pena: "0", multa: "15.000", fiancavel: "", observacoes: "EQUIPARA-SE EXIBIÇÃO, ARRANCADA BRUSCA, DERRAPAGEM OU FRENAGEM COM DESLIZAMENTO OU ARRASTAMENTO DE PNEUS, OU OUTRAS DEMONSTRAÇÕES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 176 I", tipificacao: "DEIXAR O CONDUTOR DE PRESTAR SOCORRO EM ACIDENTES", pena: "0", multa: "30.000", fiancavel: "", observacoes: "DEVERÁ SER O ACIDENTE COM VÍTIMA E APENAS O CONDUTOR ENVOLVIDO, DEVERÁ RECOLHER A CNH.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 180", tipificacao: "IMOBILIZAR O VEÍCULO NA VIA POR ESTAR SEM COMBUSTÍVEL", pena: "0", multa: "5.000", fiancavel: "", observacoes: "DEVERÁ PROVIDENCIAR A RETIRADA DO VEÍCULO DO LOCAL PARA NÃO PREJUDICAR A CIRCULAÇÃO VIÁRIA.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 181", tipificacao: "PARAR OU ESTACIONAR O VEÍCULO EM LOCAIS PROIBIDOS", pena: "0", multa: "7.000", fiancavel: "", observacoes: "DEVERÁ PROVIDENCIAR A RETIRADA DO VEÍCULO. SÃO CONSIDERADOS LOCAIS PROIBIDOS: SARGETAS NA COR VERMELHA, CALÇADAS, PRAÇAS, LOGRADOUROS, HOSPITAIS EM CASOS DE NÃO EMERGÊNCIA, ÁREAS MILITARES OU DO PAÇO PÚBLICO, NAS VIAS DE TRÂNSITO RÁPIDO (RODOVIAS), EM LOCAIS DESPROVIDOS DE ACOSTAMENTO OU PROVIDOS MAS SEM A DEVIDA EMERGÊNCIA, OU NOS INDICADOS PELO AGENTE POLICIAL.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART 186", tipificacao: "TRANSITAR PELA CONTRAMÃO DE DIREÇÃO", pena: "0", multa: "5.000", fiancavel: "", observacoes: "TRÂNSITAR NA CONTRAMÃO DE DIREÇÃO CAUSANDO RISCO A SEGURANÇA VIÁRIA.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 193", tipificacao: "TRANSITAR COM O VEÍCULO EM LOCAIS PROIBIDOS", pena: "0", multa: "7.000", fiancavel: "", observacoes: "CALÇADAS, PASSEIOS, PASSARELAS, CICLOVIAS, CICLOFAIXAS, ILHAS, REFÚGIOS, AJARDINAMENTOS, CANTEIROS, DIVISORES DE PISTA, ACOSTAMENTOS, MARCA DE CANALIZAÇÃO, GRAMADOS E JARDINS PÚBLICOS.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 194", tipificacao: "TRANSITAR DE MARCHA À RÉ", pena: "0", multa: "7.000", fiancavel: "", observacoes: "SALVO NAS PEQUENAS DISTÂNCIAS QUE NÃO CAUSAM RISCO A SEGURANÇA VIÁRIA.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 195", tipificacao: "DESOBEDECER AS ORDENS EMANADAS DO AGENTE POLICIAL", pena: "0", multa: "10.000", fiancavel: "", observacoes: "DESOBEDECER TODA E QUALQUER DE ORDEM DE PARADA DO AGENTE POLICIAL OU OUTRAS.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 206", tipificacao: "EXECUTAR OPERAÇÃO DE RETORNO EM LOCAL PROIBIDO", pena: "0", multa: "2.000", fiancavel: "", observacoes: "EXECUTAR OPERAÇÕES DE RETORNO EM LOCAIS COMO DIVISORES DE PISTA PROVIDOS POR CONIFICAÇÃO, OU SEMELHANTE, ENTRE DEFENSAS METÁLICAS OU LOCAIS ONDE NÃO HAJA A SINALIZAÇÃO PERTINENTE OU QUE SE PERMITA FAZER.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 208", tipificacao: "AVANÇAR O SINAL VERMELHO OU DE PARADA OBRIGATÓRIA", pena: "0", multa: "5.000", fiancavel: "", observacoes: "DEVERÁ APENAS UMA INFRAÇÃO DESTA ESPÉCIE, MESMO NOS CASOS DE AVANÇAR POR DUAS OU MAIS VEZES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 210", tipificacao: "TRANSPOR SEM AUTORIZAÇÃO BLOQUEIO VIÁRIO POLICIAL", pena: "0", multa: "20.000", fiancavel: "", observacoes: "TRANSPOR NOS CASOS DE BLOQUEIOS POLICIAIS OU SEMELHANTES PARA DETERMINADAS OPERAÇÕES OU AÇÕES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 218", tipificacao: "TRANSITAR EM VELOCIDADE SUPERIOR À MÁXIMA PERMITIDA", pena: "0", multa: "5.000", fiancavel: "", observacoes: "PODERÁ SER REALIZADA APENAS NA UTILIZAÇÃO DO EQUIPAMENTO DE RADAR FIXO OU MÓVEL. SERÁ CONSIDERADA A VELOCIDADE MÁXIMA PERMITIDA DE 120 KM/H EM: RODOVIAS E 50 KM/H EM: VIAS URBANAS OU NOS INTERIORES DO MUNICÍPIOS.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 227", tipificacao: "UTILIZAR BUZINA PROLONGADA OU EM DESACORDO", pena: "0", multa: "2.000", fiancavel: "", observacoes: "UTILIZAR BUZINA PROLONGADA OU SEMELHANTES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 228", tipificacao: "USAR SOM VEÍCULAR EM ÁREAS PROIBIDAS", pena: "0", multa: "10.000", fiancavel: "", observacoes: "UTILIZAR EM: PROXIMIDADES À HOSPITAIS, ÓRGÃOS PÚBLICOS, PAÇOS MUNICIPAIS, ÁREAS MILITARES, IGREJAS, OU QUE PERTUBE A PAZ OU O SOSSEGO ALHEIO.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 231", tipificacao: "TRANSITAR COM O VEÍCULO EM MAU ESTADO DE CONSERVAÇÃO", pena: "0", multa: "7.000", fiancavel: "", observacoes: "COM EQUIPAMENTOS OBRIGATÓRIOS DANIFICADOS, SENDO: PARACHOQUE, PORTAS, CAPÔ, PORTAMALAS, PNEUS, PARABRISAS E SEMELHANTES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 231 V", tipificacao: "TRANSITAR COM VEÍCULO EXCEDENDO PESO PERMITIDO", pena: "0", multa: "5.000", fiancavel: "", observacoes: "VEÍCULOS DE CARGA QUE EXCEDAM O PESSO TOTAL DA CARGA E AS DIMENSÕES DE ALTURA E LARGURA.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 235", tipificacao: "CONDUZIR PESSOAS OU ANIMAIS EM PARTES EXTERNAS", pena: "0", multa: "3.000", fiancavel: "", observacoes: "SENDO AS PARTES EXTERNAS DOS VEÍCULOS COMO: CAÇAMBAS, PRANCHAS, OU SEMELHANTES.", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 244", tipificacao: "CONDUZIR MOTOCICLETA SEM CAPACETE E OUTROS", pena: "0", multa: "7.000", fiancavel: "", observacoes: "EQUIAPA-SE OS CALÇADOS QUE NÃO SE FIXAM AOS PÉS COMO: CHINELOS E SANDÁLIAS SEM TIRAS DE FIXAÇÃO. DEVERÁ LIBERAR O CONDUTOR OU PASSAGEIRO APÓS A CORREÇÃO DA IRREGULARIDADE, CASO CONTRÁRIO O VEÍCULO SERÁ APREENDIDO", categoria: "CÓDIGO DE TRÂNSITO" },
  { artigo: "ART. 253", tipificacao: "BLOQUEAR A VIA COM O VEÍCULO", pena: "0", multa: "10.000", fiancavel: "", observacoes: "BLOQUEAR A VIA COM INTENÇÃO DE DIFICULTAR O TRÂNSITO OU IMPEDIR A LIVRE CIRCULAÇÃO.", categoria: "CÓDIGO DE TRÂNSITO" }
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
  "ORGANIZAÇÕES",
  "LEI DE LAVAGENS DE CAPITAIS",
  "CRIMES CONTRA A HUMANIDADE",
  "DISPOSIÇÕES GERAIS",
  "CÓDIGO DE TRÂNSITO",
];
