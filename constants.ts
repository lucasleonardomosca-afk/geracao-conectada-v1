
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
    description: 'Aprenda a enviar áudios, fotos, fazer chamadas de vídeo e, o mais importante: como identificar golpes e usar o aplicativo com segurança total.',
    level: 'Iniciante',
    duration: '2 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    modules: ['Ajustando a foto de perfil', 'Enviando áudios e vídeos', 'Limpando a memória do celular', 'Bloqueando números desconhecidos', 'Chamadas de vídeo em grupo']
  },
  {
    id: 'c2',
    name: 'Banco Seguro no Celular',
    tagline: 'Pague boletos sem fila.',
    description: 'Chega de ir na lotérica. Vamos ensinar passo a passo como usar o Pix, pagar seus boletos e ver quanto dinheiro tem no seu cadastro do banco sem sair de casa.',
    level: 'Intermediário',
    duration: '3 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    modules: ['Colocando o aplicativo do banco no celular', 'Criando senhas fortes e anotando', 'Como fazer um Pix seguro', 'Pagando boletos pelo código de barras', 'Identificando mensagens falsas de banco']
  },
  {
    id: 'c3',
    name: 'Mestre das Fotos',
    tagline: 'Guarde seus momentos.',
    description: 'Aprenda a tirar fotos bonitas dos netos e viagens. E também como enviar para a família ou colocar no Facebook.',
    level: 'Iniciante',
    duration: '1 semana',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    modules: ['Como usar a câmera da frente e de trás', 'Usando a luz da foto corretamente', 'Apagando fotos que não ficaram boas', 'Organizando suas fotos em pastas', 'Enviando várias fotos de uma vez']
  },
  {
    id: 'c4',
    name: 'Uber e 99 Fácil',
    tagline: 'Vá para onde quiser.',
    description: 'Tenha autonomia para ir ao médico ou visitar amigos sem depender de carona. Aprenda a pedir carros com segurança.',
    level: 'Intermediário',
    duration: '1 semana',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    modules: ['Baixando o aplicativo', 'Fazendo o seu cadastro e colocando o cartão', 'Conferindo a placa do carro', 'Mandando o caminho da viagem para os filhos', 'Dando nota para o motorista']
  },
  {
    id: 'c5',
    name: 'Compras Online',
    tagline: 'Mercado e farmácia em casa.',
    description: 'Como fazer compras de supermercado ou remédios pela internet. Aprenda a ver se o site é de confiança antes de comprar.',
    level: 'Avançado',
    duration: '2 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    modules: ['Vendo se o site é seguro', 'Comparando os preços', 'Vendo o valor da entrega', 'Acompanhando a chegada do seu pacote', 'Seus direitos na hora de comprar']
  },
  {
    id: 'c6',
    name: 'Memória e Jogos',
    tagline: 'Ginástica para o cérebro.',
    description: 'Divirta-se e exercite a mente com jogos de palavras e memória. Descubra aplicativos que ajudam a manter a cabeça ativa.',
    level: 'Iniciante',
    duration: 'No seu tempo',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    modules: ['Palavras Cruzadas no celular', 'Sudoku para quem está começando', 'Jogos de colorir', 'Aprendendo novas palavras', 'Exercícios para relaxar a mente']
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
        image: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?w=800&q=80",
        link: "#"
    }
];

export const BRAND_NAME = 'Geração Conectada';
export const BRAND_SLOGAN = 'ENSINO COM PACIÊNCIA';
