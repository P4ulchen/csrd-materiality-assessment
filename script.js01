const categories = ["Environment", "Social", "Governance"];
const valueChains = ["Own operations", "Upstream", "Downstream", "Full value chain"];
const horizons = ["Short term", "Medium term", "Long term", "Multiple horizons"];
const statuses = ["Draft", "Stakeholder reviewed", "Management approved", "Needs evidence"];
const evidenceQualities = ["High", "Medium", "Low", "Missing"];

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
  includeOptional: document.querySelector("#includeOptional")
};

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
    note: "Documentation aid for CSRD/ESRS double materiality. Not legal advice or assurance."
  };
}

function optionList(values, selected) {
  return values.map(value => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("");
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
    input.value = topic[key];
    input.addEventListener("input", event => updateTopic(topic.id, key, event.target.value));
  };
  const bindSelect = (selector, key, values) => {
    const input = node.querySelector(selector);
    input.innerHTML = optionList(values, topic[key]);
    input.addEventListener("change", event => updateTopic(topic.id, key, event.target.value));
  };

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
  node.querySelector(".scoreBadge").textContent = `Impact ${impact} / Financial ${financial}`;
  const badge = node.querySelector(".materialityBadge");
  badge.textContent = result === "material" ? "Material" : result === "monitor" ? "Monitor" : "Below threshold";
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
  ctx.fillText("Impact materiality", plot.x + plot.w / 2 - 70, height - 45);
  ctx.save();
  ctx.translate(32, plot.y + plot.h / 2 + 70);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Financial materiality", 0, 0);
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
  ctx.fillText("Scores: 1 low to 5 high. Topic is material when either axis meets the selected threshold.", plot.x, height - 18);
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
      li.innerHTML = `<strong>${topic.code} ${topic.title}</strong><br>Impact ${scoreImpact(topic).toFixed(1)}, financial ${scoreFinancial(topic).toFixed(1)}`;
      list.appendChild(li);
    });
}

function render() {
  refs.impactThresholdOut.textContent = Number(refs.impactThreshold.value).toFixed(1);
  refs.financialThresholdOut.textContent = Number(refs.financialThreshold.value).toFixed(1);
  renderTopics();
  drawMatrix();
  renderSummary();
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
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
      impactScore: scoreImpact(topic).toFixed(2),
      financialScore: scoreFinancial(topic).toFixed(2),
      materiality: materiality(topic),
      evidenceQuality: topic.evidenceQuality,
      disclosure: topic.disclosure,
      evidence: topic.evidence
    }));
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

function wrapText(text, maxChars) {
  const words = String(text || "Not documented").split(/\s+/).filter(Boolean);
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
  if (result === "material") return "Material sustainability matter";
  if (result === "monitor") return "Monitor and reassess";
  return "Below selected materiality thresholds";
}

function createTopicPageContent(topic, meta, pageNumber) {
  const parts = [];
  parts.push("0.96 0.98 0.97 rg 0 0 595.28 841.89 re f\n");
  parts.push("1 1 1 rg 42 668 511 104 re f\n");
  parts.push("0.85 0.88 0.86 RG 42 668 511 104 re S\n");
  parts.push(textLine(`${topic.code} ${topic.title}`, 42, 806, 18, "0.08 0.13 0.11"));
  parts.push(textLine(`${meta.companyName} | ${meta.reportingYear} CSRD double materiality assessment`, 42, 785, 9, "0.38 0.44 0.41"));
  parts.push(textLine(topicConclusion(topic), 42, 742, 14, "0.12 0.48 0.34"));
  parts.push(textLine(`Impact score ${scoreImpact(topic).toFixed(1)} / 5`, 42, 718, 11, "0.10 0.13 0.12"));
  parts.push(textLine(`Financial score ${scoreFinancial(topic).toFixed(1)} / 5`, 230, 718, 11, "0.10 0.13 0.12"));
  parts.push(textLine(`Evidence quality: ${topic.evidenceQuality}`, 410, 718, 11, "0.10 0.13 0.12"));

  addKeyValue(parts, "ESRS mapping", topic.disclosure, 58, 650, 160);
  addKeyValue(parts, "Category", topic.category, 230, 650, 120);
  addKeyValue(parts, "Value chain", topic.valueChain, 365, 650, 150);
  addKeyValue(parts, "Time horizon", topic.timeHorizon, 58, 604, 150);
  addKeyValue(parts, "Owner", topic.owner, 230, 604, 120);
  addKeyValue(parts, "Status", topic.status, 365, 604, 150);

  addKeyValue(parts, "Impact scoring inputs", `Scale ${topic.impactScale}, scope ${topic.impactScope}, irremediability ${topic.impactIrremediability}, likelihood ${topic.impactLikelihood}`, 58, 558, 230);
  addKeyValue(parts, "Financial scoring inputs", `Magnitude ${topic.financialMagnitude}, likelihood ${topic.financialLikelihood}`, 365, 558, 150);

  let y = 494;
  y = addWrappedText(parts, "Stakeholders consulted or affected", topic.stakeholders, 42, y, 92);
  y = addWrappedText(parts, "Assessment rationale and evidence base", topic.evidence, 42, y, 92);
  y = addWrappedText(
    parts,
    "Report-ready disclosure wording",
    `${topic.title} was assessed for impact materiality and financial materiality across ${topic.valueChain.toLowerCase()}. The matter is classified as "${topicConclusion(topic)}" based on an impact score of ${scoreImpact(topic).toFixed(1)} and a financial score of ${scoreFinancial(topic).toFixed(1)} against thresholds of ${meta.impactThreshold.toFixed(1)} and ${meta.financialThreshold.toFixed(1)}. The assessment considered the stakeholder groups ${topic.stakeholders || "not documented"} and is supported by the following evidence: ${topic.evidence || "not documented"}.`,
    42,
    y,
    94
  );

  parts.push("0.85 0.88 0.86 RG 42 100 m 553 100 l S\n");
  parts.push(textLine("Prepared as an insertion-ready assessment record. Final sustainability statement wording should be reviewed against ESRS disclosure requirements and assurance evidence.", 42, 78, 7.5, "0.38 0.44 0.41"));
  parts.push(textLine(`Page ${pageNumber}`, 518, 42, 8, "0.38 0.44 0.41"));
  return parts.join("");
}

function createMatrixPageContent(meta, imageId) {
  const pageWidth = 841.89;
  const pageHeight = 595.28;
  const imageWidth = 730;
  const imageHeight = imageWidth * (refs.canvas.height / refs.canvas.width);
  const imageX = 56;
  const imageY = 72;
  return [
    "0.96 0.98 0.97 rg 0 0 841.89 595.28 re f\n",
    textLine("Double Materiality Matrix", 56, 555, 22, "0.08 0.13 0.11"),
    textLine(`${meta.companyName} | Sector: ${meta.sector} | Reporting year: ${meta.reportingYear}`, 56, 532, 10, "0.38 0.44 0.41"),
    textLine(`Thresholds: impact ${meta.impactThreshold.toFixed(1)}, financial ${meta.financialThreshold.toFixed(1)} | Exported ${new Date(meta.exportedAt).toLocaleDateString()}`, 56, 515, 9, "0.38 0.44 0.41"),
    `q ${imageWidth} 0 0 ${imageHeight} ${imageX} ${imageY} cm /Im1 Do Q\n`,
    textLine("Material if either impact materiality or financial materiality meets the selected threshold. This PDF is a documentation aid and not legal advice or assurance.", 56, 42, 8, "0.38 0.44 0.41")
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
  const pageIds = [matrixPageId];

  const jpegBytes = base64ToBytes(refs.canvas.toDataURL("image/jpeg", 0.94).split(",")[1]);
  pdf.setAscii(fontId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  pdf.setStream(imageId, `/Type /XObject /Subtype /Image /Width ${refs.canvas.width} /Height ${refs.canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode`, jpegBytes);
  pdf.setStream(matrixContentId, "", new TextEncoder().encode(createMatrixPageContent(meta, imageId)));
  pdf.setAscii(matrixPageId, `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 841.89 595.28] /Resources << /Font << /F1 ${fontId} 0 R >> /XObject << /Im1 ${imageId} 0 R >> >> /Contents ${matrixContentId} 0 R >>`);

  const rows = exportRows();
  rows.forEach((row, index) => {
    const topic = state.topics.find(item => item.code === row.code && item.title === row.title) || state.topics[index];
    const contentId = pdf.reserve();
    const pageId = pdf.reserve();
    pageIds.push(pageId);
    pdf.setStream(contentId, "", new TextEncoder().encode(createTopicPageContent(topic, meta, index + 2)));
    pdf.setAscii(pageId, `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
  });

  pdf.setAscii(pagesId, `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`);
  pdf.setAscii(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  download("csrd-materiality-assessment-report.pdf", pdf.build(catalogId));
}

function exportCsv() {
  const rows = exportRows();
  const headers = Object.keys(rows[0] || { code: "", title: "" });
  const csv = [headers.join(","), ...rows.map(row => headers.map(header => csvEscape(row[header])).join(","))].join("\n");
  download("csrd-materiality-assessment.csv", new Blob([csv], { type: "text/csv;charset=utf-8" }));
}

function exportJson() {
  const payload = { meta: getCompanyMeta(), topics: state.topics, exportedRows: exportRows() };
  download("csrd-materiality-assessment.json", new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
}

function exportSvg() {
  const png = refs.canvas.toDataURL("image/png");
  const meta = getCompanyMeta();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="760" viewBox="0 0 1120 760"><title>${meta.companyName} CSRD materiality matrix</title><image href="${png}" width="1120" height="760"/></svg>`;
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
    title: "New sustainability matter",
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
refs.topicSearch.addEventListener("input", renderTopics);
refs.impactThreshold.addEventListener("input", render);
refs.financialThreshold.addEventListener("input", render);
refs.includeOptional.addEventListener("change", renderSummary);
document.querySelector("#exportPdfBtn").addEventListener("click", exportPdf);
document.querySelector("#exportCsvBtn").addEventListener("click", exportCsv);
document.querySelector("#saveJsonBtn").addEventListener("click", exportJson);
document.querySelector("#exportSvgBtn").addEventListener("click", exportSvg);
document.querySelector("#exportPngBtn").addEventListener("click", exportPng);
document.querySelector("#printBtn").addEventListener("click", () => window.print());

render();
