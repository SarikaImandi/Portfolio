export interface EducationEntry {
  id: string;
  year: string;
  qualification: string;
  institution: string;
}

export const education: EducationEntry[] = [
  {
    id: 'bsc',
    year: '2024 – Present',
    qualification: 'BSc (Hons) Computer Science',
    institution: 'University of Westminster (IIT)',
  },
  {
    id: 'foundation',
    year: '2023 – 2024',
    qualification: 'Foundation Certificate in Higher Education',
    institution: 'Informatics Institute of Technology',
  },
  {
    id: 'ol',
    year: '2012 – 2023',
    qualification: 'G.C.E. Ordinary Level',
    institution: 'Kalutara Balika National School',
  },
];
