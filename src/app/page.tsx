"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies, Movie } from "@/lib/tmdb";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};

export default function Home() {
  const router = useRouter();
  
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["latest-movies"],
    queryFn: fetchLatestMovies,
  });

  if (isLoading) return <div className="text-white p-8">Caricamento...</div>;
  if (error)
    return (
      <div className="text-red-400 p-8">Errore nel caricamento dei film</div>
    );

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎬 Ultimi film in uscita</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              className="cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-zinc-800"
              onClick={() => router.push(`/film/${movie.id}`)}
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-t w-full object-cover h-72"
                />
              ) : (
                <div className="h-72 bg-zinc-700 flex items-center justify-center text-gray-400">
                  Nessuna immagine
                </div>
              )}
              <div className="p-4">
                <h2 className="font-bold text-lg mb-1 text-white">
                  {movie.title}
                </h2>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{formatDate(movie.release_date)}</span>
                  <span className="text-yellow-400">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {movie.overview}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
