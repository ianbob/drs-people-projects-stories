export const company = {
  shortName: "DRS",
  name: "Diverse Resilience Systems Limited",
  tagline: "Resilience in Our Toil.",
  region: "Kenya · East Africa",
  address: "P.O. Box 112–20600, Maralal, Kenya",
  telephone: "+254 748 721 560",
  displayTelephone: "0748 721 560",
  email: "jerempalet@gmail.com",
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/blog" },
] as const;

export const services = [
  {
    number: "01",
    name: "Climate change & resilience",
    description:
      "Climate adaptation, risk assessment, community-led resilience, and climate finance support.",
    icon: "sun",
  },
  {
    number: "02",
    name: "Environmental sustainability",
    description:
      "Natural resource stewardship, sustainable land and water management, and green enterprise.",
    icon: "leaf",
  },
  {
    number: "03",
    name: "Trade facilitation & logistics",
    description:
      "Process improvement, digital trade systems, supply-chain analysis, and market access.",
    icon: "network",
  },
  {
    number: "04",
    name: "Business & strategic advisory",
    description:
      "Feasibility studies, business planning, organisational development, and SME advisory.",
    icon: "briefcase",
  },
  {
    number: "05",
    name: "Project management",
    description:
      "Programme design, delivery support, monitoring, evaluation, learning, and reporting.",
    icon: "route",
  },
  {
    number: "06",
    name: "Agribusiness & value chains",
    description:
      "Climate-smart agriculture, farmer organisations, pastoral economies, and market linkages.",
    icon: "sprout",
  },
  {
    number: "07",
    name: "Research, policy & institutions",
    description:
      "Evidence, policy analysis, institutional strengthening, and socioeconomic assessments.",
    icon: "chart",
  },
] as const;

export const team = [
  {
    name: "Lpaletu Lesingiran",
    initials: "LL",
    role: "Chief Executive Officer",
    focus: "Project delivery · Climate resilience · Trade facilitation",
    summary:
      "A project management and development professional with more than seven years of experience in trade facilitation, enterprise development, project coordination, business analysis, monitoring, and evaluation.",
    experience:
      "Lpaletu holds a BSc in Actuarial Science, is pursuing an MSc in Climate Change and Sustainability, and earned the Project Management Professional (PMP®) certification in 2026. At KenTrade, he contributed to business analysis, stakeholder engagement, project delivery, and digital trade initiatives, including services for NEMA, NACADA, and KEPHIS on the Kenya TradeNet system.",
  },
  {
    name: "Tyson Yassin Lenolkujuka",
    initials: "TY",
    role: "Director, Programs & Administration",
    focus: "Programme coordination · Climate action · Community research",
    summary:
      "A programmes and operations leader with first-hand experience working with communities in Samburu County.",
    experience:
      "His field work spans gender and affirmative action, climate change mitigation, drought early warning, and community mobilisation. At PlantVillage, he monitored climate projects and drought early warning, led a team of 20 scouts, and prepared donor budgets and progress reports.",
  },
  {
    name: "Chakava Olympia Mmasi",
    initials: "CM",
    role: "Director, Investments & Partnerships",
    focus: "Investment · Partnerships · Strategy & transformation",
    summary:
      "A strategy and business-transformation executive with more than a decade in finance, consulting, programme leadership, and risk management.",
    experience:
      "Chakava builds the relationships, alliances, and investment pathways that support DRS’s reach. His selected experience includes multi-country programme leadership, donor engagement, financial management, SME advisory, and strengthening organisational governance and risk frameworks.",
  },
  {
    name: "David Nkisalash Lesamana",
    initials: "DL",
    role: "Consultant · Policy, ICT & Projects",
    focus: "Public policy · Climate governance · Digital systems",
    summary:
      "Brings more than 16 years of public-sector leadership and delivery experience to policy, ICT, and project work.",
    experience:
      "His work spans climate governance, ASAL systems, pastoralist livelihoods, and community-led development. Highlights include leading the KenTrade National Single Window impact assessment, managing NYOTA youth skills and KYEOP tracer-study projects, and strengthening economic planning, monitoring, and digital governance in Samburu County.",
  },
  {
    name: "Noah Loitemu Lengoiboni",
    initials: "NL",
    role: "Consultant · Financial Modelling, Risk & Compliance",
    focus: "Actuarial modelling · Financial risk · IFRS compliance",
    summary:
      "A finance and actuarial specialist who brings analytical rigour to models, risk assessments, and compliance reviews.",
    experience:
      "Trained in Kenya and Italy, Noah has worked on insurance audit reviews, reserving, IFRS 17 implementation, and reinsurance analysis. His work includes building a dynamic IBNR estimation tool and developing a Value-at-Risk framework for IFRS 17 risk adjustment.",
  },
  {
    name: "Dr. Milcah Njoki Nyaga",
    initials: "MN",
    role: "Consultant · Gender & Social Development",
    focus: "Gender equality · Social inclusion · Psychosocial support",
    summary:
      "An educational psychologist with more than two decades of practice supporting gender equality and social inclusion.",
    experience:
      "Dr. Milcah designs gender analyses, mainstreaming training, and psychosocial programmes that empower women, youth, and marginalised communities. Her background includes trauma-informed support, counselling psychology, mediation, and educational psychology.",
  },
  {
    name: "Philida Amondi",
    initials: "PA",
    role: "Consultant · Quantitative Research & Data Analysis",
    focus: "Research design · Mixed methods · Data analysis",
    summary:
      "An experienced researcher who turns field evidence and data into decision-ready analysis.",
    experience:
      "Her profile highlights survey design, mixed-methods research, quantitative analysis, gender analysis, financial modelling, dashboards, and strategic intelligence. Selected research engagements include work on sustainable health financing and climate resilience and livelihood diversification around Lake Victoria.",
  },
  {
    name: "Benjamin Ltesekwa Lekupe",
    initials: "BL",
    role: "Consultant · Data Modelling & Quantitative Analysis",
    focus: "Economics · Econometrics · Livelihoods",
    summary:
      "An economist with experience in economic studies, quantitative analysis, and livelihoods research.",
    experience:
      "Benjamin’s work includes economic studies and policy briefs, household-level analysis on livelihoods programmes, monitoring surveys, and livestock value-chain research. His areas of focus include econometrics, forecasting, microeconomic analysis, and policy evaluation.",
  },
  {
    name: "Lemarimpe N. Parsumptat",
    initials: "LP",
    role: "Consultant · Audit & Taxation",
    focus: "Public finance · Audit · Financial management",
    summary:
      "A finance professional with experience in public development funds, project accounting, budgeting, and financial oversight.",
    experience:
      "As a Fund Account Manager, Lemarimpe oversees constituency development funds, advises project management committees, and supervises project execution. His expertise includes audit, taxation, public finance management, cost control, and monitoring and evaluation.",
  },
  {
    name: "Patrick Lpimari Lesharana",
    initials: "PL",
    role: "Consultant · Agribusiness & Climate-Smart Agriculture",
    focus: "Dryland farming · Agricultural value chains · Project delivery",
    summary:
      "An agricultural development specialist with more than 10 years of experience in Kenya’s arid and semi-arid lands.",
    experience:
      "Patrick’s work spans soil fertility, seed systems, conservation agriculture, irrigation, and integrated pest management. He has led World Bank-funded food-system resilience and emergency locust-response work in Samburu, including county monitoring, impact surveys, and farmer-group project appraisal.",
  },
] as const;

export const projects = [
  {
    client: "Samburu Women Trust",
    short: "SWT",
    category: "Research · Gender & environment",
    title: "Indigenous women, land & environmental risk",
    description:
      "Gender-sensitive participatory research mapping land tenure, environmental degradation, and human-rights risks affecting Indigenous women across Northern Kenya.",
    result: "Participatory field research and risk mapping",
  },
  {
    client: "SAFE Kenya",
    short: "SAFE",
    category: "Monitoring · Community resilience",
    title: "Monitoring, evaluation & vulnerability assessments",
    description:
      "M&E frameworks, baseline and endline evaluations, and community-health and environmental vulnerability assessments within rangeland conservancies.",
    result: "Evaluation frameworks and community assessments",
  },
  {
    client: "IMPACT Kenya",
    short: "IMPACT",
    category: "Agribusiness · Market systems",
    title: "Pastoralist & livestock value-chain feasibility",
    description:
      "Economic feasibility studies and market-systems analysis for sustainable pastoralist livestock and dairy value chains across Samburu County.",
    result: "Feasibility studies and market-system analysis",
  },
  {
    client: "International Rescue Committee",
    short: "IRC",
    category: "Safety · Resilience",
    title: "Community safety audits & resilience evaluations",
    description:
      "Conflict-sensitive safety audits, protection assessments, and household resilience evaluations across hard-to-reach ASAL wards.",
    result: "Community audits and household evaluations",
  },
  {
    client: "Food for the Hungry (FH Kenya)",
    short: "FH",
    category: "Research · Community development",
    title: "Community needs & vulnerability assessments",
    description:
      "Integrated assessments of social, health, environmental, governance, and economic vulnerabilities to inform community programming.",
    result: "Integrated assessments for programme planning",
  },
  {
    client: "County Government of Samburu",
    short: "SAMBURU",
    category: "County advisory · Land planning",
    title: "Land adjudication, planning & technical advisory",
    description:
      "Technical advisory, socioeconomic assessments, and stakeholder engagement supporting county land planning and development initiatives.",
    result: "Technical advice and stakeholder engagement",
  },
] as const;

export const insights = [
  {
    category: "Climate resilience",
    number: "01",
    title: "Resilience starts with the systems communities already rely on",
    excerpt:
      "Useful adaptation begins by understanding local livelihoods, the pressures they face, and the strengths communities bring to change.",
    readTime: "5 min read",
    paragraphs: [
      "Resilience is not simply a return to the way things were. For communities navigating climate variability, it is the capacity to adjust livelihoods, services, and institutions before shocks become lasting setbacks.",
      "That starts with listening. Understanding local knowledge, natural-resource pressures, and how households earn and share income helps ensure that adaptation plans reflect the conditions people actually face.",
      "DRS’s climate-resilience practice brings those considerations together through vulnerability assessment, community engagement, climate-smart development planning, and practical support for delivery and learning.",
    ],
  },
  {
    category: "Research & policy",
    number: "02",
    title: "Good evidence is built with people, not just collected from them",
    excerpt:
      "Thoughtful surveys, stakeholder conversations, and community-led enquiry help turn research into decisions that hold up in practice.",
    readTime: "4 min read",
    paragraphs: [
      "A credible assessment needs more than a well-written questionnaire. It needs to capture different perspectives, understand context, and give stakeholders a meaningful role in interpreting what the findings mean.",
      "Combining surveys with interviews, focus-group conversations, and sound analysis gives institutions a clearer view of both the scale of a challenge and the reasons behind it.",
      "Used carefully, evidence can improve programme design, strengthen policy, and make it possible to learn from implementation rather than treating a report as the finish line.",
    ],
  },
  {
    category: "Agribusiness",
    number: "03",
    title: "Stronger value chains connect livelihoods with lasting opportunity",
    excerpt:
      "For farmers and pastoralists, access to information, services, finance, and markets shapes whether an enterprise can grow.",
    readTime: "6 min read",
    paragraphs: [
      "A value chain is a set of connected relationships. Producers need more than a buyer: practical links to information, appropriate inputs, financial services, transport, and reliable markets can determine whether an enterprise is viable.",
      "In dryland areas, building those connections calls for a grounded understanding of climate risk, local production systems, and the needs of different groups, including women and young people.",
      "Assessments that listen across the chain can reveal where collaboration, service improvements, or climate-smart practices may open up more durable livelihood opportunities.",
    ],
  },
] as const;

export const values = [
  { name: "Integrity", description: "Transparency, accountability, and ethical conduct." },
  { name: "Innovation", description: "Creative, evidence-based, practical solutions." },
  { name: "Sustainability", description: "Responsible economic, environmental, and social development." },
  { name: "Resilience", description: "Helping systems adapt and respond to change." },
  { name: "Partnership", description: "Meaningful collaboration with stakeholders." },
  { name: "Excellence", description: "Quality services and measurable results." },
] as const;

export const deliveryStages = [
  { name: "Understand", description: "Client needs, context, and development challenges." },
  { name: "Analyse", description: "Research, consultation, and evidence." },
  { name: "Design", description: "Practical plans shaped for the people and systems involved." },
  { name: "Implement", description: "Coordinated support through delivery." },
  { name: "Measure", description: "Results, learning, accountability, and sustainability." },
] as const;