const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Route 1: Dynamic Statistics Endpoint
app.get('/api/stats', (req, res) => {
    res.json({
        totalGrant: "1.01 Crore+",
        activeProjects: 12,
        fyYear: "2025-2026"
    });
});

// API Route 2: EDII Projects Endpoint
app.get('/api/edii-projects', (req, res) => {
    const projects = [
        {
            company: "JM TECHY",
            applicant: "PRABHAKARAN P",
            title: "Optimization and Scaling Up of Sustainable Dyeing Process & Auxiliaries for Textile Dyeing Industries.",
            status: "Sanctioned ₹3,00,000 (IVP A)"
        },
        {
            company: "MIRAYPAN CARBONS PRIVATE LIMITED",
            applicant: "S.R. PATRICK DHANASEELAN",
            title: "Optimization and Commercialization of Carbon-Based EMI Shielding Fabrics Meeting Defence BSI Standards.",
            status: "Sanctioned ₹7,00,000 (IVP A)"
        },
        {
            company: "MIGARA MED FAB PRIVATE LTD",
            applicant: "S.P. MARY ADHARSHNA",
            title: "Activated Carbon Fabric an Advanced Wound Dressing that Achieves Rapid Healing.",
            status: "Sanctioned ₹3,00,000 (IVP A)"
        },
        {
            company: "ESSDI INFOTECH CORPORATION",
            applicant: "L.B. THIYAGARAJAN",
            title: "Automatic Pattern Generation for Textile and Leather Garment Manufacturing using AI",
            status: "Sanctioned ₹3,00,000 (IVP A)"
        },
        {
            company: "RANGAA MANNAR NUANS PRIVATE LIMITED",
            applicant: "K. RADHA KRISHNAN",
            title: "Optimization & Scaling Up of Eco Friendly Broad-Spectrum Bacterial Consortium Product for Industrial Waste Water Treatment.",
            status: "Sanctioned ₹3,00,000 (IVP A)"
        },
        {
            company: "HARSA INDUSTRIES",
            applicant: "N. KRISHNAMURTHY",
            title: "A movable mechanical compactor in the spinning machine",
            status: "Sanctioned ₹3,00,000 (IVP A)"
        }
    ];
    res.json(projects);
});

// Server Listener
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`=================================`);
});