export interface Game {
  id: number;
  name: string;
  developer: string;
  releaseDate: string;
  description: string;
  rating: number;
  imageUrl: string;
}

export const mockGames: Game[] = [
  {
    id: 1,
    name: 'The Witcher 3: Wild Hunt',
    developer: 'CD Projekt Red',
    releaseDate: '2015-05-19',
    description: 'Action RPG set in a fantasy open world.',
    rating: 4.9,
    imageUrl: 'https://via.placeholder.com/300x400?text=The+Witcher+3',
  },
  {
    id: 2,
    name: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    releaseDate: '2020-12-10',
    description: 'Open-world action-adventure RPG.',
    rating: 3.8,
    imageUrl: 'https://via.placeholder.com/300x400?text=Cyberpunk+2077',
  },
  {
    id: 3,
    name: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    releaseDate: '2018-10-26',
    description: 'Western-themed action-adventure game.',
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/300x400?text=RDR2',
  },
];
