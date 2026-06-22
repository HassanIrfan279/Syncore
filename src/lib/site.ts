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
  "https://syncore.example";

export const defaultOgImage = "/logos/syncore-og.svg";
export const logoMark = "/logos/syncore-logo.svg";

export const contact = {
  email: "hello@syncore.example",
  phone: "+000000000000",
  whatsapp: "https://wa.me/000000000000",
  calendly: "https://calendly.com/syncore/intro-call",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/syncore-placeholder",
    isPlaceholder: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/syncore-placeholder",
    isPlaceholder: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/syncore-placeholder",
    isPlaceholder: true,
  },
  {
    label: "X",
    href: "https://x.com/syncore-placeholder",
    isPlaceholder: true,
  },
];

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const trustStrip = {
  text: "Trusted by businesses to grow with AI",
  logoPlaceholders: [
    "Logo placeholder 01",
    "Logo placeholder 02",
    "Logo placeholder 03",
    "Logo placeholder 04",
    "Logo placeholder 05",
    "Logo placeholder 06",
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
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
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
  visualLabel: string;
  results: string[];
};

export const work: WorkProject[] = [
  {
    id: "featured-work-1",
    title: "AI Lead Capture System",
    service: "AI Automation",
    serviceTag: "AI Automation",
    href: "/work",
    summary: "Replace with final work copy, client context, and results.",
    categories: ["AI"],
    resultLine: "Result placeholder: faster lead response and cleaner booking flow.",
    client: "Client / project placeholder",
    challenge:
      "Replace with the real client context, lead response problem, and operational bottleneck.",
    whatWeDid:
      "Replace with the final automation scope, AI agent setup, chatbot logic, and workflow details.",
    result:
      "Replace with verified outcomes once the project has real performance data.",
    visualLabel: "AI calls, chat, and booking flow",
    results: ["Result placeholder", "Metric placeholder"],
  },
  {
    id: "featured-work-2",
    title: "Smart Website Conversion Build",
    service: "Smart AI Websites",
    serviceTag: "Web",
    href: "/work",
    summary: "Replace with final work copy, client context, and results.",
    categories: ["Web"],
    resultLine: "Result placeholder: clearer user journey and stronger enquiry path.",
    client: "Client / project placeholder",
    challenge:
      "Replace with the real website challenge, audience needs, and conversion blockers.",
    whatWeDid:
      "Replace with the final UX, web build, AI feature, and lead capture implementation.",
    result:
      "Replace with verified website conversion, traffic, or enquiry performance data.",
    visualLabel: "Conversion website system",
    results: ["Result placeholder", "Metric placeholder"],
  },
  {
    id: "featured-work-3",
    title: "Growth Campaign Content Sprint",
    service: "E-Commerce & Ads",
    serviceTag: "Social + Ads + Content",
    href: "/work",
    summary: "Replace with final work copy, client context, and results.",
    categories: ["Social", "Ads", "Content"],
    resultLine: "Result placeholder: campaign assets structured for measurable growth.",
    client: "Client / project placeholder",
    challenge:
      "Replace with the real campaign goal, creative challenge, and funnel context.",
    whatWeDid:
      "Replace with the final content plan, ad campaign setup, and optimization work.",
    result:
      "Replace with verified campaign, content, or paid ads performance data.",
    visualLabel: "Content and paid growth loop",
    results: ["Result placeholder", "Metric placeholder"],
  },
];

export const workContent = {
  eyebrow: "Portfolio",
  heading: "Selected Placeholder Work.",
  emptyTitle: "No placeholder projects in this filter yet.",
  emptyCopy: "Add real case studies later and they will appear here.",
  caseStudyEyebrow: "Case study placeholder",
  visualsEyebrow: "Visuals placeholder",
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

export const testimonials: Testimonial[] = [];

export const aiChatContent = {
  greeting:
    "Hi \uD83D\uDC4B Want to know how we can grow your business? Ask me anything or book a free call.",
  status: "Local placeholder chat",
  leadCapturedMessage:
    "Syncore has your details in this placeholder flow. Use the call or WhatsApp buttons to continue now.",
  placeholders: {
    question: "Ask a question...",
    name: "Name",
    contact: "Email or WhatsApp",
    need: "What do you need?",
  },
};

export const aboutContent = {
  founderNote: {
    visualLabel:
      "Abstract Syncore founder note placeholder visual with AI network styling",
    eyebrow: "Founder note",
    visualEyebrow: "Founder note placeholder",
    visualTitle: "Optional section",
    heading: "Placeholder note for the founder story.",
    copy:
      "This section is ready for a short founder message, origin story, or team philosophy. Replace this placeholder when the final note is written, or remove the section entirely if it is not needed.",
  },
};

export const privacyPolicy = {
  heroCopy: `A simple placeholder privacy policy for ${brand.name}. Update this page with final business, legal, analytics, and advertising details before launch.`,
  introCopy:
    "This page is written as a practical starting point for a digital agency website and should be reviewed against the final tools, region, and compliance requirements.",
  sections: [
    {
      id: "information-collected",
      title: "Information collected",
      copy: `${brand.name} may collect placeholder contact details that you choose to share, including your name, email address, phone or WhatsApp number, business name, service interest, budget range, and message details.`,
    },
    {
      id: "form-submissions",
      title: "Form submissions",
      copy:
        "When you submit a form, we use the information to respond to your enquiry, understand your business needs, and discuss relevant services. Form data may later be sent to an email provider, CRM, or secure lead tracking tool.",
    },
    {
      id: "analytics",
      title: "Analytics",
      copy:
        "We may use privacy-conscious analytics to understand website visits, page performance, conversion paths, and general engagement. Analytics details should be updated once the final tools are selected.",
    },
    {
      id: "meta-pixel",
      title: "Meta Pixel",
      copy:
        "The site may use Meta Pixel or similar advertising pixels to measure campaign performance and improve retargeting. Pixel use should be confirmed and configured with the final advertising setup.",
    },
    {
      id: "cookies",
      title: "Cookies",
      copy:
        "Cookies may be used for essential website behavior, analytics, advertising measurement, and embedded tools such as scheduling. Cookie settings and consent language should be updated before launch if required.",
    },
    {
      id: "contact",
      title: "Contact",
      copy: `For privacy questions or data requests, contact ${brand.name} at ${contact.email}. Replace this placeholder with the final business contact details before publishing.`,
    },
  ],
};

export const termsContent = {
  heroCopy: `Simple standard terms for the ${brand.name} website. Replace payment, service, and legal placeholders with final approved details before launch.`,
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
      title: "Payments placeholder",
      copy:
        "Payment terms, deposits, subscriptions, retainers, refunds, late fees, and cancellation rules should be added once Syncore finalizes its commercial terms and client agreement template.",
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
        "This placeholder section should be reviewed by a qualified professional. Syncore should not be liable for indirect, incidental, or consequential damages except where required by applicable law.",
    },
    {
      id: "contact",
      title: "Contact",
      copy: `For questions about these terms, contact ${brand.name} at ${contact.email}. Replace this placeholder with final legal contact details before publishing.`,
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
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "notFound";

export const seo: Record<SeoKey, SeoEntry> = {
  home: {
    title: "Syncore | AI-Powered Growth Agency",
    description:
      "We help businesses grow with AI automation, smart websites, content and ads. Book a free consultation.",
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
    title: "Work | Syncore Digital Growth Case Studies",
    description:
      "Explore Syncore portfolio placeholders for AI automation, smart websites, content, ads, and digital growth projects.",
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
    title: "Contact Syncore | Book a Free Consultation",
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

export const business = {
  legalName: "Syncore",
  description: seo.home.description,
  locale: "en_US",
  logo: logoMark,
  image: defaultOgImage,
  priceRange: "$$",
  address: {
    streetAddress: "Placeholder street address",
    addressLocality: "Placeholder city",
    addressRegion: "Placeholder region",
    postalCode: "00000",
    addressCountry: "US",
  },
  areaServed: "United States",
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
  aiChatContent,
  aboutContent,
  privacyPolicy,
  termsContent,
  seo,
  business,
};
