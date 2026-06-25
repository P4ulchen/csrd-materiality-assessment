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
document.querySelector("#exportCsvBtn").addEventListener("click", exportCsv);
document.querySelector("#saveJsonBtn").addEventListener("click", exportJson);
document.querySelector("#exportSvgBtn").addEventListener("click", exportSvg);
document.querySelector("#exportPngBtn").addEventListener("click", exportPng);
document.querySelector("#printBtn").addEventListener("click", () => window.print());

render();
