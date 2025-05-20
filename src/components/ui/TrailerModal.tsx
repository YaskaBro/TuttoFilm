import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface TrailerModalProps {
  videoKey: string | null;
}

export function TrailerModal({ videoKey }: TrailerModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors duration-300">
          Guarda Trailer
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-3xl w-[90vw] h-[60vh] -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-md shadow-lg p-0 overflow-hidden">
          <Dialog.Close
            aria-label="Chiudi trailer"
            className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
          >
            &times;
          </Dialog.Close>
          {videoKey ? (
            <iframe
              key={open ? videoKey : "empty"}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="Trailer Film"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              Trailer non disponibile
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
