import { Movie, UserProfile } from '../types';

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CdjRZX5w_CsRvIIn8xt6jNGnRNCwygpYQ6el-Fu_P_RjioMEXHnlu_g7lBRZ-SD0Lr0&usqp=CAU',
    bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CdjRZX5w_CsRvIIn8xt6jNGnRNCwygpYQ6el-Fu_P_RjioMEXHnlu_g7lBRZ-SD0Lr0&usqp=CAU',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    rating: 'TV-14',
    duration: '1h',
    year: 2016,
    type: 'tv',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
    episodes: [
      {
        id: 'st-s1-e1',
        title: 'Chapter One: The Vanishing of Will Byers',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49m',
        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CdjRZX5w_CsRvIIn8xt6jNGnRNCwygpYQ6el-Fu_P_RjioMEXHnlu_g7lBRZ-SD0Lr0&usqp=CAU',
        episodeNumber: 1,
        seasonNumber: 1
      }
    ],
    releaseDate: '2016-07-15',
    isNew: false,
    inMyList: true
  },
  {
    id: '2',
    title: 'Interstellar',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 'PG-13',
    duration: '2h 49m',
    year: 2014,
    type: 'movie',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    releaseDate: '2014-11-07',
    isNew: false,
    inMyList: true
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    genre: ['Action', 'Crime', 'Drama'],
    rating: 'PG-13',
    duration: '2h 32m',
    year: 2008,
    type: 'movie',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    releaseDate: '2008-07-18',
    isNew: false,
    inMyList: true
  },
  {
    id: '4',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Breaking_Bad_S5B_poster.jpg',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Breaking_Bad_S5B_poster.jpg',
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 'TV-MA',
    duration: '45m',
    year: 2008,
    type: 'tv',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    releaseDate: '2008-01-20',
    isNew: false,
    inMyList: true
  },
  {
    id: '5',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 'PG-13',
    duration: '2h 28m',
    year: 2010,
    type: 'movie',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    releaseDate: '2010-07-16',
    isNew: false,
    inMyList: false
  },
  {
    id: '6',
    title: 'The Mandalorian',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/The_Mandalorian_season_3.jpg',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/The_Mandalorian_season_3.jpg',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 'TV-14',
    duration: '40m',
    year: 2023,
    type: 'tv',
    cast: ['Pedro Pascal', 'Giancarlo Esposito', 'Katee Sackhoff'],
    releaseDate: '2023-03-01',
    isNew: true,
    inMyList: true
  }
];

export const mockProfile: UserProfile = {
  id: '1',
  name: 'Abdulla D',
  email: 'abdulla@example.com',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  language: 'English',
  maturityLevel: 'Adult',
  autoplayNextEpisode: true,
  autoplayPreviews: true
};