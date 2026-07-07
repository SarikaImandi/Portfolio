export interface VolunteeringEntry {
  id: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
//   image: string;
}

export const volunteering: VolunteeringEntry[] = [
  {
    id: 'leo-club',
    organization: 'Leo Club of IIT',
    role: 'Committee Member',
    duration: '2025 – Present',
    description:
      'Worked as Treasurer for Timeless Care, Empower Her and Pink Pledge — community projects focused on care for the elderly, women\u2019s empowerment and breast cancer awareness.',
    // image: 'https://picsum.photos/seed/leo-club/1000/700',
  },
  {
    id: 'vertex-25',
    organization: 'IEEE RAS IIT',
    role: 'Program & Logistics — VERTEX 25',
    duration: 'December 2025',
    description:
      'Coordinated program planning and on-ground logistics for VERTEX 25, IEEE RAS IIT\u2019s flagship robotics and automation event.',
    // image: 'https://picsum.photos/seed/vertex-25/1000/700',
  },
  {
    id: 'blind-cricket',
    organization: "ICC Women's T20 World Cup Cricket for the Blind",
    role: 'Event Coordination',
    duration: 'December 2025',
    description:
      'Supported event coordination for an international tournament, helping manage schedules, volunteers and on-site operations.',
    // image: 'https://picsum.photos/seed/blind-cricket/1000/700',
  },
  {
    id: 'micromaze',
    organization: 'IEEE RAS IIT',
    role: 'Delegate Coordination — Micromaze 2.0',
    duration: 'June 2025 – August 2025',
    description:
      'Coordinated delegate communications and logistics for Micromaze 2.0, an inter-school robotics competition hosted by IEEE RAS IIT.',
    // image: 'https://picsum.photos/seed/micromaze/1000/700',
  },
];
