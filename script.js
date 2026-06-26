const categories = ["Environment", "Social", "Governance"];
const valueChains = ["Own operations", "Upstream", "Downstream", "Full value chain"];
const horizons = ["Short term", "Medium term", "Long term", "Multiple horizons"];
const statuses = ["Draft", "Stakeholder reviewed", "Management approved", "Needs evidence"];
const evidenceQualities = ["High", "Medium", "Low", "Missing"];

const translations = {
  en: {
    appEyebrow: "CSRD and ESRS workspace",
    title: "Double Materiality Assessment",
    language: "Language",
    company: "Company",
    companyName: "Company name",
    sector: "Sector",
    reportingYear: "Reporting year",
    assessmentOwner: "Assessment owner",
    thresholds: "Thresholds",
    impactThreshold: "Impact materiality threshold",
    financialThreshold: "Financial materiality threshold",
    includeOptional: "Include topics below threshold in exports",
    legalBasis: "Legal basis",
    legalText: "This tool follows the CSRD/ESRS double-materiality structure: impact materiality and financial materiality. It is a documentation aid, not legal advice, an assurance opinion, or automatic ESRS compliance certification.",
    legal1: "Use ESRS 1 and ESRS 2 as the reporting backbone.",
    legal2: "Assess impacts, risks and opportunities across own operations and the value chain.",
    legal3: "Keep evidence, stakeholder inputs, thresholds and judgement rationale.",
    matrixTab: "Matrix",
    topicsTab: "Topics",
    methodTab: "Method",
    exportReadyMatrix: "Export-ready matrix",
    matrixTitle: "Impact materiality x financial materiality",
    material: "Material",
    monitor: "Monitor",
    optional: "Below threshold",
    summary: "Assessment Summary",
    needsEvidence: "Needs evidence",
    materialTopics: "Material topics",
    topicScoring: "ESRS topic scoring",
    iro: "Impacts, risks and opportunities",
    addTopic: "Add topic",
    searchPlaceholder: "Filter topics by ESRS code, title, stakeholder or owner",
    workflow: "Workflow",
    scoringModel: "Scoring Model",
    complianceNotes: "Compliance Notes",
    wf1: "Define scope, reporting boundary, value chain and stakeholder groups.",
    wf2: "Identify sustainability matters using ESRS E1-E5, S1-S4 and G1 as a starting universe.",
    wf3: "Score impact materiality through scale, scope, irremediability and likelihood.",
    wf4: "Score financial materiality through magnitude and likelihood of risks or opportunities.",
    wf5: "Approve thresholds, retain evidence and explain judgements.",
    wf6: "Export the matrix and topic register for audit trail and management sign-off.",
    scoringText1: "Impact score is the average of scale, scope, irremediability and likelihood. Financial score is the average of magnitude and likelihood. A topic is material when either score meets or exceeds the chosen threshold.",
    scoringText2: "High-scoring topics should be mapped to ESRS disclosure requirements with company-specific policies, actions, targets and metrics before publication.",
    complianceText: "CSRD obligations and national transposition may vary by entity, group structure and reporting wave. The exported matrix supports the assessment record but does not replace legal review, assurance procedures or the complete ESRS sustainability statement.",
    category: "Category",
    valueChain: "Value chain",
    stakeholders: "Stakeholders",
    owner: "Owner",
    timeHorizon: "Time horizon",
    status: "Status",
    impactMateriality: "Impact materiality",
    scale: "Scale",
    scope: "Scope",
    irremediability: "Irremediability",
    likelihood: "Likelihood",
    financialMateriality: "Financial materiality",
    magnitude: "Magnitude",
    evidenceQuality: "Evidence quality",
    disclosureMapping: "Disclosure mapping",
    evidenceRationale: "Evidence and rationale",
    impactScore: "Impact score",
    financialScore: "Financial score",
    scoresBadge: "Impact {impact} / Financial {financial}",
    scoreFootnote: "Scores: 1 low to 5 high. Topic is material when either axis meets the selected threshold.",
    pdfMatrixTitle: "Double Materiality Matrix",
    thresholdsLine: "Thresholds: impact {impact}, financial {financial} | Exported {date}",
    sectorLine: "{company} | Sector: {sector} | Reporting year: {year}",
    pdfDisclaimer: "Material if either impact materiality or financial materiality meets the selected threshold. This PDF is a documentation aid and not legal advice or assurance.",
    materialConclusion: "Material sustainability matter",
    monitorConclusion: "Monitor and reassess",
    optionalConclusion: "Below selected materiality thresholds",
    esrsMapping: "ESRS mapping",
    impactInputs: "Impact scoring inputs",
    financialInputs: "Financial scoring inputs",
    impactInputsText: "Scale {scale}, scope {scope}, irremediability {irremediability}, likelihood {likelihood}",
    financialInputsText: "Magnitude {magnitude}, likelihood {likelihood}",
    stakeholdersConsulted: "Stakeholders consulted or affected",
    rationaleEvidence: "Assessment rationale and evidence base",
    reportReady: "Report-ready disclosure wording",
    reportSentence: "{title} was assessed for impact materiality and financial materiality across {valueChain}. The matter is classified as \"{conclusion}\" based on an impact score of {impactScore} and a financial score of {financialScore} against thresholds of {impactThreshold} and {financialThreshold}. The assessment considered the stakeholder groups {stakeholders} and is supported by the following evidence: {evidence}.",
    footerNote: "Prepared as an insertion-ready assessment record. Final sustainability statement wording should be reviewed against ESRS disclosure requirements and assurance evidence.",
    notDocumented: "Not documented",
    page: "Page",
    pdfFile: "csrd-materiality-assessment-report.pdf",
    excelFile: "csrd-materiality-assessment.xls",
    sourcePage: "Source page",
    sourceLinkText: "Assessment tool",
    overviewSheet: "Overview",
    topicsSheet: "Topics",
    svgTitle: "{company} CSRD materiality matrix",
    newTopic: "New sustainability matter",
    removeTopic: "Remove topic",
    overview: "Overview",
    note: "Documentation aid for CSRD/ESRS double materiality. Not legal advice or assurance."
  },
  de: {
    appEyebrow: "CSRD- und ESRS-Arbeitsbereich",
    title: "Doppelte Wesentlichkeitsanalyse",
    language: "Sprache",
    company: "Unternehmen",
    companyName: "Unternehmensname",
    sector: "Sektor",
    reportingYear: "Berichtsjahr",
    assessmentOwner: "Verantwortliche Person",
    thresholds: "Schwellenwerte",
    impactThreshold: "Schwelle der Impact-Wesentlichkeit",
    financialThreshold: "Schwelle der finanziellen Wesentlichkeit",
    includeOptional: "Themen unterhalb der Schwelle in Exporte aufnehmen",
    legalBasis: "Rechtsgrundlage",
    legalText: "Dieses Tool folgt der CSRD/ESRS-Struktur der doppelten Wesentlichkeit: Impact-Wesentlichkeit und finanzielle Wesentlichkeit. Es ist eine Dokumentationshilfe, keine Rechtsberatung, kein Pruefungsurteil und keine automatische ESRS-Konformitaetszertifizierung.",
    legal1: "ESRS 1 und ESRS 2 als Berichtsbasis verwenden.",
    legal2: "Auswirkungen, Risiken und Chancen in eigenen Taetigkeiten und entlang der Wertschoepfungskette bewerten.",
    legal3: "Nachweise, Stakeholder-Beitraege, Schwellenwerte und Beurteilungsgruende dokumentieren.",
    matrixTab: "Matrix",
    topicsTab: "Themen",
    methodTab: "Methode",
    exportReadyMatrix: "Exportfaehige Matrix",
    matrixTitle: "Impact-Wesentlichkeit x finanzielle Wesentlichkeit",
    material: "Wesentlich",
    monitor: "Beobachten",
    optional: "Unter Schwelle",
    summary: "Zusammenfassung",
    needsEvidence: "Nachweis fehlt",
    materialTopics: "Wesentliche Themen",
    topicScoring: "ESRS-Themenbewertung",
    iro: "Auswirkungen, Risiken und Chancen",
    addTopic: "Thema hinzufuegen",
    searchPlaceholder: "Themen nach ESRS-Code, Titel, Stakeholder oder Verantwortlichem filtern",
    workflow: "Ablauf",
    scoringModel: "Bewertungsmodell",
    complianceNotes: "Compliance-Hinweise",
    wf1: "Umfang, Berichtsgrenze, Wertschoepfungskette und Stakeholder-Gruppen definieren.",
    wf2: "Nachhaltigkeitsaspekte anhand von ESRS E1-E5, S1-S4 und G1 als Ausgangsuniversum identifizieren.",
    wf3: "Impact-Wesentlichkeit ueber Ausmass, Umfang, Unumkehrbarkeit und Wahrscheinlichkeit bewerten.",
    wf4: "Finanzielle Wesentlichkeit ueber Hoehe und Wahrscheinlichkeit von Risiken oder Chancen bewerten.",
    wf5: "Schwellenwerte freigeben, Nachweise sichern und Beurteilungen begruenden.",
    wf6: "Matrix und Themenregister fuer Pruefspur und Managementfreigabe exportieren.",
    scoringText1: "Der Impact-Score ist der Durchschnitt aus Ausmass, Umfang, Unumkehrbarkeit und Wahrscheinlichkeit. Der finanzielle Score ist der Durchschnitt aus Hoehe und Wahrscheinlichkeit. Ein Thema ist wesentlich, wenn einer der Scores die gewaehlte Schwelle erreicht oder ueberschreitet.",
    scoringText2: "Hoch bewertete Themen sollten vor der Veroeffentlichung den ESRS-Angabepflichten mit unternehmensspezifischen Konzepten, Massnahmen, Zielen und Kennzahlen zugeordnet werden.",
    complianceText: "CSRD-Pflichten und nationale Umsetzung koennen je nach Unternehmen, Konzernstruktur und Berichtswelle variieren. Die exportierte Matrix unterstuetzt die Bewertungsdokumentation, ersetzt aber keine rechtliche Pruefung, Assurance-Verfahren oder die vollstaendige ESRS-Nachhaltigkeitserklaerung.",
    category: "Kategorie",
    valueChain: "Wertschoepfungskette",
    stakeholders: "Stakeholder",
    owner: "Verantwortlich",
    timeHorizon: "Zeithorizont",
    status: "Status",
    impactMateriality: "Impact-Wesentlichkeit",
    scale: "Ausmass",
    scope: "Umfang",
    irremediability: "Unumkehrbarkeit",
    likelihood: "Wahrscheinlichkeit",
    financialMateriality: "Finanzielle Wesentlichkeit",
    magnitude: "Hoehe",
    evidenceQuality: "Nachweisqualitaet",
    disclosureMapping: "Disclosure-Zuordnung",
    evidenceRationale: "Nachweise und Begruendung",
    impactScore: "Impact-Score",
    financialScore: "Finanzieller Score",
    scoresBadge: "Impact {impact} / Finanziell {financial}",
    scoreFootnote: "Scores: 1 niedrig bis 5 hoch. Ein Thema ist wesentlich, wenn eine Achse die gewaehlte Schwelle erreicht.",
    pdfMatrixTitle: "Matrix der doppelten Wesentlichkeit",
    thresholdsLine: "Schwellenwerte: Impact {impact}, finanziell {financial} | Exportiert {date}",
    sectorLine: "{company} | Sektor: {sector} | Berichtsjahr: {year}",
    pdfDisclaimer: "Wesentlich, wenn Impact-Wesentlichkeit oder finanzielle Wesentlichkeit die gewaehlte Schwelle erreicht. Dieses PDF ist eine Dokumentationshilfe und keine Rechtsberatung oder Assurance.",
    materialConclusion: "Wesentliches Nachhaltigkeitsthema",
    monitorConclusion: "Beobachten und neu bewerten",
    optionalConclusion: "Unterhalb der gewaehlten Wesentlichkeitsschwellen",
    esrsMapping: "ESRS-Zuordnung",
    impactInputs: "Impact-Bewertungseingaben",
    financialInputs: "Finanzielle Bewertungseingaben",
    impactInputsText: "Ausmass {scale}, Umfang {scope}, Unumkehrbarkeit {irremediability}, Wahrscheinlichkeit {likelihood}",
    financialInputsText: "Hoehe {magnitude}, Wahrscheinlichkeit {likelihood}",
    stakeholdersConsulted: "Einbezogene oder betroffene Stakeholder",
    rationaleEvidence: "Bewertungsbegruendung und Nachweisbasis",
    reportReady: "Berichtsreife Formulierung",
    reportSentence: "{title} wurde hinsichtlich Impact-Wesentlichkeit und finanzieller Wesentlichkeit entlang {valueChain} bewertet. Das Thema wird als \"{conclusion}\" eingestuft, basierend auf einem Impact-Score von {impactScore} und einem finanziellen Score von {financialScore} gegenueber Schwellenwerten von {impactThreshold} und {financialThreshold}. Die Bewertung beruecksichtigte die Stakeholder-Gruppen {stakeholders} und wird durch folgende Nachweise gestuetzt: {evidence}.",
    footerNote: "Erstellt als einfuegebereiter Bewertungsnachweis. Die finale Nachhaltigkeitserklaerung sollte gegen ESRS-Angabepflichten und Assurance-Nachweise geprueft werden.",
    notDocumented: "Nicht dokumentiert",
    page: "Seite",
    pdfFile: "csrd-wesentlichkeitsanalyse-bericht.pdf",
    excelFile: "csrd-wesentlichkeitsanalyse.xls",
    sourcePage: "Quellseite",
    sourceLinkText: "Assessment-Tool",
    overviewSheet: "Uebersicht",
    topicsSheet: "Themen",
    svgTitle: "{company} CSRD-Wesentlichkeitsmatrix",
    newTopic: "Neues Nachhaltigkeitsthema",
    removeTopic: "Thema entfernen",
    overview: "Uebersicht",
    note: "Dokumentationshilfe fuer CSRD/ESRS-Doppelwesentlichkeit. Keine Rechtsberatung oder Assurance."
  },
  fr: {
    appEyebrow: "Espace CSRD et ESRS",
    title: "Evaluation de Double Materialite",
    language: "Langue",
    company: "Entreprise",
    companyName: "Nom de l'entreprise",
    sector: "Secteur",
    reportingYear: "Annee de reporting",
    assessmentOwner: "Responsable de l'evaluation",
    thresholds: "Seuils",
    impactThreshold: "Seuil de materialite d'impact",
    financialThreshold: "Seuil de materialite financiere",
    includeOptional: "Inclure les sujets sous le seuil dans les exports",
    legalBasis: "Base juridique",
    legalText: "Cet outil suit la structure CSRD/ESRS de double materialite: materialite d'impact et materialite financiere. C'est une aide a la documentation, pas un conseil juridique, une opinion d'assurance ou une certification automatique de conformite ESRS.",
    legal1: "Utiliser ESRS 1 et ESRS 2 comme base de reporting.",
    legal2: "Evaluer les impacts, risques et opportunites dans les operations propres et la chaine de valeur.",
    legal3: "Conserver les preuves, contributions des parties prenantes, seuils et justifications.",
    matrixTab: "Matrice",
    topicsTab: "Sujets",
    methodTab: "Methode",
    exportReadyMatrix: "Matrice prete a exporter",
    matrixTitle: "Materialite d'impact x materialite financiere",
    material: "Materiel",
    monitor: "A surveiller",
    optional: "Sous le seuil",
    summary: "Synthese de l'evaluation",
    needsEvidence: "Preuve requise",
    materialTopics: "Sujets materiels",
    topicScoring: "Notation des sujets ESRS",
    iro: "Impacts, risques et opportunites",
    addTopic: "Ajouter un sujet",
    searchPlaceholder: "Filtrer par code ESRS, titre, partie prenante ou responsable",
    workflow: "Processus",
    scoringModel: "Modele de notation",
    complianceNotes: "Notes de conformite",
    wf1: "Definir le perimetre, la limite de reporting, la chaine de valeur et les groupes de parties prenantes.",
    wf2: "Identifier les questions de durabilite avec ESRS E1-E5, S1-S4 et G1 comme univers de depart.",
    wf3: "Noter la materialite d'impact par l'echelle, l'etendue, l'irremediabilite et la probabilite.",
    wf4: "Noter la materialite financiere par l'ampleur et la probabilite des risques ou opportunites.",
    wf5: "Valider les seuils, conserver les preuves et expliquer les jugements.",
    wf6: "Exporter la matrice et le registre des sujets pour la piste d'audit et la validation de la direction.",
    scoringText1: "Le score d'impact est la moyenne de l'echelle, de l'etendue, de l'irremediabilite et de la probabilite. Le score financier est la moyenne de l'ampleur et de la probabilite. Un sujet est materiel lorsqu'un score atteint ou depasse le seuil choisi.",
    scoringText2: "Les sujets fortement notes doivent etre relies aux exigences de publication ESRS avec politiques, actions, cibles et indicateurs propres a l'entreprise avant publication.",
    complianceText: "Les obligations CSRD et la transposition nationale peuvent varier selon l'entite, la structure du groupe et la vague de reporting. La matrice exportee soutient le dossier d'evaluation mais ne remplace pas la revue juridique, les procedures d'assurance ou l'etat de durabilite ESRS complet.",
    category: "Categorie",
    valueChain: "Chaine de valeur",
    stakeholders: "Parties prenantes",
    owner: "Responsable",
    timeHorizon: "Horizon temporel",
    status: "Statut",
    impactMateriality: "Materialite d'impact",
    scale: "Echelle",
    scope: "Etendue",
    irremediability: "Irremediabilite",
    likelihood: "Probabilite",
    financialMateriality: "Materialite financiere",
    magnitude: "Ampleur",
    evidenceQuality: "Qualite des preuves",
    disclosureMapping: "Correspondance disclosure",
    evidenceRationale: "Preuves et justification",
    impactScore: "Score d'impact",
    financialScore: "Score financier",
    scoresBadge: "Impact {impact} / Financier {financial}",
    scoreFootnote: "Scores: 1 faible a 5 eleve. Un sujet est materiel lorsqu'un axe atteint le seuil choisi.",
    pdfMatrixTitle: "Matrice de Double Materialite",
    thresholdsLine: "Seuils: impact {impact}, financier {financial} | Exporte {date}",
    sectorLine: "{company} | Secteur: {sector} | Annee de reporting: {year}",
    pdfDisclaimer: "Materiel si la materialite d'impact ou financiere atteint le seuil choisi. Ce PDF est une aide documentaire et non un conseil juridique ou une assurance.",
    materialConclusion: "Question de durabilite materielle",
    monitorConclusion: "Surveiller et reevaluer",
    optionalConclusion: "Sous les seuils de materialite selectionnes",
    esrsMapping: "Correspondance ESRS",
    impactInputs: "Entrees de notation d'impact",
    financialInputs: "Entrees de notation financiere",
    impactInputsText: "Echelle {scale}, etendue {scope}, irremediabilite {irremediability}, probabilite {likelihood}",
    financialInputsText: "Ampleur {magnitude}, probabilite {likelihood}",
    stakeholdersConsulted: "Parties prenantes consultees ou affectees",
    rationaleEvidence: "Justification de l'evaluation et base probante",
    reportReady: "Formulation prete pour le rapport",
    reportSentence: "{title} a ete evalue au regard de la materialite d'impact et de la materialite financiere sur {valueChain}. Le sujet est classe \"{conclusion}\" sur la base d'un score d'impact de {impactScore} et d'un score financier de {financialScore}, compares aux seuils de {impactThreshold} et {financialThreshold}. L'evaluation a pris en compte les groupes de parties prenantes {stakeholders} et s'appuie sur les preuves suivantes: {evidence}.",
    footerNote: "Prepare comme fiche d'evaluation prete a inserer. Le libelle final de l'etat de durabilite doit etre revu selon les exigences ESRS et les preuves d'assurance.",
    notDocumented: "Non documente",
    page: "Page",
    pdfFile: "rapport-evaluation-materialite-csrd.pdf",
    excelFile: "rapport-evaluation-materialite-csrd.xls",
    sourcePage: "Page source",
    sourceLinkText: "Outil d'evaluation",
    overviewSheet: "Apercu",
    topicsSheet: "Sujets",
    svgTitle: "{company} matrice de materialite CSRD",
    newTopic: "Nouvelle question de durabilite",
    removeTopic: "Supprimer le sujet",
    overview: "Apercu",
    note: "Aide documentaire pour la double materialite CSRD/ESRS. Pas un conseil juridique ou une assurance."
  },
  es: {
    appEyebrow: "Espacio CSRD y ESRS",
    title: "Evaluacion de Doble Materialidad",
    language: "Idioma",
    company: "Empresa",
    companyName: "Nombre de la empresa",
    sector: "Sector",
    reportingYear: "Ejercicio de reporte",
    assessmentOwner: "Responsable de la evaluacion",
    thresholds: "Umbrales",
    impactThreshold: "Umbral de materialidad de impacto",
    financialThreshold: "Umbral de materialidad financiera",
    includeOptional: "Incluir temas bajo el umbral en las exportaciones",
    legalBasis: "Base legal",
    legalText: "Esta herramienta sigue la estructura CSRD/ESRS de doble materialidad: materialidad de impacto y materialidad financiera. Es una ayuda de documentacion, no asesoramiento legal, opinion de aseguramiento ni certificacion automatica de cumplimiento ESRS.",
    legal1: "Usar ESRS 1 y ESRS 2 como base del reporte.",
    legal2: "Evaluar impactos, riesgos y oportunidades en operaciones propias y cadena de valor.",
    legal3: "Conservar evidencias, aportes de grupos de interes, umbrales y razonamientos.",
    matrixTab: "Matriz",
    topicsTab: "Temas",
    methodTab: "Metodo",
    exportReadyMatrix: "Matriz lista para exportar",
    matrixTitle: "Materialidad de impacto x materialidad financiera",
    material: "Material",
    monitor: "Vigilar",
    optional: "Bajo el umbral",
    summary: "Resumen de evaluacion",
    needsEvidence: "Requiere evidencia",
    materialTopics: "Temas materiales",
    topicScoring: "Puntuacion de temas ESRS",
    iro: "Impactos, riesgos y oportunidades",
    addTopic: "Anadir tema",
    searchPlaceholder: "Filtrar temas por codigo ESRS, titulo, grupo de interes o responsable",
    workflow: "Flujo de trabajo",
    scoringModel: "Modelo de puntuacion",
    complianceNotes: "Notas de cumplimiento",
    wf1: "Definir alcance, limite de reporte, cadena de valor y grupos de interes.",
    wf2: "Identificar asuntos de sostenibilidad usando ESRS E1-E5, S1-S4 y G1 como universo inicial.",
    wf3: "Puntuar materialidad de impacto mediante escala, alcance, irremediabilidad y probabilidad.",
    wf4: "Puntuar materialidad financiera mediante magnitud y probabilidad de riesgos u oportunidades.",
    wf5: "Aprobar umbrales, conservar evidencias y explicar juicios.",
    wf6: "Exportar la matriz y el registro de temas para trazabilidad y aprobacion de la direccion.",
    scoringText1: "La puntuacion de impacto es el promedio de escala, alcance, irremediabilidad y probabilidad. La puntuacion financiera es el promedio de magnitud y probabilidad. Un tema es material cuando cualquiera de las puntuaciones alcanza o supera el umbral elegido.",
    scoringText2: "Los temas con alta puntuacion deben mapearse a requisitos de divulgacion ESRS con politicas, acciones, objetivos e indicadores especificos antes de publicarse.",
    complianceText: "Las obligaciones CSRD y la transposicion nacional pueden variar segun entidad, estructura de grupo y ola de reporte. La matriz exportada apoya el expediente de evaluacion, pero no sustituye la revision legal, los procedimientos de aseguramiento ni la declaracion de sostenibilidad ESRS completa.",
    category: "Categoria",
    valueChain: "Cadena de valor",
    stakeholders: "Grupos de interes",
    owner: "Responsable",
    timeHorizon: "Horizonte temporal",
    status: "Estado",
    impactMateriality: "Materialidad de impacto",
    scale: "Escala",
    scope: "Alcance",
    irremediability: "Irremediabilidad",
    likelihood: "Probabilidad",
    financialMateriality: "Materialidad financiera",
    magnitude: "Magnitud",
    evidenceQuality: "Calidad de evidencia",
    disclosureMapping: "Mapeo de divulgacion",
    evidenceRationale: "Evidencia y razonamiento",
    impactScore: "Puntuacion de impacto",
    financialScore: "Puntuacion financiera",
    scoresBadge: "Impacto {impact} / Financiero {financial}",
    scoreFootnote: "Puntuaciones: 1 bajo a 5 alto. Un tema es material cuando un eje alcanza el umbral elegido.",
    pdfMatrixTitle: "Matriz de Doble Materialidad",
    thresholdsLine: "Umbrales: impacto {impact}, financiero {financial} | Exportado {date}",
    sectorLine: "{company} | Sector: {sector} | Ejercicio de reporte: {year}",
    pdfDisclaimer: "Material si la materialidad de impacto o financiera alcanza el umbral elegido. Este PDF es una ayuda documental y no asesoramiento legal ni aseguramiento.",
    materialConclusion: "Asunto de sostenibilidad material",
    monitorConclusion: "Vigilar y reevaluar",
    optionalConclusion: "Bajo los umbrales de materialidad seleccionados",
    esrsMapping: "Mapeo ESRS",
    impactInputs: "Entradas de puntuacion de impacto",
    financialInputs: "Entradas de puntuacion financiera",
    impactInputsText: "Escala {scale}, alcance {scope}, irremediabilidad {irremediability}, probabilidad {likelihood}",
    financialInputsText: "Magnitud {magnitude}, probabilidad {likelihood}",
    stakeholdersConsulted: "Grupos de interes consultados o afectados",
    rationaleEvidence: "Razonamiento de evaluacion y base de evidencia",
    reportReady: "Texto listo para el informe",
    reportSentence: "{title} se evaluo por materialidad de impacto y materialidad financiera en {valueChain}. El asunto se clasifica como \"{conclusion}\" con base en una puntuacion de impacto de {impactScore} y una puntuacion financiera de {financialScore}, frente a umbrales de {impactThreshold} y {financialThreshold}. La evaluacion considero los grupos de interes {stakeholders} y se apoya en la siguiente evidencia: {evidence}.",
    footerNote: "Preparado como registro de evaluacion listo para insertar. El texto final de sostenibilidad debe revisarse frente a requisitos ESRS y evidencia de aseguramiento.",
    notDocumented: "No documentado",
    page: "Pagina",
    pdfFile: "informe-evaluacion-materialidad-csrd.pdf",
    excelFile: "informe-evaluacion-materialidad-csrd.xls",
    sourcePage: "Pagina de origen",
    sourceLinkText: "Herramienta de evaluacion",
    overviewSheet: "Resumen",
    topicsSheet: "Temas",
    svgTitle: "{company} matriz de materialidad CSRD",
    newTopic: "Nuevo asunto de sostenibilidad",
    removeTopic: "Eliminar tema",
    overview: "Resumen",
    note: "Ayuda documental para doble materialidad CSRD/ESRS. No es asesoramiento legal ni aseguramiento."
  }
};

const optionTranslations = {
  de: {
    "Environment": "Umwelt",
    "Social": "Soziales",
    "Governance": "Governance",
    "Own operations": "Eigene Taetigkeiten",
    "Upstream": "Vorgelagert",
    "Downstream": "Nachgelagert",
    "Full value chain": "Gesamte Wertschoepfungskette",
    "Short term": "Kurzfristig",
    "Medium term": "Mittelfristig",
    "Long term": "Langfristig",
    "Multiple horizons": "Mehrere Horizonte",
    "Draft": "Entwurf",
    "Stakeholder reviewed": "Von Stakeholdern geprueft",
    "Management approved": "Vom Management freigegeben",
    "Needs evidence": "Nachweis fehlt",
    "High": "Hoch",
    "Medium": "Mittel",
    "Low": "Niedrig",
    "Missing": "Fehlt"
  },
  fr: {
    "Environment": "Environnement",
    "Social": "Social",
    "Governance": "Gouvernance",
    "Own operations": "Operations propres",
    "Upstream": "Amont",
    "Downstream": "Aval",
    "Full value chain": "Toute la chaine de valeur",
    "Short term": "Court terme",
    "Medium term": "Moyen terme",
    "Long term": "Long terme",
    "Multiple horizons": "Plusieurs horizons",
    "Draft": "Brouillon",
    "Stakeholder reviewed": "Revise par parties prenantes",
    "Management approved": "Valide par la direction",
    "Needs evidence": "Preuve requise",
    "High": "Elevee",
    "Medium": "Moyenne",
    "Low": "Faible",
    "Missing": "Manquante"
  },
  es: {
    "Environment": "Medio ambiente",
    "Social": "Social",
    "Governance": "Gobernanza",
    "Own operations": "Operaciones propias",
    "Upstream": "Aguas arriba",
    "Downstream": "Aguas abajo",
    "Full value chain": "Toda la cadena de valor",
    "Short term": "Corto plazo",
    "Medium term": "Medio plazo",
    "Long term": "Largo plazo",
    "Multiple horizons": "Varios horizontes",
    "Draft": "Borrador",
    "Stakeholder reviewed": "Revisado por grupos de interes",
    "Management approved": "Aprobado por direccion",
    "Needs evidence": "Requiere evidencia",
    "High": "Alta",
    "Medium": "Media",
    "Low": "Baja",
    "Missing": "Falta"
  }
};

const seedTopics = [
  ["E1", "Climate change", "Environment", "Full value chain", "Investors, regulators, employees", "CSRD lead", "Medium term", "Stakeholder reviewed", 5, 5, 4, 5, 5, 5, "ESRS E1", "GHG inventory, transition plan workshop and scenario analysis."],
  ["E2", "Pollution", "Environment", "Own operations", "Local communities, regulators", "HSE", "Short term", "Draft", 4, 3, 3, 3, 3, 3, "ESRS E2", "Permit register and incident log reviewed."],
  ["E3", "Water and marine resources", "Environment", "Upstream", "Suppliers, local communities", "Procurement", "Long term", "Needs evidence", 3, 3, 3, 2, 2, 3, "ESRS E3", ""],
  ["E4", "Biodiversity and ecosystems", "Environment", "Upstream", "Suppliers, NGOs", "Procurement", "Long term", "Draft", 3, 4, 4, 3, 3, 2, "ESRS E4", "Screening against high-risk sourcing regions."],
  ["E5", "Resource use and circular economy", "Environment", "Full value chain", "Customers, suppliers", "Operations", "Medium term", "Management approved", 4, 4, 3, 4, 4, 4, "ESRS E5", "Waste data, product design review and customer requirements."],
  ["S1", "Own workforce", "Social", "Own operations", "Employees, works council", "HR", "Short term", "Management approved", 5, 5, 4, 4, 4, 4, "ESRS S1", "Engagement survey, safety KPIs and pay equity review."],
  ["S2", "Workers in the value chain", "Social", "Upstream", "Suppliers, workers, unions", "Procurement", "Medium term", "Stakeholder reviewed", 4, 5, 4, 4, 3, 4, "ESRS S2", "Supplier risk mapping and audit outcomes."],
  ["S3", "Affected communities", "Social", "Downstream", "Communities, civil society", "Public affairs", "Long term", "Draft", 3, 3, 3, 2, 2, 2, "ESRS S3", "Community feedback channels reviewed."],
  ["S4", "Consumers and end-users", "Social", "Downstream", "Customers, end users", "Product", "Short term", "Draft", 3, 3, 2, 3, 4, 3, "ESRS S4", "Product safety logs and customer complaints."],
  ["G1", "Business conduct", "Governance", "Full value chain", "Board, employees, suppliers", "Compliance", "Short term", "Management approved", 4, 4, 3, 4, 5, 4, "ESRS G1", "Code of conduct, anti-corruption controls and whistleblowing data."]
];

const state = {
  topics: seedTopics.map(([code, title, category, valueChain, stakeholders, owner, timeHorizon, status, impactScale, impactScope, impactIrremediability, impactLikelihood, financialMagnitude, financialLikelihood, disclosure, evidence]) => ({
    id: crypto.randomUUID(),
    code,
    title,
    category,
    valueChain,
    stakeholders,
    owner,
    timeHorizon,
    status,
    impactScale,
    impactScope,
    impactIrremediability,
    impactLikelihood,
    financialMagnitude,
    financialLikelihood,
    evidenceQuality: evidence ? "Medium" : "Missing",
    disclosure,
    evidence
  }))
};

const refs = {
  canvas: document.querySelector("#matrixCanvas"),
  topicCards: document.querySelector("#topicCards"),
  topicTemplate: document.querySelector("#topicTemplate"),
  topicSearch: document.querySelector("#topicSearch"),
  impactThreshold: document.querySelector("#impactThreshold"),
  financialThreshold: document.querySelector("#financialThreshold"),
  impactThresholdOut: document.querySelector("#impactThresholdOut"),
  financialThresholdOut: document.querySelector("#financialThresholdOut"),
  includeOptional: document.querySelector("#includeOptional"),
  languageSelect: document.querySelector("#languageSelect"),
  importExcelInput: document.querySelector("#importExcelInput")
};

function lang() {
  return refs.languageSelect.value;
}

function t(key) {
  return (translations[lang()] && translations[lang()][key]) || translations.en[key] || key;
}

function format(key, values) {
  return t(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function optionLabel(value) {
  return (optionTranslations[lang()] && optionTranslations[lang()][value]) || value;
}

function canonicalOption(value, choices) {
  const normalized = String(value ?? "").trim();
  if (choices.includes(normalized)) return normalized;
  for (const dictionary of Object.values(optionTranslations)) {
    const match = Object.entries(dictionary).find(([, label]) => label === normalized);
    if (match && choices.includes(match[0])) return match[0];
  }
  return choices[0];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function translateStaticUi() {
  document.documentElement.lang = lang();
  document.title = t("title");
  setText(".topbar .eyebrow", t("appEyebrow"));
  setText("h1", t("title"));
  const homeLink = document.querySelector("#homeLink");
  if (homeLink) {
    homeLink.textContent = t("overview");
    homeLink.href = `index.html?lang=${lang()}`;
  }
  document.querySelector(".language-control").firstChild.textContent = `${t("language")} `;
  setText(".sidebar .panel:nth-of-type(1) h2", t("company"));
  const companyLabels = document.querySelectorAll(".sidebar .panel:nth-of-type(1) label");
  [t("companyName"), t("sector"), t("reportingYear"), t("assessmentOwner")].forEach((text, index) => {
    companyLabels[index].firstChild.textContent = `${text} `;
  });
  setText(".sidebar .panel:nth-of-type(2) h2", t("thresholds"));
  const thresholdLabels = document.querySelectorAll(".sidebar .panel:nth-of-type(2) label");
  thresholdLabels[0].firstChild.textContent = `${t("impactThreshold")} `;
  thresholdLabels[1].firstChild.textContent = `${t("financialThreshold")} `;
  thresholdLabels[2].lastChild.textContent = ` ${t("includeOptional")}`;
  setText(".note h2", t("legalBasis"));
  setText(".note p", t("legalText"));
  const noteItems = document.querySelectorAll(".note li");
  [t("legal1"), t("legal2"), t("legal3")].forEach((text, index) => {
    noteItems[index].textContent = text;
  });
  const tabs = document.querySelectorAll(".tab");
  [t("matrixTab"), t("topicsTab"), t("methodTab")].forEach((text, index) => {
    tabs[index].textContent = text;
  });
  setText("#matrixView .eyebrow", t("exportReadyMatrix"));
  setText("#matrixView h2", t("matrixTitle"));
  const legendItems = document.querySelectorAll(".legend span");
  [t("material"), t("monitor"), t("optional")].forEach((text, index) => {
    legendItems[index].lastChild.textContent = text;
  });
  setText(".summary-panel h2", t("summary"));
  const statTerms = document.querySelectorAll(".stats dt");
  [t("topicsTab"), t("material"), t("needsEvidence")].forEach((text, index) => {
    statTerms[index].textContent = text;
  });
  setText(".summary-panel h3", t("materialTopics"));
  setText("#topicsView .eyebrow", t("topicScoring"));
  setText("#topicsView h2", t("iro"));
  setText("#addTopicBtn", t("addTopic"));
  setPlaceholder("#topicSearch", t("searchPlaceholder"));
  const methodBlocks = document.querySelectorAll(".method-block");
  methodBlocks[0].querySelector("h2").textContent = t("workflow");
  methodBlocks[1].querySelector("h2").textContent = t("scoringModel");
  methodBlocks[2].querySelector("h2").textContent = t("complianceNotes");
  methodBlocks[0].querySelectorAll("li").forEach((li, index) => {
    li.textContent = t(`wf${index + 1}`);
  });
  methodBlocks[1].querySelectorAll("p")[0].textContent = t("scoringText1");
  methodBlocks[1].querySelectorAll("p")[1].textContent = t("scoringText2");
  methodBlocks[2].querySelector("p").textContent = t("complianceText");
}

function scoreImpact(topic) {
  return (Number(topic.impactScale) + Number(topic.impactScope) + Number(topic.impactIrremediability) + Number(topic.impactLikelihood)) / 4;
}

function scoreFinancial(topic) {
  return (Number(topic.financialMagnitude) + Number(topic.financialLikelihood)) / 2;
}

function materiality(topic) {
  const impactThreshold = Number(refs.impactThreshold.value);
  const financialThreshold = Number(refs.financialThreshold.value);
  const impact = scoreImpact(topic);
  const financial = scoreFinancial(topic);
  if (impact >= impactThreshold || financial >= financialThreshold) return "material";
  if (impact >= impactThreshold - 0.6 || financial >= financialThreshold - 0.6) return "monitor";
  return "optional";
}

function getCompanyMeta() {
  return {
    companyName: document.querySelector("#companyName").value,
    sector: document.querySelector("#sector").value,
    reportingYear: document.querySelector("#reportingYear").value,
    owner: document.querySelector("#owner").value,
    impactThreshold: Number(refs.impactThreshold.value),
    financialThreshold: Number(refs.financialThreshold.value),
    exportedAt: new Date().toISOString(),
    note: t("note")
  };
}

function getSourceUrl() {
  const url = new URL("tool.html", window.location.href);
  url.searchParams.set("lang", lang());
  return url.href;
}

function optionList(values, selected) {
  return values.map(value => `<option value="${value}" ${value === selected ? "selected" : ""}>${optionLabel(value)}</option>`).join("");
}

function updateTopic(id, key, value) {
  const topic = state.topics.find(item => item.id === id);
  if (!topic) return;
  topic[key] = value;
  render();
}

function createTopicCard(topic) {
  const node = refs.topicTemplate.content.firstElementChild.cloneNode(true);
  const bind = (selector, key) => {
    const input = node.querySelector(selector);
    const output = input.closest(".slider-control")?.querySelector(".slider-value");
    input.value = topic[key];
    if (output) output.value = topic[key];
    input.addEventListener("input", event => updateTopic(topic.id, key, event.target.value));
  };
  const bindSelect = (selector, key, values) => {
    const input = node.querySelector(selector);
    input.innerHTML = optionList(values, topic[key]);
    input.addEventListener("change", event => updateTopic(topic.id, key, event.target.value));
  };

  const labels = node.querySelectorAll(".field-grid label");
  [t("category"), t("valueChain"), t("stakeholders"), t("owner"), t("timeHorizon"), t("status")].forEach((text, index) => {
    labels[index].firstChild.textContent = text;
  });
  const legends = node.querySelectorAll("legend");
  legends[0].textContent = t("impactMateriality");
  legends[1].textContent = t("financialMateriality");
  const scoreLabels = node.querySelectorAll(".score-grid label");
  [t("scale"), t("scope"), t("irremediability"), t("likelihood"), t("magnitude"), t("likelihood"), t("evidenceQuality"), t("disclosureMapping")].forEach((text, index) => {
    scoreLabels[index].firstChild.textContent = text;
  });
  node.querySelector(".evidence").closest("label").firstChild.textContent = t("evidenceRationale");
  node.querySelector(".remove").title = t("removeTopic");
  node.querySelector(".remove").setAttribute("aria-label", t("removeTopic"));

  bind(".code", "code");
  bind(".title", "title");
  bind(".stakeholders", "stakeholders");
  bind(".topicOwner", "owner");
  bind(".impactScale", "impactScale");
  bind(".impactScope", "impactScope");
  bind(".impactIrremediability", "impactIrremediability");
  bind(".impactLikelihood", "impactLikelihood");
  bind(".financialMagnitude", "financialMagnitude");
  bind(".financialLikelihood", "financialLikelihood");
  bind(".disclosure", "disclosure");
  bind(".evidence", "evidence");
  bindSelect(".category", "category", categories);
  bindSelect(".valueChain", "valueChain", valueChains);
  bindSelect(".timeHorizon", "timeHorizon", horizons);
  bindSelect(".status", "status", statuses);
  bindSelect(".evidenceQuality", "evidenceQuality", evidenceQualities);

  const impact = scoreImpact(topic).toFixed(1);
  const financial = scoreFinancial(topic).toFixed(1);
  const result = materiality(topic);
  node.querySelector(".scoreBadge").textContent = format("scoresBadge", { impact, financial });
  const badge = node.querySelector(".materialityBadge");
  badge.textContent = result === "material" ? t("material") : result === "monitor" ? t("monitor") : t("optional");
  badge.className = `materialityBadge ${result}`;
  node.querySelector(".remove").addEventListener("click", () => {
    state.topics = state.topics.filter(item => item.id !== topic.id);
    render();
  });
  return node;
}

function renderTopics() {
  const query = refs.topicSearch.value.trim().toLowerCase();
  refs.topicCards.innerHTML = "";
  state.topics
    .filter(topic => [topic.code, topic.title, topic.category, topic.stakeholders, topic.owner].join(" ").toLowerCase().includes(query))
    .forEach(topic => refs.topicCards.appendChild(createTopicCard(topic)));
}

function drawMatrix() {
  const canvas = refs.canvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const plot = { x: 105, y: 60, w: width - 165, h: height - 150 };
  const impactThreshold = Number(refs.impactThreshold.value);
  const financialThreshold = Number(refs.financialThreshold.value);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const toX = value => plot.x + ((value - 1) / 4) * plot.w;
  const toY = value => plot.y + plot.h - ((value - 1) / 4) * plot.h;

  ctx.fillStyle = "#f3f8f5";
  ctx.fillRect(toX(impactThreshold), plot.y, plot.x + plot.w - toX(impactThreshold), plot.h);
  ctx.fillStyle = "rgba(31, 122, 86, 0.11)";
  ctx.fillRect(plot.x, plot.y, plot.w, toY(financialThreshold) - plot.y);
  ctx.fillStyle = "rgba(31, 122, 86, 0.17)";
  ctx.fillRect(toX(impactThreshold), plot.y, plot.x + plot.w - toX(impactThreshold), toY(financialThreshold) - plot.y);

  ctx.strokeStyle = "#d9e0dd";
  ctx.lineWidth = 1;
  ctx.font = "14px Inter, Segoe UI, sans-serif";
  ctx.fillStyle = "#62706a";
  for (let i = 1; i <= 5; i += 1) {
    const x = toX(i);
    const y = toY(i);
    ctx.beginPath();
    ctx.moveTo(x, plot.y);
    ctx.lineTo(x, plot.y + plot.h);
    ctx.moveTo(plot.x, y);
    ctx.lineTo(plot.x + plot.w, y);
    ctx.stroke();
    ctx.fillText(String(i), x - 4, plot.y + plot.h + 28);
    ctx.fillText(String(i), plot.x - 30, y + 5);
  }

  ctx.strokeStyle = "#1f7a56";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(toX(impactThreshold), plot.y);
  ctx.lineTo(toX(impactThreshold), plot.y + plot.h);
  ctx.moveTo(plot.x, toY(financialThreshold));
  ctx.lineTo(plot.x + plot.w, toY(financialThreshold));
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "#16201d";
  ctx.lineWidth = 2;
  ctx.strokeRect(plot.x, plot.y, plot.w, plot.h);

  ctx.fillStyle = "#16201d";
  ctx.font = "700 24px Inter, Segoe UI, sans-serif";
  ctx.fillText(`${getCompanyMeta().companyName} - ${getCompanyMeta().reportingYear}`, plot.x, 32);
  ctx.font = "700 16px Inter, Segoe UI, sans-serif";
  ctx.fillText(t("impactMateriality"), plot.x + plot.w / 2 - 70, height - 45);
  ctx.save();
  ctx.translate(32, plot.y + plot.h / 2 + 70);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(t("financialMateriality"), 0, 0);
  ctx.restore();

  const colors = { material: "#1f7a56", monitor: "#b46918", optional: "#2e5f9e" };
  state.topics.forEach((topic, index) => {
    const x = toX(scoreImpact(topic));
    const y = toY(scoreFinancial(topic));
    const status = materiality(topic);
    ctx.beginPath();
    ctx.fillStyle = colors[status];
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 11px Inter, Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(topic.code, x, y);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#16201d";
    ctx.font = "700 12px Inter, Segoe UI, sans-serif";
    const labelX = Math.min(x + 20, plot.x + plot.w - 120);
    const offset = index % 2 === 0 ? -8 : 18;
    ctx.fillText(topic.title.slice(0, 28), labelX, y + offset);
  });

  ctx.fillStyle = "#62706a";
  ctx.font = "12px Inter, Segoe UI, sans-serif";
  ctx.fillText(t("scoreFootnote"), plot.x, height - 18);
}

function renderSummary() {
  const materialTopics = state.topics.filter(topic => materiality(topic) === "material");
  const missingEvidence = state.topics.filter(topic => !topic.evidence.trim() || topic.evidenceQuality === "Missing");
  document.querySelector("#topicCount").textContent = state.topics.length;
  document.querySelector("#materialCount").textContent = materialTopics.length;
  document.querySelector("#evidenceCount").textContent = missingEvidence.length;
  const list = document.querySelector("#materialList");
  list.innerHTML = "";
  materialTopics
    .sort((a, b) => Math.max(scoreImpact(b), scoreFinancial(b)) - Math.max(scoreImpact(a), scoreFinancial(a)))
    .forEach(topic => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${topic.code} ${topic.title}</strong><br>${t("impactScore")} ${scoreImpact(topic).toFixed(1)}, ${t("financialScore").toLowerCase()} ${scoreFinancial(topic).toFixed(1)}`;
      list.appendChild(li);
    });
}

function render() {
  translateStaticUi();
  refs.impactThresholdOut.textContent = Number(refs.impactThreshold.value).toFixed(1);
  refs.financialThresholdOut.textContent = Number(refs.financialThreshold.value).toFixed(1);
  renderTopics();
  drawMatrix();
  renderSummary();
}

function exportRows() {
  return state.topics
    .filter(topic => refs.includeOptional.checked || materiality(topic) !== "optional")
    .map(topic => ({
      code: topic.code,
      title: topic.title,
      category: topic.category,
      valueChain: topic.valueChain,
      stakeholders: topic.stakeholders,
      owner: topic.owner,
      timeHorizon: topic.timeHorizon,
      status: topic.status,
      impactScale: topic.impactScale,
      impactScope: topic.impactScope,
      impactIrremediability: topic.impactIrremediability,
      impactLikelihood: topic.impactLikelihood,
      impactScore: scoreImpact(topic).toFixed(2),
      financialMagnitude: topic.financialMagnitude,
      financialLikelihood: topic.financialLikelihood,
      financialScore: scoreFinancial(topic).toFixed(2),
      materiality: materiality(topic),
      evidenceQuality: topic.evidenceQuality,
      disclosure: topic.disclosure,
      evidence: topic.evidence
    }));
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function numberFromText(value, fallback = 3) {
  const match = String(value ?? "").replace(",", ".").match(/-?\d+(\.\d+)?/);
  const number = match ? Number(match[0]) : fallback;
  return Number.isFinite(number) ? number : fallback;
}

function clampScore(value) {
  return Math.max(1, Math.min(5, Math.round(numberFromText(value))));
}

function createTopicFromImport(topic) {
  const impactFallback = clampScore(topic.impactScore);
  const financialFallback = clampScore(topic.financialScore);
  return {
    id: crypto.randomUUID(),
    code: String(topic.code || "NEW"),
    title: String(topic.title || t("newTopic")),
    category: canonicalOption(topic.category, categories),
    valueChain: canonicalOption(topic.valueChain, valueChains),
    stakeholders: String(topic.stakeholders || ""),
    owner: String(topic.owner || ""),
    timeHorizon: canonicalOption(topic.timeHorizon, horizons),
    status: canonicalOption(topic.status, statuses),
    impactScale: clampScore(topic.impactScale ?? impactFallback),
    impactScope: clampScore(topic.impactScope ?? impactFallback),
    impactIrremediability: clampScore(topic.impactIrremediability ?? impactFallback),
    impactLikelihood: clampScore(topic.impactLikelihood ?? impactFallback),
    financialMagnitude: clampScore(topic.financialMagnitude ?? financialFallback),
    financialLikelihood: clampScore(topic.financialLikelihood ?? financialFallback),
    evidenceQuality: canonicalOption(topic.evidenceQuality, evidenceQualities),
    disclosure: String(topic.disclosure || ""),
    evidence: String(topic.evidence || "")
  };
}

function assessmentPayload() {
  return {
    version: 1,
    meta: getCompanyMeta(),
    language: lang(),
    includeOptional: refs.includeOptional.checked,
    topics: exportRows()
  };
}

function applyAssessmentPayload(payload) {
  const meta = payload.meta || {};
  if (payload.language && translations[payload.language]) refs.languageSelect.value = payload.language;
  if (meta.companyName !== undefined) document.querySelector("#companyName").value = meta.companyName;
  if (meta.sector !== undefined) document.querySelector("#sector").value = meta.sector;
  if (meta.reportingYear !== undefined) document.querySelector("#reportingYear").value = meta.reportingYear;
  if (meta.owner !== undefined) document.querySelector("#owner").value = meta.owner;
  if (meta.impactThreshold !== undefined) refs.impactThreshold.value = numberFromText(meta.impactThreshold, refs.impactThreshold.value);
  if (meta.financialThreshold !== undefined) refs.financialThreshold.value = numberFromText(meta.financialThreshold, refs.financialThreshold.value);
  if (payload.includeOptional !== undefined) refs.includeOptional.checked = Boolean(payload.includeOptional);
  if (Array.isArray(payload.topics) && payload.topics.length) {
    state.topics = payload.topics.map(createTopicFromImport);
  }
  render();
}

function textAt(cells, index) {
  return cells[index]?.textContent.trim() || "";
}

function fallbackPayloadFromExcel(doc) {
  const tables = [...doc.querySelectorAll("table")];
  if (tables.length < 2) throw new Error("No importable assessment tables found.");
  const metaRows = [...tables[0].querySelectorAll("tr")].map(row => [...row.cells]);
  const topicsRows = [...tables[1].querySelectorAll("tbody tr")];
  const meta = {
    companyName: textAt(metaRows[0], 1),
    sector: textAt(metaRows[1], 1),
    reportingYear: textAt(metaRows[2], 1),
    owner: textAt(metaRows[3], 1),
    impactThreshold: numberFromText(textAt(metaRows[4], 1), refs.impactThreshold.value),
    financialThreshold: numberFromText(textAt(metaRows[5], 1), refs.financialThreshold.value)
  };
  const topics = topicsRows.map(row => {
    const cells = [...row.cells];
    if (cells.length >= 20) {
      return {
        code: textAt(cells, 0),
        title: textAt(cells, 1),
        category: textAt(cells, 2),
        valueChain: textAt(cells, 3),
        stakeholders: textAt(cells, 4),
        owner: textAt(cells, 5),
        timeHorizon: textAt(cells, 6),
        status: textAt(cells, 7),
        impactScale: textAt(cells, 8),
        impactScope: textAt(cells, 9),
        impactIrremediability: textAt(cells, 10),
        impactLikelihood: textAt(cells, 11),
        impactScore: textAt(cells, 12),
        financialMagnitude: textAt(cells, 13),
        financialLikelihood: textAt(cells, 14),
        financialScore: textAt(cells, 15),
        evidenceQuality: textAt(cells, 17),
        disclosure: textAt(cells, 18),
        evidence: textAt(cells, 19)
      };
    }
    return {
      code: textAt(cells, 0),
      title: textAt(cells, 1),
      category: textAt(cells, 2),
      valueChain: textAt(cells, 3),
      stakeholders: textAt(cells, 4),
      owner: textAt(cells, 5),
      timeHorizon: textAt(cells, 6),
      status: textAt(cells, 7),
      impactScore: textAt(cells, 8),
      financialScore: textAt(cells, 9),
      evidenceQuality: textAt(cells, 11),
      disclosure: textAt(cells, 12),
      evidence: textAt(cells, 13)
    };
  });
  return { meta, topics, includeOptional: true };
}

function parseAssessmentImport(text) {
  const doc = new DOMParser().parseFromString(text, "text/html");
  const dataNode = doc.querySelector("#assessmentData");
  const embeddedData = dataNode?.value || dataNode?.textContent || "";
  if (embeddedData.trim()) return JSON.parse(embeddedData);
  return fallbackPayloadFromExcel(doc);
}

function importExcelFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      applyAssessmentPayload(parseAssessmentImport(String(reader.result || "")));
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    } finally {
      refs.importExcelInput.value = "";
    }
  });
  reader.readAsText(file);
}

function download(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function pdfEscape(value) {
  return String(value ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)")
    .replaceAll("\r", " ")
    .replaceAll("\n", " ");
}

function pdfUri(value) {
  return pdfEscape(value);
}

function wrapText(text, maxChars) {
  const words = String(text || t("notDocumented")).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach(word => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.length ? lines : ["Not documented"];
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

class PdfDocument {
  constructor() {
    this.encoder = new TextEncoder();
    this.objects = [null];
  }

  reserve() {
    this.objects.push(null);
    return this.objects.length - 1;
  }

  setAscii(id, body) {
    this.objects[id] = { type: "ascii", body };
  }

  setStream(id, dict, bytes) {
    this.objects[id] = { type: "stream", dict, bytes };
  }

  ascii(text) {
    return this.encoder.encode(text);
  }

  build(rootId) {
    const chunks = [this.ascii("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n")];
    const offsets = [0];
    let length = chunks[0].length;

    const push = chunk => {
      chunks.push(chunk);
      length += chunk.length;
    };

    for (let id = 1; id < this.objects.length; id += 1) {
      const object = this.objects[id];
      offsets[id] = length;
      push(this.ascii(`${id} 0 obj\n`));
      if (object.type === "ascii") {
        push(this.ascii(`${object.body}\n`));
      } else {
        push(this.ascii(`<< ${object.dict} /Length ${object.bytes.length} >>\nstream\n`));
        push(object.bytes);
        push(this.ascii("\nendstream\n"));
      }
      push(this.ascii("endobj\n"));
    }

    const xrefOffset = length;
    push(this.ascii(`xref\n0 ${this.objects.length}\n0000000000 65535 f \n`));
    for (let id = 1; id < this.objects.length; id += 1) {
      push(this.ascii(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`));
    }
    push(this.ascii(`trailer\n<< /Size ${this.objects.length} /Root ${rootId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`));
    return new Blob(chunks, { type: "application/pdf" });
  }
}

function textLine(text, x, y, size = 10, color = "0 0 0") {
  return `BT ${color} rg /F1 ${size} Tf 1 0 0 1 ${x} ${y} Tm (${pdfEscape(text)}) Tj ET\n`;
}

function addWrappedText(parts, label, text, x, y, maxChars, size = 9, leading = 12) {
  parts.push(textLine(label, x, y, 8, "0.11 0.37 0.26"));
  let currentY = y - 13;
  wrapText(text, maxChars).forEach(line => {
    parts.push(textLine(line, x, currentY, size, "0.10 0.13 0.12"));
    currentY -= leading;
  });
  return currentY - 5;
}

function addKeyValue(parts, key, value, x, y, width = 230) {
  parts.push(textLine(key, x, y, 7.5, "0.38 0.44 0.41"));
  wrapText(value, Math.max(18, Math.floor(width / 5))).forEach((line, index) => {
    parts.push(textLine(line, x, y - 12 - index * 10, 9, "0.10 0.13 0.12"));
  });
}

function topicConclusion(topic) {
  const result = materiality(topic);
  if (result === "material") return t("materialConclusion");
  if (result === "monitor") return t("monitorConclusion");
  return t("optionalConclusion");
}

function createTopicPageContent(topic, meta, pageNumber) {
  const parts = [];
  parts.push("0.96 0.98 0.97 rg 0 0 595.28 841.89 re f\n");
  parts.push("1 1 1 rg 42 668 511 104 re f\n");
  parts.push("0.85 0.88 0.86 RG 42 668 511 104 re S\n");
  parts.push(textLine(`${topic.code} ${topic.title}`, 42, 806, 18, "0.08 0.13 0.11"));
  parts.push(textLine(`${meta.companyName} | ${meta.reportingYear} CSRD ${t("title")}`, 42, 785, 9, "0.38 0.44 0.41"));
  parts.push(textLine(topicConclusion(topic), 42, 742, 14, "0.12 0.48 0.34"));
  parts.push(textLine(`${t("impactScore")} ${scoreImpact(topic).toFixed(1)} / 5`, 42, 718, 11, "0.10 0.13 0.12"));
  parts.push(textLine(`${t("financialScore")} ${scoreFinancial(topic).toFixed(1)} / 5`, 230, 718, 11, "0.10 0.13 0.12"));
  parts.push(textLine(`${t("evidenceQuality")}: ${optionLabel(topic.evidenceQuality)}`, 410, 718, 11, "0.10 0.13 0.12"));

  addKeyValue(parts, t("esrsMapping"), topic.disclosure, 58, 650, 160);
  addKeyValue(parts, t("category"), optionLabel(topic.category), 230, 650, 120);
  addKeyValue(parts, t("valueChain"), optionLabel(topic.valueChain), 365, 650, 150);
  addKeyValue(parts, t("timeHorizon"), optionLabel(topic.timeHorizon), 58, 604, 150);
  addKeyValue(parts, t("owner"), topic.owner, 230, 604, 120);
  addKeyValue(parts, t("status"), optionLabel(topic.status), 365, 604, 150);

  addKeyValue(parts, t("impactInputs"), format("impactInputsText", { scale: topic.impactScale, scope: topic.impactScope, irremediability: topic.impactIrremediability, likelihood: topic.impactLikelihood }), 58, 558, 230);
  addKeyValue(parts, t("financialInputs"), format("financialInputsText", { magnitude: topic.financialMagnitude, likelihood: topic.financialLikelihood }), 365, 558, 150);

  let y = 494;
  y = addWrappedText(parts, t("stakeholdersConsulted"), topic.stakeholders, 42, y, 92);
  y = addWrappedText(parts, t("rationaleEvidence"), topic.evidence, 42, y, 92);
  y = addWrappedText(
    parts,
    t("reportReady"),
    format("reportSentence", {
      title: topic.title,
      valueChain: optionLabel(topic.valueChain).toLowerCase(),
      conclusion: topicConclusion(topic),
      impactScore: scoreImpact(topic).toFixed(1),
      financialScore: scoreFinancial(topic).toFixed(1),
      impactThreshold: meta.impactThreshold.toFixed(1),
      financialThreshold: meta.financialThreshold.toFixed(1),
      stakeholders: topic.stakeholders || t("notDocumented"),
      evidence: topic.evidence || t("notDocumented")
    }),
    42,
    y,
    94
  );

  parts.push("0.85 0.88 0.86 RG 42 104 m 553 104 l S\n");
  wrapText(t("footerNote"), 116).slice(0, 2).forEach((line, index) => {
    parts.push(textLine(line, 42, 84 - index * 10, 7.2, "0.38 0.44 0.41"));
  });
  parts.push(textLine(`${t("sourcePage")}: ${t("sourceLinkText")}`, 42, 56, 7.2, "0.12 0.32 0.54"));
  parts.push(textLine(`${t("page")} ${pageNumber}`, 518, 40, 8, "0.38 0.44 0.41"));
  return parts.join("");
}

function createMatrixPageContent(meta, imageId) {
  const imageWidth = 690;
  const imageHeight = imageWidth * (refs.canvas.height / refs.canvas.width);
  const imageX = 76;
  const imageY = 46;
  return [
    "0.96 0.98 0.97 rg 0 0 841.89 595.28 re f\n",
    `q ${imageWidth} 0 0 ${imageHeight} ${imageX} ${imageY} cm /Im1 Do Q\n`,
    textLine(t("pdfMatrixTitle"), 56, 555, 22, "0.08 0.13 0.11"),
    textLine(format("sectorLine", { company: meta.companyName, sector: meta.sector, year: meta.reportingYear }), 56, 532, 10, "0.38 0.44 0.41"),
    textLine(format("thresholdsLine", { impact: meta.impactThreshold.toFixed(1), financial: meta.financialThreshold.toFixed(1), date: new Date(meta.exportedAt).toLocaleDateString(lang()) }), 56, 515, 9, "0.38 0.44 0.41"),
    textLine(t("pdfDisclaimer"), 56, 42, 8, "0.38 0.44 0.41"),
    textLine(`${t("sourcePage")}: ${t("sourceLinkText")}`, 56, 26, 8, "0.12 0.32 0.54")
  ].join("");
}

async function exportPdf() {
  drawMatrix();
  const meta = getCompanyMeta();
  const pdf = new PdfDocument();
  const catalogId = pdf.reserve();
  const pagesId = pdf.reserve();
  const fontId = pdf.reserve();
  const imageId = pdf.reserve();
  const matrixContentId = pdf.reserve();
  const matrixPageId = pdf.reserve();
  const matrixLinkId = pdf.reserve();
  const pageIds = [matrixPageId];
  const sourceUrl = getSourceUrl();

  const jpegBytes = base64ToBytes(refs.canvas.toDataURL("image/jpeg", 0.94).split(",")[1]);
  pdf.setAscii(fontId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  pdf.setStream(imageId, `/Type /XObject /Subtype /Image /Width ${refs.canvas.width} /Height ${refs.canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode`, jpegBytes);
  pdf.setStream(matrixContentId, "", new TextEncoder().encode(createMatrixPageContent(meta, imageId)));
  pdf.setAscii(matrixLinkId, `<< /Type /Annot /Subtype /Link /Rect [56 22 190 36] /Border [0 0 0] /A << /S /URI /URI (${pdfUri(sourceUrl)}) >> >>`);
  pdf.setAscii(matrixPageId, `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 841.89 595.28] /Resources << /Font << /F1 ${fontId} 0 R >> /XObject << /Im1 ${imageId} 0 R >> >> /Annots [${matrixLinkId} 0 R] /Contents ${matrixContentId} 0 R >>`);

  const rows = exportRows();
  rows.forEach((row, index) => {
    const topic = state.topics.find(item => item.code === row.code && item.title === row.title) || state.topics[index];
    const contentId = pdf.reserve();
    const pageId = pdf.reserve();
    const linkId = pdf.reserve();
    pageIds.push(pageId);
    pdf.setStream(contentId, "", new TextEncoder().encode(createTopicPageContent(topic, meta, index + 2)));
    pdf.setAscii(linkId, `<< /Type /Annot /Subtype /Link /Rect [42 52 170 64] /Border [0 0 0] /A << /S /URI /URI (${pdfUri(sourceUrl)}) >> >>`);
    pdf.setAscii(pageId, `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Annots [${linkId} 0 R] /Contents ${contentId} 0 R >>`);
  });

  pdf.setAscii(pagesId, `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`);
  pdf.setAscii(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  download(t("pdfFile"), pdf.build(catalogId));
}

function excelCell(value) {
  return `<td>${htmlEscape(value)}</td>`;
}

function excelTextCell(value) {
  return `<td style="mso-number-format:'\\@';">${htmlEscape(value)}</td>`;
}

function excelNumberCell(value) {
  const number = Number(value);
  const normalized = Number.isFinite(number) ? String(number).replace(",", ".") : "0";
  return `<td style="mso-number-format:'0.00';" x:num="${htmlEscape(normalized)}">${htmlEscape(normalized)}</td>`;
}

function excelIntegerCell(value) {
  return `<td style="mso-number-format:'0';" x:num="${htmlEscape(value)}">${htmlEscape(value)}</td>`;
}

function exportExcel() {
  const meta = getCompanyMeta();
  const sourceUrl = getSourceUrl();
  const rows = exportRows();
  const materialRows = rows.filter(row => row.materiality === "material");
  const importData = htmlEscape(JSON.stringify(assessmentPayload()));
  const headers = [
    "code",
    "title",
    "category",
    "valueChain",
    "stakeholders",
    "owner",
    "timeHorizon",
    "status",
    "impactScale",
    "impactScope",
    "impactIrremediability",
    "impactLikelihood",
    "impactScore",
    "financialMagnitude",
    "financialLikelihood",
    "financialScore",
    "materiality",
    "evidenceQuality",
    "disclosure",
    "evidence"
  ];
  const headerLabels = [
    "ESRS",
    t("topicsTab"),
    t("category"),
    t("valueChain"),
    t("stakeholders"),
    t("owner"),
    t("timeHorizon"),
    t("status"),
    t("scale"),
    t("scope"),
    t("irremediability"),
    t("likelihood"),
    t("impactScore"),
    t("magnitude"),
    t("likelihood"),
    t("financialScore"),
    t("material"),
    t("evidenceQuality"),
    t("disclosureMapping"),
    t("evidenceRationale")
  ];
  const html = `<!doctype html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; }
    h1, h2 { color: #16201d; }
    table { border-collapse: collapse; margin-bottom: 24px; }
    th { background: #1f7a56; color: #fff; font-weight: bold; }
    th, td { border: 1px solid #d9e0dd; padding: 6px 8px; vertical-align: top; }
    .meta th { background: #edf3f0; color: #16201d; text-align: left; }
  </style>
</head>
<body>
  <textarea id="assessmentData" style="display:none">${importData}</textarea>
  <h1>${htmlEscape(t("title"))}</h1>
  <h2>${htmlEscape(t("overviewSheet"))}</h2>
  <table class="meta">
    <tr><th>${htmlEscape(t("companyName"))}</th>${excelTextCell(meta.companyName)}</tr>
    <tr><th>${htmlEscape(t("sector"))}</th>${excelTextCell(meta.sector)}</tr>
    <tr><th>${htmlEscape(t("reportingYear"))}</th>${excelIntegerCell(meta.reportingYear)}</tr>
    <tr><th>${htmlEscape(t("assessmentOwner"))}</th>${excelTextCell(meta.owner)}</tr>
    <tr><th>${htmlEscape(t("impactThreshold"))}</th>${excelNumberCell(meta.impactThreshold.toFixed(1))}</tr>
    <tr><th>${htmlEscape(t("financialThreshold"))}</th>${excelNumberCell(meta.financialThreshold.toFixed(1))}</tr>
    <tr><th>${htmlEscape(t("topicsTab"))}</th>${excelIntegerCell(rows.length)}</tr>
    <tr><th>${htmlEscape(t("materialTopics"))}</th>${excelIntegerCell(materialRows.length)}</tr>
    <tr><th>${htmlEscape(t("sourcePage"))}</th><td><a href="${htmlEscape(sourceUrl)}">${htmlEscape(t("sourceLinkText"))}</a><br>${htmlEscape(sourceUrl)}</td></tr>
  </table>
  <h2>${htmlEscape(t("topicsSheet"))}</h2>
  <table>
    <thead><tr>${headerLabels.map(label => `<th>${htmlEscape(label)}</th>`).join("")}</tr></thead>
    <tbody>
      ${rows.map(row => `<tr>${headers.map(header => {
        if (["category", "valueChain", "timeHorizon", "status", "evidenceQuality"].includes(header)) return excelCell(optionLabel(row[header]));
        if (header === "materiality") return excelCell(row[header] === "material" ? t("material") : row[header] === "monitor" ? t("monitor") : t("optional"));
        if (["impactScale", "impactScope", "impactIrremediability", "impactLikelihood", "financialMagnitude", "financialLikelihood"].includes(header)) return excelIntegerCell(row[header]);
        if (["impactScore", "financialScore"].includes(header)) return excelNumberCell(row[header]);
        return excelCell(row[header]);
      }).join("")}</tr>`).join("")}
    </tbody>
  </table>
</body>
</html>`;
  download(t("excelFile"), new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }));
}

function exportSvg() {
  const png = refs.canvas.toDataURL("image/png");
  const meta = getCompanyMeta();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="760" viewBox="0 0 1120 760"><title>${format("svgTitle", { company: meta.companyName })}</title><image href="${png}" width="1120" height="760"/></svg>`;
  download("csrd-materiality-matrix.svg", new Blob([svg], { type: "image/svg+xml" }));
}

function exportPng() {
  refs.canvas.toBlob(blob => download("csrd-materiality-matrix.png", blob), "image/png", 1);
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab, .view").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}`).classList.add("active");
    drawMatrix();
  });
});

document.querySelector("#addTopicBtn").addEventListener("click", () => {
  state.topics.unshift({
    id: crypto.randomUUID(),
    code: "NEW",
    title: t("newTopic"),
    category: "Environment",
    valueChain: "Full value chain",
    stakeholders: "",
    owner: "",
    timeHorizon: "Medium term",
    status: "Draft",
    impactScale: 3,
    impactScope: 3,
    impactIrremediability: 3,
    impactLikelihood: 3,
    financialMagnitude: 3,
    financialLikelihood: 3,
    evidenceQuality: "Missing",
    disclosure: "",
    evidence: ""
  });
  render();
});

["companyName", "sector", "reportingYear", "owner"].forEach(id => {
  document.querySelector(`#${id}`).addEventListener("input", drawMatrix);
});
const initialLanguage = new URLSearchParams(location.search).get("lang");
if (initialLanguage && translations[initialLanguage]) refs.languageSelect.value = initialLanguage;

refs.topicSearch.addEventListener("input", renderTopics);
refs.impactThreshold.addEventListener("input", render);
refs.financialThreshold.addEventListener("input", render);
refs.includeOptional.addEventListener("change", renderSummary);
refs.languageSelect.addEventListener("change", render);
document.querySelector("#importExcelBtn").addEventListener("click", () => refs.importExcelInput.click());
refs.importExcelInput.addEventListener("change", event => {
  const [file] = event.target.files;
  if (file) importExcelFile(file);
});
document.querySelector("#exportPdfBtn").addEventListener("click", exportPdf);
document.querySelector("#exportExcelBtn").addEventListener("click", exportExcel);
document.querySelector("#exportSvgBtn").addEventListener("click", exportSvg);
document.querySelector("#exportPngBtn").addEventListener("click", exportPng);

render();
