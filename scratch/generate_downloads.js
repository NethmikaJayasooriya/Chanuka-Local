const fs = require('fs');
const path = require('path');

const downloadsDir = path.resolve('public/downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Generate formatted ATS CV Template in HTML/Word-compatible format
const templateContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>ATS-Friendly CV Template - Chanuka Jeewantha</title>
<style>
body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; line-height: 1.35; color: #1a1a1a; margin: 1in; }
h1 { font-size: 20pt; text-transform: uppercase; margin-bottom: 2pt; color: #0f172a; text-align: center; }
.contact { text-align: center; font-size: 10pt; color: #475569; margin-bottom: 16pt; }
h2 { font-size: 12pt; text-transform: uppercase; border-bottom: 1.5pt solid #0f172a; padding-bottom: 2pt; margin-top: 14pt; margin-bottom: 6pt; color: #0f172a; letter-spacing: 0.5pt; }
.job-header { display: flex; justify-content: space-between; font-weight: bold; margin-top: 6pt; }
.job-sub { display: flex; justify-content: space-between; font-style: italic; color: #334155; margin-bottom: 4pt; }
ul { margin-top: 3pt; margin-bottom: 8pt; padding-left: 18pt; }
li { margin-bottom: 3pt; }
.skills-grid { margin-bottom: 6pt; }
</style>
</head>
<body>

<h1>YOUR FULL NAME</h1>
<div class="contact">
Colombo, Sri Lanka &bull; +94 77 123 4567 &bull; your.email@gmail.com &bull; linkedin.com/in/yourprofile
</div>

<h2>PROFESSIONAL SUMMARY</h2>
<p>
Results-driven <strong>[Your Target Job Title]</strong> with <strong>[X] years of experience</strong> in [Core Industry/Domain]. Proven track record of delivering measurable outcomes including <strong>[Key Metric 1, e.g. 25% revenue growth]</strong> and <strong>[Key Metric 2, e.g. 30% reduction in turnaround time]</strong>. Expert in [Top 3-4 Industry Skills]. Adept at leading cross-functional teams and aligning operational goals with commercial objectives.
</p>

<h2>CORE COMPETENCIES & TECHNICAL SKILLS</h2>
<p>
<strong>Industry Knowledge:</strong> Strategic Planning, Financial Analysis, Process Optimization, Client Stakeholder Management<br>
<strong>Technical Tools:</strong> Microsoft Excel (Advanced), Power BI, ERP Systems (SAP/Oracle), Python, SQL, CRM Platforms<br>
<strong>Methodologies & Certifications:</strong> Agile / Scrum, PMP Principles, Lean Six Sigma, ISO Compliance
</p>

<h2>PROFESSIONAL EXPERIENCE</h2>

<div class="job-header">
<span>COMPANY NAME (E.G. DIALOG AXIATA / MAS HOLDINGS)</span>
<span>Colombo, Sri Lanka</span>
</div>
<div class="job-sub">
<span>Senior [Your Role Title]</span>
<span>2022 – Present</span>
</div>
<ul>
<li>Spearheaded [Key Project or Department Initiative], resulting in a <strong>[X]% increase in operational efficiency</strong> within [Timeframe].</li>
<li>Managed an annual operational budget of <strong>LKR [X] Million</strong>, cutting cost variances by <strong>[X]%</strong> through automated tracking and strategic vendor renegotiation.</li>
<li>Directed a high-performing cross-functional team of <strong>[X] professionals</strong>, improving quarterly KPI attainment from 78% to 96%.</li>
<li>Engineered and implemented [New Workflow or System], saving <strong>[X] hours weekly</strong> across customer support operations.</li>
</ul>

<div class="job-header">
<span>PREVIOUS COMPANY NAME</span>
<span>Colombo, Sri Lanka</span>
</div>
<div class="job-sub">
<span>[Your Previous Role Title]</span>
<span>2019 – 2022</span>
</div>
<ul>
<li>Delivered <strong>[X]% year-on-year sales growth</strong> across [Target Market] by introducing targeted commercial incentives.</li>
<li>Analyzed complex datasets to forecast market demand, achieving a <strong>94% accuracy rate</strong> in inventory turnover.</li>
<li>Authored comprehensive standard operating procedures (SOPs) adopted company-wide by 150+ team members.</li>
</ul>

<h2>EDUCATION & CREDENTIALS</h2>
<div class="job-header">
<span>UNIVERSITY OF COLOMBO / SLIIT</span>
<span>Sri Lanka</span>
</div>
<div class="job-sub">
<span>Bachelor of Science (B.Sc.) in [Your Field], First / Second Class Honors</span>
<span>Graduated: 2019</span>
</div>

<p style="margin-top: 14pt; font-size: 9pt; color: #64748b; text-align: center; border-top: 1pt solid #cbd5e1; padding-top: 8pt;">
Template created by Chanuka Jeewantha (CPRW & CPCC) &bull; Sri Lanka's #1 Professional CV Writer &bull; https://chanukajeewantha.lk
</p>

</body>
</html>`;

fs.writeFileSync(path.join(downloadsDir, 'ATS-Friendly-CV-Template-Chanuka-Jeewantha.doc'), templateContent);
console.log('Saved Word-compatible ATS Template.');

// Generate 20-Point ATS Checklist text/document
const checklistContent = `20-POINT ATS CV AUDIT CHECKLIST
Authored by Chanuka Jeewantha (CPRW & CPCC) - https://chanukajeewantha.lk
========================================================================

SECTION 1: LAYOUT & DESIGN (PARSING COMPLIANCE)
[ ] 1. Single-column or clean top-down layout (No nested tables or complex multi-column sidebars).
[ ] 2. Saved as standard searchable PDF or editable Word (.docx) - NOT an image-based PDF.
[ ] 3. No graphic progress bars, rating stars, or percentage charts for skills.
[ ] 4. Standard system fonts used (Calibri, Arial, Helvetica, Georgia, Garamond) between 10-12pt.
[ ] 5. Standard margin spacing (0.5 inch to 1 inch) on all sides.
[ ] 6. No critical information placed inside Headers/Footers (many ATS ignore headers).

SECTION 2: CONTACT & HEADER INFORMATION
[ ] 7. Full Name displayed prominently at the top (18-24pt font).
[ ] 8. Professional email address (e.g. first.last@gmail.com, not coolguy99@yahoo.com).
[ ] 9. Active Sri Lankan / International phone number with country code (+94).
[ ] 10. Clean LinkedIn profile custom URL included (e.g. linkedin.com/in/yourname).
[ ] 11. Eliminated outdated Sri Lankan personal data (NO NIC number, religion, civil status, or school sports).

SECTION 3: PROFESSIONAL SUMMARY & KEYWORDS
[ ] 12. 3-4 sentence Executive Summary with target job title clearly declared.
[ ] 13. Hard skills and keywords matched directly from 2-3 target job advertisements.
[ ] 14. Dedicated Core Competencies / Technical Skills section near the top.

SECTION 4: WORK EXPERIENCE & QUANTIFIABLE IMPACT
[ ] 15. Standard reverse-chronological order (Current role first).
[ ] 16. Clear company name, location, job title, and dates (Month/Year).
[ ] 17. Every bullet point starts with a strong action verb (Spearheaded, Directed, Engineered, Negotiated).
[ ] 18. Bullet points follow the Google X-Y-Z formula: "Accomplished [X] measured by [Y] by doing [Z]".
[ ] 19. Metric numbers included (% growth, LKR / USD revenue, headcount, time saved).

SECTION 5: EDUCATION & CREDENTIALS
[ ] 20. Clear degree title, institution name, and graduation year (with professional certifications like CIMA, ACCA, CFA, PMP highlighted).

Need Chanuka to personally audit and rewrite your CV for 100% interview callbacks?
Order on WhatsApp: +94 77 390 2230
Website: https://chanukajeewantha.lk
`;

fs.writeFileSync(path.join(downloadsDir, '20-Point-ATS-CV-Checklist-Chanuka-Jeewantha.txt'), checklistContent);
console.log('Saved 20-Point ATS Checklist.');
