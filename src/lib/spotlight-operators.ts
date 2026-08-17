import jianYangHeadshot from "@/assets/operator-jian-yang.png.asset.json";
import erikaVelazquezHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";
import elaineBogartHeadshot from "@/assets/operator-elaine-bogart.png.asset.json";
import victoriaKasumuHeadshot from "@/assets/operator-victoria-kasumu.png.asset.json";
import vanessaKwanHeadshot from "@/assets/operator-vanessa-kwan.png.asset.json";
import alasdairLloydJonesHeadshot from "@/assets/operator-alasdair-lloyd-jones.png.asset.json";
import alanPoussaintHeadshot from "@/assets/operator-alan-poussaint.png.asset.json";
import jenniferKasperHeadshot from "@/assets/operator-jennifer-kasper.png.asset.json";
import seanParkHeadshot from "@/assets/operator-sean-park.png.asset.json";
import jonathanLevinsonHeadshot from "@/assets/operator-jonathan-levinson.png.asset.json";
import miguelFerreyraHeadshot from "@/assets/operator-miguel-ferreyra-de-bone.png.asset.json";
import jessicaDavilaHeadshot from "@/assets/operator-jessica-davila.png.asset.json";

/**
 * Spotlight roster shared by the home OperatorSpotlightRail and the
 * for-portfolios photo chapter. One source of truth — bios and headshots
 * must never diverge between pages.
 */
export const spotlightOperators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    priorCompanies: ["INDUSTRIOUS", "OPENCARE"],
    summary:
      "Strategic finance leader and entrepreneur with a record of scaling fast-growing firms, optimizing financial operations, and securing funding. At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.",
    chips: ["Real Estate", "Finance", "Tech"],
    photoUrl: jianYangHeadshot.url,
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    priorCompanies: ["MORNING BREW", "THE NEW REPUBLIC"],
    summary:
      "Story-driven marketer with deep expertise in brand strategy, product marketing, and audience growth. Specializes in launching and repositioning for impact. At Morning Brew, developed a new newsletter ad product that doubled the average CTR.",
    chips: ["New Media", "Consumer", "GenAI"],
    photoUrl: erikaVelazquezHeadshot.url,
  },
  {
    name: "Elaine Bogart",
    role: "Finance Operating Partner",
    priorCompanies: ["Fullscreen", "Nifty's"],
    summary:
      "Powerhouse CFO with 15+ years of experience leading financial transformation and strategic exits across SaaS, Web3, and new media. At Mojix, drove a +98% EBITDA turnaround and completed a successful international sale.",
    chips: ["Tech", "Web3", "Media"],
    photoUrl: elaineBogartHeadshot.url,
  },
  {
    name: "Victoria Kasumu",
    role: "People Operating Partner",
    priorCompanies: ["Zocdoc", "Pager Health"],
    summary:
      "Seasoned people leader who builds growth-focused operations by aligning talent, culture, and business goals. At David Zwirner, hired 50+ employees in 90 days while reducing redundancy 30% and increasing retention 15%.",
    chips: ["Hospitality", "Tech", "Healthcare"],
    photoUrl: victoriaKasumuHeadshot.url,
  },
  {
    name: "Vanessa Kwan",
    role: "Finance Operating Partner",
    priorCompanies: ["BDG MEDIA", "GOLDMAN SACHS"],
    summary:
      "Strategic finance and operations leader with 15+ years across investment banking, luxury retail, and digital media. At BDG Media, rose from Director to EVP Head of Finance and redesigned seller commissions, improving gross margins by 4 points.",
    chips: ["Digital Media", "Luxury Retail", "Consumer"],
    photoUrl: vanessaKwanHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Alasdair Lloyd-Jones",
    role: "Growth Operating Partner",
    priorCompanies: ["SET CREATIVE (WPP)", "DAVID YURMAN"],
    summary:
      "Global brand strategist and creative operator with a record of scaling consumer brands and leading high-impact transformation. As CEO of SET Creative, scaled revenue 5x and led the firm through a successful sale to WPP.",
    chips: ["Consumer Retail", "Tech", "Automotive"],
    photoUrl: alasdairLloydJonesHeadshot.url,
  },
  {
    name: "Alan Poussaint",
    role: "Finance Operating Partner",
    priorCompanies: ["ROCKET INTERNET", "KIXIE"],
    summary:
      "Transaction-ready finance operator with PE roots and marketplace scale; former Principal at Lincolnshire Management ($1.8B AUM), then CFO of a Rocket Internet portfolio company during the build of Indonesia's largest e-commerce platform.",
    chips: ["Tech", "SaaS", "Private Capital"],
    photoUrl: alanPoussaintHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jennifer Kasper",
    role: "Growth Operating Partner",
    priorCompanies: ["LVMH", "MACY'S"],
    summary:
      "Senior marketing leader with deep experience across global retail, beauty, fashion, media, and customer strategy. At LVMH, unified group media strategy across 75+ Maisons and built cross-brand agency models.",
    chips: ["Retail", "Fashion", "Beauty"],
    photoUrl: jenniferKasperHeadshot.url,
  },
  {
    name: "Sean Park",
    role: "People Operating Partner",
    priorCompanies: ["ACTIVANT CAPITAL", "EY"],
    summary:
      "People strategy leader who turns org design, leadership, and talent systems into business growth levers. As CPO at Activant Capital, led portfolio talent strategy and served as interim CHRO on a portfolio path to a $2B exit.",
    chips: ["Growth Equity", "Pro Services", "Tech"],
    photoUrl: seanParkHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jonathan Levinson",
    role: "Finance Operating Partner",
    priorCompanies: ["KIDS MADE MODERN", "YELLOWHEART"],
    summary:
      "Finance and operations leader with 25+ years turning founder assumptions into investor-ready plans and operating discipline. Has led or supported $65M+ in M&A and fundraising transactions.",
    chips: ["E-Commerce", "SaaS", "Manufacturing"],
    photoUrl: jonathanLevinsonHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Miguel Ferreyra de Bone",
    role: "Finance Operating Partner",
    priorCompanies: ["TASTE OF BELGIUM", "FARNSWORTH CANNABIS"],
    summary:
      "Seasoned operator with a track record of building and transforming companies across finance, strategy, operations, GTM, and product. Brings board-level judgment and hands-on operating experience across consumer, luxury, and finance.",
    chips: ["Consumer", "Luxury", "Finance"],
    photoUrl: miguelFerreyraHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jessica Davila",
    role: "People Operating Partner",
    priorCompanies: ["TASKRABBIT", "BREAD"],
    summary:
      "People strategy leader with a record of guiding companies through scale, acquisition, and leadership change. At TaskRabbit, rebuilt people strategy while scaling from 250 to 500 employees across 9 countries.",
    chips: ["Marketplace", "Fintech", "Consumer"],
    photoUrl: jessicaDavilaHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
];
