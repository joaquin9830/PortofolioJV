export interface Experience {
  id: string;
  company?: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  metrics?: string[];
  technologies: string[];
}
