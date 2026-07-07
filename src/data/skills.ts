export interface SkillNode {
  id: string;
  label: string;
  items: string[];
}

export const skillNodes: SkillNode[] = [
  {
    id: 'programming',
    label: 'Programming',
    items: ['Java', 'Python'],
  },
  {
    id: 'web-development',
    label: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'PHP'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    id: 'frameworks-tools',
    label: 'Frameworks & Tools',
    items: ['Figma', 'Git', 'GitHub', 'VS Code', 'IntelliJ', 'Canva', 'WordPress', 'Postman'],
  },
];
