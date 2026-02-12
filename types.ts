import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: 'web' | 'ai';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  iconType: 'petition' | 'education' | 'fire' | 'chatbot' | 'management' | 'default';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
}