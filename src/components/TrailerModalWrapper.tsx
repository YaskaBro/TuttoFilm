"use client";

import { useState, useEffect } from "react";
import { fetchMovieVideos, Video } from "@/lib/tmdb";
import { TrailerModal } from "./ui/TrailerModal"; // componente modal già definito da te

interface Props {
  movieId: number;
}

export default function TrailerModalWrapper({ movieId }: Props) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      const videos = await fetchMovieVideos(movieId);
      setVideos(videos);
      setLoading(false);
    }
    loadVideos();
  }, [movieId]);

  if (loading) return <p>Caricamento trailer...</p>;

  const trailer = videos.find(v => v.site === "YouTube" && v.type === "Trailer");

  return <TrailerModal videoKey={trailer?.key || null} />;
}
