
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Course, PlaylistItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    name: 'WhatsApp Sem Medo',
    tagline: 'Fale com a família.',
    description: 'Aprenda a enviar áudios, fotos, fazer chamadas de vídeo e identificar mensagens falsas com calma.',
    level: 'Iniciante',
    duration: '2 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80',
    modules: ['Ajustando a foto de perfil', 'Enviando áudios e vídeos', 'Limpando a memória', 'Bloqueando números', 'Chamadas em grupo'],
    accessType: 'Livre'
  },
  {
    id: 'c2',
    name: 'Pix e Banco no Celular',
    tagline: 'Pague boletos sem fila.',
    description: 'Ensinamos passo a passo como usar o Pix e pagar boletos com total segurança e paciência.',
    level: 'Intermediário',
    duration: '3 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    modules: ['Aplicativo do banco', 'Senhas fortes', 'Pix seguro', 'Código de barras', 'Mensagens falsas'],
    accessType: 'Patrocinado',
    sponsorName: 'Banco Amigo'
  },
  {
    id: 'c3',
    name: 'Mestre das Fotos',
    tagline: 'Guarde seus momentos.',
    description: 'Tire fotos bonitas dos netos e aprenda a organizar suas lembranças de forma simples.',
    level: 'Iniciante',
    duration: '1 semana',
    imageUrl: 'https://images.unsplash.com/photo-1473615695634-d284ec918736?w=800&q=80',
    modules: ['Câmera frontal e traseira', 'Luz correta', 'Apagando fotos', 'Organizando pastas', 'Enviando várias'],
    accessType: 'Livre'
  },
  {
    id: 'c4',
    name: 'Uber com Monitoria',
    tagline: 'Vá para onde quiser.',
    description: 'Tenha autonomia para visitar amigos. Inclui suporte humano para sua primeira viagem com segurança.',
    level: 'Intermediário',
    duration: '1 semana',
    imageUrl: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=80',
    modules: ['Baixando o app', 'Cadastro e cartão', 'Conferindo a placa', 'Mandando caminho aos filhos', 'Dando nota'],
    accessType: 'Com Professor'
  }
];

export const PLAYLIST_ITEMS: PlaylistItem[] = [
    {
        id: 1,
        title: "Passo a Passo do Celular",
        subtitle: "Aulas para ouvir enquanto faz suas coisas",
        type: "Rádio Digital",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
        link: "#"
    },
    {
        id: 2,
        title: "Dona Maria Aprendeu!",
        subtitle: "Histórias reais de quem conseguiu",
        type: "Depoimento",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        link: "#"
    },
    {
        id: 3,
        title: "Músicas de Antigamente",
        subtitle: "Para relaxar enquanto você aprende",
        type: "Música",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
        link: "#"
    }
];

export const BRAND_NAME = 'Geração Conectada';
export const BRAND_SLOGAN = 'ENSINO COM PACIÊNCIA';
