export interface Project {
  id: string;
  title: string;
  date?: string;
  description: string;
  techStack: string[];
  // image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'The very site you are on right now — a fully custom, animated portfolio built to feel like an interactive experience rather than a static page.',
    techStack: ['React', 'Vite', 'GSAP', 'CSS'],
    // image: 'https://picsum.photos/seed/portfolio-site/1200/800',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    date: 'May 2026 – Ongoing',
    description:
      'A full-stack expense tracker application allowing users to store income and expenses and visualize spending using graphs.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    // image: 'https://picsum.photos/seed/expense-tracker/1200/800',
    github: 'https://github.com/',
  },
  {
    id: 'all-rounder',
    title: 'All-rounder',
    date: 'August 2025 – April 2026',
    description:
      'Collaborated as a Frontend Developer to build a verified student profile platform — focused on responsive UI, accessibility, wireframing and final implementation.',
    techStack: ['Next.js', 'Tailwind CSS', 'Figma', 'GSAP'],
    // image: 'https://picsum.photos/seed/all-rounder/1200/800',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'harmonia',
    title: 'Harmonia',
    date: 'April 2025',
    description: 'Front-end development for a holistic fitness platform.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    // image: 'https://picsum.photos/seed/harmonia/1200/800',
    github: 'https://github.com/',
  },
  {
    id: 'csv-roadmap',
    title: 'CSV Roadmap',
    date: '2024',
    description:
      'A Python application for analyzing CSV traffic datasets, with validation and automated report generation.',
    techStack: ['Python'],
    // image: 'https://picsum.photos/seed/csv-roadmap/1200/800',
    github: 'https://github.com/',
  },
];
