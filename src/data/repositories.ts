type Language = 'React' | 'Javascript' | 'Python' | 'Swift' | 'Java' | 'HTML/CSS' | 'PHP';

interface Repository {
  name: string;
  status: string;
  language: Language;
  size: string;
  updatedAt: string;
}

const repositories: Repository[] = [
  {
    name: "design-system",
    language: "Swift",
    size: "7,523 KB",
    status: "Public",
    updatedAt: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5,987 KB",
    status: "Private",
    updatedAt: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "8,421 KB",
    status: "Private",
    updatedAt: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3,006 KB",
    status: "Public",
    updatedAt: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6,670 KB",
    status: "Private",
    updatedAt: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1,879 KB",
    status: "Public",
    updatedAt: "Updated 4 days ago",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5,422 KB",
    status: "Private",
    updatedAt: "Updated 7 days ago",
  },
];

export default repositories;