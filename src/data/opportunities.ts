/*
 * Opportunity Radar — seeded opportunity data.
 *
 * V1 uses this in-module seed. The shape mirrors the future database table so
 * a real backend can be connected later without changing the UI.
 *
 * Rule from the product brief: never invent deadlines, fees or eligibility.
 * Unknown fields are null and rendered as "Needs verification".
 */

export type Stage = "explore" | "prepare" | "apply" | "plan";

export const STAGE_LABELS: Record<Stage, string> = {
  explore: "Explore now",
  prepare: "Prepare now",
  apply: "Apply now",
  plan: "Plan for later",
};

export type Category =
  | "Engineering"
  | "Science & Research"
  | "Medicine"
  | "Mathematics"
  | "Design"
  | "Law"
  | "Management/Economics"
  | "Architecture"
  | "Olympiad"
  | "Entrepreneurship";

export interface Opportunity {
  id: string;
  name: string;
  category: Category;
  opportunity_type: string;
  class: number[]; // classes the opportunity is relevant to
  stream: string[]; // e.g. ["Science (PCM)", "Science (PCB)"]
  eligibility: string | null;
  deadline: string | null;
  application_open_date: string | null;
  typical_window: string | null; // typical season, clearly marked unverified
  cost: string | null;
  benefits: string;
  what_it_unlocks: string;
  preparation_needed: string;
  official_link: string;
  status: "Open" | "Upcoming" | "Closed" | "Unknown";
  verified: boolean;
  last_verified: string | null;
  stage: Stage; // student-stage relevance for a Class 11 student
  summary: string;
}

export const CATEGORIES: Category[] = [
  "Engineering",
  "Science & Research",
  "Medicine",
  "Mathematics",
  "Design",
  "Law",
  "Management/Economics",
  "Architecture",
  "Olympiad",
  "Entrepreneurship",
];

export const STREAMS = [
  "Science (PCM)",
  "Science (PCB)",
  "Science (PCMB)",
  "Commerce",
  "Humanities",
  "Any",
];

export const OPPORTUNITY_TYPES = [
  "Entrance exam",
  "Olympiad",
  "Scholarship",
  "Fellowship",
  "Competition",
  "Research program",
  "Summer program",
];

// Imported from the THE_24 opportunity sheet.
export const OPPORTUNITIES: Opportunity[] = [
  {
    "id": "jee-main",
    "name": "Jee Main",
    "category": "Engineering",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "PCM; qualifying criteria apply",
    "deadline": "expected Nov",
    "application_open_date": null,
    "typical_window": "Exam: Jan and April",
    "cost": "500-1000",
    "benefits": "NITs",
    "what_it_unlocks": "NITs",
    "preparation_needed": "Maths, Physics, Chemistry",
    "official_link": "https://jeemain.nta.nic.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Engineering/Science opportunity — NITs"
  },
  {
    "id": "jee-advanced",
    "name": "JEE Advanced",
    "category": "Engineering",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "JEE Main + additional eligibility criteria",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "1600-2300",
    "benefits": "Gateway to IITs + exceptional engineering, research & innovation ecosystem",
    "what_it_unlocks": "Gateway to IITs + exceptional engineering, research & innovation ecosystem",
    "preparation_needed": "Maths, Physics, Chemistry",
    "official_link": "https://jeeadv.ac.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Engineering/Science opportunity — Gateway to IITs + exceptional engineering, research & innovation ecosystem"
  },
  {
    "id": "bitsat",
    "name": "Bitsat",
    "category": "Engineering",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "12th with PCM + minimum 75% aggregate in PCM and 60% individually; BITSAT eligibility criteria apply",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "3000-5500",
    "benefits": "Access to BITS + flexible interdisciplinary education + strong startup/industry ecosystem",
    "what_it_unlocks": "Access to BITS + flexible interdisciplinary education + strong startup/industry ecosystem",
    "preparation_needed": "NCERT PCM + BITSAT PYQs/mocks + speed & accuracy",
    "official_link": "https://admissions.bits-pilani.ac.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Engineering/Science opportunity — Access to BITS + flexible interdisciplinary education + strong startup/industry ecosystem"
  },
  {
    "id": "iiser-iat",
    "name": "Iat (Iiser)",
    "category": "Science & Research",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Science stream + eligibility criteria",
    "deadline": "TBA – 2027 (2026: Apr 13)",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "1000-2000",
    "benefits": "Become a scientist – integrated research-focused education with early exposure to cutting-edge research",
    "what_it_unlocks": "Become a scientist – integrated research-focused education with early exposure to cutting-edge research",
    "preparation_needed": "NCERT Physics, Chemistry, Mathematics & Biology + IAT PYQs/mocks",
    "official_link": "https://iiseradmission.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Research/Science opportunity — Become a scientist – integrated research-focused education with early exposure to cutting-edge research"
  },
  {
    "id": "nest",
    "name": "NEST",
    "category": "Science & Research",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Class XII + at least 3 of Biology, Chemistry, Mathematics, Physics in XI–XII + minimum marks criteria",
    "deadline": "TBA – 2027 (2026: Apr 8)",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "700-1400",
    "benefits": "5-year research degree at NISER/CEBS + direct immersion in fundamental sciences",
    "what_it_unlocks": "5-year research degree at NISER/CEBS + direct immersion in fundamental sciences",
    "preparation_needed": "NCERT PCM/PCB + NEST PYQs + mock tests",
    "official_link": "https://www.nestexam.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Research/Science opportunity — 5-year research degree at NISER/CEBS + direct immersion in fundamental sciences"
  },
  {
    "id": "cuet-ug",
    "name": "Cuet-Ug",
    "category": "Management/Economics",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent; subject requirements and minimum marks depend on the university & programme",
    "deadline": "TBA – 2027 (2026: Feb 4 after extension)",
    "application_open_date": null,
    "typical_window": "Exam: TBA – 2027 (2026: Jan 3)",
    "cost": "TBA – 2027 (2026: ₹1,000+ depending on subjects/category)",
    "benefits": "One exam opens doors to a huge range of universities and programmes across India",
    "what_it_unlocks": "One exam opens doors to a huge range of universities and programmes across India",
    "preparation_needed": "NCERT + CUET syllabus + timed mocks",
    "official_link": "https://cuet.nta.nic.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "plan",
    "summary": "Engineering/Science/Management/Economics opportunity — One exam opens doors to a huge range of universities and programmes across India"
  },
  {
    "id": "isi-admission",
    "name": "ISI- Admission Test",
    "category": "Mathematics",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "10+2/equivalent with Mathematics & English for B.Stat/B.Math; programme-specific criteria apply",
    "deadline": "TBA – 2027 (2026: Mar 26)",
    "application_open_date": null,
    "typical_window": "Exam: TBA – 2027 (2026: Feb 12)",
    "cost": "₹750–₹1,500",
    "benefits": "Elite mathematics & statistics education + powerful pathway into AI, data science, research & quantitative fields",
    "what_it_unlocks": "Elite mathematics & statistics education + powerful pathway into AI, data science, research & quantitative fields",
    "preparation_needed": "Advanced Mathematics + ISI previous papers + proof/problem-solving",
    "official_link": "https://admission.isical.ac.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Mathematics/Statistics opportunity — Elite mathematics & statistics education + powerful pathway into AI, data science, research & quantitative fields"
  },
  {
    "id": "cmi-entrance",
    "name": "CMI Entrance",
    "category": "Mathematics",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "Class 12/equivalent with Mathematics; programme-specific eligibility applies",
    "deadline": "TBA – 2027 (2026: Apr 4)",
    "application_open_date": null,
    "typical_window": "Exam: TBA – 2027 (2026: Mar 9)",
    "cost": "₹1,000",
    "benefits": "Elite training in mathematics & theoretical computer science + pathway to research, AI and advanced computing",
    "what_it_unlocks": "Elite training in mathematics & theoretical computer science + pathway to research, AI and advanced computing",
    "preparation_needed": "CMI previous papers + advanced mathematics + logical/problem-solving practice",
    "official_link": "https://www.cmi.ac.in/",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Mathematics/CS opportunity — Elite training in mathematics & theoretical computer science + pathway to research, AI and advanced computing"
  },
  {
    "id": "nid-dat",
    "name": "Nid Dat",
    "category": "Design",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent; programme-specific eligibility",
    "deadline": "30-Nov-26",
    "application_open_date": null,
    "typical_window": "Exam: 11-Sep-26",
    "cost": "₹3,000–₹4,000*",
    "benefits": "Gateway to one of India’s premier design institutions + careers in product, UX, communication & industrial design",
    "what_it_unlocks": "Gateway to one of India’s premier design institutions + careers in product, UX, communication & industrial design",
    "preparation_needed": "Design aptitude + drawing + observation + creativity",
    "official_link": "https://admissions.nid.edu/NIDA2027/Default.aspx",
    "status": "Open",
    "verified": false,
    "last_verified": null,
    "stage": "apply",
    "summary": "Design opportunity — Gateway to one of India’s premier design institutions + careers in product, UX, communication & industrial design"
  },
  {
    "id": "uceed",
    "name": "UCEED",
    "category": "Design",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent; candidates from any stream can apply",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA-2027",
    "cost": "TBA-2027",
    "benefits": "Pathway to B.Des. at IITs + careers spanning product, interaction, industrial & experience design",
    "what_it_unlocks": "Pathway to B.Des. at IITs + careers spanning product, interaction, industrial & experience design",
    "preparation_needed": "UCEED PYQs + visualization + spatial reasoning + creativity",
    "official_link": "https://www.uceed.iitb.ac.in/2026/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Design opportunity — Pathway to B.Des. at IITs + careers spanning product, interaction, industrial & experience design"
  },
  {
    "id": "nift",
    "name": "NIFT",
    "category": "Design",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent; programme-specific criteria",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Launchpad into fashion, design, technology, luxury, retail & creative business",
    "what_it_unlocks": "Launchpad into fashion, design, technology, luxury, retail & creative business",
    "preparation_needed": "CAT/GAT + design aptitude + current affairs + creative practice",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Design opportunity — Launchpad into fashion, design, technology, luxury, retail & creative business"
  },
  {
    "id": "ipmat",
    "name": "IPMAT",
    "category": "Management/Economics",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent + prescribed percentage/age criteria",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "TBA-2027",
    "benefits": "Direct route from school into IIM Indore's 5-year management programme, combining undergraduate study with an MBA",
    "what_it_unlocks": "Direct route from school into IIM Indore's 5-year management programme, combining undergraduate study with an MBA",
    "preparation_needed": "Quantitative Ability + Verbal Ability + IPMAT PYQs",
    "official_link": "https://iimidr.ac.in/programmes/academic-programmes/five-year-integrated-programme-in-management-ipm/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "plan",
    "summary": "Management/Economics opportunity — Direct route from school into IIM Indore's 5-year management programme, combining undergraduate study with an MBA"
  },
  {
    "id": "set",
    "name": "SET",
    "category": "Management/Economics",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Class 12/equivalent; programme-specific eligibility",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA-2027",
    "cost": "TBA-2027",
    "benefits": "Access to Symbiosis undergraduate programmes across management, economics, liberal arts & related fields",
    "what_it_unlocks": "Access to Symbiosis undergraduate programmes across management, economics, liberal arts & related fields",
    "preparation_needed": "Quant + English + logical reasoning + general awareness",
    "official_link": "https://www.set-test.org/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "plan",
    "summary": "Management/Economics opportunity — Access to Symbiosis undergraduate programmes across management, economics, liberal arts & related fields"
  },
  {
    "id": "ugee",
    "name": "UGEE",
    "category": "Science & Research",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "PCM + Class 12 eligibility criteria",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "TBA-2027",
    "benefits": "5-year B.Tech + MS by Research at IIIT Hyderabad – an early route into advanced CS, AI & research",
    "what_it_unlocks": "5-year B.Tech + MS by Research at IIIT Hyderabad – an early route into advanced CS, AI & research",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "https://ugadmissions.iiit.ac.in/ugee/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "CS/Research opportunity — 5-year B.Tech + MS by Research at IIIT Hyderabad – an early route into advanced CS, AI & research"
  },
  {
    "id": "jee-main-barch",
    "name": "JEE Main -Barch",
    "category": "Architecture",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "Class 12/equivalent + Physics & Mathematics compulsory + one of Chemistry/Biology/Biotechnology/Technical Vocational subject",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA -2027",
    "cost": "TBA-2027",
    "benefits": "Gateway to NITs, IIITs and other institutions offering B.Arch/B.Planning through JEE Main",
    "what_it_unlocks": "Gateway to NITs, IIITs and other institutions offering B.Arch/B.Planning through JEE Main",
    "preparation_needed": "Mathematics + Aptitude + Drawing",
    "official_link": "https://jeemain.nta.nic.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Architecture opportunity — Gateway to NITs, IIITs and other institutions offering B.Arch/B.Planning through JEE Main"
  },
  {
    "id": "nata",
    "name": "NATA",
    "category": "Architecture",
    "opportunity_type": "Entrance exam",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "10+2/equivalent with required subjects/marks",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA-2027",
    "cost": "TBA-2027",
    "benefits": "National gateway to architecture schools – especially useful for students targeting B.Arch beyond JEE-based admissions",
    "what_it_unlocks": "National gateway to architecture schools – especially useful for students targeting B.Arch beyond JEE-based admissions",
    "preparation_needed": "Drawing + visual reasoning + mathematics + architecture aptitude",
    "official_link": "https://www.nata.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Architecture opportunity — National gateway to architecture schools – especially useful for students targeting B.Arch beyond JEE-based admissions"
  },
  {
    "id": "ioqm",
    "name": "IOQM",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Age/class eligibility + school enrolment criteria",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": "Exam: TBA-2027",
    "cost": "TBA-2027",
    "benefits": "First major step toward India's IMO team + elite mathematical problem-solving experience",
    "what_it_unlocks": "First major step toward India's IMO team + elite mathematical problem-solving experience",
    "preparation_needed": "Number theory + geometry + combinatorics + algebra + Olympiad problems",
    "official_link": "https://ioqm.mtai.org.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Mathematics/Olympiad opportunity — First major step toward India's IMO team + elite mathematical problem-solving experience"
  },
  {
    "id": "nsep",
    "name": "NSEP",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "School students meeting IAPT/INO eligibility",
    "deadline": "TBA – 2026–27",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "TBA",
    "benefits": "Pathway toward India's International Physics Olympiad team + exceptional physics problem-solving experience",
    "what_it_unlocks": "Pathway toward India's International Physics Olympiad team + exceptional physics problem-solving experience",
    "preparation_needed": "Physics Olympiad problems + NCERT + advanced problem solving",
    "official_link": "https://iapt.org.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Physics/Olympiad opportunity — Pathway toward India's International Physics Olympiad team + exceptional physics problem-solving experience"
  },
  {
    "id": "nsec",
    "name": "NSEC",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "School students meeting IAPT/INO eligibility",
    "deadline": "TBA – 2026–27",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "TBA",
    "benefits": "Pathway toward India's International Chemistry Olympiad team + advanced chemistry problem solving",
    "what_it_unlocks": "Pathway toward India's International Chemistry Olympiad team + advanced chemistry problem solving",
    "preparation_needed": "Physical + Organic + Inorganic Chemistry + Olympiad problems",
    "official_link": "https://iapt.org.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Chemistry/Olympiad opportunity — Pathway toward India's International Chemistry Olympiad team + advanced chemistry problem solving"
  },
  {
    "id": "nsea",
    "name": "NSEA",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "School students meeting IAPT/INO eligibility",
    "deadline": "TBA – 2026–27",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "TBA",
    "benefits": "Route toward India's International Olympiad on Astronomy & Astrophysics team + serious exposure to astronomy",
    "what_it_unlocks": "Route toward India's International Olympiad on Astronomy & Astrophysics team + serious exposure to astronomy",
    "preparation_needed": "Physics + mathematics + astronomy + problem solving",
    "official_link": "https://iapt.org.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Astronomy/Olympiad opportunity — Route toward India's International Olympiad on Astronomy & Astrophysics team + serious exposure to astronomy"
  },
  {
    "id": "nseb",
    "name": "NSEB",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "School students meeting IAPT/INO eligibility",
    "deadline": "TBA – 2026–27",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "TBA",
    "benefits": "Pathway toward India's International Biology Olympiad team + advanced biology beyond the school syllabus",
    "what_it_unlocks": "Pathway toward India's International Biology Olympiad team + advanced biology beyond the school syllabus",
    "preparation_needed": "Biology concepts + experimental reasoning + Olympiad problems",
    "official_link": "https://iapt.org.in/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Biology/Olympiad opportunity — Pathway toward India's International Biology Olympiad team + advanced biology beyond the school syllabus"
  },
  {
    "id": "zio",
    "name": "ZIO",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Must be enrolled in school; exact annual eligibility applies",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": null,
    "cost": "TBA",
    "benefits": "Route into India's International Olympiad in Informatics pathway + elite algorithmic problem solving",
    "what_it_unlocks": "Route into India's International Olympiad in Informatics pathway + elite algorithmic problem solving",
    "preparation_needed": "Algorithms + computational thinking + programming/problem solving",
    "official_link": "https://www.iarcs.org.in/inoi/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "Informatics/CS/Olympiad opportunity — Route into India's International Olympiad in Informatics pathway + elite algorithmic problem solving"
  },
  {
    "id": "zco",
    "name": "ZCO",
    "category": "Olympiad",
    "opportunity_type": "Olympiad",
    "class": [
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Must be enrolled in school; exact annual eligibility applies",
    "deadline": "TBA-2027",
    "application_open_date": null,
    "typical_window": null,
    "cost": "TBA",
    "benefits": "Programming-based route into India's Informatics Olympiad + serious competitive-programming experience",
    "what_it_unlocks": "Programming-based route into India's Informatics Olympiad + serious competitive-programming experience",
    "preparation_needed": "C++/Python/Java + algorithms + competitive programming",
    "official_link": "https://www.iarcs.org.in/inoi/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "prepare",
    "summary": "CS/Competitive Programming opportunity — Programming-based route into India's Informatics Olympiad + serious competitive-programming experience"
  },
  {
    "id": "anandi-neat",
    "name": "Anandi - NEAT",
    "category": "Entrepreneurship",
    "opportunity_type": "Fellowship",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Students in Grades 11, 12 or first-year UG",
    "deadline": "15-Oct-26",
    "application_open_date": null,
    "typical_window": "Exam: Open",
    "cost": "₹199",
    "benefits": "₹1L/year scholarship + ₹2L summer internships + ₹25L EIR opportunity + potential ₹1Cr startup investment",
    "what_it_unlocks": "₹1L/year scholarship + ₹2L summer internships + ₹25L EIR opportunity + potential ₹1Cr startup investment",
    "preparation_needed": "No coaching required – reading + business judgement + quantitative reasoning + current affairs",
    "official_link": "https://www.theanandifellowship.com/",
    "status": "Open",
    "verified": false,
    "last_verified": null,
    "stage": "apply",
    "summary": "Fellowship/Entrepreneurship opportunity — ₹1L/year scholarship + ₹2L summer internships + ₹25L EIR opportunity + potential ₹1Cr startup investment"
  },
  {
    "id": "inspire-manak",
    "name": "Inspire-Manak",
    "category": "Science & Research",
    "opportunity_type": "Entrance exam",
    "class": [
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Indian school students; nomination through school",
    "deadline": "10-0ct",
    "application_open_date": null,
    "typical_window": "Exam: 2026",
    "cost": "Free",
    "benefits": "₹10,000 award + national innovation competition + potential patent pathway; excellent for students who build an actual invention",
    "what_it_unlocks": "₹10,000 award + national innovation competition + potential patent pathway; excellent for students who build an actual invention",
    "preparation_needed": "Identify a real problem + develop an original solution",
    "official_link": "https://inspireawards-dst.gov.in/",
    "status": "Open",
    "verified": false,
    "last_verified": null,
    "stage": "apply",
    "summary": "Innovation programme opportunity — ₹10,000 award + national innovation competition + potential patent pathway; excellent for students who build an actual invention"
  },
  {
    "id": "conrad-challenge",
    "name": "Conrad Challenge",
    "category": "Entrepreneurship",
    "opportunity_type": "Competition",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Students aged 13–18; teams",
    "deadline": "30-Oct",
    "application_open_date": null,
    "typical_window": "Exam: 2026",
    "cost": "Free",
    "benefits": "Build a real-world innovation + global competition + entrepreneurship experience",
    "what_it_unlocks": "Build a real-world innovation + global competition + entrepreneurship experience",
    "preparation_needed": "Problem identification + prototype + business model + pitch",
    "official_link": "",
    "status": "Open",
    "verified": false,
    "last_verified": null,
    "stage": "apply",
    "summary": "STEM/Entrepreneurship opportunity — Build a real-world innovation + global competition + entrepreneurship experience"
  },
  {
    "id": "world-scholar-s-cup",
    "name": "World Scholar's Cup",
    "category": "Science & Research",
    "opportunity_type": "Competition",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "School students; age/event-specific eligibility",
    "deadline": "Varies by regional round",
    "application_open_date": null,
    "typical_window": "Exam: Varies",
    "cost": "Varies",
    "benefits": "International academic competition combining debate, writing, collaboration & knowledge",
    "what_it_unlocks": "International academic competition combining debate, writing, collaboration & knowledge",
    "preparation_needed": "Debate + writing + current affairs + broad knowledge",
    "official_link": "https://www.scholarscup.org/",
    "status": "Open",
    "verified": false,
    "last_verified": null,
    "stage": "apply",
    "summary": "Global/Academic opportunity — International academic competition combining debate, writing, collaboration & knowledge"
  },
  {
    "id": "inspire-internship",
    "name": "INSPIRE Internship",
    "category": "Science & Research",
    "opportunity_type": "Research program",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Class 11 science students meeting INSPIRE criteria",
    "deadline": "TBA",
    "application_open_date": null,
    "typical_window": null,
    "cost": "Free",
    "benefits": "Scientific immersion with researchers + exposure to research careers and leading institutions",
    "what_it_unlocks": "Scientific immersion with researchers + exposure to research careers and leading institutions",
    "preparation_needed": "Science fundamentals + scientific curiosity",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Science/Research opportunity — Scientific immersion with researchers + exposure to research careers and leading institutions"
  },
  {
    "id": "ucl-india-summer-school",
    "name": "UCL India Summer School",
    "category": "Science & Research",
    "opportunity_type": "Summer program",
    "class": [
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCB)",
      "Science (PCMB)"
    ],
    "eligibility": "Typically Grade 11 students; programme-specific criteria",
    "deadline": "TBA -2027",
    "application_open_date": null,
    "typical_window": null,
    "cost": "TBA",
    "benefits": "Experience university-level learning + research-led projects with UCL academics",
    "what_it_unlocks": "Experience university-level learning + research-led projects with UCL academics",
    "preparation_needed": "Academic project + essay/application preparation",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Research/Summer School opportunity — Experience university-level learning + research-led projects with UCL academics"
  },
  {
    "id": "prism",
    "name": "PRISM",
    "category": "Mathematics",
    "opportunity_type": "Summer program",
    "class": [
      10,
      11,
      12
    ],
    "stream": [
      "Science (PCM)",
      "Science (PCMB)"
    ],
    "eligibility": "High-school students with strong mathematics interest; programme criteria",
    "deadline": "TBA - next cycle",
    "application_open_date": null,
    "typical_window": null,
    "cost": "Free/fully funded*",
    "benefits": "Intensive mathematics experience + research-style problem solving + residential community",
    "what_it_unlocks": "Intensive mathematics experience + research-style problem solving + residential community",
    "preparation_needed": "Olympiad mathematics + proof writing + problem solving",
    "official_link": "",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Mathematics/Summer School opportunity — Intensive mathematics experience + research-style problem solving + residential community"
  },
  {
    "id": "technovation-girls",
    "name": "Technovation Girls",
    "category": "Entrepreneurship",
    "opportunity_type": "Competition",
    "class": [
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Girls aged 8–18",
    "deadline": "TBA - next cycle",
    "application_open_date": null,
    "typical_window": "Exam: TBA",
    "cost": "Free",
    "benefits": "Build an app/AI solution + business plan + compete globally",
    "what_it_unlocks": "Build an app/AI solution + business plan + compete globally",
    "preparation_needed": "Coding + AI + product design + entrepreneurship",
    "official_link": "https://technovationchallenge.org/",
    "status": "Upcoming",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Technology/Entrepreneurship opportunity — Build an app/AI solution + business plan + compete globally"
  },
  {
    "id": "breakthrough-junior-challenge",
    "name": "Breakthrough Junior Challenge",
    "category": "Science & Research",
    "opportunity_type": "Competition",
    "class": [
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Students aged 13–18",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Details need verification.",
    "what_it_unlocks": "Details need verification.",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Science/Communication opportunity."
  },
  {
    "id": "diamond-challenge",
    "name": "Diamond Challenge",
    "category": "Entrepreneurship",
    "opportunity_type": "Competition",
    "class": [
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "High-school students; team eligibility",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Details need verification.",
    "what_it_unlocks": "Details need verification.",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Entrepreneurship opportunity."
  },
  {
    "id": "blue-ocean-student-entrepreneur-competition",
    "name": "Blue Ocean Student Entrepreneur Competition",
    "category": "Entrepreneurship",
    "opportunity_type": "Competition",
    "class": [
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "High-school students; individual/team eligibility",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Details need verification.",
    "what_it_unlocks": "Details need verification.",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Entrepreneurship opportunity."
  },
  {
    "id": "international-astronomy-astrophysics-competition",
    "name": "International Astronomy & Astrophysics Competition",
    "category": "Science & Research",
    "opportunity_type": "Competition",
    "class": [
      8,
      9,
      10,
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "School students; international eligibility",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Details need verification.",
    "what_it_unlocks": "Details need verification.",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Astronomy/Science opportunity."
  },
  {
    "id": "international-youth-math-challenge",
    "name": "International Youth Math Challenge",
    "category": "Mathematics",
    "opportunity_type": "Competition",
    "class": [
      11,
      12
    ],
    "stream": [
      "Any"
    ],
    "eligibility": "Students meeting age eligibility",
    "deadline": null,
    "application_open_date": null,
    "typical_window": null,
    "cost": null,
    "benefits": "Details need verification.",
    "what_it_unlocks": "Details need verification.",
    "preparation_needed": "Preparation guidance needs verification.",
    "official_link": "",
    "status": "Unknown",
    "verified": false,
    "last_verified": null,
    "stage": "explore",
    "summary": "Mathematics opportunity."
  }
];

export function getOpportunity(id: string): Opportunity | undefined {
  return OPPORTUNITIES.find((o) => o.id === id);
}

/** Display helper: unknown values are never invented. */
export function fieldOrUnverified(value: string | null): string {
  return value ?? "Needs verification";
}
