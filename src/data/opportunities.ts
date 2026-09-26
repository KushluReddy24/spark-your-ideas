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
  | "Management/Economics";

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

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "jee-main",
    name: "JEE Main",
    category: "Engineering",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCMB)"],
    eligibility:
      "Students who have passed or are appearing in Class 12 with Physics, Chemistry and Mathematics. Detailed criteria need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held in two sessions (around January and April). Needs verification.",
    cost: null,
    benefits:
      "Qualifying score for NITs, IIITs and other centrally funded technical institutes; also the gateway to JEE Advanced.",
    what_it_unlocks:
      "Admission to NIT/IIIT/GFTI engineering programs and eligibility to sit JEE Advanced for the IITs.",
    preparation_needed:
      "Two-year mastery of the Class 11–12 PCM syllabus with regular mock tests. Class 11 is the right time to build fundamentals.",
    official_link: "https://jeemain.nta.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "The primary national entrance exam for engineering at NITs, IIITs and GFTIs — and the qualifier for JEE Advanced.",
  },
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    category: "Engineering",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCMB)"],
    eligibility:
      "Top rankers of JEE Main who meet age, attempt and Class 12 criteria. Exact cut-offs need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around May–June, after JEE Main results. Needs verification.",
    cost: null,
    benefits:
      "The sole admission route to the Indian Institutes of Technology (IITs) for undergraduate engineering.",
    what_it_unlocks: "B.Tech and dual-degree seats across the IITs.",
    preparation_needed:
      "Deep problem-solving beyond JEE Main level; multi-concept questions. Start building depth in Class 11.",
    official_link: "https://jeeadv.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "The entrance exam for the IITs, taken by top JEE Main qualifiers. Preparation effectively begins in Class 11.",
  },
  {
    id: "bitsat",
    name: "BITSAT",
    category: "Engineering",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCMB)"],
    eligibility:
      "Class 12 pass/appearing with PCM and minimum aggregate marks. Exact percentage needs verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around May–June in multiple sessions. Needs verification.",
    cost: null,
    benefits:
      "Admission to BITS Pilani, Goa and Hyderabad campuses — among India's top private engineering institutes.",
    what_it_unlocks: "B.E. and integrated M.Sc. programs at BITS campuses.",
    preparation_needed:
      "Speed-focused PCM practice plus English proficiency and logical reasoning sections.",
    official_link: "https://www.bitsadmission.com",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "Online entrance test for BITS Pilani campuses, known for speed and accuracy under time pressure.",
  },
  {
    id: "iiser-iat",
    name: "IISER Aptitude Test (IAT)",
    category: "Science & Research",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCB)", "Science (PCMB)"],
    eligibility:
      "Class 12 pass/appearing with science subjects. Subject combination rules need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around June. Needs verification.",
    cost: null,
    benefits:
      "Admission to the IISERs — research-focused institutes for a 5-year BS-MS in the sciences.",
    what_it_unlocks:
      "BS-MS programs at IISER Pune, Kolkata, Mohali, Bhopal, Thiruvananthapuram, Tirupati and Berhampur.",
    preparation_needed:
      "Strong conceptual science across physics, chemistry, math and biology — the paper tests all four.",
    official_link: "https://www.iiseradmission.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "The route into the IISERs for students who want a research-oriented science career rather than engineering.",
  },
  {
    id: "nest",
    name: "NEST",
    category: "Science & Research",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCB)", "Science (PCMB)"],
    eligibility:
      "Class 12 pass/appearing with science subjects; age criteria apply. Details need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around June. Needs verification.",
    cost: null,
    benefits:
      "Admission to NISER Bhubaneswar and UM-DAE CEBS Mumbai — premier institutes for fundamental science.",
    what_it_unlocks: "5-year integrated M.Sc. programs at NISER and CEBS.",
    preparation_needed:
      "Conceptual depth in physics, chemistry, math and biology with an emphasis on reasoning.",
    official_link: "https://www.nestexam.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "National entrance for NISER and CEBS — top choices for students aiming at pure science and research.",
  },
  {
    id: "isi-admission",
    name: "ISI Admission Test",
    category: "Mathematics",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCMB)"],
    eligibility:
      "Class 12 pass/appearing with Mathematics and English. Specific criteria need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around May. Needs verification.",
    cost: null,
    benefits:
      "Admission to the Indian Statistical Institute's B.Stat and B.Math programs — world-class, with stipend support historically offered. Stipend details need verification.",
    what_it_unlocks:
      "B.Stat (Kolkata) and B.Math (Bengaluru) degrees at ISI, feeding top research and industry careers.",
    preparation_needed:
      "Olympiad-flavoured mathematics: proofs, combinatorics, number theory — well beyond the board syllabus.",
    official_link: "https://www.isical.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "Entrance to ISI's legendary statistics and mathematics degrees — for students who love deep math.",
  },
  {
    id: "cmi-entrance",
    name: "CMI Entrance",
    category: "Mathematics",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Science (PCM)", "Science (PCMB)"],
    eligibility:
      "Class 12 pass/appearing with Mathematics. Details need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around May. Needs verification.",
    cost: null,
    benefits:
      "Admission to Chennai Mathematical Institute's B.Sc. (Hons) in Mathematics & Computer Science or Physics.",
    what_it_unlocks:
      "A small, elite undergraduate program with a direct pipeline to research and top graduate schools.",
    preparation_needed:
      "Proof-based mathematics and problem solving; the exam rewards creativity over speed.",
    official_link: "https://www.cmi.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "prepare",
    summary:
      "Entrance to CMI's highly regarded math and computer science programs in Chennai.",
  },
  {
    id: "cuet-ug",
    name: "CUET-UG",
    category: "Management/Economics",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Any"],
    eligibility:
      "Class 12 pass/appearing; subject requirements vary by university and program. Needs verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around May–June. Needs verification.",
    cost: null,
    benefits:
      "A single test for admission to central universities including DU, BHU and JNU across streams.",
    what_it_unlocks:
      "Undergraduate seats in economics, commerce, humanities and sciences at central universities.",
    preparation_needed:
      "NCERT-aligned subject prep plus general test and language sections, depending on target programs.",
    official_link: "https://cuet.samarth.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "plan",
    summary:
      "The common university entrance test — the backbone of non-engineering undergraduate admissions.",
  },
  {
    id: "nid-dat",
    name: "NID DAT",
    category: "Design",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Any"],
    eligibility:
      "Class 12 pass/appearing from any stream; age limits apply. Details need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Prelims usually around December–January. Needs verification.",
    cost: null,
    benefits:
      "Admission to the National Institute of Design's B.Des programs — India's premier design school.",
    what_it_unlocks:
      "B.Des specialisations across NID campuses and a career in product, communication or interaction design.",
    preparation_needed:
      "Sketching, visualisation, observation and design aptitude — a portfolio habit started in Class 11 helps.",
    official_link: "https://www.nid.edu",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "explore",
    summary:
      "The design aptitude test for NID — worth exploring early if you sketch, build or love visual problem-solving.",
  },
  {
    id: "uceed",
    name: "UCEED",
    category: "Design",
    opportunity_type: "Entrance exam",
    class: [11, 12],
    stream: ["Any"],
    eligibility:
      "Class 12 pass/appearing from any stream. Attempt limits and age criteria need verification.",
    deadline: null,
    application_open_date: null,
    typical_window: "Usually held around January. Needs verification.",
    cost: null,
    benefits:
      "Admission to B.Des programs at IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, IIT Roorkee and IIITDM Jabalpur.",
    what_it_unlocks: "IIT design degrees combining technology and design thinking.",
    preparation_needed:
      "Visual reasoning, spatial ability, observation and drawing; part aptitude, part sketching.",
    official_link: "https://www.uceed.iitb.ac.in",
    status: "Unknown",
    verified: false,
    last_verified: null,
    stage: "explore",
    summary:
      "The IIT route into design — a strong fit for students who like both technology and creativity.",
  },
];

export function getOpportunity(id: string): Opportunity | undefined {
  return OPPORTUNITIES.find((o) => o.id === id);
}

/** Display helper: unknown values are never invented. */
export function fieldOrUnverified(value: string | null): string {
  return value ?? "Needs verification";
}
