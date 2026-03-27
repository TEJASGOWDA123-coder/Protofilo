export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "online-voting-system",
    title: "Online Voting System",
    description:
      "Secure voting workflow with email OTP verification and a clean admin/user experience.",
    stack: ["Java", "MySQL", "Email OTP"],
    details: [
      "Implemented secure login and voting flows with email OTP verification.",
      "Designed separate admin and user experiences with clean role-based screens.",
      "Stored voters, elections, candidates, and results in a MySQL-backed database.",
    ],
  },
  {
    slug: "spam-email-classifier",
    title: "Spam Email Classifier",
    description:
      "Machine learning model to classify emails as spam or not spam with a simple UI for testing.",
    stack: ["Python", "Machine Learning", "NLP"],
    details: [
      "Trained and evaluated a text classification model for spam detection.",
      "Preprocessed text using tokenization and common NLP steps.",
      "Built a simple interface to test messages and view predictions quickly.",
    ],
  },
  {
    slug: "online-bookstore",
    title: "Online Bookstore",
    description:
      "A full-stack bookstore with product browsing, cart, and order flows backed by a MySQL database.",
    stack: ["Java", "MySQL"],
    details: [
      "Built product catalog browsing with search and category-style organization.",
      "Implemented cart and basic ordering flow backed by MySQL.",
      "Focused on clean server-side validation and a maintainable structure.",
    ],
  },
  {
    slug: "kaarigarverse",
    title: "KaarigarVerse",
    description:
      "An artisan-focused platform to showcase work, connect with customers, and support local creators.",
    stack: ["Web", "Product"],
    details: [
      "Designed a marketplace-style experience for artisans to showcase work.",
      "Explored discovery and profile pages that help customers find creators.",
      "Focused on a simple, creator-first product concept and UX.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
