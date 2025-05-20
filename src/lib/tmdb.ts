export const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
  
}

export async function fetchLatestMovies(): Promise<Movie[]> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=it-IT&page=1`
  );
  if (!res.ok) {
    throw new Error('Errore nel recupero dei film');
  }
  const data = await res.json();
  return data.results;
}

export async function fetchMovieDetails(id: number): Promise<MovieDetails | null> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=it-IT`);

  if (!res.ok) return null;
  return res.json();
}


export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string; 
}

export async function fetchMovieVideos(movieId: number): Promise<Video[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=it-IT`);

  if (!res.ok) return [];
  const data = await res.json();
  return data.results;
}

