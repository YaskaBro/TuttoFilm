'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-800 text-white">
      <Link href="/" className="text-lg font-bold">
        TuttoFilm 🎬
      </Link>
      <div className="space-x-2">
        <Link href="/">
          <Button variant="ghost" className="text-white">
            Home
          </Button>
        </Link>
        <Link href="/movies">
          <Button variant="ghost" className="text-white">
            Tutti i Film
          </Button>
        </Link>
      </div>
    </nav>
  );
};
