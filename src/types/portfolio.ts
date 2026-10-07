export type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  status: 'Core' | 'Daily Driver' | 'In Progress' | 'Advanced';
  iconKey: string;
  swappableImage?: string; // Optional custom image path user can swap in
  highlight: string;
  level: string; // e.g. "Proficient", "Learning", "Specialized"
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'fullstack' | 'javascript';
  tagline: string;
  description: string;
  detailedOverview: string;
  techStack: string[];
  thumbnail: string;
  inProgress?: boolean;
  features: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  cgpa: string;
  scale: string;
  semestersCompleted: number;
  totalSemesters: number;
  coreCoursework: string[];
  achievements: string[];
}

export interface ContactData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  displayPhone: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  availableForWork: boolean;
}
