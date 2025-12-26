
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export type CourseAccess = 'Livre' | 'Com Professor' | 'Patrocinado';

export interface Course {
  id: string;
  name: string;
  tagline: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  imageUrl: string;
  modules: string[];
  accessType?: CourseAccess;
  sponsorName?: string;
}

export interface PlaylistItem {
  id: number;
  title: string;
  subtitle: string;
  type: 'Podcast' | 'Depoimento' | 'Música' | 'Rádio Digital';
  image: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  content: React.ReactNode;
  image: string;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'course', course: Course }
  | { type: 'partners' }
  | { type: 'tutorial', step: number };
