import { fetchMovieDetails, fetchMovieVideos, Video } from '@/lib/tmdb';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import TrailerModalWrapper from '@/components/TrailerModalWrapper';

interface Props {
  params: { id: string };
}

export default async function MoviePage({ params }: Props) {
  const movieId = parseInt(params.id, 10);
  const movie = await fetchMovieDetails(movieId);
  if (!movie) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto text-zinc-200 bg-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 tracking-tight text-zinc-100 drop-shadow-md">
        {movie.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {movie.poster_path && (
          <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-md border border-zinc-700">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col justify-between flex-1 space-y-6">
          <div className="space-y-4">
            <p className="text-zinc-300">
              <span className="font-semibold text-zinc-100">Trama: </span>
              {movie.overview || "Trama non disponibile."}
            </p>

            <p className="text-zinc-400">
              <span className="font-semibold text-zinc-100">Data di uscita:</span>{" "}
              {new Date(movie.release_date).toLocaleDateString("it-IT")}
            </p>

            <p className="text-zinc-400">
              <span className="font-semibold text-zinc-100">Voto medio:</span>{" "}
              {movie.vote_average.toFixed(1)}
            </p>

            <p className="text-zinc-400">
              <span className="font-semibold text-zinc-100">Generi:</span>{" "}
              {movie.genres?.map((g) => g.name).join(", ") || "Non specificati"}
            </p>
          </div>

          <div>
            {/* Qui aggiungiamo il bottone stilizzato */}
            <TrailerModalWrapper movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};
