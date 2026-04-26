import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Post {
  id: string;
  title: string;
  category: '성혼후기' | '감사편지' | '화목연소식';
  author: string;
  date: string;
  views: number;
  content: string;
  thumbnail?: string;
}

export interface Member {
  id: string;
  age: string;
  job: string;
  education: string;
  location: string;
  description: string;
}
