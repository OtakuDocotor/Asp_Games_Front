export interface Review {
  id: number;
  gameId: number;
  gameName: string;
  userName: string;
  rating: number;
  text: string;
  createdAt: string;
}

export const mockReviews = [
  {
    id: 1,
    gameId: 1,
    gameName: 'The Witcher 3: Wild Hunt',
    userName: 'JohnDoe',
    rating: 5,
    text: "One of the best RPGs I've ever played!",
    createdAt: '2023-01-15',
  },
  {
    id: 2,
    gameId: 1,
    gameName: 'The Witcher 3: Wild Hunt',
    userName: 'JaneSmith',
    rating: 4.5,
    text: 'Amazing story and characters, but combat could be better.',
    createdAt: '2023-02-20',
  },
  {
    id: 3,
    gameId: 2,
    gameName: 'Cyberpunk 2077',
    userName: 'MikeJohnson',
    rating: 3,
    text: 'Had potential but too many bugs at launch.',
    createdAt: '2023-03-10',
  },
];
