export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  bannerUrl: string;
  genre: string[];
  rating: string;
  duration: string;
  year: number;
  type: 'movie' | 'tv';
  cast: string[];
  episodes?: Episode[];
  releaseDate?: string;
  isNew?: boolean;
  inMyList?: boolean;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
  episodeNumber: number;
  seasonNumber: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  language: string;
  maturityLevel: string;
  autoplayNextEpisode: boolean;
  autoplayPreviews: boolean;
}