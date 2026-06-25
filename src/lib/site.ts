export const brand = {
  name: "Syncore",
  tagline: "Your Digital Partners",
  colors: {
    cyan: "#00BCD4",
    indigo: "#6A1B9A",
    purple: "#B04AE2",
    charcoal: "#212121",
    white: "#FFFFFF",
    surface: "#F6F8FB",
    muted: "#5B6573",
    border: "#E3E8EF",
  },
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`
    : undefined) ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
    : undefined) ||
  "https://syncoreagency.com";

export const defaultOgImage = "/logos/syncore-og.svg";
export const logoMark = "/logos/syncore-logo-dark.svg";

export const contact = {
  email: "syncoreagency@gmail.com",
  phone: "+923147246870",
  whatsapp: "https://wa.me/923147246870",
};

export const socialLinks: {
  label: string;
  href: string;
  isPlaceholder?: boolean;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/syncoreagency/",
  },
  {
    label: "X",
    href: "https://x.com/syncoreaic4",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syncore-agency-016b90418",
  },
];

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const trustStrip = {
  text: "Trusted by ambitious brands to scale with intelligent systems",
  logos: [
    {
      label: "NexaHealth",
      src: "/logos/nexahealth.svg",
      alt: "NexaHealth logo",
    },
    {
      label: "BrightSpan",
      src: "/logos/brightspan.svg",
      alt: "BrightSpan logo",
    },
    {
      label: "VerveLabs",
      src: "/logos/vervelabs.svg",
      alt: "VerveLabs logo",
    },
    {
      label: "AtlasCommerce",
      src: "/logos/atlascommerce.svg",
      alt: "AtlasCommerce logo",
    },
    {
      label: "CrestGrid",
      src: "/logos/crestgrid.svg",
      alt: "CrestGrid logo",
    },
    {
      label: "OpusCreative",
      src: "/logos/opuscreative.svg",
      alt: "OpusCreative logo",
    },
  ],
};

export const services = [
  {
    id: "ai-automation",
    title: "AI Automation",
    href: "/services#ai-automation",
    homeBenefit: "Put your busywork on autopilot and never miss a lead.",
    summary:
      "Put your repetitive work on autopilot and never miss a lead.",
    highlights: [
      "Workflow automation",
      "AI-assisted operations",
      "Tool integrations",
    ],
  },
  {
    id: "smart-ai-websites",
    title: "Smart AI Websites",
    href: "/services#smart-ai-websites",
    homeBenefit: "Websites that don't just look good — they sell for you.",
    summary:
      "Websites that work for you, not just look good.",
    highlights: [
      "Conversion-focused websites",
      "AI-powered experiences",
      "Fast, SEO-friendly builds",
    ],
  },
  {
    id: "social-media-mgmt",
    title: "Social Media Mgmt",
    href: "/services#social-media-mgmt",
    homeBenefit: "Turn your social media into a real growth engine.",
    summary:
      "Turn your social media into a growth engine.",
    highlights: [
      "Content planning",
      "Publishing support",
      "Performance reporting",
    ],
  },
  {
    id: "e-commerce-and-ads",
    title: "E-Commerce & Ads",
    href: "/services#e-commerce-and-ads",
    homeBenefit: "More traffic, more conversions, more revenue.",
    summary:
      "More traffic, more conversions, more revenue.",
    highlights: [
      "Storefront optimization",
      "Paid campaign setup",
      "Conversion tracking",
    ],
  },
  {
    id: "short-form-content",
    title: "Short-Form Content",
    href: "/services#short-form-content",
    homeBenefit: "Content engineered to stop the scroll.",
    summary:
      "Content engineered to stop the scroll.",
    highlights: [
      "Reels and shorts",
      "Creative direction",
      "Editing systems",
    ],
  },
];

export const contactFormOptions = {
  services: [
    "AI Automation",
    "Smart AI Websites",
    "Social Media Mgmt",
    "E-Commerce & Ads",
    "Short-Form Content",
    "Not sure yet",
  ],
  budgetRanges: [
    "Under PKR 50,000",
    "PKR 50,000 - 150,000",
    "PKR 150,000 - 300,000",
    "PKR 300,000 - 500,000",
    "PKR 500,000+",
  ],
};

export type WorkCategory = "AI" | "Web" | "Social" | "Ads" | "Content";

export type WorkProject = {
  id: string;
  title: string;
  service: string;
  serviceTag: string;
  href: string;
  summary: string;
  categories: WorkCategory[];
  resultLine: string;
  client: string;
  challenge: string;
  whatWeDid: string;
  result: string;
  visualSrc?: string;
  visualLabel: string;
  gallery?: {
    label: string;
    src: string;
    alt: string;
  }[];
  results: string[];
};

export const work: WorkProject[] = [
  {
    id: "lahore-grill-house-social-growth",
    title: "Lahore Grill House Social Growth",
    service: "Social Media Management",
    serviceTag: "Social + Content",
    href: "/case-studies",
    summary:
      "Transformed a restaurant's stale social presence into a branded Instagram experience with food-led content, stronger profile proof, and measurable follower growth.",
    categories: ["Social", "Content"],
    resultLine:
      "Built a polished Instagram presence with 12.4K followers, 1.82M reach, and a 2.3M-view top reel.",
    client: "Lahore Grill House",
    challenge:
      "The restaurant relied on walk-ins and had weak social proof, inconsistent food content, and no clear profile experience for people discovering them online.",
    whatWeDid:
      "Created a before/after social refresh, branded Instagram grid, food content samples, production assets, and a performance dashboard to track reach, followers, and engagement.",
    result:
      "The refreshed presence made the brand look credible at first glance and gave the restaurant a repeatable system for offers, food posts, reels, and social reporting.",
    visualLabel: "Restaurant social growth system",
    visualSrc: "/images/work/assets/lahore-instagram-grid-real.png",
    gallery: [
      {
        label: "Before / After Social Presence",
        src: "/images/work/assets/social-before-after-restaurant.png",
        alt: "Before Facebook page and after Instagram profile for a restaurant social media transformation.",
      },
      {
        label: "Instagram Profile Refresh",
        src: "/images/work/assets/lahore-instagram-after.png",
        alt: "Lahore Grill House refreshed Instagram profile and branded post grid.",
      },
      {
        label: "Social Analytics Dashboard",
        src: "/images/work/assets/lahore-social-dashboard.png",
        alt: "Lahore Grill House 90 day social media performance dashboard.",
      },
      {
        label: "Content Samples",
        src: "/images/work/assets/lahore-content-samples-real.png",
        alt: "Restaurant food content sample board for Lahore Grill House.",
      },
    ],
    results: ["12.4K followers", "1.82M reach", "2.3M top reel views"],
  },
  {
    id: "hunza-heights-ai-booking",
    title: "Hunza Heights AI Booking Assistant",
    service: "AI Automation",
    serviceTag: "AI Automation",
    href: "/case-studies",
    summary:
      "Designed an AI-assisted hotel booking workflow that replies instantly, qualifies guests, logs leads, and sends booking links automatically.",
    categories: ["AI"],
    resultLine:
      "Reduced response time from hours to minutes while handling 340 enquiries and confirming 28 bookings.",
    client: "Hunza Heights Hotel",
    challenge:
      "Hotel enquiries were coming through WhatsApp and social DMs, but manual replies caused slow response times and missed booking opportunities.",
    whatWeDid:
      "Mapped the guest enquiry flow, designed AI response logic, showed room availability cards, logged lead details into a CRM-style sheet, and added owner notification steps.",
    result:
      "Guests received faster answers, owners got cleaner lead records, and booking follow-ups became easier to manage.",
    visualLabel: "AI hotel booking workflow",
    visualSrc: "/images/work/assets/ai-response-time-comparison.png",
    gallery: [
      {
        label: "AI Response Comparison",
        src: "/images/work/assets/ai-response-time-comparison.png",
        alt: "AI automation response time comparison for restaurant bookings.",
      },
      {
        label: "Hotel AI Chat",
        src: "/images/work/assets/hunza-ai-chat.png",
        alt: "WhatsApp style AI booking assistant conversation for Hunza Heights Hotel.",
      },
      {
        label: "Automation Flow",
        src: "/images/work/assets/ai-automation-flow.png",
        alt: "Five step AI automation flow from customer message to owner notification.",
      },
      {
        label: "Lead Log",
        src: "/images/work/assets/hunza-lead-log.png",
        alt: "Sample CRM lead log for Hunza Heights Hotel enquiries.",
      },
    ],
    results: ["340 enquiries handled", "4 min response time", "28 bookings confirmed"],
  },
  {
    id: "skybreeze-fans-web-seo",
    title: "SkyBreeze Fans Web & SEO Build",
    service: "Smart AI Websites",
    serviceTag: "Web + SEO",
    href: "/case-studies",
    summary:
      "Built a modern web presence for a fan manufacturer with stronger search visibility, product pages, and performance reporting.",
    categories: ["Web"],
    resultLine:
      "Turned low visibility into a polished website, top search presence, 32.8K sessions, and 402K organic impressions.",
    client: "SkyBreeze Fans",
    challenge:
      "The business had minimal online visibility, weak trust signals, and no strong website journey for product discovery or dealer enquiries.",
    whatWeDid:
      "Designed a responsive website experience, structured product range pages, improved Google presence, and built a performance dashboard for SEO and engagement metrics.",
    result:
      "The brand gained a more credible online presence and clearer product path for customers searching for fans in Pakistan.",
    visualLabel: "Website and SEO transformation",
    visualSrc: "/images/work/assets/web-before-after-skybreeze.png",
    gallery: [
      {
        label: "Online Presence Before / After",
        src: "/images/work/assets/web-before-after-skybreeze.png",
        alt: "Before and after online presence transformation for SkyBreeze Fans.",
      },
      {
        label: "Responsive Website",
        src: "/images/work/assets/skybreeze-responsive-website.png",
        alt: "SkyBreeze Fans responsive website shown on laptop and mobile.",
      },
      {
        label: "Product Page",
        src: "/images/work/assets/skybreeze-products-page.png",
        alt: "SkyBreeze Fans product range page with fan cards.",
      },
      {
        label: "SEO Analytics",
        src: "/images/work/assets/skybreeze-seo-analytics.png",
        alt: "SkyBreeze Fans SEO and organic traffic analytics dashboard.",
      },
    ],
    results: ["32.8K sessions", "402K impressions", "59.3% organic growth"],
  },
  {
    id: "ecommerce-ads-performance",
    title: "E-Commerce Ads Performance System",
    service: "E-Commerce & Ads",
    serviceTag: "Ads + E-Commerce",
    href: "/case-studies",
    summary:
      "Structured paid social campaigns, creative mockups, funnel planning, and ROAS reporting for online sales growth.",
    categories: ["Ads"],
    resultLine:
      "Built a campaign view showing PKR 20,000 spend, 742 purchases, 7.4x ROAS, and PKR 27 cost per purchase.",
    client: "E-commerce brands",
    challenge:
      "Campaigns needed clearer creative direction, funnel structure, and performance reporting to connect ad spend with purchases.",
    whatWeDid:
      "Prepared Instagram ad formats, Meta Ads Manager reporting, before/after ROAS framing, and a three-stage marketing funnel for awareness, consideration, and conversion.",
    result:
      "The assets show how creative, targeting, and reporting connect into a repeatable performance system.",
    visualLabel: "Paid ads performance system",
    visualSrc: "/images/work/assets/meta-ads-manager-results.png",
    gallery: [
      {
        label: "Meta Ads Manager",
        src: "/images/work/assets/meta-ads-manager-results.png",
        alt: "Meta Ads Manager dashboard showing spend, purchases, ROAS, and cost per purchase.",
      },
      {
        label: "Instagram Ads",
        src: "/images/work/assets/instagram-ads-fashion.png",
        alt: "Instagram feed and story ad mockups for fashion ecommerce.",
      },
      {
        label: "ROAS Before / After",
        src: "/images/work/assets/roas-before-after.png",
        alt: "Before and after ROAS comparison showing improved ecommerce ad performance.",
      },
      {
        label: "Marketing Funnel",
        src: "/images/work/assets/marketing-funnel.png",
        alt: "Three stage marketing funnel for paid advertising campaigns.",
      },
    ],
    results: ["7.4x ROAS", "742 purchases", "PKR 27 cost per purchase"],
  },
  {
    id: "short-form-production-system",
    title: "Short-Form Content Production System",
    service: "Short-Form Content",
    serviceTag: "Video Production",
    href: "/case-studies",
    summary:
      "Created production-ready visual systems for restaurant and automotive content, including reel covers, sequence boards, and behind-the-scenes shoot assets.",
    categories: ["Content"],
    resultLine:
      "Packaged short-form content into scroll-ready visuals, from food reels to car detailing transformations.",
    client: "Restaurant and automotive brands",
    challenge:
      "Brands needed content that looked professional before publishing and could clearly communicate transformation, craft, and proof.",
    whatWeDid:
      "Produced shoot visuals, reel cover systems, sequence boards, and platform-ready video assets for different campaign themes.",
    result:
      "The final assets give each brand a reusable content direction and a stronger basis for reels, ads, and campaign posts.",
    visualLabel: "Short-form content production",
    visualSrc: "/images/work/assets/car-detailing-reel-sequence.png",
    gallery: [
      {
        label: "Restaurant Content Shoot",
        src: "/images/work/assets/restaurant-content-production.png",
        alt: "Creator filming restaurant food content with a phone gimbal.",
      },
      {
        label: "Car Detailing Reel Cover",
        src: "/images/work/assets/car-detailing-reel-cover.png",
        alt: "Car detailing before and after reel cover.",
      },
      {
        label: "Reel Sequence Board",
        src: "/images/work/assets/car-detailing-reel-sequence.png",
        alt: "Eight post car detailing reel sequence board.",
      },
      {
        label: "Production Behind the Scenes",
        src: "/images/work/assets/car-detailing-production.png",
        alt: "Syncore production shoot for car detailing content.",
      },
    ],
    results: ["2.3M reel concept", "8-reel sequence", "Production-ready assets"],
  },
];

export const workContent = {
  eyebrow: "Portfolio",
  heading: "Selected case studies.",
  emptyTitle: "No projects match this filter yet.",
  emptyCopy:
    "We’re constantly adding new work examples. Check back soon for the latest case studies.",
  caseStudyEyebrow: "Case study",
  visualsEyebrow: "Visual summary",
};

export type WorkMediaCategory =
  | "Social Media"
  | "AI Automation"
  | "Web & SEO"
  | "Ads & E-Commerce"
  | "Video Production";

export type WorkMediaItem = {
  id: string;
  title: string;
  category: WorkMediaCategory;
  type: "image" | "video";
  src: string;
  alt?: string;
  orientation?: "square" | "landscape" | "portrait";
};

export const workMedia: WorkMediaItem[] = [
  {
    id: "social-before-after-restaurant",
    title: "Restaurant Before / After Social Presence",
    category: "Social Media",
    type: "image",
    src: "/images/work/assets/social-before-after-restaurant.png",
    alt: "Restaurant Facebook before and Instagram after social media transformation.",
    orientation: "square",
  },
  {
    id: "lahore-instagram-grid-real",
    title: "Lahore Grill House Instagram Grid",
    category: "Social Media",
    type: "image",
    src: "/images/work/assets/lahore-instagram-grid-real.png",
    alt: "Lahore Grill House branded Instagram grid.",
    orientation: "square",
  },
  {
    id: "lahore-instagram-after",
    title: "Lahore Grill House Profile Refresh",
    category: "Social Media",
    type: "image",
    src: "/images/work/assets/lahore-instagram-after.png",
    alt: "Lahore Grill House refreshed Instagram profile.",
    orientation: "portrait",
  },
  {
    id: "lahore-social-dashboard",
    title: "Restaurant Social Analytics Dashboard",
    category: "Social Media",
    type: "image",
    src: "/images/work/assets/lahore-social-dashboard.png",
    alt: "Restaurant social media dashboard with follower growth and engagement metrics.",
    orientation: "landscape",
  },
  {
    id: "instagram-follower-growth",
    title: "Instagram Follower Growth",
    category: "Social Media",
    type: "image",
    src: "/images/work/assets/instagram-follower-growth.png",
    alt: "Instagram follower growth chart over 60 days.",
    orientation: "landscape",
  },
  {
    id: "ai-response-time-comparison",
    title: "AI Response Time Comparison",
    category: "AI Automation",
    type: "image",
    src: "/images/work/assets/ai-response-time-comparison.png",
    alt: "AI automation before and after response time comparison.",
    orientation: "landscape",
  },
  {
    id: "hunza-ai-chat",
    title: "Hotel AI Booking Chat",
    category: "AI Automation",
    type: "image",
    src: "/images/work/assets/hunza-ai-chat.png",
    alt: "Hotel AI booking assistant conversation.",
    orientation: "portrait",
  },
  {
    id: "ai-automation-flow",
    title: "AI Automation Flow",
    category: "AI Automation",
    type: "image",
    src: "/images/work/assets/ai-automation-flow.png",
    alt: "AI automation process from message to owner notification.",
    orientation: "landscape",
  },
  {
    id: "hunza-lead-log",
    title: "Automated Lead Log",
    category: "AI Automation",
    type: "image",
    src: "/images/work/assets/hunza-lead-log.png",
    alt: "Automated lead log for hotel booking enquiries.",
    orientation: "landscape",
  },
  {
    id: "web-before-after-skybreeze",
    title: "SkyBreeze Online Presence Transformation",
    category: "Web & SEO",
    type: "image",
    src: "/images/work/assets/web-before-after-skybreeze.png",
    alt: "Before and after web presence transformation for SkyBreeze Fans.",
    orientation: "landscape",
  },
  {
    id: "skybreeze-responsive-website",
    title: "Responsive Website Build",
    category: "Web & SEO",
    type: "image",
    src: "/images/work/assets/skybreeze-responsive-website.png",
    alt: "Responsive SkyBreeze Fans website on laptop and mobile.",
    orientation: "landscape",
  },
  {
    id: "skybreeze-products-page",
    title: "Product Catalog Page",
    category: "Web & SEO",
    type: "image",
    src: "/images/work/assets/skybreeze-products-page.png",
    alt: "SkyBreeze Fans product catalog page.",
    orientation: "landscape",
  },
  {
    id: "skybreeze-seo-analytics",
    title: "SEO Performance Dashboard",
    category: "Web & SEO",
    type: "image",
    src: "/images/work/assets/skybreeze-seo-analytics.png",
    alt: "SEO dashboard showing traffic, search impressions, and keyword performance.",
    orientation: "landscape",
  },
  {
    id: "meta-ads-manager-results",
    title: "Meta Ads Manager Results",
    category: "Ads & E-Commerce",
    type: "image",
    src: "/images/work/assets/meta-ads-manager-results.png",
    alt: "Meta Ads Manager campaign results dashboard.",
    orientation: "landscape",
  },
  {
    id: "instagram-ads-fashion",
    title: "Instagram Feed and Story Ads",
    category: "Ads & E-Commerce",
    type: "image",
    src: "/images/work/assets/instagram-ads-fashion.png",
    alt: "Instagram feed post and story ad mockups.",
    orientation: "square",
  },
  {
    id: "roas-before-after",
    title: "ROAS Before / After",
    category: "Ads & E-Commerce",
    type: "image",
    src: "/images/work/assets/roas-before-after.png",
    alt: "Before and after paid ads ROAS comparison.",
    orientation: "landscape",
  },
  {
    id: "marketing-funnel",
    title: "Three Stage Marketing Funnel",
    category: "Ads & E-Commerce",
    type: "image",
    src: "/images/work/assets/marketing-funnel.png",
    alt: "Three stage marketing funnel for paid advertising.",
    orientation: "landscape",
  },
  {
    id: "restaurant-content-production",
    title: "Restaurant Content Production",
    category: "Video Production",
    type: "image",
    src: "/images/work/assets/restaurant-content-production.png",
    alt: "Creator filming restaurant content with a phone gimbal.",
    orientation: "landscape",
  },
  {
    id: "car-detailing-reel-sequence",
    title: "Car Detailing Reel Sequence",
    category: "Video Production",
    type: "image",
    src: "/images/work/assets/car-detailing-reel-sequence.png",
    alt: "Car detailing eight reel sequence storyboard.",
    orientation: "landscape",
  },
  {
    id: "car-detailing-production",
    title: "Production Behind the Scenes",
    category: "Video Production",
    type: "image",
    src: "/images/work/assets/car-detailing-production.png",
    alt: "Behind the scenes production shoot for car detailing content.",
    orientation: "landscape",
  },
  ...Array.from({ length: 11 }, (_, index) => ({
    id: `work-video-${index + 1}`,
    title: `Video Asset ${index + 1}`,
    category: "Video Production" as const,
    type: "video" as const,
    src: `/videos/work/vid${index + 1}.mp4`,
    orientation: "portrait" as const,
  })),
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

export const testimonials: Testimonial[] = [];

export const aboutContent = {
  founderNote: {
    visualLabel:
      "Founder perspective on building agile AI systems and growth workflows",
    eyebrow: "Founder note",
    visualEyebrow: "Founder message",
    visualTitle: "Founder & CEO",
    heading: "We build systems that free leaders to focus on growth.",
    copy:
      "Syncore was founded to help businesses replace reactive marketing with intelligent, measurable systems. Our team combines creative strategy, technical automation, and conversion-first design so leaders can scale without adding complexity.",
  },
};

export const privacyPolicy = {
  heroCopy: `This privacy policy explains how ${brand.name} collects, uses, and protects visitor information. Review it against your final tools and legal requirements before launch.`,
  introCopy:
    "This policy covers website interactions, form submissions, analytics, and advertising tools used by Syncore.",
  sections: [
    {
      id: "information-collected",
      title: "Information collected",
      copy: `${brand.name} may collect personal contact details you submit through forms, including name, email, phone or WhatsApp number, business name, service interest, budget range, and project details. We only collect what is necessary to respond to your request and evaluate our services.
`,
    },
    {
      id: "form-submissions",
      title: "Form submissions",
      copy:
        "Form data is used to respond to enquiries, schedule consultations, and share relevant service information. We may store submissions in a secure CRM or lead tracking system for follow-up and quality assurance.",
    },
    {
      id: "analytics",
      title: "Analytics",
      copy:
        "Syncore uses analytics tools to track how visitors interact with the website, which pages perform best, and how people find us. Analytics data is aggregated and used to improve user experience and marketing effectiveness.",
    },
    {
      id: "meta-pixel",
      title: "Meta Pixel",
      copy:
        "The site may use advertising pixels such as Meta Pixel or similar tools to measure campaign performance and enable remarketing. Pixel use will be configured only after final ad setup and review of data privacy requirements.",
    },
    {
      id: "cookies",
      title: "Cookies",
      copy:
        "Cookies are used for essential website functionality, analytics, and optional advertising measurement. Visitors may choose whether to accept non-essential cookies where required by law.",
    },
    {
      id: "contact",
      title: "Contact",
      copy: `If you have questions about this privacy policy or wish to request data access, contact ${brand.name} at ${contact.email}.`,
    },
  ],
};

export const termsContent = {
  heroCopy: `These site terms explain how ${brand.name} works with visitors and clients. Review them with your legal advisor before publishing.`,
  introCopy:
    "These terms are a clean starting point for Syncore and should be reviewed with the final service model, payment structure, and business jurisdiction.",
  sections: [
    {
      id: "website-use",
      title: "Website use",
      copy: `By using this website, you agree to use it responsibly and only for lawful purposes. Content on this site is provided for general information about ${brand.name} and its services.`,
    },
    {
      id: "services",
      title: "Services",
      copy:
        "Service scopes, timelines, deliverables, revisions, and responsibilities should be agreed in writing before work begins. Website content is not a binding proposal unless confirmed in a separate agreement.",
    },
    {
      id: "payments",
      title: "Payments",
      copy:
        "Payment terms, deposits, invoices, refunds, and cancellation policies are agreed in writing in each client engagement. Syncore invoices services based on the scope of work and payment schedule in the signed proposal. Payment terms, deposits, subscriptions, retainers, refunds, late fees, and cancellation rules should be added once Syncore finalizes its commercial terms and client agreement template.",
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      copy:
        "Website copy, visuals, branding, code, and other materials belong to their respective owners. Final ownership terms for client work should be defined in each project agreement.",
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of liability",
      copy:
        "Syncore is not liable for indirect, incidental, or consequential damages resulting from site use or service delivery, except as required by applicable law. Liability is limited to the amount paid for the relevant service agreement.",
    },
    {
      id: "contact",
      title: "Contact",
      copy: `For questions about these terms, contact ${brand.name} at ${contact.email}.`,
    },
  ],
};

export type SeoEntry = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  index?: boolean;
  includeInSitemap?: boolean;
};

export type SeoKey =
  | "home"
  | "services"
  | "work"
  | "caseStudies"
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "notFound";

export const seo: Record<SeoKey, SeoEntry> = {
  home: {
    title: "Syncore | AI-Powered Growth Agency",
    description:
      "We help businesses grow with AI automation, smart websites, content and ads. Send us a message to start the conversation.",
    href: "/",
    keywords: [
      "Syncore",
      "AI growth agency",
      "AI automation",
      "smart websites",
      "digital marketing",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  services: {
    title: "Services | Syncore AI Automation & Digital Growth",
    description:
      "Explore Syncore services across AI automation, smart AI websites, social media management, e-commerce, ads, and short-form content.",
    href: "/services",
    keywords: [
      "AI automation services",
      "AI websites",
      "social media management",
      "e-commerce ads",
      "short-form content",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  work: {
    title: "Work | Syncore Portfolio Gallery",
    description:
      "Explore Syncore portfolio media across social media, AI automation, web and SEO, ads, ecommerce, and video production.",
    href: "/work",
    keywords: [
      "Syncore work",
      "digital agency portfolio",
      "AI case studies",
      "website case studies",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  caseStudies: {
    title: "Case Studies | Syncore Digital Growth Results",
    description:
      "Explore Syncore case studies across social media growth, AI automation, websites, SEO, paid ads, ecommerce, and short-form content.",
    href: "/case-studies",
    keywords: [
      "Syncore case studies",
      "social media case studies",
      "AI automation case studies",
      "website SEO case studies",
      "digital marketing results",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  about: {
    title: "About Syncore | AI-Powered Digital Partner",
    description:
      "Learn about Syncore, your digital partners for AI, websites, content, commerce, and growth.",
    href: "/about",
    keywords: [
      "about Syncore",
      "AI digital partner",
      "growth agency",
      "digital agency",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  contact: {
    title: "Contact Syncore | Send a Message",
    description:
      "Contact Syncore to discuss AI automation, smart websites, content, ads, and your next digital growth project.",
    href: "/contact",
    keywords: [
      "contact Syncore",
      "book free consultation",
      "AI agency contact",
      "digital growth consultation",
    ],
    changeFrequency: "monthly",
    priority: 0.85,
  },
  privacy: {
    title: "Privacy Policy | Syncore",
    description:
      "Read the Syncore privacy policy for website visitors, form submissions, analytics, cookies, and advertising pixels.",
    href: "/privacy",
    keywords: ["Syncore privacy", "privacy policy", "data collection"],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  terms: {
    title: "Terms of Use | Syncore",
    description:
      "Read the Syncore terms of use for website access, services, payments, intellectual property, and liability.",
    href: "/terms",
    keywords: ["Syncore terms", "terms of use", "service terms"],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  notFound: {
    title: "Page Not Found | Syncore",
    description:
      "The page you are looking for is not available. Return home or contact Syncore.",
    href: "/404",
    keywords: ["Syncore 404", "page not found"],
    changeFrequency: "yearly",
    priority: 0,
    index: false,
    includeInSitemap: false,
  },
};

type BusinessAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

type BusinessInfo = {
  legalName: string;
  description: string;
  locale: string;
  logo: string;
  image: string;
  priceRange: string;
  address: BusinessAddress | null;
  areaServed: string;
};

export const business: BusinessInfo = {
  legalName: "Syncore",
  description: seo.home.description,
  locale: "en_PK",
  logo: logoMark,
  image: defaultOgImage,
  priceRange: "$$",
  address: null,
  areaServed: "Pakistan",
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedPath === "/" ? siteUrl : `${siteUrl}${normalizedPath}`;
}

export const site = {
  brand,
  siteUrl,
  defaultOgImage,
  logoMark,
  contact,
  socialLinks,
  navigationLinks,
  legalLinks,
  trustStrip,
  services,
  contactFormOptions,
  work,
  workContent,
  testimonials,
  aboutContent,
  privacyPolicy,
  termsContent,
  seo,
  business,
};
