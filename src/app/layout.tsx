'use client';

import './globals.css';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-zinc-900 text-white min-h-screen {inter.className}">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="container mx-auto px-4 py-6">
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}

